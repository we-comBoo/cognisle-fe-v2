import { ItemProps, LandStateProps } from '@/types/island'
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
    mutationLikes: async (ownerEmail: User['email']) => {
      return await axios.post('/api/lands/likes', { email: ownerEmail })
    },
    onSuccess: ({
      queryClient,
      queryKey,
    }: {
      queryClient: QueryClient
      queryKey: readonly ['island', number]
    }) => {
      console.log('success', queryKey)
      queryClient.invalidateQueries({ queryKey: queryKeys.island(ownerEmail) })
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
    acceptRequest: async (email: User['email']) => {
      const response = await axios.post(`/api/friends/accept`, { email })
      console.log(response)
      return response.data.data
    },
    rejectRequest: async (email: User['email']) => {
      const response = await axios.post(`/api/friends/reject`, { email })
      console.log(response)
      return response.data.data
    },
    enabled: !!ownerEmail,
  }),
  friend: (userEmail: User['email']) => ({
    queryKey: queryKeys.friend(userEmail),

    findFriends: async (userEmail: User['email']): Promise<FriendProps> => {
      try {
        const response = await axios.post(`/api/friends/find`, {
          email: userEmail,
        })
        console.log(response.data)
        // 성공적으로 데이터를 받았을 때
        if (response.data.status === 'success') {
          return response.data.data
        }
        // 실패일 경우 에러를 throw
        throw new Error(response.data.data)
      } catch (error: any) {
        // 에러를 throw하여 React Query가 에러로 인식하도록 함
        throw new Error(error.message)
      }
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
