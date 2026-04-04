// src/data.js
export const personalInfo = {
    name: "Bethelhem Tesfaye Haileselassie",
    role: "Fullstack Software Developer",
    email: "bethelhemtesfaye95@gmail.com",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/bethelhem-tesfaye-b26277272",
    github: "https://github.com/BethTesHS",
};

export const skills = [
    "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
    "Laravel", "PHP", "Python", "C#", "Java", 
    "Flutter", "Android Studio", 
    "MySQL", "PostgreSQL", "Supabase", "Firebase", 
    "Azure", "Vercel", "Kusto Query Language", "Microsoft Bot/Agent Framework", 
    "Git/GitHub", 
    "Figma", "Krita", "Clip Studio"
];

export const experience = [
    {
      role: "Software Developer",
      company: "Kenbright",
      date: "February 2025 - Present",
      points: [
        "Built a full-stack learning platform using React, Node.js, Express, and Tailwind CSS.",
        "Integrated Supabase for authentication and cloud storage to manage educational resources and PDF modules.",
        "Implemented interactive user features including an AI-based grading system for quizzes and progress tracking."
      ],
      tech: ["React", "Node.js", "Express", "Tailwind CSS", "Supabase", "Gemini AI API"]
    },
    {
      role: "Frontend Software Developer",
      company: "Homed-UK",
      date: "February 2025 - Present",
      points: [
        "Developed frontend flows using React and TypeScript, ensuring optimized user experiences for distinct persona requirements.",
        "Implemented UI designs into clean, responsive web pages and components for a high-traffic property platform using Tailwind CSS and Vite.",
        "Troubleshot and fixed UI bugs across devices and browsers, specifically resolving compatibility issues."
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      role: "Software Engineering Intern",
      company: "Microsoft",
      date: "July 2025 - September 2025",
      points: [
        "Designed and developed core components of an AI-powered diagnostic chatbot handling build and deployment failures.",
        "Integrated Azure OpenAI and Azure AI Search to implement RAG for context-aware error analysis.",
        "Implemented secure authentication and authorization flows using Managed Identity and Microsoft Entra ID."
      ],
      tech: ["Azure OpenAI", "Azure AI Search", "RAG", "Microsoft Entra ID"]
    },
    {
      role: "POS System Developer",
      company: "Riset Software & Systems LTD",
      date: "January 2025 - March 2025",
      points: [
        "Built a full-stack Point of Sale (POS) application using Laravel and PHP.",
        "Engineered dynamic inventory control with real-time stock synchronization to prevent discrepancies.",
        "Integrated interactive charts to visualize data trends and display stock history on an admin dashboard."
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"]
    }
  ];

export const projects = [
    {
      title: "Help-Me-Find! - A Lost & Found Web Application",
      tech: ["Laravel", "PHP", "JavaScript", "Gemini AI API", "WebSockets", "Leaflet.js"],
      description: "Developed a full-stack platform for item management featuring a RAG-based search engine using Gemini AI for image-to-text and vector embeddings. Implemented real-time user messaging via Laravel Broadcasting/Reverb, integrated geospatial mapping for item tracking, and built a QR code generation system.",
      link: "#" 
    },
    {
      title: "Tembea Kenya - Mobile Application",
      tech: ["Flutter", "Dart", "Laravel", "Firebase", "MySQL", "Figma"],
      description: "Designed and developed a mobile application featuring a custom UI/UX framework designed in Figma. Built a robust backend utilizing Laravel, MySQL, and Firebase, integrated third-party services for enhanced scalability, and maintained comprehensive lifecycle documentation.",
      link: "#"
    },
    {
      title: "Media Downloader Web App",
      tech: ["Python", "Flask"],
      description: "Developed a simplified web application to seamlessly download audio and video of media/playlist from platforms like YouTube and Spotify, featuring custom format selection and directory management.",
      link: "#"
    },
];