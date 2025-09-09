import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import mariLogo from './assets/mari-removebg-preview.png';

const WelcomePage = ({ onYearSelect, selectedYear: initialSelectedYear }) => {
  const [selectedYear, setSelectedYear] = useState(initialSelectedYear);

  const handleYearSelection = (year) => {
    console.log('Button clicked, year:', year); // Debug log
    setSelectedYear(year);
    console.log('Calling onYearSelect with:', year); // Debug log
    onYearSelect(year);
  };


  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="text-center pt-16 pb-12 px-8">
        <div className="flex items-center justify-center mb-4">
          <img 
            src={mariLogo} 
            alt="Marianopolis College Crest" 
            className="mr-3 h-16 w-auto"
          />
          <h1 className="text-4xl font-bold text-white">MariScheduler</h1>
        </div>
        <p className="text-lg text-gray-400">
          Build your perfect Marianopolis College schedule
        </p>
      </div>

      {/* Semester Selection */}
      <div className="flex-1 flex items-center justify-center px-8 pb-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Select Semester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Winter 2025 Option - Current Data */}
            <button
              onClick={() => handleYearSelection('winter-2025')}
              className="group relative p-10 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-200 hover:shadow-lg bg-blue-900/20 hover:bg-blue-900/30 min-h-[180px] flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-3">Winter 2025</div>
                <div className="text-base text-blue-300/80 mb-6">Current Data Available</div>
                <div className="flex items-center justify-center text-blue-400 group-hover:translate-x-1 transition-transform text-lg">
                  <ArrowRight className="h-6 w-6 mr-2" />
                  <span>Start Building</span>
                </div>
              </div>
            </button>

            {/* Fall 2025 Option */}
            <button
              onClick={() => handleYearSelection('fall-2025')}
              className="group relative p-10 rounded-xl border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-200 hover:shadow-lg bg-orange-900/20 hover:bg-orange-900/30 min-h-[180px] flex flex-col justify-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-3">Fall 2025</div>
                <div className="text-base text-orange-300/80 mb-6">Current Data Available</div>
                <div className="flex items-center justify-center text-orange-400 group-hover:translate-x-1 transition-transform text-lg">
                  <ArrowRight className="h-6 w-6 mr-2" />
                  <span>Start Building</span>
                </div>
              </div>
            </button>

            {/* Winter 2026 Option - Coming Soon */}
            <div
              className="relative p-10 rounded-xl border-2 border-gray-500/50 bg-gray-900/20 min-h-[180px] flex flex-col justify-center cursor-not-allowed opacity-70"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-3">Winter 2026</div>
                <div className="text-base text-gray-300/80 mb-6">COMING SOON</div>
                <div className="flex items-center justify-center text-gray-400 text-lg">
                  <span>Stay Tuned</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <p className="text-gray-500 text-sm">
          Built for Marianopolis College students by students
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;

