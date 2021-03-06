import { mutationField, nonNull, stringArg } from 'nexus'
import { isAuth } from '../../util/isAuth'
import { pubsubPublishMany } from '../../util/pubsubMany'

export const createComment = mutationField('createComment', {
  type: 'Comment',
  args: {
    postId: nonNull(stringArg()),
    text: nonNull(stringArg()),
  },
  async resolve(_root, { postId, text }, { prisma, pubsub, req }) {
    const postExists = await prisma.post.findUnique({ where: { id: postId } })

    const userId = isAuth(req)

    if (
      !postExists ||
      (!postExists.published && postExists.userId !== userId)
    ) {
      throw new Error('Post not found')
    }

    const createdComment = await prisma.comment.create({
      data: {
        text,
        author: { connect: { id: userId } },
        post: { connect: { id: postId } },
      },
    })

    pubsubPublishMany(
      pubsub,
      [`comment from user ${userId}`, `comment from post ${postId}`],
      { mutation: 'CREATED', data: createdComment }
    )

    return createdComment
  },
})

export const updateComment = mutationField('updateComment', {
  type: 'Comment',
  args: {
    whereId: nonNull(stringArg()),
    updateText: nonNull(stringArg()),
  },
  async resolve(_root, { whereId, updateText }, { prisma, pubsub, req }) {
    const commentExists = await prisma.comment.findUnique({
      where: { id: whereId },
    })

    if (!commentExists) {
      throw new Error('Comment not found')
    }

    const userId = isAuth(req)

    if (userId !== commentExists.userId) {
      throw new Error('Invalid credentials.')
    }

    const updatedComment = await prisma.comment.update({
      where: { id: whereId },
      data: { text: updateText },
    })

    pubsubPublishMany(
      pubsub,
      [
        `comment ${whereId}`,
        `comment from post ${updatedComment.postId}`,
        `comment from user ${updatedComment.userId}`,
      ],
      { mutation: 'UPDATED', data: updatedComment }
    )

    return updatedComment
  },
})

export const deleteComment = mutationField('deleteComment', {
  type: 'Comment',
  args: {
    id: nonNull(stringArg()),
  },
  async resolve(_root, { id }, { prisma, pubsub, req }) {
    const commentExists = await prisma.comment.findUnique({ where: { id } })

    if (!commentExists) {
      throw new Error('Comment not found.')
    }

    const userId = isAuth(req)

    if (userId !== commentExists.userId) {
      throw new Error('Invalid credentials.')
    }

    pubsubPublishMany(
      pubsub,
      [
        `comment ${id}`,
        `comment from user ${commentExists.userId}`,
        `comment from post ${commentExists.postId}`,
      ],
      { mutation: 'DELETED', data: commentExists }
    )

    return prisma.comment.delete({ where: { id } })
  },
})
