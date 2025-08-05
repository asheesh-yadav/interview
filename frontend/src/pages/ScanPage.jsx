import React, { useState, useRef, useEffect } from 'react';
import './ScanPage.css';
import HealthServices from '../components/ScanPageComponents/section1';
import TestFinder from '../components/ScanPageComponents/tesfinder';
import InfoSection from '../components/ScanPageComponents/finalsection';

// Data for the slides
const slidesData = [
    {
        title: "Advanced & Affordable MRI Testing",
        price: { original: "₹8,000", current: "₹2,000" },
        image: "https://i.postimg.cc/k4xY0JbT/mri-scan-image.jpg",
        alt: "MRI Scan",
        benefits: [
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=MRI", text: "State of the Art MRI Scanners" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🛡️", text: "100% covid safe" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=👨‍⚕️", text: "Highly experienced 130+ radiology specialists" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🏥", text: "State-of-the-art radiology labs across India" },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-cashback.png", className: 'tax-benefit' },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-tax-benefit.png", className: 'tax-benefit' }
        ]
    },
    {
        title: "Advanced & Affordable Digital X-Ray Screening",
        price: { original: "₹312", current: "₹200" },
        image: "https://i.postimg.cc/zXvjP7yT/x-ray-image.jpg",
        alt: "X-Ray Screening",
        benefits: [
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=☢️", text: "Up to 90% reduced radiation exposure" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🛡️", text: "100% covid safe" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=👨‍⚕️", text: "Highly experienced 130+ radiology specialists" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🏥", text: "State-of-the-art radiology labs across India" },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-cashback.png", className: 'tax-benefit' },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-tax-benefit.png", className: 'tax-benefit' }
        ]
    },
    {
        title: "High-Resolution & Safe CT Scans",
        price: { original: "₹6,000", current: "₹1,500" },
        image: "https://i.postimg.cc/J0vJ8h8H/ct-scan-image.jpg",
        alt: "CT Scan",
        benefits: [
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=CT", text: "Detailed 3D Imaging Technology" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🛡️", text: "100% covid safe" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=👨‍⚕️", text: "Highly experienced 130+ radiology specialists" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🏥", text: "State-of-the-art radiology labs across India" },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-cashback.png", className: 'tax-benefit' },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-tax-benefit.png", className: 'tax-benefit' }
        ]
    },
    {
        title: "Precise & Clear Ultrasound Imaging",
        price: { original: "₹1,500", current: "₹750" },
        image: "https://i.postimg.cc/y8B4XnJ3/ultrasound-image.jpg",
        alt: "Ultrasound",
        benefits: [
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=US", text: "Non-invasive & real-time results" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🛡️", text: "100% covid safe" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=👨‍⚕️", text: "Highly experienced 130+ radiology specialists" },
            { type: 'icon', src: "https://placehold.co/40x40/00a09d/FFF?text=🏥", text: "State-of-the-art radiology labs across India" },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-cashback.png", className: 'tax-benefit' },
            { type: 'image', src: "https://cdn.healthians.com/img/seo/100-tax-benefit.png", className: 'tax-benefit' }
        ]
    }
];

const ScanPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fileName, setFileName] = useState("No file chosen");
    const fileInputRef = useRef(null);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    // No inline styles, use className and ScanPage.css
    

    return (
        <div className="scanPageContainer">
        <section className="radiologyBannerSection">
            {/* Left Side: Slider */}
            <div className="sliderContainer">
                <div className="slidesWrapper">
                    {slidesData.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide${index === currentSlide ? ' slideActive' : ''}`}
                        >
                            <div className="slideContent">
                                <h1 className="slideContentH1">{slide.title}</h1>
                                <p className="price">
                                    <span className="priceOriginal">Starting @ {slide.price.original}</span>
                                    <span className="priceCurrent">{slide.price.current}</span>
                                </p>
                                <div className="benefitsGrid">
                                    {slide.benefits.map((benefit, i) => (
                                        <div key={i} className="benefitItem">
                                            <img
                                                src={benefit.src}
                                                alt="Benefit Icon"
                                                className={`benefitItemImg${benefit.className === 'tax-benefit' ? ' taxBenefit' : ''}`}
                                            />
                                            {benefit.text && <p className="benefitItemP">{benefit.text}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="slideImageContainer">
                                <div className="slideImageClipper">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="slideImageClipperImg"
                                    />
                                </div>
                                <img
                                    className="slideImageFrame"
                                    src="https://cdn1.healthians.com/img/radiology/slider-2.png"
                                    alt="Frame"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="sliderPagination">
                    {slidesData.map((_, index) => (
                        <div
                            key={index}
                            className={`dot${index === currentSlide ? ' dotActive' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="formContainer">
                <h2 className="formContainerH2">Get a call back</h2>
                <div>
                    <div className="inputGroup">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                            alt="user icon"
                            className="inputGroupImg"
                        />
                        <input
                            type="text"
                            placeholder="Enter Patient Name"
                            required
                            className="inputGroupInput"
                        />
                    </div>
                    <div className="inputGroup">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
                            alt="phone icon"
                            className="inputGroupImg"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your Mobile No."
                            required
                            className="inputGroupInput"
                        />
                    </div>
                    <div className="inputGroup">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/64/64113.png"
                            alt="location icon"
                            className="inputGroupImg"
                        />
                        <select
                            defaultValue="gurgaon"
                            className="inputGroupSelect"
                        >
                            <option value="gurgaon">Gurgaon</option>
                            <option value="delhi">Delhi</option>
                            <option value="noida">Noida</option>
                        </select>
                    </div>
                    <div className="uploadGroup">
                        <label className="fileName" htmlFor="prescription-upload">
                            {fileName}
                        </label>
                        <input
                            type="file"
                            id="prescription-upload"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="fileInput"
                        />
                        <button
                            type="button"
                            className="chooseFileBtn"
                            onClick={() => fileInputRef.current.click()}
                        >
                            Choose File
                        </button>
                    </div>
                    <div className="tncGroup">
                        <input
                            type="checkbox"
                            id="tnc"
                            defaultChecked
                            required
                            className="tncCheckbox"
                        />
                        <label htmlFor="tnc" className="tncLabel">
                            You hereby affirm & authorise Healthians to process the personal data as per the T&C.
                        </label>
                    </div>
                    <button
                        onClick={handleFormSubmit}
                        className="submitBtn"
                    >
                        Submit
                    </button>
                </div>
            </div>
            
        </section>
        <section className="healthServicesSection">
            <div className="container">
                <h2 className="sectionTitle">Health Scans & Imaging Tests</h2>
                <HealthServices />
            </div>
        </section>
        <section className="testFinderSection">
            <div className="container">
                <h2 className="sectionTitle">Find Your Test</h2>
                <TestFinder />
            </div>
        </section>
        <InfoSection />
        
        </div>
        
        
    );
};

export default ScanPage;