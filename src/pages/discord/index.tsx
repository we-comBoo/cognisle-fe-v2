import { FormBtn } from '@/components/common/Button'

import axios from 'axios'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Discord = () => {
  const [discordUser, setDiscordUser] = useState({ dsName: '', dsId: '' })
  const {
    query: { code },
  } = useRouter()
  const getUser = async (code: string) => {
    try {
      const {
        data: { dsId, dsName },
      } = await axios.post('/api/user/discord', { code })

      setDiscordUser({ dsName, dsId })
    } catch (error) {}
  }
  useEffect(() => {
    if (typeof code == 'string') {
      console.log(code)
      getUser(code)
    }
  }, [code])

  const handleOkay = () => {
    console.log('확인', discordUser)
    window.opener.postMessage(discordUser)
    //window.close()
  }
  return (
    <div>
      <p> 디스코드 아이디 확인하기</p>
      <p>{discordUser.dsName}</p>
      <p>{discordUser.dsId}</p>
      <Button onClick={handleOkay}>확인</Button>
    </div>
  )
}

export default Discord

const Button = FormBtn
