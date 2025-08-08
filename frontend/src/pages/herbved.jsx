import React, { useState } from 'react';
import './Herbved.css';

const productData = [
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'LIV-UP',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/661d7c006df2d.png',
    title: 'NUTRI-BOOST',
    oldPrice: '₹1383',
    newPrice: '₹ 622.35',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'PILES-RELIEF',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'LIV-UP',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/661d7c006df2d.png',
    title: 'NUTRI-BOOST',
    oldPrice: '₹1383',
    newPrice: '₹ 622.35',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'PILES-RELIEF',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },{
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'LIV-UP',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/661d7c006df2d.png',
    title: 'NUTRI-BOOST',
    oldPrice: '₹1383',
    newPrice: '₹ 622.35',
  },
  {
    img: 'https://helma.healthians.com/stationery/mailer-assets/63dca9c231b89.png',
    title: 'PILES-RELIEF',
    oldPrice: '₹1517',
    newPrice: '₹ 682.65',
  },
];

const getSlidesPerView = () => {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
};

const Herbved = () => {
  // Remove swiperRef and Swiper code
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  React.useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = productData.length;
  const goTo = (idx) => {
    let newIdx = idx;
    if (newIdx < 0) newIdx = maxIndex - 1;
    if (newIdx >= maxIndex) newIdx = 0;
    setCurrent(newIdx);
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Get visible cards for infinite loop
  const visibleCards = [];
  for (let i = 0; i < slidesPerView; i++) {
    visibleCards.push(productData[(current + i) % productData.length]);
  }

  // Pagination dots
  const totalDots = productData.length;

  return (
    <div className="herbved-container">
      {/* Banner Section */}
      <div className="banner-section">
        <img 
          src="https://helma.healthians.com/stationery/herbved_page_banner/55/herbved_main_page_banner_1600_55.jpg" 
          alt="Herbved Banner" 
          className="banner-image"
        />
      </div>

      {/* Wellness Powered by Ayurveda Section */}
      <div className="wellness-section">
        <div className="container">
          <h2 className="wellness-title">Wellness Powered by Ayurveda</h2>
          <div className="wellness-content">
            <div className="wellness-image">
              <img 
                src="https://cdn1.healthians.com/img/suppliment/img_about.png" 
                alt="Ayurveda" 
              />
            </div>
            <div className="wellness-text">
              <div className="text-block">
                <p>At Herbved + we believe that wellness is not the mere absence of disease but the celebration of your health that helps you lead a fulfilling life.</p>
              </div>
              <div className="text-block">
                <p>While modern medicine focuses more on the treatment of symptoms of a disease, we believe in the ancient wisdom of Ayurveda that addresses the root cause of any disease.</p>
              </div>
              <div className="text-block">
                <p>Herbved + has developed advanced natural formulations and medicines inspired by the ancient Indian texts that address the root causes of chronic and life-threatening ailments.</p>
              </div>
              <div className="text-block">
                <p>The range of products have been developed to help patients manage serious ailments such as heart diseases, thyroid disorders, gastric problems, immunity disorders, brain diseases, osteo-arthritis, joint pains, & many more.</p>
              </div>
              <div className="text-block">
                <p>Ayurvedic medicines have for thousands of years empowered us with means to maintain health and prevent diseases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product Range Section */}
      <div className="product-range-section">
        <div className="container">
          <h2 className="section-title">Our Product Range</h2>
          <div className="custom-slider-wrapper">
            <button className="slider-arrow left" onClick={prev}>&#60;</button>
            <div className="custom-slider">
              {visibleCards.map((p, i) => (
                <div className="product-card" key={i}>
                  <img src={p.img} alt={p.title} />
                  <div className="product-title">{p.title}</div>
                  <div className="product-prices">
                    <span className="old-price">{p.oldPrice}</span>
                    <span className="new-price">{p.newPrice}</span>
                  </div>
                  <button className="view-details-btn">View details</button>
                </div>
              ))}
            </div>
            <button className="slider-arrow right" onClick={next}>&#62;</button>
          </div>
          <div className="slider-pagination">
            {Array.from({length: totalDots}).map((_, idx) => (
              <span key={idx} className={`dot${idx === current ? ' active' : ''}`} onClick={() => goTo(idx)}></span>
            ))}
          </div>
        </div>
      </div>

      {/* All-Natural Guarantee Section */}
      <div className="natural-guarantee-section">
        <div className="natural-guarantee-container">
          <h2 className="natural-guarantee-title">
            The All-Natural Guarantee of
            <img src="https://cdn1.healthians.com/img/suppliment/herbved.png" alt="Herbved Logo" className="natural-logo" />
            <div className="natural-title-underline"></div>
          </h2>
          <div className="natural-guarantee-grid">
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img1a.png" alt="Made from 100% Pure Natural Herbs" />
              </div>
              <div className="natural-caption">Made from 100%<br/>Pure Natural Herbs</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img2b.png" alt="No Artificial Substitutes" />
              </div>
              <div className="natural-caption">No Artificial Substitutes</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img3c.png" alt="Authentic & Safe" />
              </div>
              <div className="natural-caption">Authentic & Safe</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img4d.png" alt="No Steroids" />
              </div>
              <div className="natural-caption">No Steroids</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img2b.png" alt="No Chemicals" />
              </div>
              <div className="natural-caption">No Chemicals</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img3c.png" alt="Proven Results" />
              </div>
              <div className="natural-caption">Proven Results</div>
            </div>
            <div className="natural-guarantee-item">
              <div className="natural-icon-circle">
                <img src="https://cdn1.healthians.com/img/suppliment/img4d.png" alt="No Side Effects" />
              </div>
              <div className="natural-caption">No Side Effects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section-new">
        <div className="features-container-new">
          <div className="features-left">
            <div className="features-img-circle">
              <img src="https://cdn1.healthians.com/img/suppliment/benefitsImg.png" alt="Ayurveda Lifestyle" />
            </div>
          </div>
          <div className="features-right">
            <h2 className="features-title-new">
              Benefits of Ayurveda Based Lifestyle
              <div className="features-title-underline-new"></div>
            </h2>
            <div className="features-grid-new">
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b1.png" alt="It Increases Immunity" />
                <div className="feature-caption-new">It Increases Immunity</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b2.png" alt="It is natural" />
                <div className="feature-caption-new">It is natural</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b3.png" alt="It has no side-effects" />
                <div className="feature-caption-new">It has no side-effects</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b4.png" alt="Removes diseases from the root" />
                <div className="feature-caption-new">Removes diseases<br/>from the root</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b5.png" alt="Improves bodily functions" />
                <div className="feature-caption-new">Improves bodily<br/>functions</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b6.png" alt="Helps maintain a healthy weight" />
                <div className="feature-caption-new">Helps maintain a<br/>healthy weight</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b7.png" alt="Increases one's life span" />
                <div className="feature-caption-new">Increases one's<br/>life span</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b8.png" alt="Relaxes, rejuvenates & revitalizes" />
                <div className="feature-caption-new">Relaxes, rejuvenates &<br/>revitalizes</div>
              </div>
              <div className="feature-item-new">
                <img src="https://cdn1.healthians.com/img/suppliment/b9.png" alt="It recommends eating foods that are easily available, non-" />
                <div className="feature-caption-new">It recommends<br/>eating foods that are<br/>easily available, non-</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img 
                src="https://helma.healthians.com/stationery/mailer-assets/661d7c006df2d.png" 
                alt="Herbved Logo"
              />
            </div>
            <div className="footer-text">
              <p>&copy; 2024 Herbved by Healthians. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Herbved;