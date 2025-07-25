import React from 'react';

const FixedBottomBar = () => {
  return (
    <div
      style={{
        // Positioning
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,

        // Sizing & Box Model
        width: '100%',
        maxWidth: '850px',
        minHeight: '70px', // Increased for comfort
        padding: '1% 4% 0.5% 4%', // Responsive vertical and horizontal padding
        boxSizing: 'border-box',
        
        // Appearance
        backgroundColor: '#009688',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
        
        // Flexbox layout for content
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      <h3
        style={{
          color: 'white',
          margin: 0,
          fontWeight: 600,
          fontSize: '1.05rem',
          whiteSpace: 'nowrap',
        }}
      >
        Get a Callback from our Health Advisor
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <input
          type="tel"
          placeholder="Enter your 10 digit mobile number"
          style={{
            backgroundColor: 'white',
            border: 'none',
            padding: '10px 14px',
            fontSize: '1rem',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
            outline: 'none',
            width: '180px',
            height: '34px',
          }}
        />
        <button
          style={{
            backgroundColor: '#E55B5B',
            color: 'white',
            border: 'none',
            padding: '1px 18px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            whiteSpace: 'nowrap',
            height: '34px',
          }}
        >
          Get a Call Back
        </button>
      </div>
    </div>
  );
};

export default FixedBottomBar;
