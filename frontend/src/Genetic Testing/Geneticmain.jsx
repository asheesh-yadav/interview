
import React from 'react';
import './genetic.css'; 
import BenefitsComponent from './benefits';
import HealthiansGeneticTesting from './parameter';
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Component for the hexagonal insight icons
const HexagonIcon = ({ bgColor, icon, title, subtitle }) => (
    <div className="hexagon-wrapper">
        <div className="hexagon-icon" style={{ backgroundColor: bgColor }}>
            <div className="hexagon-content">
                {icon}
                <p className="hexagon-title">{title}</p>
            </div>
        </div>
        <p className="hexagon-subtitle">{subtitle}</p>
    </div>
);

// The main header component
const Header = () => (
    <header className="header">
        <div className="container header-container">
            <img src="https://cdn2.healthians.com/img/healthians-logo.svg" alt="Healthians Logo" className="logo" />
            <p className="expert-callout">
                <span>Call our expert: </span>
                <span className="expert-number">9810057811</span>
            </p>
        </div>
    </header>
);

// The hero and insights section component
const HeroSection = () => {
    const insights = [
        { bgColor: '#F16334', icon: <img src="https://www.healthians.com/img/genetic/icons/diet.svg" alt="Diet" />, title: 'Diet', subtitle: '(14 tests)' },
        { bgColor: '#2757A4', icon: <img src="https://www.healthians.com/img/genetic/icons/weight-management.svg" alt="Weight Management" />, title: 'Weight Management', subtitle: '(8 tests)' },
        { bgColor: '#F16334', icon: <img src="https://www.healthians.com/img/genetic/icons/nutrition.svg" alt="Nutrition" />, title: 'Nutrition', subtitle: '(19 tests)' },
        { bgColor: '#2757A4', icon: <img src="https://www.healthians.com/img/genetic/icons/autoimmune-disease.svg" alt="Autoimmune Disease" />, title: 'Autoimmune Disease', subtitle: '(11 tests)' },
        { bgColor: '#F16334', icon: <img src="https://www.healthians.com/img/genetic/icons/eye.svg" alt="Eye" />, title: 'Eye', subtitle: '(7 tests)' },
        { bgColor: '#2757A4', icon: <img src="https://www.healthians.com/img/genetic/icons/skin.svg" alt="Skin" />, title: 'Skin', subtitle: '(20 tests)' },
        { bgColor: '#F16334', icon: <img src="https://www.healthians.com/img/genetic/icons/kidney.svg" alt="Kidney" />, title: 'Kidney', subtitle: '(10 tests)' },
        { bgColor: '#2757A4', icon: <img src="https://www.healthians.com/img/genetic/icons/stress-sleep.svg" alt="Stress & Sleep" />, title: 'Stress and Sleep', subtitle: '(10 tests)' },
        { bgColor: '#2757A4', icon: <img src="https://www.healthians.com/img/genetic/icons/fitness-immunity.svg" alt="Fitness & Immunity" />, title: 'Fitness & Immunity', subtitle: '(20 tests)' },
    ];

    return (
        <section className="hero-section">
            <div className="hero-content-wrapper">
                <div className="hero-text-container">
                    <h1 className="hero-title">
                        Uncover the secrets to good health hidden in your DNA.
                    </h1>
                    <ul className="hero-list">
                        <li><CheckIcon /> Comprehensive genetic testing</li>
                        <li><CheckIcon /> Genetic trait risk score evaluation</li>
                        <li><CheckIcon /> Complementary genetic counseling</li>
                        <li><CheckIcon /> Validated analytical results</li>
                    </ul>
                    <button className="book-now-button">
                        Book Now
                    </button>
                </div>
            </div>

            <div className="insights-section-wrapper">
                    <img src="https://www.healthians.com/img/genetic/dna.png" alt="Insights Banner" />
                
            </div>
        </section>
    );
};

// The "Meet Your Healthiest Self" section component
const MeetSelfSection = () => (
    <section className="meet-self-section">
        <div className="container meet-self-container">
            <h2 className="meet-self-subtitle">
                Meet Your Healthiest Self
            </h2>
            <h3 className="meet-self-title">
                With Healthians DNA test at Home
            </h3>
            <p className="meet-self-description">
                Optimize your health with the most comprehensive DNA test panel.
            </p>
        </div>
    </section>
);


// Main App component that ties everything together
export default function Genetic() {
    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <HeroSection />
                <MeetSelfSection />
                <BenefitsComponent />
                <HealthiansGeneticTesting />
                    
            </main>
        </div>
    );
}
