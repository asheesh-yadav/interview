import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import './finalsection.css';

const testimonials = [
    {
        name: 'Pravita',
        location: 'Pune',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Kaushalya',
        location: 'Bareilly',
        img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Kamlesh',
        location: 'Allahabad',
        img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Avni',
        location: 'Vadodara',
        img: 'https://helma.healthians.com/stationery/mailer-assets/61bb03c3388d9.jpg'
    },
    {
        name: 'Ravi',
        location: 'Delhi',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Priya',
        location: 'Mumbai',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Amit',
        location: 'Bangalore',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Neha',
        location: 'Chennai',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const blogPosts = [
    {
        title: 'Rejuvenating Kidney Health For Overall Fitness and Well-being',
        img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'What is Genetic Testing and its importance',
        img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Role of Family history in genetic disease predispositions',
        img: 'https://images.unsplash.com/photo-1624555130581-32012134d104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Understanding the Basics of a Healthy Diet',
        img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '6 Weird Side Effects of Dropping Body Weight Instantly',
        img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'The Impact of Stress on Your Health',
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sleep Quality and Its Effect on Health',
        img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Mental Health Awareness in Modern Times',
        img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const whyHealthiansData = [
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 
        text: "India's largest network of genetic test providers.",
        highlight: "India's largest"
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png', 
        text: 'Stringent quality standards for accuracy in reporting.',
        highlight: 'Stringent quality'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', 
        text: 'Genomic data generated on the world\'s most standardised platform.',
        highlight: 'standardised platform'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', 
        text: 'Reports based on well-established scientific research.',
        highlight: 'scientific research'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png', 
        text: 'Complimentary genetic counselling.',
        highlight: 'Complimentary genetic counselling'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png', 
        text: '12+ Fully Owned State-of-the-art Labs.',
        highlight: '12+'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 
        text: '25 lac+ Satisfied Customers Till Date.',
        highlight: '25 lac+'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png', 
        text: 'Presence in 250+ cities.',
        highlight: '250+ cities'
    },
    { 
        icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', 
        text: 'Comprehensive reports for actionable health insights.',
        highlight: 'Comprehensive reports'
    },
];

const faqData = [
    {
        question: 'What is Healthians and what services do you offer?',
        answer: 'Healthians is India\'s leading health test at home service offering a wide range of health tests across 250+ cities. We provide services like blood tests, full body checkups, and specialized genetic testing, all from the comfort of your home.'
    },
    {
        question: 'How do I book a health test?',
        answer: 'You can book a test through our website or mobile app in a few simple steps. Just select the test you need, choose a convenient time slot, and our certified phlebotomist will visit you for sample collection.'
    },
    {
        question: 'Are the labs certified?',
        answer: 'Yes, all our labs are NABL certified and follow stringent quality control measures to ensure the accuracy and reliability of your test results. We operate a network of fully owned, state-of-the-art labs.'
    },
    {
        question: 'When will I receive my reports?',
        answer: 'Most reports are delivered online via email and on our app within 24-48 hours of sample collection. The turnaround time may vary for specialized tests.'
    },
    {
        question: 'What is genetic testing and why is it important?',
        answer: 'Genetic testing analyzes your DNA to identify genetic variations that may affect your health. It helps predict disease risks, guide personalized treatment plans, and provide insights for preventive healthcare measures.'
    },
    {
        question: 'How accurate are genetic test results?',
        answer: 'Our genetic tests are highly accurate and use advanced technology. However, genetic testing provides risk assessments, not definitive predictions. Results should be interpreted with the help of our genetic counselors.'
    },
    {
        question: 'Is my genetic data secure and private?',
        answer: 'Absolutely. We follow strict privacy protocols and comply with all data protection regulations. Your genetic information is encrypted, stored securely, and never shared with third parties without your explicit consent.'
    },
    {
        question: 'Do you provide genetic counseling?',
        answer: 'Yes, we provide complimentary genetic counseling with our experts who help you understand your test results, explain what they mean for your health, and guide you on next steps for preventive care.'
    },
    {
        question: 'Can I cancel or reschedule my appointment?',
        answer: 'Yes, you can cancel or reschedule your appointment up to 2 hours before the scheduled time through our app or by calling our customer support. We offer free rescheduling for your convenience.'
    }
];


// --- Sub-Components ---

const Testimonials = () => (
    <div className="testimonials-section">
        <h2 className="section-title">What our customers are saying</h2>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-testimonials' }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 25 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="testimonials-swiper"
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="testimonial-slide">
                    <div className="testimonial-card">
                        <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                        <div className="testimonial-overlay">
                            <div className="play-button">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.25" />
                                    <polygon points="25,20 45,30 25,40" fill="#fff" />
                                </svg>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.location}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination-testimonials"></div>
    </div>
);

const Blog = () => (
    <div className="blog-section">
        <h2 className="section-title">Blog</h2>
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-blog',
              prevEl: '.swiper-button-prev-blog',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-blog' }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="blog-swiper"
            breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
        >
            {blogPosts.map((post, index) => (
                <SwiperSlide key={index} className="blog-slide">
                    <div className="blog-card">
                        <img src={post.img} alt={post.title} className="blog-img" />
                        <div className="blog-content">
                            <p>{post.title}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination-blog"></div>
        <div className="swiper-button-prev-blog swiper-nav-btn"></div>
        <div className="swiper-button-next-blog swiper-nav-btn"></div>
    </div>
);

const WhyHealthians = () => (
    <div className="why-healthians-section">
        <h2 className="section-title-left">Why Healthians</h2>
        <div className="why-healthians-grid">
            {whyHealthiansData.map((item, index) => (
                <div key={index} className="why-healthians-item">
                    <img src={item.icon} alt="" className="why-healthians-icon" />
                    <p>
                        {item.text.split(item.highlight).map((part, i) => (
                            <span key={i}>
                                {part}
                                {i < item.text.split(item.highlight).length - 1 && (
                                    <span className="highlight-text">{item.highlight}</span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    </div>
);


const FAQItem = ({ faq, index, toggleFAQ }) => (
    <div className={`faq-item ${faq.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
        <div className="faq-question">
            {faq.question}
            <span className="faq-icon">{faq.open ? '-' : '+'}</span>
        </div>
        <div className="faq-answer">
            <p>{faq.answer}</p>
        </div>
    </div>
);

const FAQ = () => {
    const [faqs, setFaqs] = useState(
        faqData.map(item => ({ ...item, open: false }))
    );

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false; // This makes it an accordion
                }
                return faq;
            })
        );
    };

    return (
        <div className="faq-section">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="thin-footer">
        <p>© 2025 Healthians. All Rights Reserved. Crafted with care by a top developer.</p>
    </footer>
);


// --- Main Component ---

const HomePageSection = () => {
    return (
        <div className="healthians-page-container">
            <Testimonials />
            <div className="teal-background-section">
                <Blog />
            </div>
            <WhyHealthians />
            <FAQ />
            <Footer />
        </div>
    );
};

export default HomePageSection;
