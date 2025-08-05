import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './healthblog.css';

const blogArticlesData = [
    {
        title: "Health Benefits Of Eating Amla Daily For Hair & Skin",
        image: "https://cdn1.healthians.com/blog/wp-content/uploads/2025/07/Amla-benefits-for-skin-and-hair.webp",
        link: "https://www.healthians.com/blog/health-benefits-of-eating-amla-daily-for-hair-and-skin"
    },
    {
        title: "Why Should You Get A Full Body Checkup Regularly?",
        image: "	https://cdn1.healthians.com/blog/wp-content/uploads/2021/01/2.jpg",
        link: "https://www.healthians.com/blog/why-should-you-get-a-full-body-checkup-regularly"
    },
    {
        title: "Insulin Test: Understanding Its Purpose And Procedure",
        image: "	https://cdn1.healthians.com/blog/wp-content/uploads/2021/01/2.jpg",
        link: "https://www.healthians.com/blog/insulin-test-understanding-its-purpose-and-procedure"
    },
    {
        title: "How To Improve Your Immunity Naturally",
        image: "	https://cdn1.healthians.com/blog/wp-content/uploads/2021/01/2.jpg",
        link: "https://www.healthians.com/blog/how-to-improve-your-immunity-naturally"
    },
    {
        title: "Top 10 Foods For Healthy Heart",
        image: "https://cdn1.healthians.com/blog/wp-content/uploads/2025/07/Amla-benefits-for-skin-and-hair.webp",
        link: "https://www.healthians.com/blog/top-10-foods-for-healthy-heart"
    },
    {
        title: "Vitamin D Deficiency: Symptoms & Solutions",
        image: "https://cdn1.healthians.com/blog/wp-content/uploads/2025/07/Amla-benefits-for-skin-and-hair.webp",
        link: "https://www.healthians.com/blog/vitamin-d-deficiency-symptoms-and-solutions"
    }
];

const HealthBlog = () => (
  <div className="health-blogs-section">
    <div className="ra-section-title">
      <span className="ra-title-bordered ocean-green-heading">Health Blogs & Articles</span>
    </div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="blog-cards-swiper"
      style={{ marginTop: '32px' }}
    >
      {blogArticlesData.map((article, index) => (
        <SwiperSlide key={index}>
          <a href={article.link} className="blog-card" target="_blank" rel="noopener noreferrer">
            <img src={article.image} alt={article.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h3 style={{ fontWeight: 600 }}>{article.title}</h3>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default HealthBlog;
