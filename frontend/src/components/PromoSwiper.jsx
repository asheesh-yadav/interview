import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const slides = [
  {
    image: 'https://helma.healthians.com/stationery/banners/140_8317.webp',
  },
  {
    image: 'https://helma.healthians.com/stationery/banners/140_8317.webp',
  },
  {
    image: 'https://helma.healthians.com/stationery/banners/140_8317.webp',
  },
  {
    image: 'https://helma.healthians.com/stationery/banners/140_8317.webp',
  },
  // Add more slides as needed
];

const PromoSwiper = () => (
  <div style={{ width: '100%', maxWidth: 900, margin: '32px auto', borderRadius: 20, overflow: 'visible', position: 'relative' }}>
    {/* Left gradient overlay */}
    <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: 80,
      height: '100%',
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(90deg, #fff 70%, rgba(255,255,255,0) 100%)',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    }} />
    {/* Right gradient overlay */}
    <div style={{
      position: 'absolute',
      right: 0,
      top: 0,
      width: 80,
      height: '100%',
      zIndex: 2,
      pointerEvents: 'none',
      background: 'linear-gradient(270deg, #fff 70%, rgba(255,255,255,0) 100%)',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    }} />
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow]}
      navigation
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      centeredSlides
      slidesPerView={1.5}
      spaceBetween={0}
      style={{ borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: 'transparent' }}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        900: { slidesPerView: 1.5 },
      }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              minHeight: 220,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={slide.image}
              alt="Promo"
              style={{
                width: '100%',
                height: 220,
                objectFit: 'cover',
                borderRadius: 20,
                maxWidth: '100%',
                display: 'block',
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default PromoSwiper; 