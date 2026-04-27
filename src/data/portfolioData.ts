export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  thumbnail: string;
  live: string;
  github: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
};

export type Internship = {
  id: string;
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  certificate: string;
};

export type Certificate = {
  id: string;
  title: string;
  platform: string;
  date: string;
  description: string;
  image: string;
};

export type Education = {
  degree: string;
  institute: string;
  duration: string;
  score: string;
};

export const profile = {
  name: 'Aryan Adhav',
  role: 'Full Stack Developer | AI Enthusiast',
  location: 'Kharadi, Pune',
  email: 'aryanadhav00@gmail.com',
  github: 'https://github.com/AryanA2323',
  linkedin: 'https://www.linkedin.com/in/aryanadhav',
  resumeUrl: '/Aryan_Adhav_Resume.pdf',
  summary:
    'Full Stack Developer with expertise in MERN stack and AI/ML integration. Experienced in building production-ready web apps with React, Node.js, Firebase, and Python.',
  about:
    "I enjoy building practical software that blends clean engineering, accessible UI, and real-world impact. My strongest interest areas are full-stack product development, AI-assisted workflows, and developer-focused tooling.",
};

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material-UI', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'Firebase', 'MongoDB'],
  },
  {
    title: 'AI/ML & Tools',
    skills: ['Google Gemini', 'scikit-learn', 'Tesseract OCR', 'Gradio', 'pandas'],
  },
  {
    title: 'Database & Cloud',
    skills: ['Firebase', 'Firestore', 'MongoDB Atlas', 'PostgreSQL', 'Git', 'Vite'],
  },
];

export const education: Education[] = [
  {
    degree: 'B.E in Information Technology',
    institute: "JSPM's Jaywantrao Sawant College of Engineering, Pune (JSCOE)",
    duration: '2024 - Present',
    score: 'Last Sem CGPA: 8.4',
  },
  {
    degree: 'Diploma in Computer Science',
    institute: "JSPM's Bhivrabai Sawant Polytechnic, Wagholi",
    duration: '2021 - 2024',
    score: 'Marks: 90%',
  },
  {
    degree: 'Schooling (1st - 10th Standard)',
    institute: 'Dr. Mrs. Erin N Nagarwala Day School',
    duration: '-',
    score: 'Marks: 83%',
  },
];

export const projects: Project[] = [
  {
    id: 'krushimandi-admin',
    title: 'Krushimandi Admin Panel',
    description:
      'Full-stack agricultural marketplace management system built during internship with role-based control, real-time Firebase synchronization, and operational analytics.',
    stack: ['React 19', 'Material-UI', 'Firebase', 'Firestore', 'Node.js 22'],
    thumbnail:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    live: 'https://krushimandiadmin.netlify.app/',
    github: 'https://github.com/AryanA2323/krushimandiadmin',
    tags: ['Full-Stack', 'Firebase', 'Admin Dashboard'],
    featured: true,
    highlights: [
      '50+ React components across 8 major sections',
      '8 Firestore collections with real-time CRUD',
      'Role-based access control for Super Admin and Admin',
    ],
  },
  {
    id: 'medisense-ai',
    title: 'MediSense AI - Intelligent Healthcare Platform',
    description:
      'AI-powered healthcare platform with symptom analysis, medicine OCR, chatbot support, and medical-facility discovery powered by a custom ML pipeline.',
    stack: ['React 18', 'FastAPI', 'Python ML', 'Tesseract OCR', 'Firebase'],
    thumbnail:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/AryanA2323/MediSense-AI',
    tags: ['AI/ML', 'Healthcare', 'Full-Stack'],
    featured: true,
    highlights: [
      'Custom Random Forest model with 99% accuracy',
      'Microservice architecture using React + Express + FastAPI',
      '15 REST endpoints and 10,500+ lines of production code',
    ],
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    description:
      'Comprehensive MERN stack library app with advanced search, borrow management, cloud MongoDB Atlas integration, and full CRUD workflows.',
    stack: ['MongoDB', 'Express', 'React 19', 'Node.js', 'Mongoose'],
    thumbnail:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/AryanA2323/ADBMS-Mini-Project',
    tags: ['MERN Stack', 'Cloud Database', 'Full-Stack'],
    featured: false,
    highlights: [
      '13+ RESTful endpoints across books and borrows modules',
      'MongoDB Atlas integration with robust schema validation',
      'Real-time debounced search for multi-field querying',
    ],
  },
  {
    id: 'video-summarizer-quiz',
    title: 'Video Summarizer and Quiz Generator',
    description:
      'AI-powered educational platform that turns YouTube lectures into summaries, quizzes, and contextual chatbot interactions using Gemini.',
    stack: ['Python', 'Gradio', 'Google Gemini AI', 'YouTube API', 'FastAPI'],
    thumbnail:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/AryanA2323/Vedio_Summarizer',
    tags: ['AI/ML', 'EdTech', 'Python'],
    featured: true,
    highlights: [
      'Unified summarization, quiz generation, and Q&A in one flow',
      'Supports multiple YouTube URL formats with robust parsing',
      'AI-first architecture with fast interactive UI built in Gradio',
    ],
  },
];

export const internships: Internship[] = [
  {
    id: 'i1',
    company: 'Krushimandi Innovations Pvt Ltd',
    logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop',
    role: 'Software Development Intern',
    duration: 'Jun 2024 - Aug 2024',
    description:
      'Designed and implemented a complete admin dashboard for an agricultural marketplace with real-time notifications, feedback workflows, and role-based access control.',
    responsibilities: [
      'Developed comprehensive admin panel with React 19 and Material-UI',
      'Integrated Firebase services for Firestore, Authentication, and Storage',
      'Created user management for farmers and buyers with real-time updates',
      'Implemented role-based access control for Super Admin and Admin users',
      'Built responsive UI following Material Design guidelines',
      'Handled CORS configuration for cloud storage and data operations',
    ],
    technologies: ['React 19', 'Material-UI', 'Firebase', 'Firestore', 'Node.js'],
    certificate: '#',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: 'Code4EdTech Hackathon 2025',
    platform: 'Innomatics Research Labs',
    date: '22 Sep 2025',
    description:
      'Secured 7th place among 150+ teams by building an AI-powered platform that analyzes resumes against job descriptions.',
    image: '/certificates/Aryan_Adhav_Certificates.pdf#page=5',
  },
  {
    id: 'c2',
    title: 'MongoDB for SQL Professionals',
    platform: 'MongoDB University',
    date: '26 Sep 2025',
    description:
      'Completed advanced MongoDB coursework covering architecture, query modeling, and NoSQL design for SQL practitioners.',
    image: '/certificates/MongoDB_Certificate.pdf',
  },
];