import React, { useState } from 'react';
import './HealthPackagePage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Data for the FAQ Section ---
const faqData = [
  {
    question: 'What is included in a full body checkup?',
    answer: 'A full body checkup typically includes a range of tests to assess the overall health of an individual. This often covers a Complete Blood Count (CBC), Lipid Profile, Liver Function Test (LFT), Kidney Function Test (KFT), Blood Sugar tests, and Urine Analysis. Specific packages may also include tests for thyroid function, vitamins, and other health markers.'
  },
  {
    question: 'Why is Full Body Checkup necessary?',
    answer: 'Regular full body checkups are crucial for preventive healthcare. They help in the early detection of potential health issues, even before symptoms appear. This allows for timely intervention and treatment, which can prevent diseases from becoming severe and significantly improves long-term health outcomes.'
  },
  {
    question: 'What tests are done for full body checkup?',
    answer: 'Common tests include CBC to check for infections and anemia, lipid profile for cholesterol levels, LFT and KFT to assess liver and kidney health, blood sugar tests for diabetes, and urine analysis for urinary tract issues. Advanced packages may include ECG, X-Rays, and specific cancer markers.'
  },
  {
    question: 'Why choose Full Body Checkup in Gurgaon from Healthians?',
    answer: 'Healthians offers certified labs, at-home sample collection by trained phlebotomists, and fast, accurate reports. Our comprehensive packages are competitively priced and come with free doctor consultation to discuss your reports, providing a complete and convenient healthcare experience in Gurgaon.'
  },
];

// --- Data for the Blog Slider ---
const blogData = [
    { image: 'https://picsum.photos/400/250?random=1', title: 'Serum Albumin Test: A test to check liver functions' },
    { image: 'https://picsum.photos/400/250?random=2', title: 'ANCA Test - Need, Uses & Results' },
    { image: 'https://picsum.photos/400/250?random=3', title: 'Lipase Test - A test to check the health of the pancreas' },
    { image: 'https://picsum.photos/400/250?random=4', title: 'Understanding Your Complete Blood Count (CBC) Report' },
    { image: 'https://picsum.photos/400/250?random=5', title: 'The Importance of Vitamin D for Bone Health' },
];


const FaqAndBlogsSection = () => {
  // State for the FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // State for the Blog Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;
  const totalPages = Math.ceil(blogData.length / slidesPerPage);

  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  }

  return (
    <div className="faq-blogs-wrapper">
      
      {/* --- FAQ Section --- */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => handleFaqClick(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${openFaqIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Health Blogs & Articles Section --- */}
      <section className="blogs-section">
        <h2 className="section-title" style={{color: '#48C9B0'}}>Health Blogs & Articles</h2>
        <div className="slider-container">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {blogData.map((blog, index) => (
              <div className="slide" key={index}>
                <div className="blog-card">
                  <img src={blog.image} alt={blog.title} className="blog-image"/>
                  <h4 className="blog-title">{blog.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-dots">
            {[...Array(totalPages)].map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></button>
            ))}
        </div>
      </section>
    </div>
  );
};
// Data for the Lifestyle Habits section
const habitsData = [
  { name: 'Alcoholism', icon: '🍷' },
  { name: 'Anger', icon: '😠' },
  { name: 'Eating Poorly', icon: '🍔' },
  { name: 'Heartburn', icon: '🔥' },
  { name: 'Junk Food', icon: '🍟' },
  { name: 'Low Iron Diet', icon: 'Fe' },
  { name: 'Medicine Overuse', icon: '💊' },
  { name: 'Poor Nutrition', icon: '🥦' },
];

// NEW DATA STRUCTURE: All packages are now organized by the habit name
const allPackagesByHabit = {
  'Alcoholism': [
    {
      title: 'Alcohol Impact Screening Package',
      testCount: 35,
      testsIncluded: 'Amylase Enzymatic, Serum, Kidney Function Test Advance, Lipase, Serum, Lipid Profile',
      price: 1099,
      originalPrice: 2617,
      offer: 58,
    },
    {
      title: 'Comprehensive Liver Function Test',
      testCount: 12,
      testsIncluded: 'Bilirubin, SGPT, SGOT, Albumin, Globulin, Total Protein, Alkaline Phosphatase',
      price: 899,
      originalPrice: 1800,
      offer: 50,
    },
    {
      title: 'Advanced Pancreas & Kidney Health',
      testCount: 22,
      testsIncluded: 'Amylase, Lipase, Serum Creatinine, BUN, Uric Acid, Electrolytes Panel',
      price: 1250,
      originalPrice: 2800,
      offer: 55,
    },
  ],
  'Junk Food': [
    {
      title: 'Diabetes & Cholesterol Screening',
      testCount: 28,
      testsIncluded: 'HbA1c, Fasting Blood Sugar, Lipid Profile, Average Blood Glucose',
      price: 799,
      originalPrice: 1650,
      offer: 51,
    },
    {
      title: 'Fatty Liver & Digestive Health',
      testCount: 15,
      testsIncluded: 'Liver Function Test (LFT), GGT, Ultrasound (Abdomen), Stool Routine',
      price: 1400,
      originalPrice: 3000,
      offer: 53,
    },
    {
      title: 'Metabolic Syndrome Panel',
      testCount: 32,
      testsIncluded: 'Insulin Resistance, Uric Acid, Lipid Profile, Blood Pressure, Waist Circumference',
      price: 1800,
      originalPrice: 3800,
      offer: 52,
    },
  ],
  'Anger': [
    {
      title: 'Stress & Cortisol Level Test',
      testCount: 8,
      testsIncluded: 'Cortisol (Morning), DHEA-S, Testosterone, Prolactin, TSH, Free T3, Free T4',
      price: 1999,
      originalPrice: 4000,
      offer: 50,
    },
     {
      title: 'Cardiovascular Risk Assessment',
      testCount: 45,
      testsIncluded: 'High-Sensitivity CRP, Homocysteine, Lipid Profile, Apolipoprotein A1 & B',
      price: 2499,
      originalPrice: 5500,
      offer: 54,
    },
    {
      title: 'Complete Hormone Balance Check',
      testCount: 18,
      testsIncluded: 'Estradiol, Progesterone, LH, FSH, Complete Thyroid Panel, Testosterone',
      price: 2100,
      originalPrice: 4200,
      offer: 50,
    },
  ],
  'Eating Poorly': [
    {
      title: 'Essential Vitamin & Mineral Profile',
      testCount: 25,
      testsIncluded: 'Vitamin D, Vitamin B12, Folate, Iron, Ferritin, Magnesium, Zinc',
      price: 1899,
      originalPrice: 4000,
      offer: 52,
    },
    {
      title: 'Basic Metabolic Panel (BMP)',
      testCount: 8,
      testsIncluded: 'Glucose, Calcium, Sodium, Potassium, CO2, Chloride, BUN, Creatinine',
      price: 599,
      originalPrice: 1200,
      offer: 50,
    },
    {
      title: 'Complete Nutrition Assessment',
      testCount: 40,
      testsIncluded: 'Complete Blood Count, Lipid Profile, Vitamin Panel, Iron Profile, Protein',
      price: 2999,
      originalPrice: 6500,
      offer: 54,
    },
  ],
  'Heartburn': [
    {
      title: 'Gastrointestinal Health Panel',
      testCount: 10,
      testsIncluded: 'H. Pylori Antibody, Pepsinogen I & II, Gastrin, Amylase, Lipase',
      price: 2200,
      originalPrice: 4500,
      offer: 51,
    },
    {
      title: 'Acidity & Reflux Screening',
      testCount: 5,
      testsIncluded: 'Complete Blood Count, ESR, H. Pylori IgA, Serum Gastrin',
      price: 1500,
      originalPrice: 3200,
      offer: 53,
    },
    {
      title: 'Stool Occult Blood Test',
      testCount: 1,
      testsIncluded: 'Fecal Occult Blood Test (FOBT) to check for hidden blood in stool',
      price: 400,
      originalPrice: 800,
      offer: 50,
    },
  ],
  'Low Iron Diet': [
    {
      title: 'Complete Anemia Profile',
      testCount: 15,
      testsIncluded: 'Iron, TIBC, Ferritin, Vitamin B12, Folate, CBC, Reticulocyte Count',
      price: 1750,
      originalPrice: 3600,
      offer: 51,
    },
    {
      title: 'Iron Deficiency Panel',
      testCount: 3,
      testsIncluded: 'Serum Iron, Total Iron Binding Capacity (TIBC), % Saturation, Ferritin',
      price: 950,
      originalPrice: 2000,
      offer: 52,
    },
    {
      title: 'Hemoglobin & RBC Count',
      testCount: 5,
      testsIncluded: 'Hemoglobin, Hematocrit, RBC Count, MCV, MCH, MCHC',
      price: 350,
      originalPrice: 700,
      offer: 50,
    },
  ],
  'Medicine Overuse': [
    {
      title: 'Comprehensive Kidney Function Test',
      testCount: 10,
      testsIncluded: 'Creatinine, BUN, Uric Acid, Calcium, Phosphorus, Electrolytes, Albumin',
      price: 750,
      originalPrice: 1600,
      offer: 53,
    },
    {
      title: 'Extended Liver Function Panel (LFT)',
      testCount: 11,
      testsIncluded: 'Bilirubin (Total, Direct, Indirect), SGPT, SGOT, GGT, Alkaline Phosphatase',
      price: 699,
      originalPrice: 1500,
      offer: 53,
    },
    {
      title: 'Drug Toxicity Screening Panel',
      testCount: 20,
      testsIncluded: 'Complete Blood Count, LFT, KFT, Urine Routine & Microscopy',
      price: 1999,
      originalPrice: 4200,
      offer: 52,
    },
  ],
  'Poor Nutrition': [
    {
      title: 'Advanced Nutritional Deficiency Test',
      testCount: 30,
      testsIncluded: 'Vitamins (A, B, C, D, E, K), Minerals, Iron Profile, Protein Levels',
      price: 3500,
      originalPrice: 7500,
      offer: 53,
    },
    {
      title: 'Protein & Albumin Level Check',
      testCount: 4,
      testsIncluded: 'Total Protein, Albumin, Globulin, A/G Ratio',
      price: 450,
      originalPrice: 900,
      offer: 50,
    },
    {
      title: 'Essential Fatty Acids Profile',
      testCount: 6,
      testsIncluded: 'Omega-3 Index, Omega-6, AA:EPA Ratio, Trans Fat Index',
      price: 2500,
      originalPrice: 5000,
      offer: 50,
    },
  ],
 
};


const LifestyleSection = () => {
  // State to track the active habit, initialized to 'Alcoholism'
  const [activeHabit, setActiveHabit] = useState('Alcoholism');

  // Get the correct package list based on the active habit. Fallback to empty array if no data exists.
  const currentPackages = allPackagesByHabit[activeHabit] || [];

  return (
    <section className="lifestyle-section">
      <h2>Tests by Unhealthy Lifestyle Habits</h2>
      <p className="lifestyle-subtitle">Choose from Health Checkups based on habits & lifestyle conditions</p>

      <div className="habits-grid">
        {habitsData.map((habit) => (
          <div
            key={habit.name}
            // The 'active' class is now determined by the state, and an onClick handler is added
            className={`habit-card ${activeHabit === habit.name ? 'active' : ''}`}
            onClick={() => setActiveHabit(habit.name)}
          >
            <div className="habit-icon">{habit.icon}</div>
            <span>{habit.name}</span>
          </div>
        ))}
        <div className="habit-card view-all-habits">
          <div className="habit-icon">➔</div>
          <span>View all Habits</span>
        </div>
      </div>

      <div className="packages-grid">
        {/* Check if there are packages to display for the selected habit */}
        {currentPackages.length > 0 ? (
          // Now mapping over the dynamic 'currentPackages' array
          currentPackages.map((pkg, index) => (
            <div className="lifestyle-package-card" key={`${activeHabit}-${index}`}>
              <div className="card-top">
                <h4>{pkg.title}</h4>
                <div className="test-count-box">
                  <span>{pkg.testCount}</span>
                  Tests
                </div>
              </div>
              <div className="card-body">
                <p><strong>Tests Included:</strong> {pkg.testsIncluded} ...<strong>more</strong></p>
                <a href="#" className="know-more-link">+ Know More</a>
              </div>
              <div className="lifestyle-card-footer">
                <div className="lifestyle-price-section">
                  <div>
                    <span className="current-price">₹{pkg.price}</span>
                    <span className="strikethrough-price">₹{pkg.originalPrice}</span>
                  </div>
                  <span className="offer-text">
                    <span className="arrow-up">↑</span> UPTO {pkg.offer}% OFF
                  </span>
                </div>
                <button className="book-now-lifestyle">Book Now ➔</button>
              </div>
            </div>
          ))
        ) : (
          // Display a message if no packages are available for the selected habit
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
            No specific packages are currently available for "{activeHabit}". Please check again later.
          </p>
        )}
      </div>

      <div className="view-all-tests-container">
        {/* The button text is now dynamic based on the active habit state */}
        <button className="view-all-tests-button">View all Tests for {activeHabit}</button>
      </div>
    </section>
  );
};
// --- Data for "Why Trust Healthians" Section ---
const trustFeaturesData = [
  { icon: '📦', title: 'Free & On-time Sample Collection' },
  { icon: '🧑‍⚕️', title: 'Free Report Counselling & Diet Consultation' },
  { icon: '✅', title: 'Fast & Accurate Test Reports' },
  { icon: '📍', title: 'Presence in 250+ Cities Across India' },
  { icon: '🚚', title: 'Largest Fleet of 2500+ Phlebotomists' },
  { icon: '😊', title: '35 Lakh+ Satisfied Customers' },
];

// --- Data for "How to book" Section ---
const bookingStepsData = [
  {
    number: '01',
    icon: '📅',
    title: 'Booking Made Easy',
    description: 'Select a test, time slot & request a health-advisor call back.'
  },
  {
    number: '02',
    icon: '🧭',
    title: 'Guidance',
    description: 'Healthians health-advisors provide guidance on testing process.'
  },
  {
    number: '03',
    icon: '🩸',
    title: 'Sample Collection',
    description: 'We offer on-time, painless sample collection right at your doorstep. We ensure utmost secrecy by our team of supreme phlebotomists.'
  },
  {
    number: '04',
    icon: '🔬',
    title: 'Processing & Verify',
    description: 'Post sample collection, the barcoded sample is transported, processed, & reports are meticulously vetted by our expert team.'
  },
  {
    number: '05',
    icon: '📄',
    title: 'Report and Support',
    description: 'Expect a smart, simple & smart report, enriched with historical trends and our health score system. Our proactive approach to health reporting comes with complimentary consultations for report discussions.'
  },
];


const PreventiveCheckupSection = () => {
  return (
    <div className="preventive-page-wrapper">
      
      {/* --- Section 1: Preventive Checkup with Body Diagram --- */}
      <section className="preventive-checkup-section">
        <div className="preventive-text-content">
          <p className="preventive-subtitle">Don't wait for symptoms</p>
          <h1 className="preventive-title">Uncover early with Advanced Preventive Checkup</h1>
        </div>
        <div className="preventive-image-container">
          <img 
            src="https://helma.healthians.com/stationery/mailer-assets/683437ac4283a.svg" 
            alt="Preventive Health Checkup Diagram" 
          />
        </div>
      </section>
      
      {/* --- Section 2: Why Trust Healthians --- */}
      <section className="trust-section">
        <h2 className="section-title">Why millions of Indians trust Healthians</h2>
        <div className="trust-features-grid">
          {trustFeaturesData.map((feature, index) => (
            <div className="trust-feature-item" key={index}>
              <div className="trust-icon-placeholder">{feature.icon}</div>
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Full Body Checkup Description --- */}
      <section className="description-section">
        <h2 className="section-title">Full Body Checkup in Gurgaon</h2>
        <p>Including a smart full body checkup in your regular health routine can make a big difference. It helps catch health problems early, prevents major issues like organ damage, and reduces the risk of high hospital bills or long treatments. Here are some key reasons why getting regular health checkups matters:</p>
        <p><strong>1. Early Detection Helps.</strong> A lot of health problems, especially the lifestyle related diseases like diabetes, don't show any apparent symptoms in their early stages. A full body checkup helps identify these silent health problems before they turn into bigger problems, so you can start proper treatment and take preventive measures as early as possible, improving the success rate and recovery process.</p>
        <a href="#" className="read-more-link">Read More</a>
      </section>

      {/* --- Section 4: Healthians Lab Info Card --- */}
      <section className="lab-info-card">
        <div className="lab-info-image-side">
            
            <div className="lab-image-placeholder"><img src="https://helma.healthians.com/stationery/mailer-assets/67d8139e5e7ad.jpg" alt="image" /></div>
            <img src="https://cdn1.healthians.com/img/healthians-logo.svg" alt="Healthians Logo" className="lab-logo" />
        </div>
        <div className="lab-info-text-side">
            <h3>Healthians Lab | Full Body Checkup in Gurgaon</h3>
            <p>A unit of Expedient Healthcare Marketing Pvt. Ltd.</p>
            <div className="info-line">
                <span className="info-icon">📍</span>
                <span><strong>Lab Address:</strong> Plot No. 162, Udyog Vihar Phase IV, Sector 18, Gurgaon (Haryana), Pin: 122016</span>
            </div>
            <div className="info-line">
                <span className="info-icon">📞</span>
                <span><strong>Call:</strong> +91-9999888005</span>
            </div>
        </div>
      </section>

      {/* --- Section 5: How to Book --- */}
      <section className="how-to-book-section">
        <h2 className="section-title">How to book Full Body Checkup Package in Gurgaon</h2>
        <div className="booking-steps-container">
            {bookingStepsData.map((step, index) => (
                <div className="booking-step-item" key={step.number}>
                    <span className="step-number-bg">{step.number}</span>
                    <div className="step-icon-placeholder">{step.icon}</div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

// Data for the package cards - as requested, using an array of objects
const packageData = [
  {
    title: 'Be Healthy Comprehensive Package (With HbA1c)',
    testCount: 94,
    testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CRP (C Reactive Protein) Quantitative, Serum, Blood Glucose Fasting ...',
    fasting: '12 hrs fasting Required',
    recommendedFor: 'Recommended for everyone',
    reportTime: 'Reports within 24 hrs',
    offerPercentage: 70,
    originalPrice: 2499,
    discountedPrice: 5950, // Note: In the image, the strikethrough price is lower. I've corrected it logically.
    useCode: 'HL_benedthyhbA1c'
  },
  {
    title: 'Healthians Summer Wellness Package - Male',
    testCount: 100,
    testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CEA Carcino Embryonic Antigen Serum, ESR Automated ...',
    fasting: '12 hrs fasting Required',
    recommendedFor: 'Recommended for male',
    reportTime: 'Reports within 72 hrs',
    offerPercentage: 68,
    originalPrice: 2999,
    discountedPrice: 8740,
    useCode: 'HL_male_wellness'
  },
  {
    title: 'Healthians Summer Wellness Package - Female',
    testCount: 103,
    testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CEA Carcino Embryonic Antigen Serum, CPK Total ...',
    fasting: '12 hrs fasting Required',
    recommendedFor: 'Recommended for female',
    reportTime: 'Reports within 72 hrs',
    offerPercentage: 66,
    originalPrice: 2999,
    discountedPrice: 8740,
    useCode: 'HL_female_wellness'
  },
  {
    title: 'Executive Health Checkup',
    testCount: 120,
    testsIncluded: 'CBC, LFT, KFT, Lipid Profile, Thyroid, Vitamin D, Vitamin B12, Iron Studies, Urine Routine...',
    fasting: '10-12 hrs fasting Required',
    recommendedFor: 'Recommended for working professionals',
    reportTime: 'Reports within 24 hrs',
    offerPercentage: 60,
    originalPrice: 4999,
    discountedPrice: 1999,
    useCode: 'HL_exec2025'
  },
  {
    title: 'Senior Citizen Wellness Package',
    testCount: 110,
    testsIncluded: 'CBC, ESR, Blood Sugar, Kidney Function, Liver Function, Lipid, Calcium, PSA/CA-125...',
    fasting: '12 hrs fasting Required',
    recommendedFor: 'Recommended for age 60+',
    reportTime: 'Reports within 48 hrs',
    offerPercentage: 65,
    originalPrice: 3999,
    discountedPrice: 1399,
    useCode: 'HL_senior2025'
  },
  {
    title: 'Basic Health Checkup',
    testCount: 60,
    testsIncluded: 'CBC, Blood Sugar, Lipid Profile, Urine Routine, Thyroid...',
    fasting: '8 hrs fasting Required',
    recommendedFor: 'Recommended for everyone',
    reportTime: 'Reports within 24 hrs',
    offerPercentage: 50,
    originalPrice: 1499,
    discountedPrice: 749,
    useCode: 'HL_basic2025'
  }
];


const HealthPackagePage = () => {
  return (
    <div className="health-page-container">
      <header className="page-header">
        <div className="header-card">
          {/* Leave space for the man's image */}
          <div className="image-placeholder"></div>
          <div className="header-content">
            <p className="people-booked-tag">✔️ 14K+ people booked this test</p>
            <h1 style={{ fontWeight: 'bold' }}>Make India Healthy Package 2025</h1>
            <div className="header-details">
              <div className="detail-box">
                <span className="count">7</span>
                <span className="label">Tests Included</span>
              </div>
              <div className="detail-box price-box">
                <span className="price">₹99</span>
                <span className="old-price">₹499</span>
                <span className="label">Exclusive Price</span>
              </div>
            </div>
            <button className="book-now-header">Book Now ➔</button>
          </div>
        </div>

        <div className="booking-form-card">
          <h3>Need help with booking a test?</h3>
          <p>Please share your details, and our health expert will assist you.</p>
          <form>
            <input type="text" placeholder="Enter Your Mobile No. *" />
            <input type="text" placeholder="Enter Your Name *" />
            <input type="text" placeholder="Gurgaon" />
            <div className="consent-checkbox">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">You hereby affirm & authorise healthians to process the personal data as per the T&C</label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </header>

      <main className="main-content">
        <div className="breadcrumb-lang">
          <p className="breadcrumb">Home {'>'} Full Body Checkup in Gurgaon</p>
          <button className="lang-button">🇮🇳 हिन्दी में पढ़ें</button>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>Full Body Checkup in Gurgaon Starting @ ₹299</h2>
        <p className="page-description">
          A full body checkup is a comprehensive health test that helps keep track of your health, offers early detection, and may prevent any serious health complications caused by underlying disease. People often ignore early signs of diseases and only visit a doctor when it becomes serious. While we understand due to our fast-paced lifestyle and health needs, everyone has different health needs. That is why healthians offers a variety of full body check... <a href="#">Read More</a>
        </p>

        <h3 style={{ fontWeight: 'bold' }}>Most Booked Full Body Checkup packages in Gurgaon</h3>

        <nav className="filter-tabs">
          <div className="tabs">
            <button className="tab-button active">Full Body Checkup</button>
            <button className="tab-button">Fever</button>
            <button className="tab-button">STD</button>
            <button className="tab-button">Vitamins</button>
            <button className="tab-button">Diabetes</button>
            <button className="tab-button">Heart</button>
            <button className="tab-button">Thyroid</button>
            <button className="tab-button">Kidney</button>
            <button className="tab-button">Allergy</button>
          </div>
          <a href="#" className="view-all-link">View all Risks</a>
        </nav>

        <div style={{margin: '30px 0'}}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              900: { slidesPerView: 2 },
              0: { slidesPerView: 1 }
            }}
            style={{paddingBottom: 40}}
          >
            {packageData.map((pkg, index) => (
              <SwiperSlide key={index}>
                <div className="package-card">
                  <div className="card-top">
                    <h4 style={{ fontWeight: 'bold' }}>{pkg.title}</h4>
                    <div className="test-count-circle">
                      <span>{pkg.testCount}</span>
                      Tests
                    </div>
                  </div>
                  <div className="card-body">
                    <p><strong>Tests Included:</strong> {pkg.testsIncluded}</p>
                    <a href="#" className="know-more-link">+ Know More</a>
                    <div className="offer-badge">
                        <div className="offer-tag">GROUP OFFERS</div>
                        <span>Upto {pkg.offerPercentage}% off</span>
                    </div>
                  </div>
                  <div className="card-info-footer">
                      <p>✓ {pkg.fasting}</p>
                      <p>✓ {pkg.recommendedFor}</p>
                      <p>✓ {pkg.reportTime}</p>
                  </div>
                  <div className="card-booking-footer">
                    <div className="price-section">
                      <span className="current-price">₹{pkg.originalPrice}</span>
                      <span className="strikethrough-price">₹{pkg.discountedPrice}</span>
                      <span className="use-code">USE CODE<br/><strong>{pkg.useCode}</strong></span>
                    </div>
                    <button className="book-now-card">Book Now ➔</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
      <LifestyleSection /> 
      <PreventiveCheckupSection /> 
      <FaqAndBlogsSection />
    </div>
  );
};

export default HealthPackagePage;