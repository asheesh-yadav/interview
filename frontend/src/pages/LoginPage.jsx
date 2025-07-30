import React, { useState } from 'react';

const sliderImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80',
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [current, setCurrent] = useState(0);

  const goToSlide = (idx) => setCurrent(idx);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  // Optional: auto-slide
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="login-page-container">
      <h2 className="login-title">Welcome to Healthians!</h2>
      <div className="login-main-box">
        {/* Left: Slider */}
        <div className="login-slider-section">
          <div className="login-slider-wrapper">
            <button className="login-slider-arrow left" onClick={prevSlide} aria-label="Previous slide">&#8592;</button>
            <img src={sliderImages[current]} alt="Promo Slide" className="login-slider-img" />
            <button className="login-slider-arrow right" onClick={nextSlide} aria-label="Next slide">&#8594;</button>
            <div className="login-promo-dots">
              {sliderImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`login-promo-dot${current === idx ? ' active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  style={{ cursor: 'pointer' }}
                ></span>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Login Form */}
        <div className="login-form-section">
          <h4 className="login-form-title">Login/Sign Up</h4>
          <p className="login-form-desc">Please enter your Email and Password to proceed</p>
          <form className="login-form">
            <div className="login-input-row">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="login-input"
                autoComplete="username"
                required
              />
            </div>
            <div className="login-input-row">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="login-input"
                autoComplete="current-password"
                required
              />
            </div>
            <button
              type="submit"
              className="login-btn"
            >
              Login
              <span className="login-btn-arrow">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </button>
          </form>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, marginBottom: 8 }}>
            <a href="#" className="login-link" style={{ fontSize: '0.95rem' }}>Create Account</a>
            <a href="#" className="login-link" style={{ fontSize: '0.95rem' }}>Forgot ID/Password?</a>
          </div>
          <div className="login-promo-box">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#00aec7" className="login-promo-icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" stroke="#00aec7" strokeWidth="2" fill="none" /></svg>
            <span className="login-promo-text">Sign-up to get <span className="login-promo-cash">₹1000 Cash</span> in your wallet<br /><span className="login-promo-desc">Use it for extra discounts on any test booking.</span></span>
          </div>
          <p className="login-terms">By proceeding, you agree with our <a href="#" className="login-link">Terms and Conditions</a> & <a href="#" className="login-link">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 