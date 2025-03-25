
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Navbar scroll behavior
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('bg-white', 'shadow-md', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-4');
    } else {
      navbar.classList.remove('bg-white', 'shadow-md', 'py-3');
      navbar.classList.add('bg-transparent', 'py-4');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Call once on load

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('max-h-screen');
      
      if (isOpen) {
        mobileMenu.classList.remove('max-h-screen', 'py-4');
        mobileMenu.classList.add('max-h-0');
        
        // Change icon to hamburger
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      } else {
        mobileMenu.classList.remove('max-h-0');
        mobileMenu.classList.add('max-h-screen', 'py-4');
        
        // Change icon to X
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        `;
      }
    });
  }

  // Initialize sections with fade-in animations
  const observeElements = document.querySelectorAll('.opacity-0.transition-all');
  
  if (observeElements.length > 0) {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observeElements.forEach(element => {
      observer.observe(element);
    });
  }

  // Departments data
  const departments = [
    {
      name: "Aeronautical Engineering",
      slug: "aeronautical-engineering"
    },
    {
      name: "Artificial Intelligence & Data Science",
      slug: "artificial-intelligence-data-science"
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      slug: "artificial-intelligence-machine-learning"
    },
    {
      name: "Civil Engineering",
      slug: "civil-engineering"
    },
    {
      name: "Computer Science & Engineering",
      slug: "computer-science-engineering"
    },
    {
      name: "Computer Science & Business Systems",
      slug: "computer-science-business-systems"
    },
    {
      name: "Electrical & Electronics Engineering",
      slug: "electrical-electronics-engineering"
    },
    {
      name: "Electronics & Communication Engineering",
      slug: "electronics-communication-engineering"
    },
    {
      name: "Electronics Engineering (VLSI)",
      slug: "electronics-engineering-vlsi"
    },
    {
      name: "Information Science & Engineering",
      slug: "information-science-engineering"
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical-engineering"
    },
    {
      name: "Robotics & Artificial Intelligence",
      slug: "robotics-artificial-intelligence"
    }
  ];

  // Populate departments grid
  const departmentsGrid = document.getElementById('departments-grid');
  if (departmentsGrid) {
    departments.forEach((dept, index) => {
      const deptCard = document.createElement('div');
      deptCard.className = "group relative overflow-hidden rounded-2xl glass-card transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300";
      deptCard.style.animationDelay = `${index * 100}ms`;
      
      deptCard.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-nitte-blue/5 to-nitte-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div class="relative z-10 p-6">
          <h3 class="text-lg font-semibold text-nitte-blue">${dept.name}</h3>
          
          <div class="mt-4 flex justify-between items-center">
            <a 
              href="faculty.html?department=${dept.slug}"
              class="text-nitte-blue font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
            >
              Meet Faculty
            </a>
            
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-nitte-blue/10 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4 text-nitte-blue">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      `;
      
      departmentsGrid.appendChild(deptCard);
    });
  }

  // Populate footer departments
  const footerDepartments = document.querySelectorAll('#footer-departments');
  if (footerDepartments.length > 0) {
    footerDepartments.forEach(footer => {
      // Take the first 6 departments for the footer
      departments.slice(0, 6).forEach(dept => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="faculty.html?department=${dept.slug}" class="text-gray-600 hover:text-nitte-blue transition-colors duration-300">${dept.name}</a>`;
        footer.appendChild(li);
      });
    });
  }

  // Gallery images
  const galleryImages = [
    {
      src: "/project-energy.jpg",
      alt: "Students working on energy monitoring systems",
      caption: "Energy Monitoring Project"
    },
    {
      src: "/project-ai.jpg",
      alt: "AI research and development",
      caption: "AI Innovation Lab"
    },
    {
      src: "/project-robot.jpg",
      alt: "Robotics team with prototype",
      caption: "Robotics Engineering Team"
    },
    {
      src: "/project-civil.jpeg",
      alt: "Sustainable materials research",
      caption: "Sustainable Materials Research"
    },
    {
      src: "/placeholder-image.jpg",
      alt: "Students collaborating on project",
      caption: "Interdisciplinary Collaboration"
    }
  ];

  // Populate gallery
  const galleryContent = document.querySelector('.gallery-content');
  if (galleryContent) {
    galleryImages.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      
      galleryItem.innerHTML = `
        <div class="overflow-hidden rounded-xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
            <p class="text-white p-4 font-medium">${image.caption}</p>
          </div>
          <img 
            src="${image.src}" 
            alt="${image.alt}"
            class="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-110"
            onerror="this.src='/placeholder-image.jpg';"
          />
        </div>
      `;
      
      galleryContent.appendChild(galleryItem);
    });
  }

  // Gallery navigation
  const galleryNext = document.querySelector('.gallery-next');
  const galleryPrev = document.querySelector('.gallery-prev');
  
  if (galleryNext && galleryPrev && galleryContent) {
    let currentPos = 0;
    const itemWidth = 100 / 3; // Show 3 items at a time on desktop
    const galleryItems = document.querySelectorAll('.gallery-item');
    const maxPos = galleryItems.length - 3;
    
    galleryNext.addEventListener('click', () => {
      if (currentPos < maxPos) {
        currentPos++;
        updateGalleryPosition();
      }
    });
    
    galleryPrev.addEventListener('click', () => {
      if (currentPos > 0) {
        currentPos--;
        updateGalleryPosition();
      }
    });
    
    function updateGalleryPosition() {
      galleryContent.style.transform = `translateX(-${currentPos * itemWidth}%)`;
    }
    
    // Adjust for responsive layout
    function adjustGalleryItemWidth() {
      const width = window.innerWidth;
      let itemsPerView = 3; // Default for desktop
      
      if (width < 768) {
        itemsPerView = 1; // Mobile
      } else if (width < 1024) {
        itemsPerView = 2; // Tablet
      }
      
      const newItemWidth = 100 / itemsPerView;
      galleryItems.forEach(item => {
        item.style.flex = `0 0 ${newItemWidth}%`;
      });
      
      // Update max position
      return galleryItems.length - itemsPerView;
    }
    
    // Initial setup and window resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newMaxPos = adjustGalleryItemWidth();
        maxPos = newMaxPos;
        currentPos = Math.min(currentPos, maxPos);
        updateGalleryPosition();
      }, 100);
    });
    
    // Initial call
    maxPos = adjustGalleryItemWidth();
  }

  // Projects data (for projects.html)
  const projects = [
    {
      id: "1",
      title: "Smart Energy Monitoring System",
      thumbnail: "/project-energy.jpg",
      department: "Electrical & Electronics Engineering",
      status: "ongoing",
      tags: ["electrical", "ongoing"],
      description: "A system to monitor and optimize energy consumption in buildings using IoT sensors and machine learning algorithms."
    },
    {
      id: "2",
      title: "AI-Based Medical Diagnosis Tool",
      thumbnail: "/project-ai.jpg",
      department: "Computer Science & Engineering",
      status: "ongoing",
      tags: ["computer-science", "ongoing"],
      description: "Development of an AI system to assist doctors in diagnosing diseases from medical images and patient data."
    },
    {
      id: "3",
      title: "Autonomous Drone for Disaster Management",
      thumbnail: "/project-robot.jpg",
      department: "Electronics & Communication Engineering",
      status: "ongoing",
      tags: ["electronics", "ongoing"],
      description: "Design and implementation of autonomous drones for disaster area surveying and communication relay."
    },
    {
      id: "4",
      title: "Sustainable Construction Materials",
      thumbnail: "/project-civil.jpeg",
      department: "Civil Engineering",
      status: "completed",
      tags: ["civil", "completed"],
      description: "Research on eco-friendly construction materials derived from agricultural waste and recycled plastics."
    },
    {
      id: "5",
      title: "Advanced Robotics Control System",
      thumbnail: "/placeholder-image.jpg",
      department: "Mechanical Engineering",
      status: "completed",
      tags: ["mechanical", "completed"],
      description: "Development of a precision control system for industrial robots to enhance manufacturing efficiency."
    },
    {
      id: "6",
      title: "Natural Language Processing for Regional Languages",
      thumbnail: "/placeholder-image.jpg",
      department: "Computer Science & Engineering",
      status: "completed",
      tags: ["computer-science", "completed"],
      description: "Building NLP models for Indian regional languages to improve accessibility of digital content."
    }
  ];

  // Populate projects grid
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = `project-card ${project.tags.join(' ')}`;
      
      projectCard.innerHTML = `
        <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <a href="project-detail.html?id=${project.id}">
            <div class="relative h-48 overflow-hidden">
              <img 
                src="${project.thumbnail}" 
                alt="${project.title}" 
                class="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                onerror="this.src='/placeholder-image.jpg';"
              />
              <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                <span class="inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  project.status === 'ongoing' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }">
                  ${project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </span>
              </div>
            </div>
          </a>
          <div class="p-6">
            <p class="text-sm text-gray-500 mb-2">${project.department}</p>
            <h3 class="font-semibold text-lg mb-2 text-nitte-blue">
              <a href="project-detail.html?id=${project.id}" class="hover:underline">
                ${project.title}
              </a>
            </h3>
            <p class="text-gray-600 text-sm mb-4">${project.description}</p>
            <a href="project-detail.html?id=${project.id}" class="text-nitte-blue text-sm font-medium hover:underline flex items-center">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }

  // Project filter
  const filterButtons = document.querySelectorAll('.filter-button');
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            if (card.classList.contains(filter)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // Faculty data
  const facultyData = {
    'aeronautical-engineering': [
      {
        name: "Dr. Ravi Kumar",
        position: "Professor & Head of Department",
        specialization: "Aerospace Propulsion Systems",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IIT Bombay), M.Tech (IIT Madras)",
        publications: 42,
        email: "ravi.kumar@nmit.ac.in"
      },
      {
        name: "Dr. Lekha Sridhar",
        position: "Associate Professor",
        specialization: "Computational Fluid Dynamics",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IISc Bangalore), M.Tech (IIT Delhi)",
        publications: 28,
        email: "lekha.sridhar@nmit.ac.in"
      },
      {
        name: "Dr. Amit Patel",
        position: "Assistant Professor",
        specialization: "Aircraft Structures & Materials",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IIT Kanpur), M.E. (BITS Pilani)",
        publications: 15,
        email: "amit.patel@nmit.ac.in"
      }
    ],
    'artificial-intelligence-data-science': [
      {
        name: "Dr. Neha Sharma",
        position: "Professor & Head of Department",
        specialization: "Machine Learning, Deep Learning",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IISc Bangalore), M.Tech (IIIT Hyderabad)",
        publications: 45,
        email: "neha.sharma@nmit.ac.in"
      },
      {
        name: "Dr. Vikram Goyal",
        position: "Associate Professor",
        specialization: "Natural Language Processing, Computer Vision",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IIT Delhi), MS (Georgia Tech)",
        publications: 32,
        email: "vikram.goyal@nmit.ac.in"
      },
      {
        name: "Dr. Ananya Desai",
        position: "Assistant Professor",
        specialization: "Data Mining, Big Data Analytics",
        image: "/placeholder-image.jpg",
        qualification: "Ph.D. (IIIT Bangalore), MTech (NIT Surathkal)",
        publications: 18,
        email: "ananya.desai@nmit.ac.in"
      }
    ]
  };

  // Research areas data
  const researchAreas = {
    'aeronautical-engineering': [
      {
        title: "Computational Fluid Dynamics",
        description: "Advanced simulation and modeling of fluid flows around aircraft structures to optimize aerodynamic performance.",
        icon: "🛩️"
      },
      {
        title: "Advanced Propulsion Systems",
        description: "Research on next-generation aircraft engines with improved efficiency and reduced emissions.",
        icon: "🚀"
      },
      {
        title: "Lightweight Materials",
        description: "Development of composite materials and structures for aircraft with improved strength-to-weight ratio.",
        icon: "🔬"
      }
    ],
    'artificial-intelligence-data-science': [
      {
        title: "Deep Learning Applications",
        description: "Cutting-edge neural network architectures for solving complex problems in various domains.",
        icon: "🧠"
      },
      {
        title: "Natural Language Processing",
        description: "Analysis and generation of human language for translation, summarization, and chatbots.",
        icon: "💬"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for object detection, face recognition, and autonomous navigation.",
        icon: "👁️"
      }
    ]
  };

  // Populate faculty page
  const facultyGrid = document.getElementById('faculty-grid');
  const researchAreasGrid = document.getElementById('research-areas-grid');
  const departmentTitleEl = document.getElementById('department-title');
  
  if (facultyGrid && window.location.pathname.includes('faculty.html')) {
    // Get department from URL
    const urlParams = new URLSearchParams(window.location.search);
    const department = urlParams.get('department') || 'aeronautical-engineering';
    
    // Set department title
    if (departmentTitleEl) {
      const deptName = departments.find(d => d.slug === department)?.name || 'Aeronautical Engineering';
      departmentTitleEl.textContent = `Department of ${deptName}`;
    }
    
    // Populate faculty
    const facultyMembers = facultyData[department] || facultyData['aeronautical-engineering'];
    
    facultyMembers.forEach(faculty => {
      const facultyCard = document.createElement('div');
      facultyCard.className = "bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md";
      
      facultyCard.innerHTML = `
        <div class="relative h-48 overflow-hidden bg-gray-100">
          <img 
            src="${faculty.image}" 
            alt="${faculty.name}" 
            class="w-full h-full object-cover"
            onerror="this.src='/placeholder-image.jpg';"
          />
        </div>
        <div class="p-6">
          <h3 class="font-semibold text-lg mb-1 text-nitte-blue">${faculty.name}</h3>
          <p class="text-gray-600 text-sm mb-3">${faculty.position}</p>
          
          <div class="space-y-2 text-sm">
            <div class="flex items-start">
              <span class="text-gray-500 min-w-[120px]">Specialization:</span>
              <span class="text-gray-800">${faculty.specialization}</span>
            </div>
            <div class="flex items-start">
              <span class="text-gray-500 min-w-[120px]">Qualification:</span>
              <span class="text-gray-800">${faculty.qualification}</span>
            </div>
            <div class="flex items-start">
              <span class="text-gray-500 min-w-[120px]">Publications:</span>
              <span class="text-gray-800">${faculty.publications}</span>
            </div>
            <div class="flex items-start">
              <span class="text-gray-500 min-w-[120px]">Email:</span>
              <span class="text-gray-800">${faculty.email}</span>
            </div>
          </div>
        </div>
      `;
      
      facultyGrid.appendChild(facultyCard);
    });
    
    // Populate research areas
    if (researchAreasGrid) {
      const areas = researchAreas[department] || researchAreas['aeronautical-engineering'];
      
      areas.forEach(area => {
        const areaCard = document.createElement('div');
        areaCard.className = "bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md";
        
        areaCard.innerHTML = `
          <div class="text-4xl mb-4">${area.icon}</div>
          <h3 class="font-semibold text-lg mb-2 text-nitte-blue">${area.title}</h3>
          <p class="text-gray-600">${area.description}</p>
        `;
        
        researchAreasGrid.appendChild(areaCard);
      });
    }
  }

  // Login form validation
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const loginButton = document.getElementById('login-button');
      const btnText = loginButton.querySelector('.btn-text');
      const btnLoading = loginButton.querySelector('.btn-loading');
      const emailError = document.querySelector('.email-error');
      const passwordError = document.querySelector('.password-error');
      const loginError = document.getElementById('login-error');
      const errorMessage = loginError.querySelector('.error-message');
      
      // Reset errors
      emailError.classList.add('hidden');
      passwordError.classList.add('hidden');
      loginError.classList.add('hidden');
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailError.classList.remove('hidden');
        return;
      }
      
      // Validate password
      if (passwordInput.value.length < 6) {
        passwordError.classList.remove('hidden');
        return;
      }
      
      // Show loading state
      btnText.textContent = 'Signing in...';
      btnLoading.classList.remove('hidden');
      loginButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        const validCredentials = [
          { email: 'faculty@nmit.ac.in', password: 'password123', role: 'faculty' },
          { email: 'member@nmit.ac.in', password: 'password123', role: 'member' }
        ];
        
        const user = validCredentials.find(u => 
          u.email === emailInput.value && u.password === passwordInput.value
        );
        
        if (user) {
          // Store user in localStorage
          localStorage.setItem('user', JSON.stringify({
            email: user.email,
            role: user.role,
            name: user.role === 'faculty' ? 'Dr. Jane Smith' : 'Rahul Kumar',
            department: user.role === 'faculty' ? 'Computer Science' : 'Information Technology'
          }));
          
          // Redirect to dashboard
          window.location.href = 'dashboard.html';
        } else {
          // Show error
          loginError.classList.remove('hidden');
          errorMessage.textContent = 'Invalid email or password. Please try again.';
          
          // Reset button
          btnText.textContent = 'Sign In';
          btnLoading.classList.add('hidden');
          loginButton.disabled = false;
        }
      }, 1500);
    });
  }

  // Project detail page
  if (window.location.pathname.includes('project-detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
        // Update project details
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-title-breadcrumb').textContent = project.title;
        document.getElementById('project-department').textContent = project.department;
        document.getElementById('project-status').textContent = project.status === 'ongoing' ? 'Ongoing' : 'Completed';
        document.getElementById('project-status').className = `inline-block px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`;
        
        // Update project image
        document.getElementById('project-image').src = project.thumbnail;
        document.getElementById('project-image').alt = project.title;
      }
    }
  }
});
