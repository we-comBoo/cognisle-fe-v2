import 'swiper/css'
import Image from 'next/image'
import styled from '@emotion/styled'
import { items } from '@/constants/island'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from '@/hooks'

const ItemSelect = () => {
  const { swiperSetting, currentSlide } = useSwiper()
  return (
    <SliderWrapper>
      <Swiper {...swiperSetting}>
        {items.map(({ src, id }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={`item_${id}`}
              draggable={'false'}
              width={100}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  )
}

export default ItemSelect

export const SliderWrapper = styled.div`
  background-color: var(--color-yellow-100);
  height: 100%;
  display: flex;
  align-items: center;
  .swiper-wrapper {
    .swiper-slide {
      width: auto !important;
      margin-left: 2.7rem;
    }
  }
`
