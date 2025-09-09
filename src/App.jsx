import React, { useState, useEffect } from 'react';
import WelcomePage from './WelcomePage.jsx';
import ScheduleBuilder from './Schedulebuilder.jsx';

const App = () => {
  const [selectedYear, setSelectedYear] = useState(() => {
    // Initialize from localStorage if available
    return localStorage.getItem('selectedYear') || null;
  });
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load course data on app start if selectedYear exists
  useEffect(() => {
    const loadCourseData = async () => {
      if (selectedYear === 'winter-2025' || selectedYear === 'fall-2025') {
        setIsLoading(true);
        try {
          console.log('Loading course data on app start...'); // Debug log
          const data = await import('./courseData.json');
          setCourseData(data.default);
          console.log('Course data loaded successfully on app start', data.default); // Debug log
        } catch (error) {
          console.error('Error loading course data on app start:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadCourseData();
  }, []); // Only run on component mount

  const handleYearSelect = async (semester) => {
    console.log('Year selected:', semester); // Debug log
    setSelectedYear(semester);
    
    // Save to localStorage
    localStorage.setItem('selectedYear', semester);
    
    if (semester === 'winter-2025' || semester === 'fall-2025') {
      // Load course data for available semesters
      setIsLoading(true);
      try {
        console.log('Loading course data...'); // Debug log
        const data = await import('./courseData.json');
        setCourseData(data.default);
        console.log('Course data loaded successfully', data.default); // Debug log
      } catch (error) {
        console.error('Error loading course data:', error);
      } finally {
        setIsLoading(false);
      }
    } else if (semester === 'winter-2026') {
      // Winter 2026 is coming soon - do nothing, stay on welcome page
      setCourseData(null);
      setIsLoading(false);
    }
  };

  const handleBackToWelcome = () => {
    setSelectedYear(null);
    setCourseData(null);
    // Clear localStorage when going back to welcome
    localStorage.removeItem('selectedYear');
  };

  // If no year selected, show welcome page
  if (!selectedYear) {
    return <WelcomePage onYearSelect={handleYearSelect} selectedYear={selectedYear} />;
  }

  // If loading data for available semesters, show loading state
  if ((selectedYear === 'winter-2025' || selectedYear === 'fall-2025') && isLoading) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading course data...</div>
      </div>
    );
  }

  // If available semester and we have data, show schedule builder
  if ((selectedYear === 'winter-2025' || selectedYear === 'fall-2025') && courseData && !isLoading) {
    return (
      <ScheduleBuilder 
        courseData={courseData}
        year={selectedYear}
        onBack={handleBackToWelcome}
      />
    );
  }

  // For all other cases (including winter-2026), show welcome page
  return <WelcomePage onYearSelect={handleYearSelect} selectedYear={selectedYear} />;
};

export default App;
