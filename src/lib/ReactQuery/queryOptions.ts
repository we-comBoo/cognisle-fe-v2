import axios from 'axios'
import { User } from 'next-auth'

const defaultKey = {
  island: ['island'] as const,
}

const queryKeys = {
  island: (ownerId: number) => [...defaultKey.island, ownerId] as const,
  /*
  detailComments: (photoId: number) =>
    [...queryKeys.detail(photoId), 'comments'] as const,

  detailComment: ({
    photoId,
    commentId,
  }: {
    photoId: number
    commentId: number
  }) => [...queryKeys.detailComments(photoId), commentId] as const,
   */
}
// OK
/*
async () => {
  return await api.getProfileByUsername({ username });
}*/
export const queryOptions = {
  island: (ownerId: User['user_id']) => ({
    queryKey: queryKeys.island(ownerId),

    queryFn: async () => {
      const response = await axios.get(`/api/lands/${ownerId}`)
      return response.data
    },
    enabled: !!ownerId,
  }),
  /*
  comments: (photoId: number) => ({
    queryKey: queryKeys.detailComments(photoId),

    queryFn: () => PhotoService.getComments(photoId),
  }),

  comment: ({
    photoId,
    commentId,
  }: {
    photoId: number
    commentId: number
  }) => ({
    queryKey: queryKeys.detailComment({ photoId, commentId }),

    queryFn: () => PhotoService.getComment({ photoId, commentId }),
  }),*/
}
