import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useRef } from 'react'

export default function LeftSlider({ images, direction = 'left' }) {
  const swiperRef = useRef(null)

  return (
    <div
      className="w-full max-w-6xl mx-auto overflow-hidden"
      onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction === 'left',
        }}
        slidesPerView="auto"
        spaceBetween={20}
        className="flex items-center"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <img
              src={img}
              alt={`dojo-${i}`}
              className="object-cover h-48 shadow-lg md:h-64 rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
