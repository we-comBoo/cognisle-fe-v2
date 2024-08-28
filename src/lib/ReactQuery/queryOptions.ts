import { ItemInfoProps, ItemProps, LandStateProps } from '@/types/island'
import axios from 'axios'
import { User } from 'next-auth'
import { QueryClient } from '@tanstack/react-query'
import { FriendProps } from '@/types/friends'

const defaultKey = {
  island: ['island'] as const,
  collection: ['collection'] as const,
  friends: ['friends'] as const,
}

const queryKeys = {
  island: (ownerEmail: User['email']) =>
    [...defaultKey.island, ownerEmail] as const,
  collection: (ownerEmail: User['email']) =>
    [...defaultKey.collection, ownerEmail] as const,
  myFriendsList: (ownerEmail: User['email']) =>
    [...defaultKey.friends, ownerEmail] as const, // 사용자 친구 목록
  myFriendsRequest: (ownerEmail: User['email']) =>
    [...defaultKey.friends, 'request', ownerEmail] as const, // 사용자 친구 신청 목록
  friend: (friendEmail: User['email']) =>
    [...defaultKey.friends, 'search', friendEmail] as const, // 사용자 검색 결과
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
      land_back_id,
    }: {
      items: ItemProps[]
      land_back_id: LandStateProps['state']
    }) => {
      return await axios.put('/api/lands/item', {
        items,
        land_back_id,
      })
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
  myFriendsList: (ownerEmail: User['email']) => ({
    queryKey: queryKeys.myFriendsList(ownerEmail),

    queryFn: async (): Promise<FriendProps[]> => {
      const response = await axios.get(`/api/friends`)
      return response.data.data
    },
    enabled: !!ownerEmail,
  }),
  myFriendsRequest: (ownerEmail: User['email']) => ({
    queryKey: queryKeys.myFriendsRequest(ownerEmail),

    queryFn: async (): Promise<FriendProps[]> => {
      const response = await axios.get(`/api/friends/request`)
      return response.data.data
    },
    enabled: !!ownerEmail,
  }),
  friend: (userEmail: User['email']) => ({
    queryKey: queryKeys.friend(userEmail),

    queryFn: async (userEmail: User['email']): Promise<FriendProps[]> => {
      const response = await axios.get(`/api/friends/${userEmail}`)
      return response.data.data
    },
    enabled: !!userEmail,
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
