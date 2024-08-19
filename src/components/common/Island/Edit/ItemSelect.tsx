import 'swiper/css'
import Image from 'next/image'
import styled from '@emotion/styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from '@/hooks'
import { useItemsStore } from '@/store/island/items'
import { ItemProps } from '@/types/island'

const ItemSelect = () => {
  const items = useItemsStore()
  const { swiperSetting, currentSlide } = useSwiper()
  const handleItemClick = (
    no: ItemProps['no'],
    show: ItemProps['locations']['show'],
  ) => {
    console.log(no, show)
  }
  return (
    <SliderWrapper>
      <Swiper {...swiperSetting}>
        {items.map(({ no, item_image, locations: { show } }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item_image}
              alt={`item_${no}`}
              draggable={'false'}
              width={100}
              height={100}
              onClick={() => handleItemClick(no, show)}
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
