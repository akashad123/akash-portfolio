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
      beforeHighlight: "BRIDGING FRONTEND CRAFTSMANSHIP WITH FULL STACK ARCHITECTURAL RIGOR, I ",
      highlight1: "TRANSFORM COMPLEX CHALLENGES INTO REAL-WORLD OPERATIONAL SOFTWARE",
      middleText: ". FROM PIXEL-PERFECT INTERFACES TO AUTONOMOUS AI PIPELINES, EVERY SYSTEM IS AN OPERATIONAL COMMITMENT TO DELIVER EXPERIENCES THAT ARE ",
      highlight2: "FAST, RESILIENT, AND PRODUCTION-TESTED.",
      afterText: ""
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
      role: "Full-Stack Developer Intern (Developer & Maintainer)",
      duration: "Jul 2026 – Present",
      status: "MVP IN PRODUCTION",
      techStack: ["Python", "Google Gemini API", "ffmpeg", "Supabase (PostgreSQL)", "React", "Vercel", "AWS EC2", "pm2", "Zoom API"],
      overview: "An automated intelligence engine that analyzes recorded virtual classes, identifies timestamped pedagogical moments, and computes objective teacher performance scores backed by tangible video proof.",
      problem: "Manual review of instructional videos via Excel spreadsheets was labor-intensive, limiting quality checks to a tiny fraction of classes and introducing human scoring inconsistency.",
      solution: "Engineered a dual-layer system where Google Gemini multimodal AI identifies timestamped evidence moments, while deterministic Python rule engines compute scores against 11 pedagogical rubrics, ensuring 100% transparency.",
      process: [
        "Codified the academy's official teaching manual into 11 measurable benchmarks with 6+ verifiable criteria each, ratified by the founder.",
        "Built the end-to-end processing pipeline: Zoom MP4 ingest → Audio/Video slice extraction → Gemini multimodal evaluation → Python rule execution → Supabase persistence.",
        "Deployed automated daemon on AWS EC2 executing every 15 minutes, processing up to 25 full class sessions per day via pm2 background workers.",
        "Created an interactive React review portal on Vercel allowing pedagogical supervisors to audit AI marks with instant deep-links to exact video timestamps.",
        "Designed balanced rubrics: Preparation (20%), Engagement (25%), Technique (25%), Communication (15%), Session Closing (15%)."
      ],
      challenges: [
        {
          challenge: "Sessions were occasionally evaluated before instructors completed attendance registers, incorrectly flagging attendees as absent.",
          solution: "Implemented an event gate that halts scoring until attendance is finalized, accompanied by a retroactive reconciliation tool that corrected affected scores (e.g., elevating one session from 57.8% to 78.9%)."
        },
        {
          challenge: "AI hallucinated verbal exchanges during extended silent musical rehearsals.",
          solution: "Programmed strict silence-filtering routines and zero-hallucination guardrails, systematically validated through empirical manual audits."
        },
        {
          challenge: "Zoom's standard telemetry required expensive enterprise tier upgrades to verify audio sharing modes.",
          solution: "Architected a custom Zoom App integration detecting real-time audio playback states directly, avoiding costly license escalations."
        }
      ],
      results: [
        "15 out of 15 randomly audited AI evidence timestamps were 100% physically authentic.",
        "On-time verification synchronized precisely with Zoom join logs in 10 out of 10 test benchmarks.",
        "Every single metric features verifiable justification linked to exact video moments.",
        "Architected for absolute precision over superficial velocity."
      ],
      learnings: [
        "Separate AI evidence extraction from deterministic business logic.",
        "Always enforce ground-truth verification against raw media sources.",
        "Rigorous domain rubric design triumphs over raw model parameter count."
      ]
    },
    {
      id: "zoom-youtube-automation",
      slug: "nrithya-zoom-youtube-automation",
      title: "Zoom to YouTube Recording Pipeline",
      subtitle: "Autonomous cloud distribution of student class recordings",
      company: "Nrithya Dances",
      role: "Full-Stack Developer Intern (Developer & Maintainer)",
      duration: "Jul 2026 – Present",
      status: "LIVE DEPLOYMENT",
      techStack: ["Node.js", "Zoom API", "YouTube API", "WhatsApp (WATI)", "Supabase", "AWS EC2", "pm2", "cron"],
      overview: "An autonomous cloud service that ingests Zoom cloud recordings, uploads categorized videos to YouTube, and broadcasts direct playback links to enrolled students via WhatsApp.",
      problem: "Manual downloading, transcoding, YouTube uploading, and link dispatch for dozens of daily classes overwhelmed the operational team.",
      solution: "Engineered an AWS EC2 cron engine running 4 times daily that orchestrates secure Zoom token authorization, YouTube chunked media uploads, and WhatsApp delivery.",
      process: [
        "Configured robust worker daemon on AWS EC2 managed by pm2 with automatic crash recovery.",
        "Synchronized instructor Zoom credentials and recording layouts with Supabase metadata.",
        "Enforced consistent 720p/1080p recording standards across all educator profiles to guarantee student visibility."
      ],
      challenges: [
        {
          challenge: "Recording synchronization halted for two instructors due to name string discrepancies between Zoom settings and database tables.",
          solution: "Standardized instructor identity mapping and restarted daemon, automatically reprocessing 13 missed recordings without human intervention."
        },
        {
          challenge: "Operational team required specific internal workshop recordings to be uploaded without student WhatsApp broadcasts.",
          solution: "Introduced configurable routing rules permitting selective YouTube uploads while suppressing messaging webhooks."
        },
        {
          challenge: "Legacy server environment suffered from unversioned manual script edits.",
          solution: "Established a Git pull-request deployment flow, taking server snapshots and aligning server state with GitHub main."
        }
      ],
      results: [
        "Autonomous processing of class recordings 4 times daily without operational friction.",
        "Zero data loss: 13 historical sessions successfully recovered and dispatched automatically.",
        "Proactively identified and repaired broken notification configurations across the stack."
      ],
      learnings: [
        "Map complete downstream side-effects before altering automated pipelines.",
        "Subtle data inconsistencies (e.g. name casing) must be shielded with schema normalization."
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
      degree: "Master of Computer Applications (MCA) — Pursuing S4",
      institution: "LEAD College, Palakkad",
      duration: "2025 – 2027"
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
