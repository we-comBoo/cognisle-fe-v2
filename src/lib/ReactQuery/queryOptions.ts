import { ItemProps, LandStateProps } from '@/types/island'
import axios from 'axios'
import { User } from 'next-auth'
import { QueryClient } from '@tanstack/react-query'

const defaultKey = {
  island: ['island'] as const,
  collection: ['collection'] as const,
}

const queryKeys = {
  island: (ownerEmail: number) => [...defaultKey.island, ownerEmail] as const,
  collection: (ownerEmail: number) =>
    [...defaultKey.collection, ownerEmail] as const,
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
  island: (ownerEmail: User['email']) => ({
    queryKey: queryKeys.island(ownerEmail),

    queryFn: async () => {
      const response = await axios.get(`/api/lands/${ownerEmail}`)
      return response.data
    },
    mutationFn: async ({
      items,
      land,
    }: {
      items: ItemProps[]
      land: LandStateProps
    }) => {
      return await axios.put('/api/lands/item', { items, land })
    },
    onSuccess: ({
      queryClient,
      queryKey,
    }: {
      queryClient: QueryClient
      queryKey: readonly ['island', number]
    }) => {
      queryClient.invalidateQueries({ queryKey })
    },
    enabled: !!ownerEmail,
  }),
  collection: (ownerEmail: User['email']) => ({
    queryKey: queryKeys.collection(ownerEmail),

    queryFn: async () => {
      const response = await axios.get(`/api/items/${ownerEmail}`)
      return response.data
    },
    enabled: !!ownerEmail,
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
