
import { useEffect, useRef } from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/rnd-logo.png" 
              alt="Nitte R&D Club Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
              Fostering innovation and research excellence at NMIT
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map(platform => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-nitte-blue hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Departments', 'Timeline', 'Projects', 'Apply'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-nitte-blue transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Departments
            </h3>
            <ul className="space-y-3">
              {[
                'Computer Science',
                'AI & Data Science',
                'Electronics & Communication',
                'Mechanical',
                'Civil',
                'Electrical'
              ].map(item => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-nitte-blue transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact
            </h3>
            <address className="not-italic text-gray-600">
              <p className="mb-3">Nitte Meenakshi Institute of Technology</p>
              <p className="mb-3">P.B.No.6429, Yelahanka</p>
              <p className="mb-3">Bangalore - 560064</p>
              <p className="mb-3">
                <span className="font-medium">Email:</span> rnd@nmit.ac.in
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 80 2216 7890
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nitte R&D Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
