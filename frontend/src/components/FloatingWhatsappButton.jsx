import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsappButton = () => {
  return (
    <div
      className="floating-whatsapp-btn"
      style={{
        position: 'fixed',
        top: '370px',
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 50,
        padding: '0.5rem',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <button
        className="bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2 -mr-1"
        style={{
          height: '300px',
          minHeight: '150px',
          padding: '5px 5px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '20px',
          border: 'none',
          cursor: 'pointer',
          boxSizing: 'border-box',
          width: '50px',
          maxWidth: '200px',
          borderRadius: '20px 0 0 20px',
        }}
      >
        <MessageSquare size={32} />
        <span
          className="font-semibold pr-2 [writing-mode:vertical-rl] text-orientation-mixed"
          style={{
            paddingLeft: '0.5rem',
            fontSize: '1rem',
            maxWidth: '32px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Talk with Health Advisor
        </span>
      </button>
      <style>{`
        @media (max-width: 600px) {
          .floating-whatsapp-btn {
            min-height: 60px !important;
            top: auto;
            bottom: 80px;
          }
          .floating-whatsapp-btn button {
            height: 60px !important;
            min-height: 60px !important;
            padding: 0.75rem 0.5rem !important;
            font-size: 0.85rem !important;
          }
          .floating-whatsapp-btn span {
            font-size: 0.85rem !important;
            max-width: 22px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsappButton;
