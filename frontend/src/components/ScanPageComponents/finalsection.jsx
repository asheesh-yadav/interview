// InfoSection.jsx

import React, { useState } from 'react';
import './finalsection.css';

// --- Data for component sections ---
const bookingSteps = [
    { title: "Step 1", description: "Share your prescription & select a lab near you" },
    { title: "Step 2", description: "We will call you to confirm the appointment" },
    { title: "Step 3", description: "Lab details are shared with you via SMS" },
    { title: "Step 4", description: "Get a digital report delivered to your inbox" }
];

const whyHealthiansItems = [
    "21 Years of Experience in Diagnostics with Precision", "20 Lakhs Verified Customer Reviews", "Honest Pricing",
    "Experienced & Verified Phlebotomists", "250+ Diagnostic Centres Across 30+ Cities", "2 Labs - GURUGRAM | DELHI"
];

const faqsData = [
    { question: "What is an MRI scan?", answer: "An MRI (Magnetic Resonance Imaging) is a safe and painless test that uses a magnetic field and radio waves to create detailed images of the organs and tissues within your body." },
    { question: "Do I need to fast before my scan?", answer: "Fasting requirements vary depending on the type of scan. For most MRI and X-ray scans, no fasting is needed. For certain ultrasound or CT scans, you may be asked to fast for 4-6 hours. Please check the specific instructions for your test." },
    { question: "How will I receive my reports?", answer: "Your digital reports will be delivered directly to your registered email address and will also be available in your account on our app and website, typically within 24-48 hours of the scan." },
    { question: "Is online payment safe?", answer: "Yes, our payment gateway is fully secure and uses 128-bit SSL encryption to protect your financial details. All transactions are processed through a secure server." },
    { question: "Can I cancel or reschedule my appointment?", answer: "Yes, you can easily cancel or reschedule your appointment through our app or by calling our customer support helpline at least 4 hours prior to your scheduled time." }
];


const InfoSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="info-section-wrapper">
            {/* How to Book an Appointment */}
            <section className="info-section">
                <div className="info-container">
                    <div className="info-section-title">
                        <span className="info-title-bordered">How to book an appointment</span>
                    </div>
                    <ul className="booking-steps-list">
                        {bookingSteps.map((step, index) => (
                            <li key={index} className="booking-step">
                                <div className="booking-step-icon-wrapper">
                                    <img src="https://cdn1.healthians.com/img/radiology/booking-icon-1.svg" alt="" className="booking-step-icon" />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why Healthians Scans */}
            <section className="info-section">
                <div className="info-container">
                    <div className="info-section-title">
                        <span className="info-title-bordered">Why Healthians Scans</span>
                    </div>
                    <div className="why-healthians-grid">
                        {whyHealthiansItems.map((item, index) => (
                            <div key={index} className="why-item">
                                <img src="https://cdn2.healthians.com/img/radiology/img-1.png" alt="" className="why-item-img" />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="info-section">
                <div className="info-container">
                    <div className="info-section-title">
                        <span className="info-title-bordered">Frequently asked questions</span>
                    </div>
                    <div className="faq-list">
                        {faqsData.map((faq, index) => (
                            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    <span className="icon">+</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Footer Text Section */}
            <section className="info-section footer-text-section">
                <div className="info-container">
                    <div className="footer-text-content">
                        Disclaimer: The information mentioned here is for guidance purpose only. Please consult your doctor before booking any lab tests or scans. The final interpretation of the reports should be done by the treating doctor only.
                        <br /><br />
                        Healthians.com does not carry out any tests on its own and is only a technology platform to connect you with the nearest NABL accredited and ICMR approved diagnostic center for your booking. The responsibility of providing the service rests with the concerned diagnostic center.
                        
                        <h4>Our Radiology network is available in the following cities:</h4>
                        Delhi, Ghaziabad, Gurgaon, Faridabad, Noida, Mumbai, Pune, Bangalore, Chennai, Hyderabad, Ahmedabad, Lucknow, Jaipur, Chandigarh, Mohali, Panchkula, Jalandhar, Ludhiana, Amritsar, Kanpur, Agra, Varanasi, Allahabad, Dehradun, Meerut, Sonipat, Panipat.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoSection;