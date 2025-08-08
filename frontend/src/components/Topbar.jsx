import React, { useState } from 'react';
import { Home, ChevronDown, Search } from 'lucide-react';


// Topbar Component
function Topbar() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      {isMobile ? (
        <div className="flex justify-center items-center py-2 px-1 w-full">
          <div className="flex flex-row w-full max-w-xl border border-cyan-300 rounded-xl overflow-hidden bg-white" style={{margin: '0 auto'}}>
            <input
              type="text"
              placeholder="Find your Package/Test/Scans"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none bg-white"
              style={{ border: 'none', boxShadow: 'none', minWidth: 0 }}
            />
            <button className="px-4 flex items-center justify-center text-cyan-600 bg-white" style={{ border: 'none', boxShadow: 'none' }}>
              <Search size={20} />
            </button>
          </div>
        </div>
      ) : (
        <SecondaryNavbar />
      )}
      <style>{`
        @media (max-width: 900px) {
          .desktop-navbar-list {
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 700px) {
          .desktop-navbar-list {
            gap: 0.7rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .desktop-navbar-list::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

// Data for the navigation items. This makes the navbar easy to update.
const navItems = [
  { name: 'Home', icon: <Home size={20} />, href: '#home', isIcon: true },
  {
    name: 'Blood Test',
    href: '#blood-test',
    dropdown: [
      { name: 'Complete Blood Count (CBC)', href: '#cbc' },
      { name: 'Blood Sugar Test', href: '#blood-sugar' },
      { name: 'Lipid Profile', href: '#lipid' },
      { name: 'Kidney Function Test', href: '#kft' },
    ],
  },
  {
    name: 'X-rays & Scans',
    href: '#scans',
    dropdown: [
      { name: 'Chest X-ray', href: '#chest-xray' },
      { name: 'MRI Scan', href: '#mri' },
      { name: 'CT Scan', href: '#ct-scan' },
      { name: 'Ultrasound', href: '#ultrasound' },
    ],
  },
  { name: 'Genetic Testing', href: '/genetic' },
  {
    name: 'Doctor Consultation',
    href: '#consultation',
    dropdown: [
      { name: 'General Physician', href: '#gp' },
      { name: 'Cardiologist', href: '#cardio' },
      { name: 'Dermatologist', href: '#derma' },
    ],
  },
  {
    name: 'Supplements',
    href: '#supplements',
    dropdown: [
      { name: 'Vitamins', href: '#vitamins' },
      { name: 'Minerals', href: '#minerals' },
      { name: 'Protein', href: '#protein' },
    ],
  },
  {
    name: 'Health Tips',
    href: '#health-tips',
    dropdown: [
        { name: 'Diet & Nutrition', href: '#diet' },
        { name: 'Exercise & Fitness', href: '#fitness' },
        { name: 'Mental Wellness', href: '#wellness' },
    ]
  },
  { name: 'Offers', href: '/offers' },
];

// Add mega menu data for Blood Test
const bloodTestMegaMenu = {
  categories: [
    {
      name: 'Popular Packages',
      content: [
        { label: 'Healthians Comprehensive Fever Package', href: '/packages/fever' },
        { label: 'Healthians Prime Care Thyroid Plus Checkup Package', href: '/packages/thyroid-plus' },
        { label: 'Healthy India 2025 Full Body Checkup Extensive', href: '/packages/healthy-india-2025-extensive' },
        { label: 'Healthians Comprehensive Health Check Up Package - Male', href: '/packages/comprehensive-male' },
        { label: 'Healthians Life Maximiser Health Checkup Package - Female', href: '/packages/life-maximiser-female' },
        { label: 'Swasth Bharat Non Fasting Package', href: '/packages/swasth-bharat' },
        { label: 'Ayushman Package', href: '/packages/ayushman' },
        { label: 'Healthians Extended Fever Package', href: '/packages/extended-fever' },
        { label: 'Healthy India 2025 Full Body Checkup Lite', href: '/packages/healthy-india-2025-lite' },
        { label: 'Healthy India 2025 Full Body Checkup Prime', href: '/packages/healthy-india-2025-prime' },
        { label: 'Healthians Comprehensive Health Check Up Package - Female', href: '/packages/comprehensive-female' },
        { label: 'Healthians Diabetic Checkup', href: '/packages/diabetic' },
        { label: 'Healthians 100% Good Health Package', href: '/packages/good-health' },
        { label: 'Healthians Prime Care Diabetes Plus Checkup Package', href: '/packages/diabetes-plus' },
        { label: 'Healthy India 2025 Full Body Checkup Advance', href: '/packages/healthy-india-2025-advance' },
        { label: 'Healthians Prime Care Full Body Checkup', href: '/packages/full-body' },
        { label: 'Healthians Life Maximiser Health Checkup Package - Male', href: '/packages/life-maximiser-male' },
        { label: 'Early Pregnancy Checkup', href: '/packages/pregnancy' },
        { label: 'One Plus One - Healthians Prime Care Diabetic Checkup', href: '/packages/one-plus-one-diabetic' },
      ],
    },
    {
      name: 'Popular Tests',
      content: [
        { label: 'CBC Test', href: '/tests/cbc' },
        { label: 'LFT (Liver Function Test)', href: '/tests/lft' },
        { label: 'Blood Glucose Fasting', href: '/tests/blood-glucose-fasting' },
        { label: 'Complete Hemogram Test', href: '/tests/hemogram' },
        { label: 'Urine Test', href: '/tests/urine' },
        { label: 'HIV Test', href: '/tests/hiv' },
        { label: 'Anti HCV Test', href: '/tests/anti-hcv' },
        { label: 'PCOD Test', href: '/tests/pcod' },
        { label: 'Fever Test', href: '/tests/fever' },
        { label: 'Chikungunya Test', href: '/tests/chikungunya' },
        { label: 'HbA1c Test', href: '/tests/hba1c' },
        { label: 'Cholesterol Test', href: '/tests/cholesterol' },
        { label: 'Thyroid Test', href: '/tests/thyroid' },
        { label: 'Allergy Testing', href: '/tests/allergy' },
        { label: 'Uric Acid Test', href: '/tests/uric-acid' },
        { label: 'PSA Test', href: '/tests/psa' },
        { label: 'Hepatitis B Test', href: '/tests/hepatitis-b' },
        { label: 'STD Test', href: '/tests/std' },
        { label: 'Viral Marker Test', href: '/tests/viral-marker' },
        { label: 'Typhoid Test', href: '/tests/typhoid' },
        { label: 'Lipid Profile Test', href: '/tests/lipid-profile' },
        { label: 'Diabetes Test', href: '/tests/diabetes' },
        { label: 'Vitamin D Test', href: '/tests/vitamin-d' },
        { label: 'Anemia Test', href: '/tests/anemia' },
        { label: 'Ca125 Test', href: '/tests/ca125' },
        { label: 'Stool Test', href: '/tests/stool' },
        { label: 'Hormone Test', href: '/tests/hormone' },
        { label: 'Urine Routine & Microscopy', href: '/tests/urine-routine' },
        { label: 'Dengue Test', href: '/tests/dengue' },
        { label: 'Immunity Test', href: '/tests/immunity' },
        { label: 'KFT (Kidney Function Test)', href: '/tests/kft' },
        { label: 'Blood Sugar Test', href: '/tests/blood-sugar' },
        { label: 'Vitamin B12 Test', href: '/tests/vitamin-b12' },
        { label: 'Iron Studies Test', href: '/tests/iron-studies' },
        { label: 'HBsAg Test', href: '/tests/hbsag' },
        { label: 'Amylase Test', href: '/tests/amylase' },
        { label: 'Pancreatitis Test', href: '/tests/pancreatitis' },
        { label: 'Vitamin Test', href: '/tests/vitamin' },
        { label: 'Malaria Test', href: '/tests/malaria' },
        { label: 'Arthritis Test', href: '/tests/arthritis' },
      ],
    },
    {
      name: 'Tests by Unhealthy Habits',
      content: [
        { label: 'Alcoholism', href: '/habits/alcoholism' },
        { label: 'Junk Food', href: '/habits/junk-food' },
        { label: 'Sleeplessness', href: '/habits/sleeplessness' },
        { label: 'Anger', href: '/habits/anger' },
        { label: 'Low Iron Diet', href: '/habits/low-iron-diet' },
        { label: 'Smoking', href: '/habits/smoking' },
        { label: 'Eating Poorly', href: '/habits/eating-poorly' },
        { label: 'Medicine Overuse', href: '/habits/medicine-overuse' },
        { label: 'Stress', href: '/habits/stress' },
        { label: 'Heartburn', href: '/habits/heartburn' },
        { label: 'Poor Nutrition', href: '/habits/poor-nutrition' },
        { label: 'Zero Exercise', href: '/habits/zero-exercise' },
      ],
    },
    {
      name: 'Tests by Health Risks',
      content: [
        { label: 'Fever', href: '/risks/fever' },
        { label: 'Heart', href: '/risks/heart' },
        { label: 'Liver', href: '/risks/liver' },
        { label: 'Acidity', href: '/risks/acidity' },
        { label: 'Obesity', href: '/risks/obesity' },
        { label: 'Immunity', href: '/risks/immunity' },
        { label: 'Pregnancy', href: '/risks/pregnancy' },
        { label: 'STD', href: '/risks/std' },
        { label: 'Thyroid', href: '/risks/thyroid' },
        { label: 'Joints', href: '/risks/joints' },
        { label: 'Cancer', href: '/risks/cancer' },
        { label: 'Hormones', href: '/risks/hormones' },
        { label: 'Jaundice', href: '/risks/jaundice' },
        { label: 'Infertility', href: '/risks/infertility' },
        { label: 'Vitamins', href: '/risks/vitamins' },
        { label: 'Kidney', href: '/risks/kidney' },
        { label: 'Bone', href: '/risks/bone' },
        { label: 'Anaemia', href: '/risks/anaemia' },
        { label: 'Arthritis', href: '/risks/arthritis' },
        { label: 'Digestion', href: '/risks/digestion' },
        { label: 'Diabetes', href: '/risks/diabetes' },
        { label: 'Allergy', href: '/risks/allergy' },
        { label: 'Fatigue', href: '/risks/fatigue' },
        { label: 'Hypertension', href: '/risks/hypertension' },
        { label: 'Hepatitis', href: '/risks/hepatitis' },
        { label: 'Infections', href: '/risks/infections' },
      ],
    },
    {
      name: 'Govt. Panel Health Test',
      content: [
        { label: 'CGHS', href: '/govt/cghs' },
        { label: 'Delhi Police', href: '/govt/delhi-police' },
        { label: 'SSB', href: '/govt/ssb' },
        { label: 'DJB', href: '/govt/djb' },
        { label: 'Ministry Of Finance', href: '/govt/finance' },
        { label: 'Delhi Fire Service', href: '/govt/fire-service' },
        { label: 'Ministry Of Health And Family Welfare', href: '/govt/health-family' },
        { label: 'Delhi High Court', href: '/govt/high-court' },
        { label: 'Delhi Food And Supplies', href: '/govt/food-supplies' },
        { label: 'Delhi Irrigation And Flood Department', href: '/govt/irrigation-flood' },
        { label: 'Delhi Labour Department', href: '/govt/labour' },
        { label: 'ECHS', href: '/govt/echs' },
        { label: 'CRPF', href: '/govt/crpf' },
        { label: 'NSG', href: '/govt/nsg' },
        { label: 'Safdarjung Hospital', href: '/govt/safdarjung' },
        { label: 'Ministry Of Home Affairs', href: '/govt/home-affairs' },
        { label: 'BSES-Rajdhani', href: '/govt/bses-rajdhani' },
        { label: 'Delhi Home Guard And Civil', href: '/govt/home-guard-civil' },
        { label: 'Delhi PWD', href: '/govt/pwd' },
        { label: 'Delhi DM And SDM Office', href: '/govt/dm-sdm' },
        { label: 'Delhi Tourism Department', href: '/govt/tourism' },
        { label: 'IGL', href: '/govt/igl' },
        { label: 'DGEHS', href: '/govt/dgehs' },
        { label: 'CISF', href: '/govt/cisf' },
        { label: 'ITBP', href: '/govt/itbp' },
        { label: 'AIIMS Hospital', href: '/govt/aiims' },
        { label: 'Income Tax Department', href: '/govt/income-tax' },
        { label: 'Ministry Of Human Resource Development', href: '/govt/hrd' },
        { label: 'Delhi Law And Judicial/Courts', href: '/govt/law-judicial' },
        { label: 'Drug Control Department', href: '/govt/drug-control' },
        { label: 'Delhi Disaster Management Department', href: '/govt/disaster-management' },
        { label: 'Child And Women Department', href: '/govt/child-women' },
        { label: 'RCB', href: '/govt/rcb' },
        { label: 'NDMC', href: '/govt/ndmc' },
        { label: 'BSF', href: '/govt/bsf' },
        { label: 'DTC', href: '/govt/dtc' },
        { label: 'RML Hospital', href: '/govt/rml' },
        { label: 'GST Department', href: '/govt/gst' },
        { label: 'Ministry Of Rural Development', href: '/govt/rural-development' },
        { label: 'Delhi Education Department', href: '/govt/education' },
        { label: 'Delhi Excise Department', href: '/govt/excise' },
        { label: 'Delhi Social Welfare Department', href: '/govt/social-welfare' },
        { label: 'Delhi Health And Hospitals', href: '/govt/health-hospitals' },
        { label: 'Other Govt. Panel', href: '/govt/other' },
      ],
    },
  ],
};

// Example mega menu data for all dropdowns
const megaMenus = {
  'Blood Test': bloodTestMegaMenu,
  'X-rays & Scans': {
    categories: [
      {
        name: 'Digital X-ray',
        content: [
          { label: 'Abdominal X-Ray', href: '/scans/abdominal-xray' },
          { label: 'Pelvis X-Ray', href: '/scans/pelvis-xray' },
          { label: 'Cervical X-Ray', href: '/scans/cervical-xray' },
          { label: 'Chest X-Ray', href: '/scans/chest-xray' },
          { label: 'Knee X-Ray', href: '/scans/knee-xray' },
        ],
      },
      {
        name: 'Ultrasound',
        content: [
          { label: 'Abdominal Ultrasound', href: '/scans/abdominal-ultrasound' },
          { label: 'Liver Ultrasound', href: '/scans/liver-ultrasound' },
          { label: 'Doppler Scan', href: '/scans/doppler-scan' },
          { label: 'Breast Ultrasound', href: '/scans/breast-ultrasound' },
          { label: 'Pelvis Ultrasound', href: '/scans/pelvis-ultrasound' },
          { label: 'NT Scan', href: '/scans/nt-scan' },
          { label: 'Kidney Ultrasound', href: '/scans/kidney-ultrasound' },
          { label: 'Pregnancy Ultrasound', href: '/scans/pregnancy-ultrasound' },
          { label: 'TIFFA Scan', href: '/scans/tiffa-scan' },
          { label: 'Level 2 Ultrasound', href: '/scans/level2-ultrasound' },
          { label: 'Scrotal Ultrasound', href: '/scans/scrotal-ultrasound' },
          { label: 'TVS Ultrasound', href: '/scans/tvs-ultrasound' },
        ],
      },
      {
        name: 'CT Scan',
        content: [
          { label: 'Heart CT Scan', href: '/scans/heart-ct' },
          { label: 'Chest CT Scan', href: '/scans/chest-ct' },
          { label: 'CECT Scan', href: '/scans/cect' },
          { label: 'Sinus CT Scan', href: '/scans/sinus-ct' },
          { label: 'CT KUB Scan', href: '/scans/ct-kub' },
          { label: 'CT Coronary Angiography', href: '/scans/ct-coronary-angiography' },
          { label: 'Abdominal CT Scan', href: '/scans/abdominal-ct' },
          { label: 'CT PNS Scan', href: '/scans/ct-pns' },
          { label: 'HRCT Scan', href: '/scans/hrct' },
          { label: 'Brain CT Scan', href: '/scans/brain-ct' },
          { label: 'CBCT Scan', href: '/scans/cbct' },
        ],
      },
      {
        name: 'MRI Scan',
        content: [
          { label: 'Brain MRI Scan', href: '/scans/brain-mri' },
          { label: 'Ankle MRI Scan', href: '/scans/ankle-mri' },
          { label: 'MRI Angiogram', href: '/scans/mri-angiogram' },
          { label: 'MRI Lumbar Spine Scan', href: '/scans/mri-lumbar-spine' },
          { label: 'Shoulder MRI Scan', href: '/scans/shoulder-mri' },
          { label: 'MRI Cervical Spine', href: '/scans/mri-cervical-spine' },
          { label: 'Pelvis MRI Scan', href: '/scans/pelvis-mri' },
          { label: '3T MRI Scan', href: '/scans/3t-mri' },
          { label: 'MRI Dorsal Spine', href: '/scans/mri-dorsal-spine' },
          { label: 'MRI Knee Scan', href: '/scans/mri-knee' },
          { label: 'MRCP Scan', href: '/scans/mrcp' },
        ],
      },
      {
        name: 'ECG Test',
        content: [
          { label: 'Standard ECG', href: '/scans/ecg' },
        ],
      },
      {
        name: 'Echo Test',
        content: [
          { label: '2D Echo', href: '/scans/2d-echo' },
        ],
      },
      {
        name: 'TMT Test',
        content: [
          { label: 'Treadmill Test', href: '/scans/tmt' },
        ],
      },
      {
        name: 'PET Scan',
        content: [
          { label: 'Whole Body PET', href: '/scans/pet' },
        ],
      },
      {
        name: 'EEG Test',
        content: [
          { label: 'Standard EEG', href: '/scans/eeg' },
        ],
      },
      {
        name: 'DEXA Scan',
        content: [
          { label: 'Bone Density DEXA', href: '/scans/dexa' },
        ],
      },
    ]
  },
  'Doctor Consultation': {
    categories: [
      {
        name: 'Specialities',
        content: [
          { label: 'General Physician', href: '/consultation/general-physician' },
          { label: 'Gastroenterology', href: '/consultation/gastroenterology' },
          { label: 'Ent', href: '/consultation/ent' },
          { label: 'Homeopathy', href: '/consultation/homeopathy' },
          { label: 'Rheumatology', href: '/consultation/rheumatology' },
          { label: 'Gynaecology', href: '/consultation/gynaecology' },
          { label: 'Cardiology', href: '/consultation/cardiology' },
          { label: 'Endocrinology', href: '/consultation/endocrinology' },
          { label: 'Neurology', href: '/consultation/neurology' },
          { label: 'Physiotherapy', href: '/consultation/physiotherapy' },
          { label: 'Dermatology', href: '/consultation/dermatology' },
          { label: 'Sexology', href: '/consultation/sexology' },
          { label: 'Ayurveda', href: '/consultation/ayurveda' },
          { label: 'Ophthalmology', href: '/consultation/ophthalmology' },
          { label: 'Pulmonology', href: '/consultation/pulmonology' },
          { label: 'Diabetology', href: '/consultation/diabetology' },
          { label: 'Psychiatry', href: '/consultation/psychiatry' },
          { label: 'Paediatrician', href: '/consultation/paediatrician' },
          { label: 'Orthopedy', href: '/consultation/orthopedy' },
          { label: 'Infertility', href: '/consultation/infertility' },
        ],
        promo: {
          title: 'Get personalized 7-day diet plan from an expert dietitian @ ₹299 only!',
          points: [
            'With over 50+ expert Dietitians',
            'Meal plan that fits your lifestyle',
            'Get personalized diet plan',
            'Plan tailored to your health goals',
          ],
          button: {
            label: 'Book an Appointment',
            href: '/consultation/diet-plan',
          },
        },
      },
      {
        name: 'Symptoms',
        content: [
          { label: 'Fever', href: '/symptoms/fever' },
          { label: 'Sore Throat', href: '/symptoms/sore-throat' },
          { label: 'Abdominal Pain', href: '/symptoms/abdominal-pain' },
          { label: 'Erectile Dysfunction', href: '/symptoms/erectile-dysfunction' },
          { label: 'Ear Pain', href: '/symptoms/ear-pain' },
          { label: 'Painful Intercourse', href: '/symptoms/painful-intercourse' },
          { label: 'Purpura', href: '/symptoms/purpura' },
          { label: 'Fainting', href: '/symptoms/fainting' },
          { label: 'Bloating', href: '/symptoms/bloating' },
          { label: 'Dizziness', href: '/symptoms/dizziness' },
          { label: 'Shortness Of Breath', href: '/symptoms/shortness-of-breath' },
          { label: 'Vaginal Discharge', href: '/symptoms/vaginal-discharge' },
          { label: 'Chest Pain', href: '/symptoms/chest-pain' },
          { label: 'Infertility', href: '/symptoms/infertility' },
          { label: 'Itching', href: '/symptoms/itching' },
          { label: 'Lack Of Sexual Desire', href: '/symptoms/lack-of-sexual-desire' },
          { label: 'Hearing Loss', href: '/symptoms/hearing-loss' },
          { label: 'Blister', href: '/symptoms/blister' },
          { label: 'Rash', href: '/symptoms/rash' },
          { label: 'Swelling', href: '/symptoms/swelling' },
          { label: 'Blood In Stool', href: '/symptoms/blood-in-stool' },
          { label: 'Weight Loss', href: '/symptoms/weight-loss' },
          { label: 'Gas', href: '/symptoms/gas' },
          { label: 'Vaginal Infections', href: '/symptoms/vaginal-infections' },
          { label: 'Cough & Cold', href: '/symptoms/cough-cold' },
          { label: 'Irregular Periods', href: '/symptoms/irregular-periods' },
          { label: 'Abrasion', href: '/symptoms/abrasion' },
          { label: 'Premature Ejaculation', href: '/symptoms/premature-ejaculation' },
          { label: 'Nasal Discharge', href: '/symptoms/nasal-discharge' },
          { label: 'Edema', href: '/symptoms/edema' },
          { label: 'Skin Lump', href: '/symptoms/skin-lump' },
          { label: 'Diarrhea', href: '/symptoms/diarrhea' },
          { label: 'Flatulence', href: '/symptoms/flatulence' },
          { label: 'Lightheadedness', href: '/symptoms/lightheadedness' },
          { label: 'Pelvic Pain', href: '/symptoms/pelvic-pain' },
          { label: 'Constipation', href: '/symptoms/constipation' },
          { label: 'Headache', href: '/symptoms/headache' },
          { label: 'Anasarca', href: '/symptoms/anasarca' },
          { label: 'Sexually Transmitted Disease', href: '/symptoms/std' },
          { label: 'Urticaria', href: '/symptoms/urticaria' },
          { label: 'Laceration', href: '/symptoms/laceration' },
          { label: 'Fatigue', href: '/symptoms/fatigue' },
          { label: 'Vomiting', href: '/symptoms/vomiting' },
          { label: 'Heartburn', href: '/symptoms/heartburn' },
          { label: 'Rapid Pulse Rate', href: '/symptoms/rapid-pulse-rate' },
          { label: 'Vaginal Bleeding', href: '/symptoms/vaginal-bleeding' },
        ],
      },
    ]
  },
  'Supplements': {
    categories: [
      {
        name: '',
        content: [
          { label: 'Diabetes Care Kit', href: '/supplements/diabetes-care-kit' },
          { label: 'Weight Management Kit', href: '/supplements/weight-management-kit' },
          { label: 'Thyroid Care Kit', href: '/supplements/thyroid-care-kit' },
          { label: 'Heart Care Kit', href: '/supplements/heart-care-kit' },
          { label: 'Liver Care Kit', href: '/supplements/liver-care-kit' },
          { label: 'Nutraceutical Kit', href: '/supplements/nutraceutical-kit' },
          { label: 'Diabeat-Ease', href: '/supplements/diabeat-ease' },
          { label: 'Calci-Build', href: '/supplements/calci-build' },
          { label: 'Digest-Plus', href: '/supplements/digest-plus' },
          { label: 'Hair-Power', href: '/supplements/hair-power' },
          { label: 'Heart-Up', href: '/supplements/heart-up' },
          { label: 'Immuno-Plus', href: '/supplements/immuno-plus' },
          { label: 'Iron-Power', href: '/supplements/iron-power' },
          { label: 'Brain-Power', href: '/supplements/brain-power' },
          { label: 'Confi-Boost', href: '/supplements/confi-boost' },
          { label: 'LIV-UP', href: '/supplements/liv-up' },
          { label: 'Nutri-Boost', href: '/supplements/nutri-boost' },
          { label: 'Piles-Relief', href: '/supplements/piles-relief' },
          { label: 'Fem-Up', href: '/supplements/fem-up' },
          { label: 'Thyro-Fix', href: '/supplements/thyro-fix' },
          { label: 'Vari-Cosy', href: '/supplements/vari-cosy' },
          { label: 'Apple Cider Vinegar', href: '/supplements/apple-cider-vinegar' },
          { label: 'Vitamin B12', href: '/supplements/vitamin-b12' },
          { label: 'Vitamin D3', href: '/supplements/vitamin-d3' },
          { label: 'Gold Year Plus', href: '/supplements/gold-year-plus' },
          { label: 'Joint-Plus', href: '/supplements/joint-plus' },
          { label: 'Tone-Up', href: '/supplements/tone-up' },
          { label: 'Curcumin Plus Granules', href: '/supplements/curcumin-plus-granules' },
          { label: 'Grape Plus Vinegar', href: '/supplements/grape-plus-vinegar' },
          { label: 'Arjuna Plus Granules', href: '/supplements/arjuna-plus-granules' },
          { label: 'Diabeat-Ease Granules', href: '/supplements/diabeat-ease-granules' },
          { label: 'Herbal Fusion Tea', href: '/supplements/herbal-fusion-tea' },
          { label: 'Jamun Plus Vinegar', href: '/supplements/jamun-plus-vinegar' },
          { label: 'Triphala Plus Granules', href: '/supplements/triphala-plus-granules' },
          { label: 'Sugarcane Plus Vinegar', href: '/supplements/sugarcane-plus-vinegar' },
          { label: 'Tone Up Granules', href: '/supplements/tone-up-granules' },
          { label: 'Keep Fit Granules', href: '/supplements/keep-fit-granules' },
        ],
      },
    ]
  },
  'Health Tips': {
    categories: [
      { name: 'Healthians Special', content: [{ label: 'Healthians Special', href: '/health-tips/healthians-special' }] },
      { name: 'Disease Management', content: [{ label: 'Disease Management', href: '/health-tips/disease-management' }] },
      { name: 'Lifestyle & Wellness', content: [{ label: 'Lifestyle & Wellness', href: '/health-tips/lifestyle-wellness' }] },
      { name: 'Men Health', content: [{ label: 'Men Health', href: '/health-tips/men-health' }] },
      { name: 'Woman Health', content: [{ label: 'Woman Health', href: '/health-tips/woman-health' }] },
      { name: 'Kids Health', content: [{ label: 'Kids Health', href: '/health-tips/kids-health' }] },
      { name: 'Mental Health', content: [{ label: 'Mental Health', href: '/health-tips/mental-health' }] },
      { name: "Doctor's Videos", content: [
          { label: 'COVID-19 Diaries', href: '/health-tips/covid-diaries' },
          { label: 'FAQ Diaries', href: '/health-tips/faq-diaries' },
          { label: 'Mythbusters', href: '/health-tips/mythbusters' },
        ]
      },
    ]
  },
};

// The Secondary Navbar Component
function SecondaryNavbar() {
  const hoverBg = 'hover:bg-[#009688] group-hover:bg-[#009688]';
  const hoverText = 'hover:text-white group-hover:text-white';
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [hoveredNavIdx, setHoveredNavIdx] = React.useState(null);

  // Helper for right arrow
  const RightArrow = () => (
    <span style={{float: 'right', display: 'inline-flex', alignItems: 'center'}}>
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
    </span>
  );

  // Find the nav item for the open mega menu
  const openNavItem = navItems.find(item => item.name === megaMenuOpen);

  return (
    <nav className={`bg-white w-full border-b border-gray-200 min-h-[40px] relative topbar-nav`}
      style={{boxShadow: '0 2px 6px rgba(0,0,0,0.03)', position: 'relative', zIndex: 20}}>
      <div style={{width: '100%', maxWidth: '100vw', position: 'relative'}}>
        <ul className="desktop-navbar-list flex items-center gap-3 md:gap-3 lg:gap-7 flex-wrap whitespace-nowrap" style={{width: '100%', margin: 0, paddingLeft: 20, boxSizing: 'border-box'}}>
          {navItems.map((item, navIdx) => (
            <li
              key={item.name}
              className={`relative group nav-li${hoveredNavIdx === navIdx ? ' nav-li--hovered' : ''}`}
              style={{
                marginTop: 2,
                marginBottom: 2,
                transition: 'background 0.2s',
                paddingLeft: 12,
                paddingRight: 12,
              }}
              onMouseEnter={() => {
                setHoveredNavIdx(navIdx);
                if (item.dropdown && megaMenus[item.name]) {
                  setMegaMenuOpen(item.name);
                  setActiveCategory(0);
                } else {
                  setMegaMenuOpen(null);
                }
              }}
              onMouseLeave={() => {
                setHoveredNavIdx(null);
                // Don't close here, let the mega menu handle leave
              }}
            >
              <a
                href={item.href}
                className={`flex items-center px-3 md:px-5 font-medium text-gray-700 transition-all duration-200 ease-in-out ${hoverBg} ${hoverText}`}
                style={{
                  paddingTop: 7,
                  paddingBottom: 7,
                  marginTop: 0,
                  marginBottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  background: hoveredNavIdx === navIdx ? '#009688' : (megaMenuOpen === item.name && item.dropdown ? '#009688' : 'transparent'),
                  color: hoveredNavIdx === navIdx ? '#fff' : (megaMenuOpen === item.name && item.dropdown ? '#fff' : ''),
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {item.icon && <span className={`transition-colors duration-200 ${hoverText}`} style={{height: '100%', display: 'flex', alignItems: 'center'}}>{item.icon}</span>}
                {!item.isIcon && <span className={`text-base transition-colors duration-200 ${hoverText}`} style={{height: '100%', display: 'flex', alignItems: 'center'}}>{item.name}</span>}
                {item.dropdown && <ChevronDown size={16} className={`ml-1 transition-colors duration-200 ${hoverText}`} />}
              </a>
            </li>
          ))}
        </ul>
        {/* Mega Menu rendered as a child of the nav container, not inside <li> */}
        {openNavItem && openNavItem.dropdown && megaMenus[openNavItem.name] && (
          <div
            className={`absolute left-0 top-full bg-white rounded-b-lg shadow-2xl flex z-40 animate-fadein${hoveredNavIdx !== null ? ' mega-menu--hovered' : ''}`}
            style={{
              minHeight: 200,
              border: '1px solid #e0e0e0',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              padding: '1px 0 1px 0',
              width: 'calc(100vw - 48px)',
              left: 24,
              right: 24,
              maxWidth: 'none',
              borderTop: hoveredNavIdx !== null ? '4px solid #009688' : '1px solid #e0e0e0',
            }}
            onMouseEnter={() => setMegaMenuOpen(openNavItem.name)}
            onMouseLeave={() => setMegaMenuOpen(null)}
          >
            {/* Left categories */}
            <div style={{width: 220, borderRight: '1px solid #e0e0e0', padding: '0 0 0 48px', display: 'flex', flexDirection: 'column', gap: 1}}>
              {megaMenus[openNavItem.name].categories.map((cat, idx) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(idx)}
                  style={{
                    background: activeCategory === idx ? '#009688' : 'transparent',
                    color: activeCategory === idx ? '#fff' : '#222',
                    borderRadius: 6,
                    padding: '4px 6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: activeCategory === idx ? '0 2px 8px #00968822' : 'none',
                  }}
                >
                  {cat.name}
                  <RightArrow />
                </div>
              ))}
            </div>
            {/* Right content: 3 columns, more content, more spacing, links */}
            <div style={{flex: 1, padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'flex-start'}}>
              {(megaMenus[openNavItem.name].categories[activeCategory].content || []).map((item, idx) => (
                item.label && item.href
                  ? <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 15,
                        color: '#222',
                        fontWeight: 500,
                        padding: '2px 0',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'color 0.2s',
                        borderRadius: 2,
                        cursor: 'pointer',
                      }}
                      onMouseOver={e => e.currentTarget.style.color = '#009688'}
                      onMouseOut={e => e.currentTarget.style.color = '#222'}
                    >
                      {item.label}
                    </a>
                  : <div key={idx} style={{fontSize: 15, color: '#222', marginBottom: 2, fontWeight: 500, padding: '2px 0'}}>{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.25s ease;
        }
        /* .topbar-nav--hovered removed: no border on navbar hover */
        .mega-menu--hovered {
          border-top: 4px solid #009688 !important;
        }
        .nav-li {
          padding-left: 12px;
          padding-right: 12px;
        }
        .nav-li:hover, .nav-li--hovered {
          background: #009688 !important;
        }
        .nav-li:hover a, .nav-li--hovered a {
          color: #fff !important;
        }
      `}</style>
    </nav>
  );
}

export default Topbar;
