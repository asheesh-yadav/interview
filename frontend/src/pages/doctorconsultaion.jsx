import React, { useState } from 'react';
import { ChevronDown, Search, Play, Star, Check } from 'lucide-react';
import './doctorconsultation.css';

const HealthiansClone = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: ''
  });

  const specialties = [
    { name: 'General Physician', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop' },
    { name: 'Gynaecology', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop' },
    { name: 'Dermatology', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=200&fit=crop' },
    { name: 'Diabetology', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop' },
    { name: 'Gastroenterology', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop' },
    { name: 'Cardiology', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=300&h=200&fit=crop' },
    { name: 'Sexology', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop' },
    { name: 'Psychiatry', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=200&fit=crop' },
    { name: 'Ent', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop' },
    { name: 'Endocrinology', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop' }
  ];

  const symptoms = [
    { name: 'Fever', image: 'https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png' },
    { name: 'Chest Pain', image: 'https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png' },
    { name: 'Cough & Cold', image: 'https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png' },
    { name: 'Constipation', image: 'https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png' },
    { name: 'Sore Throat', image: 'https://helma.healthians.com/stationery/mailer-assets/640f30659496e.png' }
  ];

  const faqs = [
    { question: 'How do I book an online doctor consultation?', answer: 'You can book an online consultation by selecting your specialty or symptom and choosing an available doctor. Simply click on the specialty or symptom that matches your health concern, browse through the available doctors, and select a convenient time slot for your consultation.' },
    { question: 'What is the cost of online consultation?', answer: 'Online doctor consultation starts from ₹129. The exact cost depends on the specialty and doctor you choose. We offer competitive pricing and often have special discounts and packages available for regular users.' },
    { question: 'Is online consultation safe and secure?', answer: 'Yes, our platform uses encrypted technology to ensure your consultation and medical data remain completely secure. We follow HIPAA guidelines and use end-to-end encryption for all video calls and data transmission.' },
    { question: 'Can I get a prescription online?', answer: 'Yes, doctors can provide digital prescriptions after the consultation which you can download and use. These prescriptions are legally valid and can be used at any pharmacy. However, certain controlled substances may require in-person consultation.' },
    { question: 'What specialties are available for online consultation?', answer: 'We offer consultations across multiple specialties including General Physician, Gynecology, Dermatology, Diabetology, Gastroenterology, Cardiology, Sexology, Psychiatry, ENT, and Endocrinology. New specialties are added regularly based on patient demand.' },
    { question: 'How long does an online consultation typically last?', answer: 'Most online consultations last between 15-30 minutes, depending on the complexity of your health concern. The doctor will take time to understand your symptoms, medical history, and provide appropriate guidance or treatment.' },
    { question: 'Can I consult with the same doctor again?', answer: 'Yes, you can book follow-up consultations with the same doctor. We recommend this for continuity of care, especially for chronic conditions or ongoing treatment plans.' },
    { question: 'What if I need emergency care?', answer: 'Online consultations are not suitable for emergency situations. If you experience severe symptoms like chest pain, difficulty breathing, or severe bleeding, please call emergency services immediately or visit the nearest hospital.' },
    { question: 'Do you offer video or audio-only consultations?', answer: 'We primarily offer video consultations for better doctor-patient interaction. However, audio-only consultations are available in certain cases where video is not possible due to technical limitations.' },
    { question: 'Can I cancel or reschedule my appointment?', answer: 'Yes, you can cancel or reschedule your appointment up to 2 hours before the scheduled time. Cancellations made within 2 hours may be subject to a cancellation fee. You can manage your appointments through your account dashboard.' },
    { question: 'What documents should I have ready for consultation?', answer: 'It\'s helpful to have your medical history, current medications list, recent test reports, and any relevant symptoms documented. You can upload these documents in your patient profile for easy access during consultation.' },
    { question: 'Is there a limit on how many consultations I can book?', answer: 'There\'s no limit on the number of consultations you can book. However, we recommend following your doctor\'s advice on follow-up frequency. We also offer consultation packages for regular users at discounted rates.' }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="healthians-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                <span className="text-teal">Online Doctor Consultation</span> from the comfort of your home
              </h1>
              
              <div className="price-badge">
                Doctor Consultation starts from <span className="price">₹129</span>
              </div>

              <div className="search-container">
                <div className="search-box">
                  <Search className="search-icon" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search Speciality or Symptom"
                    className="search-input"
                  />
                </div>
              </div>

              <div className="cashback-info">
                100% cashback* upto Rs 199 of Doctor Consultation on booking a Pathology test within 7 Days. <span className="terms-link">Terms & Conditions</span>
              </div>
            </div>
            
            <div className="hero-right">
              <img 
                src="https://cdn1.healthians.com/img/vdoc_assets/hero-doctor.png" 
                alt="Doctor" 
                className="hero-doctor-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <span>Get ₹1000 Promo Cash for extra discounts on any health test booking</span>
            <button className="claim-btn">Claim Now</button>
          </div>
        </div>
      </div>

      {/* Consult Doctor by Specialty */}
      <section className="specialty-section">
        <div className="container">
          <div className="section-header">
            <h2>Consult Doctor by Speciality</h2>
            <p>Select speciality to find relevant doctors</p>
            <button className="view-all-btn">View all</button>
          </div>
          
          <div className="specialty-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <img src={specialty.image} alt={specialty.name} />
                <div className="specialty-overlay">
                  <h3>{specialty.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Plan Section */}
      <section className="diet-section">
        <div className="container">
          <div className="diet-content">
            <div className="diet-left">
              <h2>Get personalized 7-day diet plan from an expert dietitian @₹299 only!</h2>
              
              <div className="struggle-badge">
                ARE YOU STRUGGLING TO ACHIEVE YOUR HEALTH GOALS?
              </div>
              
              <p>Our dietitian consultation service might just be what you need!</p>
              
              <ul className="diet-features">
                <li><Check size={16} /> With over 50+ expert Dietitians</li>
                <li><Check size={16} /> Get a customized 7-day diet plan tailored to your demographics, health and goals.</li>
                <li><Check size={16} /> Our certified dietitians will work with you to create a meal plan that fits your lifestyle.</li>
              </ul>
              
              <button className="book-appointment-btn">Book Appointment</button>
            </div>
            
            <div className="diet-right">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop" 
                alt="Diet Plan" 
                className="diet-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consult Doctor by Health Symptom */}
      <section className="symptom-section">
        <div className="container">
          <div className="section-header">
            <h2>Consult Doctor by Health Symptom</h2>
            <p>Select the health symptom to find relevant doctors</p>
            <button className="view-all-btn">View all</button>
          </div>
          
          <div className="symptom-grid">
            {symptoms.map((symptom, index) => (
              <div key={index} className="symptom-card">
                <img src={symptom.image} alt={symptom.name} />
                <h3>{symptom.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <h2>Need Help? Get in Touch</h2>
              <p>Our team is here to assist you with any questions about our online doctor consultation services.</p>
              
              <div className="contact-features">
                <div className="feature-item">
                  <div className="feature-icon">24/7</div>
                  <div>
                    <h4>Available 24/7</h4>
                    <p>Round the clock support</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <div>
                    <h4>Secure & Private</h4>
                    <p>Your data is completely safe</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-right">
              <div className="contact-form">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <select 
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                >
                  <option value="">Select Specialty</option>
                  <option value="general">General Physician</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                </select>
                <button className="submit-btn">Get Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <ChevronDown 
                    className={`faq-icon ${openFaq === index ? 'rotated' : ''}`}
                    size={20}
                  />
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-content">
            <div className="download-left">
              <h2>Download Our Mobile App</h2>
              <p>Book consultations, access your reports, and manage your health on the go.</p>
              
              <div className="app-features">
                <div className="feature">
                  <Star className="star-icon" size={16} />
                  <span>Easy appointment booking</span>
                </div>
                <div className="feature">
                  <Star className="star-icon" size={16} />
                  <span>Instant access to reports</span>
                </div>
                <div className="feature">
                  <Star className="star-icon" size={16} />
                  <span>Video consultation support</span>
                </div>
              </div>
              
              <div className="app-buttons">
                <button className="app-btn playstore">
                  <Play size={20} />
                  <div>
                    <span>GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
                <button className="app-btn appstore">
                  <div className="apple-icon">🍎</div>
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="download-right">
              <img 
                src="https://cdn1.healthians.com/img/vdoc_assets/mobile-app-2.png" 
                alt="Mobile App" 
                className="app-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthiansClone;