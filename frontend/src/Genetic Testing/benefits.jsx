import React from 'react';
import './benefits.css'; // Make sure to create and link this CSS file

// Card component for the "Benefits" section
const BenefitCard = ({ imgSrc, title, description }) => (
    <div className="benefit-card">
        <div className="card-icon-wrapper">
            <img src={imgSrc} alt={title} className="card-icon" />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
    </div>
);


// Main component
export default function BenefitsComponent() {
    const benefits = [
        {
            imgSrc: 'https://www.healthians.com/img/genetic/dna1.svg',
            title: 'Lose Weight, Get Fit & Eat Smarter',
            description: 'Find your optimal diet and training based on your genetic blueprint.'
        },
        {
            imgSrc: 'https://www.healthians.com/img/genetic/dna2.svg',
            title: 'Know Your Disease Risk Early',
            description: 'Take early action, detect your Genetic cancer and disease risks.'
        },
        {
            imgSrc: 'https://www.healthians.com/img/genetic/dna3.svg',
            title: 'Plan For Your Future Family',
            description: 'Uncover inherited conditions that Could affect your next generation.'
        }
    ];

    return (
        <div className="benefits-component-wrapper">

            {/* --- YouTube Video Section --- */}
            <section className="video-section">
                <div className="container">
                    {/* Responsive video container */}
                    <div className="video-responsive-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/_sgqJhLeXtc?si=SNu0-9bUXHVqahIW" // You can replace 'W-P_g_i7-1k' with your YouTube video ID
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- How It Works Section --- */}
            <section className="how-it-works-section">
                <div className="container">
                    <h1 className="how-it-works-heading">
                        How it works
                    </h1>
                    <img
                        src="https://www.healthians.com/img/genetic/svg_howitworks.svg"
                        alt="How it works steps"
                        className="how-it-works-image"
                    />
                </div>
            </section>

            {/* --- Benefits Section --- */}
            <section className="benefits-section">
                <div className="container">
                    <h2 className="benefits-title">How Can I Benefit from a DNA Test?</h2>
                    <div className="benefits-card-container">
                        {benefits.map((card, index) => (
                            <BenefitCard
                                key={index}
                                imgSrc={card.imgSrc}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}