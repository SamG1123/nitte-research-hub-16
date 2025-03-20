
import { useState, useEffect, useRef } from 'react';
import { Slider } from "@/components/ui/slider";

export function Timeline() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const sectionRef = useRef<HTMLDivElement>(null);
  const yearsData = [2025, 2026, 2027, 2028, 2029, 2030];
  
  const achievements = {
    2025: "Launch of the Nitte R&D Club and first successful interdepartmental project",
    2026: "Received national recognition for innovative research in renewable energy",
    2027: "Published research papers in prestigious international journals",
    2028: "Hosted the first international R&D conference at NMIT",
    2029: "Launched incubation center for student startups",
    2030: "Celebrating breakthrough innovations with global impact"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  const handleSliderChange = (value: number[]) => {
    setSelectedYear(value[0]);
  };

  // Find the index of the selected year for calculating the progress
  const yearIndex = yearsData.indexOf(selectedYear);
  
  return (
    <section id="timeline" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl opacity-0 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-nitte-gold/10 text-nitte-gold text-sm font-medium rounded-full mb-6">
            Our Journey
          </span>
          <h2 className="section-title text-nitte-blue">
            Timeline
          </h2>
          <p className="section-subtitle">
            Explore our past achievements and future milestones
          </p>
        </div>

        <div className="mt-20 px-4 flex flex-col">
          {/* Achievement display */}
          <div className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-500 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-nitte-gold/10 flex items-center justify-center text-nitte-gold mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-nitte-blue">{selectedYear}</h3>
            </div>
            
            <p className="text-gray-700 ml-16">
              {achievements[selectedYear as keyof typeof achievements]}
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="relative h-64 w-full max-w-md overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                <img 
                  src={`/timeline-${selectedYear}.jpg`} 
                  alt={`Achievement ${selectedYear}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Timeline slider with dots */}
          <div className="relative mt-4">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2 rounded-full">
              <div 
                className="absolute left-0 h-1 bg-nitte-gold rounded-full transition-all duration-500 ease-in-out"
                style={{ 
                  width: `${((yearsData.indexOf(selectedYear)) / (yearsData.length - 1)) * 100}%` 
                }}
              />
              
              {yearsData.map((year, index) => (
                <button
                  key={year}
                  className={`absolute w-5 h-5 rounded-full transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ${
                    year <= selectedYear ? 'bg-nitte-gold' : 'bg-gray-300'
                  }`}
                  style={{ 
                    left: `${(index / (yearsData.length - 1)) * 100}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: year === selectedYear ? 20 : 10
                  }}
                  onClick={() => setSelectedYear(year)}
                />
              ))}
            </div>

            {/* Year labels */}
            <div className="flex justify-between mt-8 relative">
              {yearsData.map((year) => (
                <div 
                  key={year} 
                  className="text-sm font-medium text-gray-500"
                  style={{ 
                    opacity: year === selectedYear ? 1 : 0.7,
                    transform: year === selectedYear ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider component */}
          <div className="mt-16 w-full px-4">
            <Slider
              defaultValue={[selectedYear]}
              min={2025}
              max={2030}
              step={1}
              value={[selectedYear]}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
