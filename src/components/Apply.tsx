
import { useEffect, useRef } from 'react';

export function Apply() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const benefits = [
    "Collaborate with experts in multiple fields",
    "Work on real-world innovative projects",
    "Access to state-of-the-art lab facilities",
    "Opportunities to publish research papers",
    "Industry connections and networking",
    "Develop leadership and teamwork skills"
  ];

  return (
    <section id="apply" className="py-24 px-4 relative bg-nitte-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-pattern-dark.png')] bg-cover bg-center opacity-[0.05]" />
      
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl relative z-10 opacity-0 transition-all duration-1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center justify-center px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full mb-6">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              Apply Now
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Be part of our innovative community and help shape the future through research and development.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nitte-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Application Form</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-nitte-gold/50 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-nitte-gold/50 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-white/80 mb-1">Department</label>
                <select 
                  id="department" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-nitte-gold/50 focus:border-transparent transition-all duration-200"
                >
                  <option value="" disabled selected className="text-gray-500">Select your department</option>
                  <option value="cse">Computer Science & Engineering</option>
                  <option value="aiml">Artificial Intelligence & Data Science</option>
                  <option value="ise">Information Science & Engineering</option>
                  <option value="ece">Electronics & Communication</option>
                  <option value="mech">Mechanical Engineering</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="eee">Electrical & Electronics</option>
                  <option value="aero">Aeronautical Engineering</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-white/80 mb-1">Research Interests</label>
                <textarea 
                  id="interests" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-nitte-gold/50 focus:border-transparent transition-all duration-200"
                  placeholder="Briefly describe your research interests"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-4 bg-nitte-gold text-nitte-blue font-semibold rounded-lg hover:bg-nitte-gold/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nitte-gold/50 focus:ring-offset-2 focus:ring-offset-nitte-blue"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
