import { FormEvent, useState } from 'react'
import { SearchProps } from '@/types/friends'

interface useSerchFormProps {
  initialValue: SearchProps
}

const useFindFriends = ({ initialValue }: useSerchFormProps) => {
  const [value, setValue] = useState<SearchProps>(initialValue)
  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = (value: SearchProps) => {
    // console.log(name, value)
    setValue(value)
  }

  const submitVisitForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const error = 'Error Msg'
    console.log(error)
    if (error) {
      setErrorMsg(error)
    } else {
      console.log(value)
    }
  }

  return { value, errorMsg, handleInputChange, submitVisitForm }
}

export default useFindFriends
