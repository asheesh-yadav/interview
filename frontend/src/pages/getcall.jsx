import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // Step 1: Import ReactDOM for Portals

// Step 2: Make sure the CSS file is imported in the page where you use the modal.
// The user mentioned the file is named 'getcall.css'.
import './getcall.css';


// --- Phone Icon SVG ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="form-icon">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

// --- User Icon SVG ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="form-icon">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
);

// --- Callback Modal Component (Now using a Portal) ---
const CallbackModal = ({ show, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!show) {
        return null;
    }
    
    // Step 3: Use ReactDOM.createPortal to render the modal outside its parent.
    // The modal will be appended to the document.body, ensuring it's on top.
    return ReactDOM.createPortal(
        <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
                    <h3>Need help with booking a test?</h3>
                    <div className="form-group">
                        <PhoneIcon />
                        <input type="tel" className="form-input" placeholder="Enter Your Mobile No. *" required />
                    </div>
                    <div className="form-group">
                        <UserIcon />
                        <input type="text" className="form-input" placeholder="Enter Your Name *" required />
                    </div>
                    <div className="form-group">
                        <select className="form-input form-select">
                            <option>Gurgaon</option>
                            <option>Delhi</option>
                            <option>Noida</option>
                            <option>Mumbai</option>
                        </select>
                    </div>
                    <div className="checkbox-group">
                        <input type="checkbox" id="terms" className="checkbox-input" defaultChecked/>
                        <label htmlFor="terms" className="checkbox-label">
                            You hereby affirm & authorise Healthians to process the personal data as per the T&C.
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Get a Call Back</button>
                    <p className="mandatory-note">* Mandatory fields</p>
                </form>
            </div>
        </div>,
        document.body // Target container for the portal
    );
};
export default CallbackModal;