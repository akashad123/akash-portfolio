import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  developer: {
    name: "AKASH",
    monogram: "AD",
    role: "FULL STACK WEB DEVELOPER",
    focalNumber: "",
    focalNumberLabel: "",
    tagline: "Full stack web developer crafting high-performance web systems, responsive user interfaces & production-grade cloud and AI backends.",
    bio: "I am a full stack web developer currently working at Nrithya Dances. I combine high-precision frontend user interface design with battle-tested backend architecture, RESTful APIs, database engineering, and multimodal AI automation — building software designed for performance, resilience, and immediate real-world impact.",
    location: "Kerala, India",
    experienceYears: "1+ Years in Software Development",
    status: "FULL STACK DEVELOPER AT NRITHYA DANCES",

    statement: {
      beforeHighlight: "I BUILD DIGITAL PRODUCTS THAT ARE ",
      highlight1: "SIMPLE, FAST, AND BUILT TO SCALE.",
      middleText: "FROM POLISHED FRONTEND EXPERIENCES TO FULL-STACK SYSTEMS, I TURN COMPLEX IDEAS INTO RELIABLE, REAL-WORLD SOFTWARE. I FOCUS ON CLEAN INTERFACES, STRONG ARCHITECTURE, AND PRACTICAL SOLUTIONS THAT ARE ",
      highlight2: "FAST, RESILIENT, AND PRODUCTION-READY.",
      afterText: "",
      paragraphs: []
    },

    socials: {
      github: "https://github.com/akashad123",
      linkedin: "https://linkedin.com/in/akash",
      email: "contact@akash.dev"
    }
  },

  stats: [
    { value: "100%", label: "Verified AI Scoring" }
  ],


  projects: [
    {
      id: "redconnect",
      title: "REDCONNECT",
      subtitle: "Kerala Blood Donation Platform",
      description: [
        "Real-time blood donation platform serving real users and hospitals across Kerala.",
        "Comprehensive district-based logistics engine spanning all 14 Kerala administrative districts.",
        "Live web-socket updates for urgent blood requests and real-time donor availability via Socket.IO.",
        "Hardened security posture featuring JWT authentication, Helmet headers, CORS policies, and strict API rate limiting."
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
      github: "https://github.com/akashad123/redconnect",
      live: "https://redconnect-kerala.vercel.app",
      featured: true,
      tag: "REAL-TIME LOGISTICS",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80",
      date: "2024 – 2025"
    },
    {
      id: "lifeos",
      title: "LIFEOS",
      subtitle: "Personal Productivity & Asset Operating System",
      description: [
        "Unified productivity workspace orchestrating daily routines, recurring expenses, encrypted documents, and scheduled meetings.",
        "Automated vehicle service intervals and asset warranty tracking with proactive notifications.",
        "Predictive autocomplete powered by historical telemetry and saved user dictionaries.",
        "Cloud database, relational schema, row-level security, and encrypted storage implemented on Supabase."
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
      github: "https://github.com/akashad123/LifeOS",
      live: "https://life-os-five-alpha.vercel.app/",
      featured: true,
      tag: "PERSONAL WORKSPACE",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      date: "2024 – 2025"
    },
    {
      id: "onakkoottu",
      title: "ONAKKOOTTU",
      subtitle: "Onam Festival E-commerce & Logistics Engine",
      description: [
        "High-conversion e-commerce ordering storefront for artisanal Kerala delicacies.",
        "Fluid multi-product checkout workflow optimized for mobile viewport ergonomics.",
        "Instant order dispatch and synchronization to Google Sheets using custom Google Apps Script micro-services.",
        "Dynamic SKU inventory validation and automated unique order tracking identifier generation."
      ],
      tech: ["React", "Tailwind CSS", "Google Apps Script", "Google Sheets API"],
      github: "https://github.com/akashad123/onamChips",
      live: "https://onakkoottu.vercel.app/",
      featured: true,
      tag: "ECOMMERCE PLATFORM",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      date: "2024"
    }
  ],

  caseStudies: [
    {
      id: "ai-teacher-scoring",
      slug: "nrithya-ai-teacher-scoring",
      title: "AI Teacher Scoring System",
      subtitle: "Multimodal AI pipeline evaluating online dance instruction quality",
      company: "Nrithya Dances",
      role: "Full-Stack Developer Intern",
      duration: "Jul 2026 – Present",
      status: "MVP IN PRODUCTION",
      techStack: ["Python", "Google Gemini API", "ffmpeg", "Supabase (PostgreSQL)", "React", "Vercel", "AWS EC2", "pm2", "Zoom API"],
      overview: "I built a system that checks classes automatically. The AI listens to the class and looks at important moments in the video to find proof, like whether the teacher greeted every student or gave clear corrections. Then simple Python rules give the score. The AI only finds the proof; the rules decide the score. That keeps every score fair and easy to explain.",
      problem: "At Nrithya Dances, a person had to watch every recorded class and fill in an Excel sheet to check how well the teacher taught. It was slow, so only a few classes could be checked, and the feedback wasn’t always the same from one class to the next.",
      solution: "I built a system that checks classes automatically. The AI listens to the class and looks at important moments in the video to find proof, like whether the teacher greeted every student or gave clear corrections. Then simple Python rules give the score. The AI only finds the proof; the rules decide the score. That keeps every score fair and easy to explain.",
      process: [
        "Worked with the founder to turn the academy’s teaching handbook into 11 clear checks, each with at least 6 points to measure.",
        "Built the pipeline flow: class video, then AI evidence extraction, then Python rules, then the results saved in the database.",
        "Built a website where reviewers can see each score along with its proof, and click a link that opens the video at the exact moment."
      ],
      challenges: [
        {
          challenge: "Some classes were scored before the teacher marked attendance, so students who were actually present were counted as absent.",
          solution: "I made the system wait until attendance was marked, and built a tool to fix the wrong scores. One class went from 57.8% to its correct score of 78.9%."
        }
      ],
      results: [
        "When I randomly checked 15 of the AI’s proof moments against the real video, all 15 were real.",
        "When a check isn’t reliable yet, I mark it 'Not judged yet' instead of showing a wrong result."
      ],
      learnings: [
        "Let AI find the proof, but let fixed rules decide the score.",
        "Always check AI results against the real source."
      ]
    },
    {
      id: "zoom-youtube-automation",
      slug: "nrithya-zoom-youtube-automation",
      title: "Zoom to YouTube Recording Automation",
      subtitle: "Autonomous cloud distribution of student class recordings",
      company: "Nrithya Dances",
      role: "Maintainer & Developer",
      duration: "Jul 2026 – Present",
      status: "LIVE DEPLOYMENT",
      techStack: ["Node.js", "Zoom API", "YouTube API", "WhatsApp (WATI)", "Supabase", "AWS EC2", "pm2", "cron"],
      overview: "A program on an AWS server runs 4 times a day. It downloads new Zoom recordings, uploads them to YouTube, and sends the link to students on WhatsApp, with no manual work. I maintain and improve this system: I keep it running, update it through GitHub, and fix problems when they come up.",
      problem: "Students need recordings of their classes so they can practise at home. With many teachers and classes every day, uploading and sending each recording by hand wasn’t possible.",
      solution: "A program on an AWS server runs 4 times a day. It downloads new Zoom recordings, uploads them to YouTube, and sends the link to students on WhatsApp, with no manual work.",
      process: [
        "A program on an AWS server runs 4 times a day to process all daily classes.",
        "Downloads new Zoom recordings and uploads them directly to YouTube.",
        "Sends direct playback links to students on WhatsApp with zero manual work.",
        "Maintained and improved through GitHub with continuous reliability checks."
      ],
      challenges: [
        {
          challenge: "One day, recordings stopped coming for two teachers. I traced the cause: their names in the program’s settings didn’t match the database.",
          solution: "After I fixed the names and restarted the program, 13 missed recordings came back in the next run."
        },
        {
          challenge: "The operations team wanted some classes uploaded to YouTube but not sent to students.",
          solution: "I added a rule to skip sending for those classes while still uploading them, and checked that it worked after the next run."
        }
      ],
      results: [
        "Autonomous processing 4 times a day with zero manual uploading or messaging.",
        "13 missed recordings successfully recovered after fixing teacher name settings.",
        "Added flexible routing rule to upload specific classes while skipping student WhatsApp delivery."
      ],
      learnings: [
        "A tiny mismatch, like a name, can quietly stop an automation.",
        "Before changing anything, always check what else it will affect."
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Nrithya Dances",
      duration: "Jul 2026 – Present",
      description: [
        "Currently working as a Full-Stack Developer at Nrithya Dances, engineering automated AI evaluation pipelines, administrative web portals, and media distribution services.",
        "Architected an AI class quality review system that analyzes recorded dance sessions and evaluates teaching standards using Python, Google Gemini API, and Supabase (PostgreSQL).",
        "Engineered an administrative review portal in React deployed on Vercel, enabling supervisors to verify AI telemetry against video ground-truth with zero operational friction.",
        "Automated continuous scoring and media distribution on AWS EC2 utilizing pm2 background daemons, overseeing server maintenance and zero-downtime deployments.",
        "Resolved mission-critical data consistency issues in attendance reconciliation and developed data recovery tooling for historical session data."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Stratagile Pvt Ltd",
      duration: "Mar 2024 – Mar 2025",
      description: [
        "Engineered scalable web applications utilizing React.js and Redux for state governance.",
        "Implemented server-rendered views with EJS templating engines for legacy applications.",
        "Developed backend content APIs utilizing Strapi CMS for cross-platform Flutter mobile applications.",
        "Accelerated page speed benchmarks by applying lazy loading, bundle code-splitting, and render optimization."
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Luminar Technolab",
      duration: "Jul 2023 – Feb 2024",
      description: [
        "Engineered full-stack applications with MongoDB, Express.js, React.js, and Node.js.",
        "Crafted responsive user interfaces using React.js and Tailwind CSS with custom design systems.",
        "Designed and consumed modular RESTful API endpoints with Express and Node.",
        "Managed database schema design and CRUD operations within MongoDB Atlas.",
        "Gained comprehensive experience in end-to-end MERN architecture and continuous delivery."
      ]
    }
  ],

  skills: [
    {
      title: "Frontend Engineering",
      items: ["React.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "Sass", "Bootstrap", "EJS"]
    },
    {
      title: "Backend & Systems",
      items: ["Node.js", "Express.js", "Python", "Strapi CMS", "REST APIs", "Socket.IO"]
    },
    {
      title: "Databases & Storage",
      items: ["PostgreSQL (Supabase)", "MongoDB", "MySQL", "Supabase Storage"]
    },
    {
      title: "Cloud, DevOps & Automation",
      items: ["AWS EC2", "Vercel", "pm2", "Docker basics", "GitHub Actions", "cron"]
    },
    {
      title: "AI Integration & LLMs",
      items: ["Google Gemini API", "Multimodal Video/Audio Processing", "Claude", "ChatGPT", "Antigravity"]
    },
    {
      title: "Full Stack Architecture & Reliability",
      items: ["Full Stack Architecture", "RESTful API Design", "Operational Troubleshooting", "Zero-Downtime Reliability", "JWT Authentication", "Rate Limiting", "Performance Profiling"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "LEAD College, Palakkad",
      duration: "2025 – 2027",
      status: "Pursuing S4"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Calicut",
      duration: "2020 – 2023"
    }
  ],

  partnersAndTech: [
    {
      category: "CORE TECH & FRAMEWORKS",
      items: [
        { name: "REACT", tag: "FRONTEND" },
        { name: "NODE.JS", tag: "BACKEND" },
        { name: "PYTHON", tag: "AI/AUTOMATION" },
        { name: "TYPESCRIPT", tag: "LANGUAGE" },
        { name: "TAILWIND", tag: "STYLING" },
        { name: "EXPRESS", tag: "API ENGINE" },
        { name: "SUPABASE", tag: "DATABASE" },
        { name: "POSTGRESQL", tag: "SQL ENGINE" },
        { name: "MONGODB", tag: "NOSQL" },
        { name: "AWS EC2", tag: "CLOUD INFRA" },
        { name: "GEMINI API", tag: "MULTIMODAL AI" },
        { name: "VERCEL", tag: "EDGE HOSTING" }
      ]
    }
  ]
};
