import { FormEvent, useState } from 'react'
import { SearchProps } from '@/types/friends'
import { useSession } from 'next-auth/react'

const useFindFriends = () => {
  const [email, setEmail] = useState<SearchProps>('')
  const [errorMsg, setErrorMsg] = useState('')

  const submitSearchForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setEmail(formData.get('friendEmail') as string)

    const error = 'Error Msg'
    console.log(error)
    if (error) {
      setErrorMsg(error)
    } else {
      console.log('ssa')
    }
  }

  return { errorMsg, submitSearchForm, email }
}

export default useFindFriends
