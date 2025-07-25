import React from 'react';

const cities = [
  'Agra', 'Ahmadnagar', 'Ahmedabad', 'Aligarh', 'Allahabad', 'Alwar', 'Ambala', 'Amravati', 'Amritsar', 'Aurangabad', 'Ayodhya', 'Bahadurgarh', 'Barabanki', 'Bareilly', 'Belgium', 'Bengaluru', 'Bhiwani', 'Bhopal', 'Bhubaneswar', 'Bilaspur', 'Bulandshahar', 'Chandigarh', 'Chennai', 'Dehradun', 'Delhi', 'Faridabad', 'Firozabad', 'Gandhinagar', 'Ghaziabad', 'Gorakhpur', 'Greater Noida', 'Gurgaon', 'Guwahati', 'Gwalior', 'Hardwar', 'Hisar', 'Hoshiarpur', 'Hyderabad', 'Indore', 'Jabalpur', 'Jaipur', 'Jalandhar', 'Jamshedpur', 'Jhansi', 'Jodhpur', 'Kanpur', 'Karimnagar', 'Karnal', 'Kolkata', 'Kota', 'Kurukshetra', 'Lucknow', 'Ludhiana', 'Mathura', 'Meerut', 'Mehsana', 'Mohali', 'Moradabad', 'Mumbai', 'Muzaffarnagar', 'Mysuru', 'Nagpur', 'Nashik', 'Noida', 'Panchkula', 'Panipat', 'Patiala', 'Patna', 'Pune', 'Raipur', 'Rajkot', 'Ranchi', 'Rohtak', 'Roorkee', 'Saharanpur', 'Sonipat', 'Surat', 'Udaipur', 'Ujjain', 'Vadodara', 'Varanasi', 'Vijaywada', 'Visakhapatnam', 'Warangal', 'Yamuna Nagar'
];
const healthTests = [
  'Allergy Testing', 'Amylase Test', 'Anemia Test', 'Anti Hiv Test', 'Arthritis Test', 'Ca125 Test', 'CBC Test', 'Chikungunya Test', 'Cholesterol Test', 'Dengue Test', 'Diabetes Test', 'Fever Test', 'Full Body Checkup', 'HbA1c Test', 'HbsAg Test', 'Hepatitis B Test', 'HIV Test', 'Hormone Test', 'Immunity Test', 'Iron Studies Test', 'Kidney Function Test', 'Lipid Profile Test', 'Liver Function Test', 'Malaria Test', 'Pancreatitis Test', 'PCOS Test', 'Early Pregnancy Checkup', 'PSA Test', 'STD Test', 'Stool Test', 'Sugar Test', 'Thyroid Test', 'Typhoid Test', 'Uric Acid Test', 'Urine Test', 'Viral Marker Test', 'Vitamin B12 Test', 'Vitamin D Test', 'Vitamin Test'
];
const radiologyTests = [
  'PET Scan', 'MRI Scan', 'CT Scan', 'Ultrasound Scan', 'X-Ray Scan', 'ECG Test', 'Ecg Test', 'Echo Scan', 'Treadmill Test', 'PFT Tests', 'DEXA Scan', 'MRI Brain', 'MRI Lumbar Spine Plain', 'MRI Cervical Spine', 'MRI Right Knee', 'MRI Left Knee', 'Brain MRI With Contrast', 'MRI Right Shoulder', 'MRI Left Shoulder', 'MRI Lumbar Spine With Whole Spine Screening', 'MRI Pelvis Female', 'MRI Whole Spine', 'MRI Cervical Spine With Whole Spine Screening', 'MRI Pelvis With Contrast', 'MRI Pelvis Male', 'MRI Abdomen And Pelvis', 'CT Scan Axial', 'Brain Ct Scan', 'Ct Brain Plain', 'Ct Enterography', 'Hrct Chest Scan', 'Ct Abdomen Plain', 'Ct Chest Plain', 'Ct Abdomen Plain With Contrast', 'Ct KUB', 'Ct Coronary Angiogram', 'Ct Chest Plain With Contrast', 'Ct PNS Scan', 'Ct Whole Abdomen Plain', 'Ct Whole Abdomen Plain With Contrast', 'Ct Scan Neck', 'Hrct Temporal Bone', 'USG Abdomen', 'USG Full Abdomen', 'USG KUB', 'USG Abdomen And Pelvis', 'USG Pelvis', 'TSH Transvaginal Ultrasound', 'USG Lower Abdomen', 'USG Antral Follicle', 'MRI Scan', 'Folic Scanning', 'Pregnancy Viability Scan', 'Sononamography', 'HRCT Chest', 'USG Upper Abdomen', 'USG Breast', 'USG Scrotal Scan', 'USG Follicular Study', 'Xray Chest PA View', 'Xray Chest AP View', 'Xray Lumbar Spine Ap And Lateral View', 'Xray Cervical Spine Ap And Lateral View', 'Xray Abdomen AP View', 'Xray Lumbar Spine Ap And Lateral View', 'Xray Cervical Spine Ap And Lateral View', 'Xray Abdomen AP View', 'Xray Left Knee Ap View', 'Xray Lumbar Spine Ap And Lateral View', 'Xray Left Wrist Joint Ap View', 'Xray Left Knee Lateral View'
];
const risks = ['Fever', 'STD', 'Vitamins', 'Diabetes', 'Heart', 'Thyroid', 'Kidney', 'Allergy', 'Liver', 'Joints', 'Bone', 'Fatigue', 'Anxiety', 'Cancer', 'Anemia', 'Hypertension', 'Obesity', 'Hormones', 'Arthritis', 'Hepatitis', 'Immunity', 'Jaundice', 'Infections', 'Pregnancy', 'Infertility'];
const habits = ['Alcoholism', 'Anger', 'Eating Poorly', 'Heartburn', 'Junk Food', 'Low Iron Diet', 'Medicine Overuse', 'Poor Nutrition', 'Sleeplessness', 'Smoking', 'Stress', 'Zero Exercise'];
const importantLinks = [
  'About Us', 'Media', 'Career', 'Money Back Policy', 'Feedback/Complaints', 'Our Corporate Clients', 'Become Business Partner', 'Our Labs', 'Contact Us', 'Blog', 'Investors', 'Scan Lab', 'FAQ'
];
const socialIcons = [
  { icon: 'facebook', color: '#1877f3', url: '#' },
  { icon: 'twitter', color: '#1da1f2', url: '#' },
  { icon: 'linkedin', color: '#0077b5', url: '#' },
  { icon: 'instagram', color: '#e4405f', url: '#' },
  { icon: 'youtube', color: '#ff0000', url: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#fff', fontFamily: 'inherit', marginTop: 48 }}>
      {/* Subscribe Bar */}
      <div style={{ background: '#1ca1ad', padding: '60px 0 40px 0', textAlign: 'center', color: '#fff', position: 'relative' }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, margin: 0, letterSpacing: 0.5, fontFamily: 'inherit' }}>Subscribe For Healthy Updates</h2>
        {/* Underline with orange accent */}
        <div style={{ margin: '18px auto 36px auto', width: 260, height: 10, position: 'relative' }}>
          <div style={{ height: 1, background: '#b2e0e6', width: '100%', position: 'absolute', top: 5, left: 0 }}></div>
          <div style={{ height: 4, width: 40, background: '#fff', borderRadius: 2, position: 'absolute', top: 3, left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>
        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0 }}>
          <input type="email" placeholder="Enter your email ID" style={{ padding: '12px 36px', border: 'none', fontSize: 18, width: 520, maxWidth: '90%', outline: 'none', color: '#888', background: '#ffff', borderTopLeftRadius: 40, borderBottomLeftRadius: 40, borderTopRightRadius: 0, borderBottomRightRadius: 0, fontFamily: 'inherit', height: 44 }} />
          <button type="submit" style={{ background: '#f68b2c', color: '#fff', border: 'none', borderTopRightRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, padding: '12px 44px', fontWeight: 600, fontSize: 18, cursor: 'pointer', fontFamily: 'inherit', height: 44 }}>Submit</button>
        </form>
      </div>
      {/* Cities */}
      <div style={{ background: '#f8fafc', padding: '18px 0 0 0', textAlign: 'center', fontSize: 15, color: '#444', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 12px' }}>
          <div style={{ fontWeight: 600, color: '#222', marginBottom: 8, fontSize: 16 }}>OUR PRESENCE</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, lineHeight: 1.7 }}>
            {cities.map(city => <span key={city}>{city}</span>)}
          </div>
        </div>
      </div>
      {/* Popular Tests */}
      <div style={{ background: '#fff', padding: '18px 0 0 0', textAlign: 'center', fontSize: 15, color: '#444' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 12px' }}>
          <div style={{ fontWeight: 600, color: '#222', margin: '18px 0 8px 0', fontSize: 16 }}>MOST POPULAR HEALTH TESTS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, lineHeight: 1.7 }}>
            {healthTests.map(test => <span key={test}>{test}</span>)}
          </div>
          <div style={{ fontWeight: 600, color: '#222', margin: '18px 0 8px 0', fontSize: 16 }}>MOST POPULAR RADIOLOGY TESTS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, lineHeight: 1.7 }}>
            {radiologyTests.map(test => <span key={test}>{test}</span>)}
          </div>
        </div>
      </div>
      {/* Browse by Risk/Habits */}
      <div style={{ background: '#fff', padding: '18px 0 0 0', textAlign: 'center', fontSize: 15, color: '#444' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 12px' }}>
          <div style={{ fontWeight: 600, color: '#222', margin: '18px 0 8px 0', fontSize: 16 }}>BROWSE TEST BY RISKS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, lineHeight: 1.7 }}>
            {risks.map(risk => <span key={risk}>{risk}</span>)}
          </div>
          <div style={{ fontWeight: 600, color: '#222', margin: '18px 0 8px 0', fontSize: 16 }}>BROWSE TEST BY HABITS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, lineHeight: 1.7 }}>
            {habits.map(habit => <span key={habit}>{habit}</span>)}
          </div>
        </div>
      </div>
      {/* Main Footer Links */}
      <div style={{ background: '#fff', padding: '32px 0 0 0', borderTop: '1px solid #eee', marginTop: 32 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 12px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32 }}>
          {/* Logo and badge */}
          <div style={{ minWidth: 220, textAlign: 'left' }}>
            <img src="https://cdn1.healthians.com/img/healthians-logo.svg" alt="Healthians Logo" style={{ height: 38, marginBottom: 12 }} />
            <div style={{ marginTop: 12, marginBottom: 12 }}>
              <img src="https://cdn3.healthians.com/img/unit-no1.svg" alt="No.1 Diagnostics Service" style={{ height: 100 }} />
            </div>
          </div>
          {/* Important Links */}
          <div style={{ flex: 1, minWidth: 180, textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: '#222', marginBottom: 12, fontSize: 16 }}>IMPORTANT LINKS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {importantLinks.map(link => <a key={link} href="#" style={{ color: '#444', textDecoration: 'none', fontSize: 15 }}>{link}</a>)}
            </div>
          </div>
          {/* Social and App Links */}
          <div style={{ minWidth: 220, textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: '#222', marginBottom: 12, fontSize: 16 }}>FOLLOW US</div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
              {socialIcons.map(s => (
                <a key={s.icon} href={s.url} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: s.color, color: '#fff', fontSize: 18 }}>
                  <i className={`fa fa-${s.icon}`}></i>
                </a>
              ))}
            </div>
            <div style={{ fontWeight: 700, color: '#222', marginBottom: 8, fontSize: 16 }}>GET THE HEALTHIANS APP</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="#"><img src="https://cdn2.healthians.com/img/google_play.png" alt="Play Store" style={{ height: 40 }} /></a>
              <a href="#"><img src="https://cdn1.healthians.com/img/appstore.png" alt="App Store" style={{ height: 40 }} /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div style={{ textAlign: 'center', color: '#888', fontSize: 14, marginTop: 32, padding: '18px 0 8px 0', borderTop: '1px solid #eee' }}>
          2025 © Healthians.com | Terms & Conditions | Privacy Policy | Statutory Compliance | Programs & Policies
        </div>
      </div>
    </footer>
  );
}
