import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductPreviewCard from './ProductPreviewCard.jsx'; // adjust path if needed
import "./ProductSlider.css"
export default function ProductSlider({ products: categories }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
      }}
    >
      {categories.map((p) => (
        <SwiperSlide key={p.id}>
          <ProductPreviewCard product={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
