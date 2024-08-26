import { PlayStateProps } from '@/types/game'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useGameState = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const router = useRouter()

  const parseObtained = (items: PlayStateProps['obtained']) => {
    const item_nos = items.map((item) => item.number)
    console.log(item_nos)
    return item_nos
  }
  const submitItems = async (content: PlayStateProps) => {
    if (content.obtained) {
      const data = parseObtained(content.obtained)
      console.log('submitItems', data)
      try {
        const response = await axios.post('/api/items/game', data)
      } catch (error) {
        alert('에러 발생')
      } finally {
        router.push('/home')
      }
    }
  }

  return { submitItems, isSubmit }
}

export default useGameState
