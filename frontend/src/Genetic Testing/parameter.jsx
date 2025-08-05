import React, { useState } from 'react';

const HealthiansGeneticTesting = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const testData = [
    {
      id: 'diet',
      name: 'Diet',
      count: 35,
      content: {
        sections: [
          {
            title: 'Nutritional profile',
            items: 'Vitamin A, Vitamin B6, Vitamin B9, Vitamin B12, Vitamin C, Vitamin D, Vitamin E, Vitamin K, Selenium, Folic Acid, Calcium, Magnesium, Iron, Omega 3, Carbohydrate, Saturated fats, Mono saturated fats, Poly unsaturated fats'
          },
          {
            title: 'Food Sensitivity',
            items: 'Lactose intolerance, Caffeine sensitivity, Salt sensitivity, Gluten intolerance'
          },
          {
            title: 'Eating behaviour',
            items: 'Eating behaviour trait, Sweet perception, Bitter taste perception, Satiety, Snacking behaviour'
          },
          {
            title: 'Weight management',
            items: 'Obesity predisposition, Response to dieting, Adiponectin levels, Waist circumference response, Weight regain risk, Cellulite disposition, Fat storage, Insulin sensitivity'
          }
        ]
      }
    },
    {
      id: 'cardiac',
      name: 'Cardiac and Diabetes health risk',
      count: 9,
      content: {
        sections: [
          {
            title: 'Cardiovascular Risk Factors',
            items: 'Blood pressure regulation, Cholesterol metabolism, Triglyceride levels, Heart disease predisposition'
          },
          {
            title: 'Diabetes Risk Assessment',
            items: 'Type 2 diabetes risk, Insulin resistance, Blood sugar regulation, Metabolic syndrome risk'
          },
          {
            title: 'Inflammatory Markers',
            items: 'CRP levels, Inflammatory response, Oxidative stress markers'
          }
        ]
      }
    },
    {
      id: 'nutrition',
      name: 'Nutrition',
      count: 18,
      content: {
        sections: [
          {
            title: 'Micronutrient Absorption',
            items: 'Vitamin D metabolism, B12 absorption, Iron utilization, Calcium absorption'
          },
          {
            title: 'Macronutrient Processing',
            items: 'Carbohydrate metabolism, Fat processing, Protein synthesis, Energy production'
          },
          {
            title: 'Dietary Recommendations',
            items: 'Optimal diet type, Food timing, Portion control, Supplementation needs'
          }
        ]
      }
    },
    {
      id: 'exercise',
      name: 'Exercise, Sports and Fitness review',
      count: 34,
      content: {
        sections: [
          {
            title: 'Exercise Response',
            items: 'Aerobic capacity, Strength training response, Recovery time, Injury risk'
          },
          {
            title: 'Athletic Performance',
            items: 'Power output, Endurance capacity, Muscle fiber type, VO2 max potential'
          },
          {
            title: 'Sports Optimization',
            items: 'Training recommendations, Performance enhancement, Recovery protocols'
          }
        ]
      }
    },
    {
      id: 'weight',
      name: 'Weight management',
      count: 8,
      content: {
        sections: [
          {
            title: 'Weight Loss Response',
            items: 'Diet effectiveness, Exercise response, Metabolic rate, Fat burning capacity'
          },
          {
            title: 'Weight Maintenance',
            items: 'Weight regain risk, Appetite control, Satiety signals, Cravings management'
          }
        ]
      }
    },
    {
      id: 'kidney',
      name: 'Kidney',
      count: 7,
      content: {
        sections: [
          {
            title: 'Kidney Function',
            items: 'Filtration capacity, Sodium processing, Blood pressure regulation, Mineral balance'
          },
          {
            title: 'Kidney Health Risk',
            items: 'Stone formation risk, Chronic kidney disease predisposition, Electrolyte balance'
          }
        ]
      }
    },
    {
      id: 'stress',
      name: 'Stress and Sleep',
      count: 11,
      content: {
        sections: [
          {
            title: 'Stress Response',
            items: 'Cortisol regulation, Stress tolerance, Anxiety predisposition, Mood regulation'
          },
          {
            title: 'Sleep Patterns',
            items: 'Sleep quality, Circadian rhythm, Melatonin production, Sleep disorders risk'
          }
        ]
      }
    },
    {
      id: 'skin',
      name: 'Skin',
      count: 20,
      content: {
        sections: [
          {
            title: 'Skin Health',
            items: 'Collagen production, UV sensitivity, Aging markers, Antioxidant capacity'
          },
          {
            title: 'Skin Conditions',
            items: 'Acne predisposition, Eczema risk, Psoriasis susceptibility, Wound healing'
          }
        ]
      }
    },
    {
      id: 'autoimmune',
      name: 'Autoimmune disease',
      count: 14,
      content: {
        sections: [
          {
            title: 'Immune System Function',
            items: 'Immune response, Inflammation regulation, Autoimmune markers, Allergy predisposition'
          },
          {
            title: 'Disease Risk',
            items: 'Rheumatoid arthritis risk, Thyroid disorders, Celiac disease, Multiple sclerosis risk'
          }
        ]
      }
    },
    {
      id: 'health',
      name: 'Health and Immunity',
      count: 25,
      content: {
        sections: [
          {
            title: 'Immune Response',
            items: 'Infection resistance, Vaccine response, Immune system strength, Pathogen defense'
          },
          {
            title: 'Overall Health',
            items: 'Longevity markers, Disease resistance, Recovery capacity, Wellness optimization'
          }
        ]
      }
    },
    {
      id: 'eye',
      name: 'Eye',
      count: 7,
      content: {
        sections: [
          {
            title: 'Vision Health',
            items: 'Macular degeneration risk, Glaucoma predisposition, Cataract formation, Night vision'
          },
          {
            title: 'Eye Protection',
            items: 'UV damage sensitivity, Antioxidant needs, Eye strain susceptibility'
          }
        ]
      }
    },
    {
      id: 'gender',
      name: 'Gender specific traits',
      count: 5,
      content: {
        sections: [
          {
            title: 'Hormonal Factors',
            items: 'Hormone metabolism, Reproductive health, Gender-specific risks, Hormonal balance'
          },
          {
            title: 'Health Considerations',
            items: 'Gender-specific nutrition needs, Exercise recommendations, Health screening priorities'
          }
        ]
      }
    }
  ];

  const benefits = [
    {
      icon: '🏠',
      title: 'At home blood sample collection'
    },
    {
      icon: '👩‍⚕️',
      title: 'Genetic counseling'
    },
    {
      icon: '📋',
      title: 'Personalized risk assessment reports through Healthians mobile app'
    },
    {
      icon: '🔒',
      title: 'Privacy and security'
    },
    {
      icon: '📄',
      title: 'PDF report summary'
    },
    {
      icon: '💡',
      title: 'Free insights on health and wellness for life'
    }
  ];

  const openOverlay = (testId) => {
    setActiveOverlay(testId);
  };

  const closeOverlay = () => {
    setActiveOverlay(null);
  };

  const overlayData = testData.find(test => test.id === activeOverlay);

  return (
    <div style={styles.container}>
      <div style={styles.mainCard}>
        <div style={styles.leftSection}>
          <div style={styles.header}>
            <h2 style={styles.headerTitle}>Parameters included in the test</h2>
          </div>
          
          <div style={styles.testList}>
            {testData.map((test) => (
              <div key={test.id} style={styles.testItem}>
                <div style={styles.testContent}>
                  <span style={styles.arrow}>▶</span>
                  <span style={styles.testName}>{test.name}</span>
                </div>
                <div style={styles.testRight}>
                  <span style={styles.testCount}>{test.count} tests</span>
                  <button 
                    style={styles.plusButton}
                    onClick={() => openOverlay(test.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.testTitle}>
            <h3 style={styles.comprehensiveTitle}>Healthians Comprehensive DNA test</h3>
          </div>

          <div style={styles.pricing}>
            <div style={styles.priceSection}>
              <span style={styles.mrpLabel}>MRP</span>
              <span style={styles.originalPrice}>₹25,999</span>
            </div>
            <div style={styles.offerSection}>
              <span style={styles.offerLabel}>Introductory Offer</span>
              <span style={styles.offerPrice}>₹8,999</span>
            </div>
            <button style={styles.bookButton}>Book Now</button>
          </div>
        </div>

        <div style={styles.rightSection}>
          <h2 style={styles.rightTitle}>What you get with Healthians Genetic Testing</h2>
          
          <div style={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} style={styles.benefitItem}>
                <span style={styles.benefitIcon}>{benefit.icon}</span>
                <span style={styles.benefitText}>{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <h3 style={styles.bottomTitle}>Who should get tested?</h3>
        <ul style={styles.conditionsList}>
          <li>High blood pressure</li>
          <li>High blood sugar</li>
          <li>Out of range/high levels of cholesterol, LDL and triglycerides</li>
          <li>Recovered from COVID - 19</li>
          <li>Family history of heart disease</li>
          <li>Family history of diabetes</li>
          <li>Sedentary lifestyle</li>
          <li>Over weight or under weight (abnormal BMI)</li>
        </ul>

        <h3 style={styles.bottomTitle}>How this test will help you</h3>
        <ul style={styles.benefitsList2}>
          <li>It tells you your risk of developing heart disease, cancer or diabetes in future</li>
          <li>It will help you arrive at an optimal diet</li>
          <li>It will tell you the exercises you should do and the lifestyle changes you should make for an efficient weight management</li>
          <li>It will help you determine your risk profile of passing on a genetic condition to your child</li>
        </ul>
      </div>

      {/* Overlay */}
      {activeOverlay && (
        <div style={styles.overlay} onClick={closeOverlay}>
          <div style={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.overlayHeader}>
              <h3 style={styles.overlayTitle}>{overlayData.name}</h3>
              <span style={styles.overlayCount}>({overlayData.count} tests)</span>
              <button style={styles.closeButton} onClick={closeOverlay}>
                Close
              </button>
            </div>
            
            <div style={styles.overlayBody}>
              {overlayData.content.sections.map((section, index) => (
                <div key={index} style={styles.overlaySection}>
                  <h4 style={styles.sectionTitle}>{section.title}</h4>
                  <p style={styles.sectionContent}>{section.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1DB5A6 0%, #0EA5A5 100%)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  mainCard: {
    display: 'flex',
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  },
  leftSection: {
    flex: '1',
    padding: '30px',
    background: 'linear-gradient(135deg, #1DB5A6 0%, #0EA5A5 100%)',
    color: 'white'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  headerTitle: {
    background: 'white',
    color: '#1DB5A6',
    padding: '15px 30px',
    borderRadius: '25px',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    display: 'inline-block'
  },
  testList: {
    marginBottom: '30px'
  },
  testItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
  },
  testContent: {
    display: 'flex',
    alignItems: 'center',
    flex: '1'
  },
  arrow: {
    marginRight: '10px',
    fontSize: '12px'
  },
  testName: {
    fontSize: '16px',
    fontWeight: '500'
  },
  testRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  testCount: {
    background: 'rgba(255,255,255,0.2)',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '14px',
    whiteSpace: 'nowrap'
  },
  plusButton: {
    background: '#FF9500',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  testTitle: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  comprehensiveTitle: {
    fontSize: '18px',
    fontStyle: 'italic',
    fontWeight: 'normal',
    margin: '0'
  },
  pricing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    padding: '15px'
  },
  priceSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mrpLabel: {
    background: '#4A4A4A',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '10px',
    fontSize: '12px',
    marginBottom: '5px'
  },
  originalPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  },
  offerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  offerLabel: {
    fontSize: '14px',
    marginBottom: '5px'
  },
  offerPrice: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  bookButton: {
    background: 'white',
    color: '#1DB5A6',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  rightSection: {
    flex: '1',
    padding: '30px',
    background: 'white',
    color: '#333'
  },
  rightTitle: {
    color: '#1DB5A6',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
    lineHeight: '1.3'
  },
  benefitsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px'
  },
  benefitIcon: {
    fontSize: '24px',
    flexShrink: 0,
    marginTop: '2px'
  },
  benefitText: {
    fontSize: '16px',
    lineHeight: '1.4',
    color: '#333'
  },
  bottomSection: {
    background: '#FFA726',
    padding: '30px',
    borderRadius: '20px',
    color: '#333'
  },
  bottomTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333'
  },
  conditionsList: {
    listStyle: 'none',
    marginBottom: '30px'
  },
  benefitsList2: {
    listStyle: 'none'
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease-out'
  },
  overlayContent: {
    background: 'white',
    borderRadius: '10px',
    maxWidth: '700px',
    width: '90%',
    marginTop: '50px',
    animation: 'slideDown 0.3s ease-out',
    maxHeight: '80vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  overlayHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid #eee',
    background: '#1DB5A6',
    color: 'white'
  },
  overlayTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0'
  },
  overlayCount: {
    fontSize: '16px',
    opacity: '0.9'
  },
  closeButton: {
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  overlayBody: {
    padding: '20px',
    overflowY: 'auto',
    flex: '1'
  },
  overlaySection: {
    marginBottom: '20px',
    padding: '15px',
    background: '#f8f9ff',
    borderRadius: '8px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#1DB5A6',
    marginBottom: '10px',
    margin: '0 0 10px 0'
  },
  sectionContent: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
    margin: '0'
  }
};

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideDown {
    from { 
      opacity: 0;
      transform: translateY(-30px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);

export default HealthiansGeneticTesting;