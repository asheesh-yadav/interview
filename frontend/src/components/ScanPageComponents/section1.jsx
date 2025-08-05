// HealthServices.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './section1.css';

// Data for the top "Health Scans" section
const healthScans = [
    {
        name: "DEXA Scan",
        price: "789",
        icon: "https://i.postimg.cc/kXyT2cMR/bone-density-scan-icon.png"
    },
    {
        name: "PFT Tests",
        price: "630",
        icon: "https://i.postimg.cc/L62G0K1j/lung-function-test-icon.png"
    },
    {
        name: "Mammography",
        price: "1500",
        icon: "https://i.postimg.cc/q7L04J0S/mammography-icon.png"
    },
    {
        name: "EMG NCV Test",
        price: "2118",
        icon: "https://i.postimg.cc/8cT5y7Jd/nerve-test-icon.png"
    },
    {
        name: "Ultrasound",
        price: "900",
        icon: "https://i.postimg.cc/y8B4XnJ3/ultrasound-image.jpg"
    },
    {
        name: "CT Scan",
        price: "2500",
        icon: "https://i.postimg.cc/J0vJ8h8H/ct-scan-image.jpg"
    },
    {
        name: "MRI Scan",
        price: "3500",
        icon: "https://i.postimg.cc/k4xY0JbT/mri-scan-image.jpg"
    },
    {
        name: "X-Ray",
        price: "400",
        icon: "https://i.postimg.cc/zXvjP7yT/x-ray-image.jpg"
    }
];

// Data for the bottom "Our Services" section
const services = [
    {
        name: "Echo Test",
        price: { current: "1350" },
        image: "https://i.postimg.cc/y8B4XnJ3/ultrasound-image.jpg",
        description: "An echocardiogram or ECHO is a type of ultrasound scan that is conducted to evaluate the heart and the nearby blood vessels. This test aims to monitor and assess the functioning of the heart's...",
        features: [
            "High-resolution image quality for accurate diagnosis",
            "100% non-invasive"
        ]
    },
    {
        name: "TMT Test",
        price: { current: "1109" },
        image: "https://i.postimg.cc/J0vJ8h8H/ct-scan-image.jpg",
        description: "A TMT test, also known as the treadmill test is an important health test conducted to evaluate heart function and assess your risk of developing heart disease. It does that by evaluating how your hear...",
        features: [
            "High-performance treadmill machines",
            "Read-to-assist support staff"
        ]
    },
    {
        name: "PET Scan",
        price: { current: "7899" },
        image: "https://i.postimg.cc/k4xY0JbT/mri-scan-image.jpg",
        description: "A positron emission tomography or PET scan is one of the most advanced non-invasive image diagnostic tests that is used to detect a host of ailments, as well as to measure the oxygen usage, blood flow...",
        features: [
            "High-resolution image quality for accurate diagnosis",
            "Patient comfort-centric machines with TV screens to provide entertainment to claustrophobic patients."
        ]
    },
    {
        name: "Blood Test",
        price: { current: "299" },
        image: "https://i.postimg.cc/3w2yQw8B/blood-test.jpg",
        description: "Comprehensive blood test for routine health checkups and diagnostics.",
        features: [
            "Quick results",
            "Accurate analysis"
        ]
    },
    {
        name: "Liver Function Test",
        price: { current: "499" },
        image: "https://i.postimg.cc/3x3QzSGq/liver-test.jpg",
        description: "Test to assess the health and function of your liver.",
        features: [
            "Detailed liver profile",
            "Expert review"
        ]
    },
    {
        name: "Kidney Function Test",
        price: { current: "599" },
        image: "https://i.postimg.cc/3JwQzSGq/kidney-test.jpg",
        description: "Test to evaluate kidney health and detect any abnormalities.",
        features: [
            "Comprehensive kidney check",
            "Fast reporting"
        ]
    },
    {
        name: "Thyroid Test",
        price: { current: "399" },
        image: "https://i.postimg.cc/3R3QzSGq/thyroid-test.jpg",
        description: "Test to check thyroid hormone levels and function.",
        features: [
            "TSH, T3, T4 included",
            "Endocrinologist review"
        ]
    }
];


const HealthServices = () => {
    return (
        <div className="services-section-container">
            <div className="container">
                {/* --- Top Section: Health Scans --- */}
                <h2 className="section-title">Health Scans & Imaging Tests</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={false}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="health-scans-swiper"
                >
                    {healthScans.map((scan, index) => (
                        <SwiperSlide key={index}>
                            <div className="scan-item">
                                <img src={scan.icon} alt={`${scan.name} icon`} />
                                <h3>{scan.name}</h3>
                                <p>Starting @ ₹{scan.price}</p>
                                <button className="view-details-btn">View Details</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* --- Bottom Section: Our Services --- */}
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <h2 className="section-title bordered">Our Services</h2>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="our-services-swiper"
                    style={{ marginTop: '32px' }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service-card">
                                <img src={service.image} alt={service.name} className="service-card-image" />
                                <div className="service-card-content">
                                    <h3>{service.name}</h3>
                                    <p className="price">
                                        {service.price.original && <span className="original">₹{service.price.original}</span>}
                                        Starting @ ₹{service.price.current}
                                    </p>
                                    <p className="description">{service.description}</p>
                                </div>
                                <div className="salient-features">
                                    <button className="salient-features-title">Salient Features</button>
                                    <ul className="features-list">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HealthServices;