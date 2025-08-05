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
        'Healthians Comprehensive Fever Package',
        'Healthians Prime Care Thyroid Plus Checkup Package',
        'Healthy India 2025 Full Body Checkup Extensive',
        'Healthians Comprehensive Health Check Up Package - Male',
        'Healthians Life Maximiser Health Checkup Package - Female',
        'Swasth Bharat Non Fasting Package',
        'Ayushman Package',
      ],
    },
    {
      name: 'Popular Tests',
      content: ['CBC', 'Blood Sugar', 'Lipid Profile', 'KFT'],
    },
    {
      name: 'Tests by Unhealthy Habits',
      content: ['Alcohol', 'Smoking', 'Junk Food'],
    },
    {
      name: 'Tests by Health Risks',
      content: ['Diabetes', 'Thyroid', 'Heart'],
    },
    {
      name: 'Govt. Panel Health Test',
      content: ['CGHS', 'ECHS', 'Other'],
    },
  ],
};

// Example mega menu data for all dropdowns
const megaMenus = {
  'Blood Test': bloodTestMegaMenu,
  'X-rays & Scans': {
    categories: [
      { name: 'Popular Scans', content: [
        { label: 'Chest X-ray', href: '#chest-xray' },
        { label: 'MRI Scan', href: '#mri' },
        { label: 'CT Scan', href: '#ct-scan' },
        { label: 'Ultrasound', href: '#ultrasound' },
        { label: 'PET Scan', href: '#pet-scan' },
        { label: 'DEXA Scan', href: '#dexa' },
        { label: 'ECG', href: '#ecg' },
      ] },
      { name: 'Special Packages', content: [
        { label: 'Brain MRI', href: '#brain-mri' },
        { label: 'Abdomen CT', href: '#abdomen-ct' },
        { label: 'Whole Body Scan', href: '#whole-body' },
        { label: 'Cardiac MRI', href: '#cardiac-mri' },
        { label: 'PFT', href: '#pft' },
        { label: 'Echo', href: '#echo' },
      ] },
    ]
  },
  'Doctor Consultation': {
    categories: [
      { name: 'Specialists', content: [
        { label: 'General Physician', href: '#gp' },
        { label: 'Cardiologist', href: '#cardio' },
        { label: 'Dermatologist', href: '#derma' },
        { label: 'Endocrinologist', href: '#endo' },
        { label: 'Gastroenterologist', href: '#gastro' },
        { label: 'Neurologist', href: '#neuro' },
        { label: 'Pediatrician', href: '#pediatrician' },
      ] },
      { name: 'Teleconsultation', content: [
        { label: 'Book Online', href: '#tele-book' },
        { label: 'Video Call', href: '#tele-video' },
        { label: 'Chat', href: '#tele-chat' },
      ] },
    ]
  },
  'Supplements': {
    categories: [
      { name: 'Vitamins', content: [
        { label: 'Vitamin D', href: '#vitd' },
        { label: 'Vitamin B12', href: '#vitb12' },
        { label: 'Multivitamins', href: '#multi' },
      ] },
      { name: 'Minerals', content: [
        { label: 'Calcium', href: '#calcium' },
        { label: 'Iron', href: '#iron' },
        { label: 'Zinc', href: '#zinc' },
      ] },
      { name: 'Proteins', content: [
        { label: 'Whey', href: '#whey' },
        { label: 'Plant Protein', href: '#plant' },
      ] },
    ]
  },
  'Health Tips': {
    categories: [
      { name: 'Diet & Nutrition', content: [
        { label: 'Healthy Eating', href: '#healthy-eating' },
        { label: 'Weight Loss', href: '#weight-loss' },
        { label: 'Superfoods', href: '#superfoods' },
      ] },
      { name: 'Exercise & Fitness', content: [
        { label: 'Home Workouts', href: '#home-workouts' },
        { label: 'Yoga', href: '#yoga' },
        { label: 'Cardio', href: '#cardio' },
      ] },
      { name: 'Mental Wellness', content: [
        { label: 'Stress Relief', href: '#stress' },
        { label: 'Meditation', href: '#meditation' },
        { label: 'Sleep', href: '#sleep' },
      ] },
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
      <div style={{width: '100%', maxWidth: 1200, position: 'relative'}}>
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
                  marginTop: 1,
                  marginBottom: 1,
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
            className={`absolute left-0 top-full w-full bg-white rounded-b-lg shadow-2xl flex z-40 animate-fadein${hoveredNavIdx !== null ? ' mega-menu--hovered' : ''}`}
            style={{
              minHeight: 320,
              border: '1px solid #e0e0e0',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              padding: '18px 0 12px 0',
              maxWidth: '100%',
              borderTop: hoveredNavIdx !== null ? '4px solid #009688' : '1px solid #e0e0e0',
            }}
            onMouseEnter={() => setMegaMenuOpen(openNavItem.name)}
            onMouseLeave={() => setMegaMenuOpen(null)}
          >
            {/* Left categories */}
            <div style={{width: 220, borderRight: '1px solid #e0e0e0', padding: '0 0 0 48px', display: 'flex', flexDirection: 'column', gap: 4}}>
              {megaMenus[openNavItem.name].categories.map((cat, idx) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(idx)}
                  style={{
                    background: activeCategory === idx ? '#009688' : 'transparent',
                    color: activeCategory === idx ? '#fff' : '#222',
                    borderRadius: 6,
                    padding: '8px 14px',
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
            <div style={{flex: 1, padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'flex-start'}}>
              {(megaMenus[openNavItem.name].categories[activeCategory].content || []).concat([
                { label: 'Extra Link 1', href: '#' },
                { label: 'Extra Link 2', href: '#' },
                { label: 'Extra Link 3', href: '#' },
                { label: 'Extra Link 4', href: '#' },
                { label: 'Extra Link 5', href: '#' },
                { label: 'Extra Link 6', href: '#' },
              ]).slice(0, 18).map((item, idx) => (
                typeof item === 'string'
                  ? <div key={idx} style={{fontSize: 15, color: '#222', marginBottom: 6, fontWeight: 500, padding: '4px 0'}}>{item}</div>
                  : <a key={idx} href={item.href} style={{fontSize: 15, color: '#009688', marginBottom: 6, fontWeight: 500, padding: '4px 0', textDecoration: 'none', display: 'block', transition: 'color 0.2s'}} onMouseOver={e => e.currentTarget.style.color = '#005f56'} onMouseOut={e => e.currentTarget.style.color = '#009688'}>{item.label}</a>
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
