import { FormEvent, useState, useEffect } from 'react'
import { SearchProps } from '@/types/friends'
import { StateModalContentProps } from '@/types/modal'
import { useModalActions } from '@/store/modal'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useMakeFriends = () => {
  const [email, setEmail] = useState<SearchProps>('')
  const [modal, setModal] = useState<StateModalContentProps>({
    type: 'accept',
    content: '',
  })

  const { queryKey, queryFn, enabled } = queryOptions.friend(email)
  const {
    data: Item,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey,
    queryFn: () => queryFn(email),
    enabled,
  })

  const { openModal } = useModalActions()
  const submitSearchForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formEmail = formData.get('friendEmail') as string

    if (!formEmail) {
      console.log(formEmail)
      setModal({
        type: 'reject',
        content: '검색할 친구를 입력하세요.',
      })
      openModal()
    } else {
      setEmail(formEmail)
    }
  }

  const handleMakeBtn = async (requestEmail: string) => {
    console.log('handleMakeBtn', requestEmail)
    const response = await axios.post('/api/friends/request', {
      email: requestEmail,
    })
    console.log(response)
  }

  useEffect(() => {
    if (isError) {
      setModal({
        type: 'warning',
        content: error.message,
      })
      openModal()
    }
  }, [isError])

  return { submitSearchForm, handleMakeBtn, email, modal, Item, isLoading }
}

export default useMakeFriends
