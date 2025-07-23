import React, { useState } from 'react';

// --- SVG Icon Components for the Overlay ---

const SearchIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const CrosshairIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
         <circle cx="12" cy="12" r="3" stroke="none" fill="currentColor" />
    </svg>
);

const CloseIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- Metro City Icons ---
const MetroCityIcons = {
    Bengaluru: (
        <img src="https://cdn4.healthians.com/img/static/bangalore.svg" alt="Bengaluru" className="w-full h-full mx-auto text-gray-500" />
    ),
    Chennai: (
        <img src="https://cdn4.healthians.com/img/static/chennai.svg" alt="Chennai" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Delhi: (
        <img src="https://cdn4.healthians.com/img/static/delhi.svg" alt="Delhi" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Gurgaon: (
        <img src="https://cdn4.healthians.com/img/static/gurgaon.svg" alt="Gurgaon" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Hyderabad: (
        <img src="https://cdn4.healthians.com/img/static/hyderabad.svg" alt="Hyderabad" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Kolkata: (
        <img src="https://cdn4.healthians.com/img/static/kolkata.svg" alt="Kolkata" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Mumbai: (
        <img src="https://cdn4.healthians.com/img/static/mumbai.svg" alt="Mumbai" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Noida: (
        <img src="https://cdn4.healthians.com/img/static/noida.svg" alt="Noida" className="w-7 h-7 mx-auto text-gray-500" />
    ),
    Pune: (
        <img src="https://cdn4.healthians.com/img/static/pune.svg" alt="Pune" className="w-7 h-7 mx-auto text-gray-500" />
    ),
};

const metroCities = [
    { name: "Bengaluru", icon: MetroCityIcons.Bengaluru },
    { name: "Chennai", icon: MetroCityIcons.Chennai },
    { name: "Delhi", icon: MetroCityIcons.Delhi },
    { name: "Gurgaon", icon: MetroCityIcons.Gurgaon },
    { name: "Hyderabad", icon: MetroCityIcons.Hyderabad },
    { name: "Kolkata", icon: MetroCityIcons.Kolkata },
    { name: "Mumbai", icon: MetroCityIcons.Mumbai },
    { name: "Noida", icon: MetroCityIcons.Noida },
    { name: "Pune", icon: MetroCityIcons.Pune },
];
const otherCities = [
  "Agra", "Ahmadnagar", "Ahmedabad", "Aligarh", "Allahabad", "Alwar", "Ambala", "Ambedkar Nagar", "Amravati", "Amritsar",
  "Aurangabad", "Ayodhya", "Baghpat", "Bahadurgarh", "Barabanki", "Bardhaman", "Bareilly", "Bathinda", "Belgaum", "Bhiwani",
  "Bhilai", "Bhopal", "Bhubaneswar", "Bijnore", "Bilaspur", "Bulandshahar", "Chandigarh", "Dehradun", "Deulpur", "Dhampur",
  "Etah", "Faizabad", "Faridabad", "Firozabad", "Gadarpur", "Gandhinagar", "Gaya", "Ghazipur", "Ghaziabad", "Gorakhpur",
  "Greater Noida", "Guwahati", "Gwalior", "Hajipur", "Hapur", "Haridwar", "Hathras", "Hisar", "Hoshiarpur", "Indore",
  "Jabalpur", "Jaipur", "Jalandhar", "Jamshedpur", "Jaunpur", "Jhansi", "Jodhpur", "Kanpur", "Karimnagar", "Karnal",
  "Kashipur", "Khagaria", "Kota", "Kurukshetra", "Lucknow", "Ludhiana", "Mainpuri", "Mathura", "Meerut", "Mehsana",
  "Midnapur", "Modinagar", "Mohali", "Moradabad", "Munger", "Muzaffarnagar", "Mysuru", "Nagpur", "Nashik", "Panchkula",
  "Panipat", "Patiala", "Patna", "Prayagraj", "Raipur", "Rajkot", "Rampur", "Ranchi", "Rewa", "Rewari", "Rohtak",
  "Roorkee", "Rudrapur Udham Singh Nagar", "Saharanpur", "Sambhal", "Sonipat", "Srinagar", "Surat", "Udaipur", "Ujjain",
  "Una", "Vadodara", "Varanasi", "Vijaywada", "Visakhapatnam", "Warangal", "Yamuna Nagar",
  // Additional cities for a total of 125+
  "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Thane",
  "Vasai-Virar", "Navi Mumbai", "Howrah", "Amritsar", "Allahabad", "Dhanbad", "Gaya", "Jamshedpur", "Asansol",
  "Durgapur", "Bokaro", "Bardhaman", "Siliguri", "Kharagpur", "Bhatpara", "Ulhasnagar", "Bihar Sharif", "Panvel",
  "Bhiwandi", "Sangli", "Malegaon", "Solapur", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani",
  "Jalgaon", "Nanded", "Kolhapur", "Satara", "Ratnagiri", "Wardha", "Yavatmal", "Beed", "Osmanabad", "Nandurbar",
  "Gondia", "Hingoli", "Washim", "Buldhana", "Guntur", "Nellore", "Kurnool", "Anantapur", "Eluru", "Ongole",
  "Kadapa", "Machilipatnam", "Tenali", "Proddatur", "Chittoor", "Madanapalle", "Tirupati", "Nandyal", "Adoni",
  "Vizianagaram", "Srikakulam", "Bhimavaram", "Tadepalligudem", "Gudivada", "Narasaraopet", "Rajahmundry",
  "Kakinada", "Amalapuram", "Narasapuram", "Palakollu", "Tanuku", "Sattenapalle", "Markapur", "Vinukonda"
];

const LocationOverlay = ({ isOpen, onClose, onCitySelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter cities based on search term
    const filteredCities = otherCities.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Black overlay covers the whole page, including behind the navbar */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
            )}
            {/* Modal content, positioned below navbar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center">
                    <div
                        className="w-full max-w-4xl mx-2 sm:mx-auto bg-white rounded-2xl shadow-xl"
                        onClick={e => e.stopPropagation()}
                        style={{
                            paddingLeft: 10,
                            marginTop: window.innerWidth >= 640 ? 90 : 70
                            // No maxHeight or overflowY here!
                        }}
                    >
                        <div className="flex justify-between items-center mb-10 p-2 border-b border-gray-200" style={{marginBottom: 7, padding: 7}}>
                            <h2 className="text-2xl font-bold text-gray-800" style={{margin: 3, padding: 2}}>Select your Location</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-800" style={{marginLeft: 7, padding: 5  }}>
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 " style={{marginBottom: 4, padding: 5}}>
                            <div className="relative flex-grow" style={{marginRight: 2}}>
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for your city..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base mb-2"
                                    style={{margin: 0, padding: 12}}
                                />
                            </div>
                            <button className="flex items-center justify-center gap-2 px-6 py-3 h-12 border border-gray-300 rounded-lg text-cyan-600 font-semibold hover:bg-cyan-50 transition-colors mt-2 sm:mt-0" style={{ padding: 12}}>
                                <CrosshairIcon className="w-5 h-5 text-cyan-500" />
                                <span className="text-base" style={{marginLeft: 8}}>Use Current Location</span>
                            </button>
                        </div>

                        <div className="mb-12" style={{marginBottom: 3, padding: 3}}>
                            <h3 className="text-sm font-semibold text-gray-500  uppercase tracking-wide " style={{marginBottom: 5, paddingLeft: 4}}>Metro Cities</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-0 text-center">
                                {metroCities.map(cityObj => (
                                    <div key={cityObj.name} onClick={() => onCitySelect(cityObj.name)} className="cursor-pointer group" style={{margin: 4}}>
                                        <div className="bg-gray-100 rounded-lg mb-2 group-hover:bg-cyan-100 transition-colors flex items-center justify-center w-19 h-19  overflow-hidden" style={{marginBottom: 2, padding: 0}}>
                                            {/* City-specific Icon */}
                                            {React.cloneElement(cityObj.icon, { className: "w-full h-full object-contain " } )}
                                        </div>
                                        <p className="text-sm text-gray-700 font-medium">{cityObj.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginLeft: 15, maxHeight: '80vh' }}>
                            <h3 className="text-sm font-semibold text-gray-500 mb-5 uppercase tracking-wide pl-1" style={{ marginBottom: 5, paddingLeft: 0 }}>Other Cities</h3>
                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-1 hide-scrollbar"
                                style={{
                                    maxHeight: '60vh',
                                    overflowY: 'auto'
                                }}
                            >
                                {filteredCities.map(city => (
                                    <p key={city} onClick={() => onCitySelect(city)} className="text-gray-600 hover:text-cyan-600 cursor-pointer text-base rounded transition-colors duration-150" style={{ marginBottom: 0, padding: 0 }}>{city}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LocationOverlay;
