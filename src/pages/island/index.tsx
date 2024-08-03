import Status from '@/components/pages/Island/status'
import { NextPageContext } from 'next'
import axios from 'axios'
import { getSession } from 'next-auth/react'

const Island = ({ data }: { data: any }) => {
  return (
    <>
      <Status data={data} />{' '}
    </>
  )
}

export default Island

export const getServerSideProps = async (ctx: NextPageContext) => {
  const session = await getSession(ctx)
  // console.log(session?.user.pk, session?.user.access)

  const { data: response } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/lands/${session?.user.pk}/`,
    {
      headers: { Authorization: `Bearer ${session?.user.access}` },
    },
  )
  /*console.log(
    session?.user.pk,
    session?.user.access,
    response.data,
    response.status
  )*/
  const data = {
    'user or land': 'test@gmail.com',
    'land&item': [
      {
        lands: {
          state: '1',
          land_img:
            'https://s3.amazonaws.com/cognisle.shop/media/lands/background/land1',
          bg_img:
            'https://s3.amazonaws.com/cognisle.shop/media/lands/background/bg1',
        },
        items: [],
      },
    ],
  }

  return {
    props: {
      data: response.data,
    },
  }
}
