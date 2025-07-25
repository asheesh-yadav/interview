import React, { useState } from 'react';
import PromoSwiper from './PromoSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Servicesshowcase.css';
import { HeartPulse, Award, Phone, ArrowRight } from 'lucide-react';

// Data for the top service cards. Using an array makes it easy to manage.
const serviceCategories = [
  {
    title: 'Blood Tests',
    discount: 'Up to 60% off',
    bgColor: 'bg-cyan-50',
    imgSrc: 'https://placehold.co/100x100/34d3fa/ffffff?text=🩸',
    textColor: 'text-cyan-600',
  },
  {
    title: 'X-Rays, Scans and MRI Tests',
    discount: 'Up to 70% off',
    bgColor: 'bg-violet-50',
    imgSrc: 'https://placehold.co/100x100/a78bfa/ffffff?text=�',
    textColor: 'text-violet-600',
  },
  {
    title: 'Doctor & Diet Consultations',
    discount: 'Up to 75% off',
    bgColor: 'bg-rose-50',
    imgSrc: 'https://placehold.co/100x100/f43f5e/ffffff?text=👨‍⚕️',
    textColor: 'text-rose-600',
  },
  {
    title: 'Herbved+ Supplements',
    discount: 'Flat 55% off',
    bgColor: 'bg-blue-50',
    imgSrc: 'https://placehold.co/100x100/60a5fa/ffffff?text=🌿',
    textColor: 'text-blue-600',
  },
  {
    title: 'Genetic Testing',
    discount: 'Up to 70% off',
    bgColor: 'bg-pink-50',
    imgSrc: 'https://placehold.co/100x100/f472b6/ffffff?text=🧬',
    textColor: 'text-pink-600',
  },
  {
    title: 'Upload Prescription',
    discount: '',
    bgColor: 'bg-indigo-50',
    imgSrc: 'https://placehold.co/100x100/818cf8/ffffff?text=📄',
    textColor: 'text-indigo-600',
  },
];

const checkupCategories = [
  'Full Body Checkup', 'Fever', 'STD', 'Vitamins', 'Diabetes', 'Heart', 'Thyroid', 'Kidney', 'Allergy',
];
const checkupPackages = [
  {
    name: 'Healthy India 2025 Full Body Checkup Lite',
    tests: 80,
    included: 'Blood Glucose Fasting, TSH Ultra-Sensitive, Vitamin D Total-25 Hydroxy, Liver Function Test',
    price: 2000,
    oldPrice: 3744,
    perPerson: 1000,
    members: 2,
    more: true,
  },
  {
    name: 'Healthy India 2025 Full Body Checkup Advance',
    tests: 83,
    included: 'Blood Glucose Fasting, Vitamin B12 Cyanocobalamin, Vitamin D Total-25 Hydroxy, Liver Function Test',
    price: 2673,
    oldPrice: 3828,
    perPerson: 1337,
    members: 2,
    more: true,
  },
  {
    name: 'Healthy India 2025 Full Body Checkup Advance (With HbA1c)',
    tests: 85,
    included: 'Blood Glucose Fasting, Vitamin B12 Cyanocobalamin, Vitamin D Total-25 Hydroxy, Liver Function Test',
    price: 2921,
    oldPrice: 3659,
    perPerson: 1461,
    members: 2,
    more: true,
  },
  {
    name: 'Comprehensive Wellness Package',
    tests: 90,
    included: 'CBC, LFT, KFT, Lipid Profile, Thyroid Profile, Vitamin D, Vitamin B12, Iron Studies',
    price: 3500,
    oldPrice: 4200,
    perPerson: 1750,
    members: 2,
    more: true,
  },
  {
    name: 'Executive Health Checkup',
    tests: 95,
    included: 'CBC, LFT, KFT, Lipid Profile, Thyroid Profile, Vitamin D, Vitamin B12, Iron Studies, ECG, Chest X-Ray',
    price: 4100,
    oldPrice: 5000,
    perPerson: 2050,
    members: 2,
    more: true,
  },
];

const scanSlides = [
  {
    img: 'https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80',
    name: 'PFT Tests',
    price: 2630,
    oldPrice: 2000,
    features: ['Quick & painless procedure', '100% non-invasive'],
    desc: 'Pulmonary function tests or PFT tests are an assessment of patients and non-invasive diagnostic tests that are conducted to evaluate lung function. These tests measure the lung’s capacity, volume...'
  },
  {
    img: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80',
    name: 'DEXA Scan',
    price: 2789,
    oldPrice: 3500,
    features: ['High-resolution image quality for accurate diagnosis', '100% non-invasive'],
    desc: 'A DEXA bone density scan or "dual-energy X-ray absorptiometry" is a non-invasive scan, and cutting-edge image diagnostic test conducted to determine your bone mineral density and to d...'
  },
  {
    img: 'https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=400&q=80',
    name: 'Mammography',
    price: 21500,
    oldPrice: 38000,
    features: ['High-resolution image quality for accurate diagnosis', '100% non-invasive'],
    desc: 'A mammogram is essentially an x-ray of the breast and is specifically conducted to screen and, for early signs of breast cancer. A mammogram is considered to be one of the best image diagnostic tools for...'
  },
  {
    img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80',
    name: 'CT Scan',
    price: 5000,
    oldPrice: 7000,
    features: ['Detailed cross-sectional images', 'Quick and painless'],
    desc: 'A CT scan combines a series of X-ray images taken from different angles and uses computer processing to create cross-sectional images of the bones, blood vessels and soft tissues inside your body.'
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    name: 'MRI Scan',
    price: 8500,
    oldPrice: 12000,
    features: ['No radiation', 'High-resolution images'],
    desc: 'MRI uses a strong magnetic field and radio waves to create detailed images of the organs and tissues within the body. It is a non-invasive and painless procedure.'
  },
  {
    img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80',
    name: 'Ultrasound',
    price: 1200,
    oldPrice: 2000,
    features: ['Safe for all ages', 'Real-time imaging'],
    desc: 'Ultrasound imaging uses sound waves to produce pictures of the inside of the body. It is used to help diagnose the causes of pain, swelling and infection in the body’s internal organs.'
  },
];

const healthRiskSlides = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616494.png',
    title: 'Jaundice',
    desc: 'Jaundice is a condition where a persons skin and eyes turn yellow. It is a medical term to define th...'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616554.png',
    title: 'Digestion',
    desc: 'Digestion is the process by which the food you eat is broken down and converted into energy for all...'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616491.png',
    title: 'Infections',
    desc: 'Infection is a condition wherein an organism enters your body and causes illness. There are many dif...'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616495.png',
    title: 'Diabetes',
    desc: 'Diabetes is a chronic health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar...'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/616/616497.png',
    title: 'Hypertension',
    desc: 'Hypertension, also known as high blood pressure, is a condition in which the force of the blood against the artery walls is too high...'
  },
];

// Reusable component for the top service cards
const ServiceCard = ({ title, discount, bgColor, imgSrc, textColor }) => (
  <div
    style={{
      flex: '0 0 180px',
      maxWidth: 180,
      minWidth: 160,
      textAlign: 'center',
      padding: '18px 10px',
      borderRadius: 18,
      background: bgColor ? bgColorToHex(bgColor) : '#f3f4f6',
      margin: '0 10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      transition: 'box-shadow 0.2s, transform 0.2s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}
    onMouseOver={e => {
      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
      e.currentTarget.style.transform = 'none';
    }}
  >
    <img src={imgSrc} alt={title} style={{ width: 64, height: 64, objectFit: 'contain', margin: '0 auto' }} />
    {discount && (
      <span style={{
        display: 'inline-block',
        background: '#fff',
        color: textColor ? textColorToHex(textColor) : '#0891b2',
        fontSize: 12,
        fontWeight: 600,
        padding: '4px 12px',
        borderRadius: 12,
        marginTop: 8,
      }}>
        {discount}
      </span>
    )}
    <h3 style={{ color: '#1e293b', fontWeight: 700, marginTop: 10, fontSize: 14, minHeight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{title}</h3>
  </div>
);

// Helper to convert Tailwind bgColor to hex
function bgColorToHex(bg) {
  switch (bg) {
    case 'bg-cyan-50': return '#ecfeff';
    case 'bg-violet-50': return '#f5f3ff';
    case 'bg-rose-50': return '#fff1f2';
    case 'bg-blue-50': return '#eff6ff';
    case 'bg-pink-50': return '#fdf2f8';
    case 'bg-indigo-50': return '#eef2ff';
    default: return '#f3f4f6';
  }
}
function textColorToHex(tc) {
  switch (tc) {
    case 'text-cyan-600': return '#0891b2';
    case 'text-violet-600': return '#7c3aed';
    case 'text-rose-600': return '#e11d48';
    case 'text-blue-600': return '#2563eb';
    case 'text-pink-600': return '#db2777';
    case 'text-indigo-600': return '#4f46e5';
    default: return '#0891b2';
  }
}

const whyChooseFeatures = [
  {
    number: '01',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    text: 'Free & On-time\nSample Collection',
  },
  {
    number: '02',
    icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
    text: 'Free Report\nCounselling &\nDiet Consultation',
  },
  {
    number: '03',
    icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    text: 'Fast & Accurate\nTest Reports',
  },
  {
    number: '04',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    text: 'Presence in 250+\nCities Across India',
  },
  {
    number: '05',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    text: 'Largest Fleet of\n2500+ Phlebotomists',
  },
  {
    number: '06',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
    text: '85 Lakh+ Satisfied\nCustomers',
  },
];

const whyChooseFeatures2 = [
  {
    number: '01',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    text: 'Free & On-time\nSample Collection',
  },
  {
    number: '02',
    icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
    text: 'Free Report\nCounselling &\nDiet Consultation',
  },
  {
    number: '03',
    icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    text: 'Fast & Accurate\nTest Reports',
  },
  {
    number: '04',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    text: 'Presence in 250+\nCities Across India',
  },
  {
    number: '05',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    text: 'Largest Fleet of\n2500+ Phlebotomists',
  },
  {
    number: '06',
    icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
    text: '85 Lakh+ Satisfied\nCustomers',
  },
];

// The main component that you will export
export default function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('Full Body Checkup');
  return (
    <section style={{ background: '#f8fafc', padding: '48px 0', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        
        
        {/* Top horizontal scrollable row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            padding: '0 10px 24px 10px',
            margin: '0 -10px',
            gap: 0,
            scrollbarWidth: 'none', // Hide scrollbar in Firefox
          }}
          className="hide-horizontal-scrollbar"
        >
          {serviceCategories.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <style>{`
          .hide-horizontal-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .hide-horizontal-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>

        {/* Bottom two info cards */}
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Responsive: two columns on large screens */}
          <div style={{
            background: '#fff',
            padding: '32px',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 24,
            border: '1px solid#e5e5e5',
            boxSizing: 'border-box',
          }}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 64, height: 64, background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HeartPulse size={32} color={'#eab308'} />
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b', margin: 0 }}>Unlock Your Health Score with HealthKarma!</h3>
              <p style={{ color: '#64748b', margin: '12px 0 0 0', fontSize: 15 }}>Uncover potential health risks and get custom test recommendation based on your lifestyle and habits.</p>
              <button style={{ marginTop: 16, background: '#f97316', color: '#fff', fontWeight: 600, padding: '12px 24px', borderRadius: 14, boxShadow: '0 2px 6px rgba(0,0,0,0.04)', border: 'none', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <span>Check your health score</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '10px',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 24,
            border: '2px solid#e5e5e5',
            boxSizing: 'border-box',
          }}>
            {/* Blank space matching the icon size in the left card */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 64, height: 64, background: 'transparent', borderRadius: '50%' }}></div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b', margin: 0 }}>Healthians Now Empaneled for All Government Panel Tests</h3>
              <p style={{ color: '#64748b', margin: '12px 0 0 0', fontSize: 15 }}>Get tests done for in-service or retired government employees under CGHS, ECHS, or any other government panel.</p>
              <button style={{ marginTop: 16, background: '#fde047', color: '#1e293b', fontWeight: 700, padding: '12px 24px', borderRadius: 999, boxShadow: '0 2px 6px rgba(0,0,0,0.04)', border: 'none', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <Phone size={16} />
                <span>Call us: +91-9289902266</span>
              </button>
            </div>
          </div>
        </div>
        {/* Why Trust Section */}
        <div className="whytrust-section">
          <div className="whytrust-title">
            Why <span style={{ color: '#00bcd4' }}>8.5 Million</span> Indians<br />
            <span style={{ fontWeight: 400 }}>Trust Healthians Labs</span>
          </div>
          <div className="whytrust-inner">
            {/* Feature 1 */}
            <div className="whytrust-feature">
              <svg className="whytrust-feature-icon" width="28" height="28" fill="none" stroke="#00bcd4" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8 21l4-4 4 4"/></svg>
              <div className="whytrust-feature-text">CAP & NABL<br />Accredited Labs</div>
            </div>
            {/* Feature 2 */}
            <div className="whytrust-feature">
              <svg className="whytrust-feature-icon" width="28" height="28" fill="none" stroke="#00bcd4" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <div className="whytrust-feature-text">On Time Sample<br />Collection</div>
            </div>
            {/* Feature 3 */}
            <div className="whytrust-feature">
              <svg className="whytrust-feature-icon" width="28" height="28" fill="none" stroke="#00bcd4" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></svg>
              <div className="whytrust-feature-text">Smart Reports<br />in 6 Hours</div>
            </div>
            {/* Feature 4 */}
            <div className="whytrust-feature">
              <svg className="whytrust-feature-icon" width="28" height="28" fill="none" stroke="#00bcd4" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.34 1.55.57 2.36.7A2 2 0 0 1 22 16.92z"/></svg>
              <div className="whytrust-feature-text">Free Report<br />Consultation</div>
            </div>
          </div>
        </div>
        {/* Promo Swiper */}
        <PromoSwiper />
        {/* New Checkup Packages Slider */}
        <div className="checkup-slider-section">
          <h2 className="checkup-slider-heading">
            Full Body Checkup packages in Gurgaon
          </h2>
          <div className="checkup-slider-categories">
            {checkupCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`checkup-slider-pill${selectedCategory === cat ? ' selected' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="checkup-slider-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={false}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="checkup-swiper-loop"
            >
              {checkupPackages.map((pkg, idx) => (
                <SwiperSlide key={idx}>
                  <div className="checkup-slider-card">
                    <div className="checkup-slider-card-header">
                      <div className="checkup-slider-card-title">{pkg.name}</div>
                      <div className="checkup-slider-card-tests">{pkg.tests}<br /><span style={{ fontSize: 12, fontWeight: 400 }}>Tests</span></div>
                    </div>
                    <div className="checkup-slider-card-included">
                      <b>Tests Included:</b> {pkg.included} <span className="checkup-slider-card-more">_more</span>
                    </div>
                    <div className="checkup-slider-card-actions">
                      <span>+ Know More</span>
                      <select className="checkup-slider-card-select">
                        <option>{pkg.members} Members</option>
                      </select>
                    </div>
                    <div className="checkup-slider-card-addmore">+ Add 1 more — Pay ₹{pkg.perPerson}/person!</div>
                    <div className="checkup-slider-card-features">
                      <span>✓ 12 hrs Fasting Required</span>
                      <span>✓ Recommended for Everyone</span>
                      <span>✓ Reports within 24hrs</span>
                    </div>
                    <div className="checkup-slider-card-footer">
                      <div>
                        <div className="checkup-slider-card-price">₹{pkg.price} <span className="checkup-slider-card-oldprice">₹{pkg.oldPrice}</span></div>
                        <div className="checkup-slider-card-perperson">₹{pkg.perPerson} per person</div>
                      </div>
                      <button className="checkup-slider-card-book">
                        Book Now <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="checkup-slider-viewall">
                View All Full Body Checkup packages
              </button>
            </div>
          </div>
        </div>
        {/* New Health Scans & Imaging Tests Slider */}
        <div className="checkup-slider-section">
          <h2 className="checkup-slider-heading">Health Scans & Imaging Tests</h2>
          <div className="checkup-slider-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={false}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="checkup-swiper-loop"
            >
              {scanSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="checkup-slider-card">
                    <img src={slide.img} alt={slide.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18 }} />
                    <div className="checkup-slider-card-header">
                      <div className="checkup-slider-card-title">{slide.name}</div>
                      <div className="checkup-slider-card-tests">
                        Starting <span style={{ color: '#00b6bd', fontWeight: 700 }}>@</span> <span style={{ textDecoration: 'line-through', color: '#bbb', fontWeight: 400 }}>₹{slide.oldPrice}</span> <span style={{ color: '#00b6bd', fontWeight: 700 }}>₹{slide.price}</span>
                      </div>
                    </div>
                    <div className="checkup-slider-card-included">
                      {slide.desc}
                    </div>
                    <div className="checkup-slider-card-actions">
                      <button className="checkup-slider-card-book" style={{ padding: '8px 20px', fontSize: 15 }}>Salient Features</button>
                    </div>
                    <div className="checkup-slider-card-features">
                      {slide.features.map((f, i) => (
                        <span key={i}>{f}</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="checkup-slider-viewall">
                View All
              </button>
            </div>
          </div>
        </div>
        {/* Health Risk Slider Section */}
        <div className="checkup-slider-section">
          <h2 className="checkup-slider-heading" style={{ color: '#00b6bd' }}>Health Risk</h2>
          <div className="checkup-slider-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={false}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="checkup-swiper-loop"
            >
              {healthRiskSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="checkup-slider-card" style={{ alignItems: 'center', textAlign: 'center', minHeight: 260 }}>
                    <img src={slide.icon} alt={slide.title} style={{ width: 64, height: 64, objectFit: 'contain', margin: '32px auto 16px auto' }} />
                    <div className="checkup-slider-card-title" style={{ color: '#00b6bd', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{slide.title}</div>
                    <div style={{ color: '#444', fontSize: '1rem', marginBottom: 16, minHeight: 48 }}>{slide.desc}</div>
                    <a href="#" style={{ color: '#00b6bd', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', marginTop: 'auto', display: 'inline-block' }}>View More</a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="checkup-slider-viewall">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Download Our App Now Section */}
      <div className="downloadapp-section" id="downloadapp_section">
        <div className="downloadapp-inner">
          <div className="downloadapp-image">
            <img
              src="https://helma-mumbai.healthians.com/stationery/mailer-assets/6866367e51a90.png"
              alt="Healthians App Preview"
              style={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block' }}
            />
          </div>
          <div className="downloadapp-content">
            <h3 style={{ color: '#00b6bd', fontWeight: 700, fontSize: 28, marginBottom: 16 }}>Download Our App Now</h3>
            <p style={{ color: '#444', fontSize: 16, marginBottom: 24 }}>
              Tracking health status made easy with the app. Now available on both Google Play Store and App Store. Book health tests and access your smart reports and health trackers anytime anywhere.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps/details?id=com.healthians.main.healthians&hl=en_IN" style={{ marginLeft: 0 }}>
                <img src="https://cdn2.healthians.com/img/google_play.png" alt="Healthians APP" style={{ maxWidth: 190, width: 190 }} />
              </a>
              <a href="https://itunes.apple.com/in/app/healthians/id1453011241?mt=8" style={{ marginLeft: 0 }}>
                <img src="https://cdn2.healthians.com/img/appstore.png" alt="img-appstore" style={{ maxWidth: 190, width: 190 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Healthians Section */}
      <div className="whychoose-section">
        <h2 className="whychoose-title">Why Choose Healthians</h2>
        <div className="whychoose-features">
          {whyChooseFeatures.map((f, idx) => (
            <div className="whychoose-feature" key={idx}>
              <div className="whychoose-number">{f.number}</div>
              <img src={f.icon} alt={f.text} className="whychoose-icon" />
              <div className="whychoose-text">{f.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Health Checkup Journey Section */}
      <div className="journey-section">
        <div className="journey-title">
          <div>Your Healthians</div>
          <div className="journey-title-main">Health Checkup Journey</div>
        </div>
        <div className="journey-steps">
          <div className="journey-step">
            <div className="journey-step-icon"><img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Book with Ease" /></div>
            <div className="journey-step-title">Book with Ease</div>
            <div className="journey-step-desc">Choose your test, time slot and book instantly.</div>
          </div>
          <div className="journey-step">
            <div className="journey-step-icon"><img src="https://cdn-icons-png.flaticon.com/512/2921/2921820.png" alt="Hassle-Free Home Collection" /></div>
            <div className="journey-step-title">Hassle-Free Home Collection</div>
            <div className="journey-step-desc">Safe & timely sample collection by trained phlebotomist.</div>
          </div>
          <div className="journey-step">
            <div className="journey-step-icon"><img src="https://cdn-icons-png.flaticon.com/512/2921/2921817.png" alt="Secure Sample Transfer to Labs" /></div>
            <div className="journey-step-title">Secure Sample Transfer to Labs</div>
            <div className="journey-step-desc">Temperature-controlled & safe sample transportation to lab.</div>
          </div>
          <div className="journey-step">
            <div className="journey-step-icon"><img src="https://cdn-icons-png.flaticon.com/512/2921/2921812.png" alt="Quick & Easy Report Access" /></div>
            <div className="journey-step-title">Quick & Easy Report Access</div>
            <div className="journey-step-desc">Get your reports within 6 hours via WhatsApp, SMS and Email.</div>
          </div>
        </div>
        <svg className="journey-dotted-line" width="100%" height="60" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 80 30 Q 300 80 400 30 Q 600 -20 800 30 Q 1000 80 1120 30" stroke="#3ddad7" strokeWidth="3" strokeDasharray="10 10" fill="none" />
        </svg>
      </div>
      {/* Healthians Smart Report Section */}
      <div className="smartreport-section">
        <div className="smartreport-inner">
          <div className="smartreport-left">
            <div className="smartreport-title">Healthians Smart Report</div>
            <div className="smartreport-subtitle">Now understanding lab reports got easier</div>
            <div className="smartreport-highlight">Consolidated Health<br />History Report</div>
          </div>
          <div className="smartreport-right">
            <img src="https://helma-mumbai.healthians.com/stationery/mailer-assets/68663d546352c.webp" alt="Healthians Smart Report" className="smartreport-image" />
          </div>
        </div>
      </div>
      {/* Excellence of Healthians Labs Section */}
      <div className="excellence-section">
        <div className="excellence-inner">
          <div className="excellence-left">
            <div className="excellence-title">
              The Excellence of <span className="excellence-highlight">Healthians Labs</span>
            </div>
            <div className="excellence-desc">
              Healthians is one of the most trusted players in diagnostics today, with a network of fully automated labs across major cities in India, that are hardcoded with innovative technology, advanced robotics and intelligent digital solutions.<br /><br />
              With an extensive team of highly qualified lab technicians and pathologists, our single-minded purpose is to follow the strictest of quality measures to maintain accuracy for each test we perform.
            </div>
            <button className="excellence-btn">Know more</button>
          </div>
          <div className="excellence-right">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              <div className="excellence-video-thumb">
                <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80" alt="Lab Excellence" />
                <span className="excellence-video-play">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#fa7a50" fillOpacity="0.9" />
                    <polygon points="25,20 45,30 25,40" fill="#fff" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Testimonial Slider Section */}
      <div className="testimonial-section">
        <div className="testimonial-inner">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={32}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="testimonial-swiper"
          >
            {[
              { name: 'Kamlesh', city: 'Allahabad' },
              { name: 'Avni', city: 'Vadodara' },
              { name: 'Bahadur', city: 'Mohali' },
              { name: 'Mukesh', city: 'Bhopal' },
              { name: 'Ravi', city: 'Delhi' },
              { name: 'Priya', city: 'Mumbai' },
            ].map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-thumb">
                    <img src="https://helma.healthians.com/stationery/mailer-assets/61bb039d7d12a.jpg" alt={t.name} />
                    <span className="testimonial-play">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.25" />
                        <polygon points="25,20 45,30 25,40" fill="#fff" />
                      </svg>
                    </span>
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-city">{t.city}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Rewards & Recognition Slider Section */}
      <div className="rewards-section">
        <h2 className="rewards-title">Rewards & Recognition</h2>
        <div className="rewards-inner">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={32}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="rewards-swiper"
          >
            {[
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c89a2f4445a.webp',
                title: 'Economic Times Edge Awards 2019 - Top',
                desc: 'Emerging Innovative Healthcare Brand',
              },
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c899fbb1e8f.webp',
                title: 'Healthcare Leadership',
                desc: 'Global Conclave 2022',
              },
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c899cec5cb2.webp',
                title: 'ET Inspiring Leaders',
                desc: 'North 2022',
              },
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c89a2f4445a.webp',
                title: 'Best Diagnostic Lab',
                desc: 'Awarded by Health Magazine',
              },
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c899fbb1e8f.webp',
                title: 'Innovation in Healthcare',
                desc: 'National Healthcare Awards',
              },
              {
                img: 'https://helma.healthians.com/stationery/mailer-assets/66c899cec5cb2.webp',
                title: 'Top Lab Chain',
                desc: 'India Health Awards',
              },
            ].map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="rewards-card">
                  <div className="rewards-img-wrap">
                    <img src={r.img} alt={r.title} />
                  </div>
                  <div className="rewards-info">
                    <div className="rewards-card-title">{r.title}</div>
                    <div className="rewards-card-desc">{r.desc}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Health Blogs & Articles Slider Section */}
      <div className="blogs-section">
        <h2 className="blogs-title">Health Blogs & Articles</h2>
        <div className="blogs-inner">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={32}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="blogs-swiper"
          >
            {[
              {
                img: 'https://cdn.healthians.com/blog/wp-content/uploads/2022/12/ANCA-Test.jpg',
                title: 'ANCA Test – Need, Uses & Results',
              },
              {
                img: 'https://cdn.healthians.com/blog/wp-content/uploads/2022/12/Lipase-Test.jpg',
                title: 'Lipase Test – A test to check the health of the pancreas',
              },
              {
                img: 'https://cdn.healthians.com/blog/wp-content/uploads/2022/12/Bilirubin-Blood-Test.jpg',
                title: 'Bilirubin Blood Test:  High vs. Low Levels, Direct vs. Indirect',
              },
            ].map((b, idx) => (
              <SwiperSlide key={idx}>
                <div className="blogs-card">
                  <div className="blogs-img-wrap">
                    <img src={b.img} alt={b.title} />
                  </div>
                  <div className="blogs-info">
                    <div className="blogs-card-title">{b.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

<style>{`
  .checkup-slider-swiper .swiper-button-next,
  .checkup-slider-swiper .swiper-button-prev {
    top: 50% !important;
    transform: translateY(-50%);
    margin: 0 24px;
    color: #00b6bd;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 8px #00b6bd22;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checkup-slider-swiper .swiper-button-next {
    right: -40px ;
  }
  .checkup-slider-swiper .swiper-button-prev {
    left: -24px ;
  }
  .checkup-slider-swiper .swiper-pagination {
    margin-top: 24px;
    bottom: 0 !important;
  }
`}</style>
