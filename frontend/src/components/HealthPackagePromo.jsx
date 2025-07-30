import React from 'react';
import { Search, Truck, FileText, User } from 'lucide-react';

// Reusable feature item component
const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-3">
    <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
      {icon}
    </div>
    <div className="text-white">
      <p className="font-semibold text-base">{title}</p>
      {subtitle && (
        <p className="text-white/80 text-xs italic">
          {subtitle.includes('60') ? (
            <>
              within <span className="text-[#F26B3A] font-semibold">60 Mins</span> of Booking*
            </>
          ) : (
            subtitle
          )}
        </p>
      )}
    </div>
  </div>
);

// Main promotional section
const HealthPackagePromo = () => {
  return (
    <div
      className="bg-[#007E7E] font-sans shadow-2xl overflow-hidden relative min-h-[300px] md:min-h-[400px] flex  "
      style={{ margin: '0 4% 0 4%', padding: '4% 4% 0 4%', borderRadius: '0 0 20px 20px' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left content */}
        <div className="p-10 sm:p-8 md:p-12 lg:p-16 text-white col-span-1 lg:col-span-3">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-semibold leading-tight tracking-tight">
            Make India Healthy Package 2025
          </h1>

          <div className="flex flex-wrap items-center mt-6 gap-5">
            <span className="text-3xl md:text-4xl font-bold text-[#FBBD57]">@ ₹99</span>
            <button className="bg-[#FBBD57] text-black font-semibold rounded-xl text-base md:text-lg shadow hover:bg-[#FAB443] transition" style={{padding: '2px 10px 2px 10px'}}>
              Book Now
            </button>
          </div>

          {/* Search bar */}
          <div
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              height: '54px',
              width: '100%',
              maxWidth: '660px',
              alignItems: 'stretch',
              background: '#fff',
              borderRadius: '9px',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.07)',
              overflow: 'hidden',
            }}
          >
            <input
              type="text"
              placeholder="Find your Package/Test/Scans"
              style={{
                flexGrow: 1,
                padding: '1.25rem 1.5rem',
                border: 'none',
                outline: 'none',
                fontSize: '1.1rem',
                color: '#222',
                borderRadius: '9999px 9999px 0 0',
                marginBottom: 0,
                textAlign: 'center',
                background: '#fff',
                minHeight: '50px',
              }}
            />
            <button
              style={{
                background: '#F26B3A',
                color: '#fff',
                fontWeight: 600,
                padding: '1.25rem 1.5rem',
                border: 'none',
                borderRadius: '9px 9px 9px 9px',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '50px',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#d65a23')}
              onMouseOut={e => (e.currentTarget.style.background = '#F26B3A')}
            >
              <Search size={20} />
              <span style={{ fontSize: '1.1rem' }}>Search</span>
            </button>
          </div>

          {/* Features list */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureItem
              icon={<img src="https://cdn4.healthians.com/img/Group_home_icon_1_new.svg" alt="Truck" className="w-6 h-6" />}

              title="Free Sample Collection"
              subtitle="within 60 Mins of Booking*"
            />
            <FeatureItem
              icon={<img src="https://cdn4.healthians.com/img/Group_home_icon_1_new.svg" alt="Truck" className="w-6 h-6" />}

              title="Smart Reports"
              subtitle="with Real-Time Updates"
            />
            <FeatureItem
              icon={<img src="/path/to/your-icon.pnghttps://cdn4.healthians.com/img/Group_home_icon_1_new.svg" alt="Truck" className="w-6 h-6" />}

              title="Free Report Counselling"
              subtitle=""
            />
          </div>
        </div>

        {/* Right image (optional or placeholder) */}
       
      </div>
      <style>
        {`
          @media (max-width: 700px) {
            .promo-bottom-img {
              display: none !important;
            }
          }
        `}
      </style>
      <img
          src="https://helma.healthians.com/stationery/mailer-assets/679cdc692867f.webp"
          alt="Health Promo"
          className="promo-bottom-img"
          style={{
            width: '343px',
            height: 'auto', // or adjust as needed for your design
            objectFit: 'cover',
            objectPosition: 'bottom',
            display: 'block',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            marginTop: 'auto'
          }}
        />
    </div>
  );
};

export default HealthPackagePromo;
