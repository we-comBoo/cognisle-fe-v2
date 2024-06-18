import { FormBtn } from '@/components/common'
import styled from '@emotion/styled'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Discord = () => {
  const [discordUser, setDiscordUser] = useState({ dsName: '', dsId: '' })
  const {
    query: { code },
  } = useRouter()
  const getUser = async (code: string) => {
    const {
      data: { dsName, dsId },
    } = await axios.post('/api/user/discord', { code })
    setDiscordUser({ dsName, dsId })
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
