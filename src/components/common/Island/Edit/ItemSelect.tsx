import 'swiper/css'
import Image from 'next/image'
import styled from '@emotion/styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from '@/hooks'
import { useItemsActions, useItemsStore } from '@/store/island/items'
import { ItemInfoProps } from '@/types/island'

const ItemSelect = () => {
  const items = useItemsStore()
  const { removeItem, addItem } = useItemsActions()
  const { swiperSetting, currentSlide } = useSwiper()
  const handleItemClick = (
    no: ItemInfoProps['no'],
    show: ItemInfoProps['locations']['show'],
  ) => {
    if (no) {
      if (show) {
        removeItem(no) // remove
      } else {
        addItem(no)
      }
    }
  }
  return (
    <SliderWrapper>
      <Swiper {...swiperSetting}>
        {Object.entries(items).map(
          ([
            no,
            {
              item_image,
              locations: { x, y, z, show },
            },
          ]) => (
            <SwiperSlide key={no}>
              <Image
                src={item_image}
                alt={`item_${no}`}
                draggable={'false'}
                width={100}
                height={100}
                onClick={() => handleItemClick(Number(no), show)}
              />
            </SwiperSlide>
          ),
        )}
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
