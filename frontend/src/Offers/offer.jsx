import React from 'react';
import './offer.css';
import  HealthBlog from '../components/healthblog';



const offersData = [
  {
    id: 1,
    imageSrc: 'https://helma.healthians.com/stationery/mailer-assets/66851cce4361f.jpg',
    title: 'Flat 55% Off on all natural Supplements.',
    description: 'Get natural supplements for Diabetes, Digestion, Heart, Brain, Hair, Thyroid, Iron & Vitamin deficiency on discounted price and from Herbved.',
    titleColor: '#00a09d',
    button: null,
  },
  {
    id: 2,
    imageSrc: 'https://helma.healthians.com/stationery/banners/126_7803.webp',
    title: 'Consult top Doctors & Dietitians online starting from @ Rs.129/- ONLY',
    description: 'Consult top Physician, Gynaecologists, Dermatologists, Diabetologists, Gastroenterologists, Cardiologists, Sexologists, ENT specialists and other specialist doctors online.',
    titleColor: '#00a09d',
    button: null,
  },
  {
    id: 3,
    imageSrc: 'https://helma.healthians.com/stationery/banners/128_2475.webp',
    title: 'Book Doctor Consultation + Health Test & Pay only for Health Test',
    description: 'Book Health Test within 7 days of doctor consultation and get cashback of doctor consultation booking amount.',
    titleColor: '#00a09d',
    button: null,
  },
  {
    id: 4,
    imageSrc: 'https://helma.healthians.com/stationery/banners/113_2715.webp',
    title: 'Complete Genetic Testing @ Rs.8999/- ONLY',
    description: 'Know your disease risk early. This test includes Complete DNA Analysis, Genetic risk score evaluation, Complementary genetic counselling & Validated analytical results.',
    titleColor: '#00a09d',
    button: null,
  },
];


const Offers = () => {
  return (
    <div className="offers-page-container">
      <h2 className="offers-main-title">Offers</h2>
      <div className="offers-grid">
        {offersData.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.imageSrc} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h3 className="offer-title" style={{ color: offer.titleColor }}>
                {offer.title}
              </h3>
              <p className="offer-description">{offer.description}</p>
             
            </div>
          </div>
        ))}
      </div>
      <HealthBlog />
    </div>
    
  );
};

export default Offers;