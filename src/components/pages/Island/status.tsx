import Image from 'next/image'

const Status = ({ data }: { data: any }) => {
  console.log(data)
  const owner = data['user or land']
  const lands = data['land&item'][0]['lands']
  console.log(owner, lands)

  return (
    <div>
      <Image
        src={lands.bg_img}
        fill
        priority
        sizes="100%"
        alt="land background"
      />
    </div>
  )
}

export default Status
