import React from 'react';
import { HeartPulse, Award, Phone, ArrowRight } from 'lucide-react';

// Data for the top service cards. Using an array makes it easy to manage.
const serviceCategories = [
  {
    title: 'Blood Tests',
    discount: 'Up to 60% off',
    bgColor: 'bg-cyan-50',
    imgSrc: 'https://placehold.co/100x100/34d3fa/ffffff?text=🩸',
    textColor: 'text-cyan-600',
  },
  {
    title: 'X-Rays, Scans and MRI Tests',
    discount: 'Up to 70% off',
    bgColor: 'bg-violet-50',
    imgSrc: 'https://placehold.co/100x100/a78bfa/ffffff?text=�',
    textColor: 'text-violet-600',
  },
  {
    title: 'Doctor & Diet Consultations',
    discount: 'Up to 75% off',
    bgColor: 'bg-rose-50',
    imgSrc: 'https://placehold.co/100x100/f43f5e/ffffff?text=👨‍⚕️',
    textColor: 'text-rose-600',
  },
  {
    title: 'Herbved+ Supplements',
    discount: 'Flat 55% off',
    bgColor: 'bg-blue-50',
    imgSrc: 'https://placehold.co/100x100/60a5fa/ffffff?text=🌿',
    textColor: 'text-blue-600',
  },
  {
    title: 'Genetic Testing',
    discount: 'Up to 70% off',
    bgColor: 'bg-pink-50',
    imgSrc: 'https://placehold.co/100x100/f472b6/ffffff?text=🧬',
    textColor: 'text-pink-600',
  },
  {
    title: 'Upload Prescription',
    discount: '',
    bgColor: 'bg-indigo-50',
    imgSrc: 'https://placehold.co/100x100/818cf8/ffffff?text=📄',
    textColor: 'text-indigo-600',
  },
];

// Reusable component for the top service cards
const ServiceCard = ({ title, discount, bgColor, imgSrc, textColor }) => (
  <div className={`flex-shrink-0 w-48 text-center p-4 rounded-2xl ${bgColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
    <img src={imgSrc} alt={title} className="w-24 h-24 mx-auto object-contain" />
    {discount && (
      <span className={`inline-block bg-white ${textColor} text-xs font-semibold px-3 py-1 rounded-full mt-2`}>
        {discount}
      </span>
    )}
    <h3 className="text-gray-800 font-bold mt-3 text-sm h-10 flex items-center justify-center">{title}</h3>
  </div>
);

// The main component that you will export
export default function ServicesShowcase() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 font-sans">
      <div className="container mx-auto px-4">
        
        {/* Top horizontal scrollable row */}
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom two info cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Info Card: Health Score */}
          <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-8 h-8 text-yellow-500" />
                </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-800">Unlock Your Health Score with HealthKarma!</h3>
              <p className="text-gray-600 mt-2 text-sm">Uncover potential health risks and get custom test recommendation based on your lifestyle and habits.</p>
              <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:bg-orange-600 transition-colors flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
                <span>Check your health score</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Info Card: Government Panel */}
          <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-500" />
                </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-800">Healthians Now Empaneled for All Government Panel Tests</h3>
              <p className="text-gray-600 mt-2 text-sm">Get tests done for in-service or retired government employees under CGHS, ECHS, or any other government panel.</p>
              <button className="mt-4 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-sm hover:bg-yellow-500 transition-colors flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
                <Phone size={16} />
                <span>Call us: +91-9289902266</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
