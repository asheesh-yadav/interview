
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RiskArea.css';
import HealthBlog from '../components/healthblog';

// --- Data for the component ---
const baseIconUrl = "https://helma.healthians.com/stationery/ca-assets/risk-habits-v1/";

const riskAreasData = [
    { title: "Liver", icon: "Liver.png", description: "The liver is a vital organ that aids in digestion, detoxification, and metabolism. It is important to keep it healthy." },
    { title: "Kidney", icon: "Kidney.png", description: "The kidneys filter waste from the blood and regulate blood pressure. Regular check-ups are essential." },
    { title: "Vitamins", icon: "Vitamins.png", description: "Vitamins are crucial for various bodily functions. A deficiency can lead to several health issues." },
    { title: "Diabetes", icon: "Diabetes.png", description: "A chronic disease that affects how your body turns food into energy. Monitoring blood sugar is key." },
    { title: "Heart", icon: "Heart.png", description: "The heart pumps blood throughout the body. A healthy lifestyle is vital for cardiovascular health." },
    { title: "Thyroid", icon: "Thyroid.png", description: "The thyroid gland produces hormones that regulate metabolism. Imbalances can cause various symptoms." },
    { title: "Lever", icon: "Diabetes.png", description: "Iron is essential for producing red blood cells. A deficiency can cause anemia and fatigue." },
    { title: "Anemia", icon: "Thyroid.png", description: "A condition where you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues." },
    { title: "Liver", icon: "Liver.png", description: "The liver is a vital organ that aids in digestion, detoxification, and metabolism. It is important to keep it healthy." },
    { title: "Alcohol", icon: "Bone.png", description: "Excessive alcohol consumption can lead to liver damage, heart problems, and other health issues." },
    { title: "Bone", icon: "Bone.png", description: "Bones provide structure and support for the body. Calcium and Vitamin D are crucial for bone health." },
    { title: "Fever", icon: "Fever.png", description: "A fever is a temporary increase in your body temperature, often due to an illness or infection." },
    { title: "Allergy", icon: "Obesity.png", description: "An allergy is an immune system response to a foreign substance that's not typically harmful to your body." },
    { title: "Fatigue", icon: "Hypertension.png", description: "Fatigue is a feeling of constant tiredness or weakness and can be physical, mental or a combination of both." },
    { title: "Infection", icon: "Smoking.png", description: "An infection is the invasion and multiplication of microorganisms such as bacteria, viruses, and parasites." },
    { title: "Hypertension", icon: "Hypertension.png", description: "Hypertension, or high blood pressure, is a serious medical condition that can increase the risk of heart disease." },
    { title: "Obesity", icon: "Obesity.png", description: "Obesity is a complex disease involving an excessive amount of body fat. It increases the risk of other diseases." },
    { title: "Smoking", icon: "Smoking.png", description: "Smoking is a major cause of preventable death and disease, affecting nearly every organ of the body." },
    { title: "Arthritis", icon: "Hypertension.png", description: "Arthritis is the swelling and tenderness of one or more of your joints, causing pain and stiffness." },
    { title: "Toxic", icon: "Smoking.png", description: "Exposure to toxic elements can harm your health. Regular screening can help in early detection." },
    { title: "Cyst", icon: "Hepatitis.png", description: "A cyst is a sac-like pocket of membranous tissue that contains fluid, air, or other substances." },
    { title: "Hepatitis", icon: "Hepatitis.png", description: "Hepatitis is an inflammation of the liver, most commonly caused by a viral infection." },
    { title: "Stomach", icon: "Heart.png", description: "The stomach is a muscular organ that digests food. Maintaining a healthy diet is key for stomach health." },
    { title: "Infertility", icon: "Liver.png", description: "Infertility is the inability to get pregnant after one year of unprotected sex. It can affect both men and women." }
];



const RiskAreas = () => {
    return (
        <div className="risk-areas-page-wrapper">
            <div className="breadcrumb-nav">
                <a href="/" className="breadcrumb-home">Home</a>
                <span className="breadcrumb-separator">&nbsp;&gt;&nbsp;</span>
                <span className="breadcrumb-current">Common Risk Areas</span>
            </div>
            <div className="ra-container">
                {/* --- Common Risk Areas Section --- */}
                <div className="ra-section-title">
                    <span className="ra-title-bordered ocean-green-heading">Common Risk Areas in Gurgaon</span>
                </div>
                <div className="risk-cards-grid">
                    {riskAreasData.map((area, index) => (
                        <div key={index} className="risk-card">
                            <img src={`${baseIconUrl}${area.icon}`} alt={`${area.title} icon`} className="risk-card-icon" />
                            <h3 style={{ fontWeight: 600 }}>{area.title}</h3>
                            <p>{area.description}</p>
                            <a href="#" className="read-more-btn">
                                Read More <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
                <HealthBlog />
            </div>
        </div>
    );
};

export default RiskAreas;