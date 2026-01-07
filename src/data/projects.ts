export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  badge?: 'LIVE' | 'NDA' | 'DEMO' | 'CASE_STUDY';
  liveUrl?: string;
  demoVideo?: string;
  caseStudyUrl?: string;
  features?: string[];
  architecture?: string;
  challenges?: string[];
}

export const projects: Project[] = [
  {
    id: 'mllops-json-viewer',
    title: 'MLloOps – JSON Viewer & Annotation Tool',
    description: 'A sophisticated JSON viewer and annotation tool for machine learning operations with OAuth integration and PDF support.',
    tech: ['React', 'OAuth (Google/MS)', 'PDF.js', 'JSON Editor', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/datwcxi7y/image/upload/v1767724142/Screenshot_2026-01-06_11.56.44_PM_jzprgs.png',
    badge: 'DEMO',
    demoVideo: 'https://res.cloudinary.com/datwcxi7y/image/upload/v1758274580/GIF_V2_wqinhg.gif',
    features: [
      'OAuth authentication with Google and Microsoft',
      'Interactive JSON tree viewer with search',
      'PDF annotation and highlighting',
      'Real-time collaboration features',
      'Export annotations in multiple formats',
    ],
    architecture: 'React frontend with modular component architecture, integrated with OAuth providers for enterprise authentication.',
    challenges: [
      'Complex JSON parsing for deeply nested structures',
      'PDF rendering optimization for large documents',
      'Implementing real-time sync across users',
    ],
  },
  {
    id: 'thunder-auto',
    title: 'Thunder Auto – 3D Automotive Website',
    description: 'An immersive 3D automotive showcase website with stunning animations and interactive product displays.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    badge: 'LIVE',
    liveUrl: 'https://thunderauto.vercel.app/',
    features: [
      'Interactive 3D car model viewer',
      'Smooth scroll-based animations',
      'Configuration customizer',
      'Performance optimized for mobile',
    ],
  },
  {
    id: 'dhvani-transcription',
    title: 'Dhvani – Audio Transcription Dashboard',
    description: 'A real-time audio transcription dashboard with speaker diarization and multi-language support.',
    tech: ['React', 'FastAPI', 'Redux', 'WebSocket', 'Python'],
    image: 'https://res.cloudinary.com/datwcxi7y/image/upload/v1767724673/Screenshot_2026-01-07_12.05.29_AM_nbo7ap.png',
    badge: 'NDA',
    
    features: [
      'Real-time audio transcription',
      'Speaker identification and diarization',
      'Multi-language support',
      'Export to multiple formats (SRT, VTT, TXT)',
      'Timestamp editing interface',
    ],
  },
  {
    id: 'employee-portal',
    title: 'Employee Portal Management System',
    description: 'A comprehensive employee management portal with role-based access, leave management, and performance tracking.',
    tech: ['React', 'FastAPI', 'JWT', 'MongoDB', 'Redux'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    badge: 'LIVE',
    liveUrl: 'https://employee-portal-omega.vercel.app/',
    features: [
      'Role-based access control',
      'Leave management system',
      'Performance review module',
      'Attendance tracking',
      'Admin dashboard with analytics',
    ],
  },
  {
    id: 'ai-voice-chatbot',
    title: 'AI Voice Chatbot for Farmers',
    description: 'A multilingual AI-powered voice chatbot providing agricultural assistance to farmers in regional languages.',
    tech: ['React', 'FastAPI', 'Web Speech API', 'Python', 'NLP'],
    image: 'https://res.cloudinary.com/datwcxi7y/image/upload/v1767725183/bot_jco5cj.jpg',
    badge: 'NDA',
    
    features: [
      'Voice input in regional languages',
      'AI-powered agricultural advice',
      'Weather and market price integration',
      'Offline mode for rural areas',
    ],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard (Full Stack)',
    description: 'A complete end-to-end SaaS dashboard with authentication, analytics, and subscription management.',
    tech: ['Next.js 14', 'NestJS', 'Prisma', 'MySQL', 'JWT', 'Swagger'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    badge: 'NDA',
  
    features: [
      'User authentication with JWT',
      'Real-time analytics dashboard',
      'Subscription management',
      'API documentation with Swagger',
      'Role-based permissions',
    ],
  },
  {
    id: 'rbg-research',
    title: 'RBG Research – Company Website',
    description: 'A professional company website for RBG Research with modern design and CI/CD deployment.',
    tech: ['React', 'GitHub Pages', 'GitHub Actions', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    badge: 'CASE_STUDY',
    caseStudyUrl: '/case-studies/rbg-research',
    features: [
      'Responsive modern design',
      'Automated CI/CD with GitHub Actions',
      'SEO optimized',
      'Contact form integration',
    ],
  },
];
