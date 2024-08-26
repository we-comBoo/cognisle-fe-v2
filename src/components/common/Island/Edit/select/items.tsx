import 'swiper/css'
import Image from 'next/image'
import styled from '@emotion/styled'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from '@/hooks'
import { useItemsStore } from '@/store/island/items'
import useIslandEdit from './useIslandEdit'
import { StateModal } from '@/components/common/Modal'
const ItemSelect = () => {
  const items = useItemsStore()
  const { swiperSetting, currentSlide } = useSwiper()
  const { handleItemClick, modalContent, isOpen, closeModal } = useIslandEdit()

  return (
    <SliderWrapper>
      {modalContent.content && (
        <>
          <StateModal
            content={modalContent.content}
            type={modalContent.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
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
