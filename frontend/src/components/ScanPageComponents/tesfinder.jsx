// TestFinder.jsx
import React from 'react';
import './TestFinder.css';

// --- Data for the component ---
const cities = [
    "Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad",
    "Mumbai", "Pune", "Thane", "Navi Mumbai", "Kalyan",
    "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad"
];

const testCategories = [
    {
        category: "Digital X-ray",
        tests: [
            "X-ray Chest PA View", "X-ray KUB", "X-ray Left Knee AP/LAT View", "X-ray Right Knee AP/LAT View",
            "X-ray Left Shoulder View", "X-ray Right Shoulder View", "X-ray Left Foot AP/LAT View", "X-ray Right Foot AP/LAT View"
        ],
    },
    {
        category: "Ultrasound",
        tests: [
            "Ultrasound Whole Abdomen", "TVS", "USG KUB", "USG Breast Both", "USG Pelvis", "USG Pregnancy",
            "USG Level 2", "USG Scrotum", "USG Neck", "Follicular Study (Single Visit)"
        ],
    },
    { category: "CT Scan", tests: ["HRCT Chest", "CECT Chest", "CECT Abdomen", "CT Brain", "CT PNS", "CT KUB"] },
    { category: "MRI / MRA", tests: ["MRI Brain", "MRI Spine", "MRI Knee", "MRI Pelvis", "MRI Shoulder", "MRA Brain"] },
    { category: "ECG Test", tests: ["ECG"] },
    { category: "Echo Test", tests: ["2D Echocardiography"] },
    { category: "TMT Test", tests: ["TMT"] },
    { category: "PET Scan", tests: ["FDG-PET Scan", "Whole Body PET Scan"] },
    { category: "EEG Test", tests: ["EEG"] },
    { category: "DEXA Scan", tests: ["DEXA Scan / BMD"] },
    { category: "PFT Tests", tests: ["PFT"] },
    { category: "Mammography", tests: ["Digital Mammography Both"] },
    { category: "EMG NCV Test", tests: ["EMG NCV"] },
];

// Location Pin Icon SVG Component
const LocationIcon = () => (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);


const TestFinder = () => {
    return (
        <section className="test-finder-container">
            <div className="tf-container">
                {/* --- Scan Centres Section --- */}
                <div className="tf-section-title">
                    <span className="tf-title-bordered">Scan Centres Near Me</span>
                </div>
                <div className="scan-centres-grid">
                    {cities.map(city => (
                        <a href="#" key={city} className="city-btn">
                            <LocationIcon />
                            {city}
                        </a>
                    ))}
                </div>

                {/* --- Know Your Tests Section --- */}
                <div className="tf-section-title">
                    <span className="tf-title-bordered">Know cost & book your tests</span>
                </div>
                <div className="test-category-list">
                    {testCategories.map(category => (
                        <div key={category.category} className="test-card">
                            <h3 className="test-card-header">{category.category}</h3>
                            <div className="test-links-grid">
                                {category.tests.map(test => (
                                    <a href="#" key={test} className="test-link">
                                        {test}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestFinder;