import React, { useState } from 'react';
import certImg from '../../assets/hackerrank-seintern.png';

const certifications = [
  { title: 'Software Engineer Intern - HackerRank', image: certImg },
  { title: 'Placeholder Cert 2', image: certImg },
  { title: 'Placeholder Cert 3', image: certImg },
  // Add more as needed
];

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-10">
      <h1 className="text-4xl font-bold text-center mb-12">Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="border border-zinc-700 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedCert(cert)}
          >
            <img src={cert.image} alt={cert.title} className="w-full h-60 object-cover" />
            <p className="text-center py-2 text-sm">{cert.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-3xl font-bold bg-white rounded-full px-2 shadow-md"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
