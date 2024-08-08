import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.body

  // console.log(code)
  if (code) {
    try {
      const output = await axios.post(
        'https://discord.com/api/v10/oauth2/token',
        {
          client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
          grant_type: 'authorization_code',
          code: code.toString(),
          redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )

      const { data } = output

      if (data) {
        const access = output.data.access_token

        const userInfo = await axios.get(
          'https://discord.com/api/v10/users/@me',
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          },
        )
        // console.log({ dsId: userInfo.data.id, dsName: userInfo.data.username })
        res.status(200).json({
          dsId: userInfo.data.id,
          dsName: userInfo.data.username,
        })
      }
    } catch (error) {
      const msg = `Error in get Token and user Data from discord API`
      //console.log(error)
      res.status(404).json({ message: '디스코드 아이디 조회 오류 발생' })
    }
    // res.redirect(process.env.REDIRECT_APP);
  }
}
