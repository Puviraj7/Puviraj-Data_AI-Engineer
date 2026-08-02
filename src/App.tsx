import React, { useState, useEffect, useRef } from 'react';
import { 
    Mail, MapPin, Download, Phone,
    Database, Code, Layout, Server, Activity, 
    ArrowRight, CheckCircle2, Briefcase, 
    BrainCircuit, Workflow, LineChart, Globe, Zap,
    ChevronDown, FileText, Calendar, 
    Terminal, Lock, Bot, XCircle, GraduationCap, Award, Languages,
    Maximize2, Minimize2, Layers
} from 'lucide-react';

const Github = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
);

const Linkedin = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);

const injectStyles = () => {
    if (document.getElementById('portfolio-styles')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-styles';
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        body {
            background-color: #020617; 
            color: #F8FAFC; 
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        h1, h2, h3, h4, h5, h6, .font-heading {
            font-family: 'Space Grotesk', sans-serif;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #334155; }

        /* SaaS Background Grid */
        .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
        }

        /* Reveal Animation Classes */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Progress Bar Animation */
        .progress-bar-fill {
            width: 0;
            transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active .progress-bar-fill {
            width: var(--progress-width);
        }

        /* Glass Card Premium */
        .glass-card {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
            border-color: rgba(37, 99, 235, 0.4);
            box-shadow: 0 10px 40px -10px rgba(37, 99, 235, 0.15);
            transform: translateY(-4px);
        }

        /* Primary Button Glow */
        .btn-primary {
            background: linear-gradient(135deg, #2563EB, #3b82f6);
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
        }
        .btn-primary:hover {
            box-shadow: 0 6px 25px rgba(37, 99, 235, 0.5);
            transform: translateY(-2px);
            filter: brightness(1.1);
        }

        .chat-bubble-user {
            background: linear-gradient(135deg, #2563EB, #3b82f6);
            border-radius: 16px 16px 4px 16px;
        }
        .chat-bubble-ai {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px 16px 16px 4px;
        }
        
        .typing-dot {
            animation: typing 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
};

const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
};

const useEasterEgg = (onTrigger: () => void) => {
    const [, setInputSequence] = useState('');
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setInputSequence(prev => {
                const newSeq = (prev + e.key).slice(-150);
                if (newSeq.includes(konamiCode) || newSeq.includes('/ai')) {
                    onTrigger();
                    return '';
                }
                return newSeq;
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onTrigger]);
};

const WHAT_I_BUILD_CARDS = [
    {
        title: "Enterprise SaaS",
        subtitle: "Building scalable business applications",
        description: "Full-stack modular platforms featuring automated onboarding, role-based access control, analytics dashboards, and robust REST APIs.",
        icon: <Layers size={28} className="text-[#38BDF8]" />,
        badge: "Full-Stack SaaS"
    },
    {
        title: "AI Agents",
        subtitle: "Natural language automation",
        description: "Intelligent autonomous agents powered by LLM function calling to create, query, assign, and execute complex workflows via natural conversation.",
        icon: <BrainCircuit size={28} className="text-[#EC4899]" />,
        badge: "Function Calling"
    },
    {
        title: "Data Engineering",
        subtitle: "ETL, Power BI, analytics",
        description: "High-throughput data standardization engines, domain-specific fuzzy matching rules, automated ETL pipelines, and interactive BI dashboards.",
        icon: <LineChart size={28} className="text-[#22C55E]" />,
        badge: "ETL & BI"
    },
    {
        title: "Smart Buildings",
        subtitle: "BMS, IoT, BACnet",
        description: "Multi-site IoT telemetry ingestion, space hierarchy validation, equipment point mapping, and energy consumption optimization.",
        icon: <Globe size={28} className="text-[#8B5CF6]" />,
        badge: "IoT Telemetry"
    }
];

const SKILL_CATEGORIES = [
    { title: "Programming", skills: "Python, SQL, TypeScript, JavaScript", icon: <Code size={18} className="text-[#38BDF8]"/> },
    { title: "Backend", skills: "FastAPI, REST APIs, SQLAlchemy", icon: <Server size={18} className="text-[#22C55E]"/> },
    { title: "Frontend", skills: "React, Tailwind CSS, Vite", icon: <Layout size={18} className="text-[#8B5CF6]"/> },
    { title: "AI & Automation", skills: "AI Agent Integration (OpenAI), Function Calling, Prompt Engineering, RapidFuzz", icon: <BrainCircuit size={18} className="text-[#EC4899]"/> },
    { title: "Databases", skills: "PostgreSQL, MySQL", icon: <Database size={18} className="text-[#F59E0B]"/> },
    { title: "Data & BI", skills: "Power BI, Excel, Pandas, ETL, Data Validation & Cleaning", icon: <LineChart size={18} className="text-[#3B82F6]"/> },
    { title: "DevOps", skills: "Docker, Git, GitHub", icon: <Terminal size={18} className="text-[#10B981]"/> },
    { title: "Domain Expertise", skills: "Smart Buildings, IoT, BMS, CAFM, BACnet Protocol, Energy Analytics", icon: <Globe size={18} className="text-[#6366F1]"/> }
];

const SKILLS = [
    { name: "Python (Pandas, RapidFuzz)", percent: 95, icon: <Code size={16}/> },
    { name: "SQL & PostgreSQL", percent: 90, icon: <Database size={16}/> },
    { name: "FastAPI & REST APIs", percent: 90, icon: <Server size={16}/> },
    { name: "React & Tailwind CSS", percent: 85, icon: <Layout size={16}/> },
    { name: "AI Agents & Function Calling", percent: 85, icon: <BrainCircuit size={16}/> },
    { name: "Power BI & Excel ETL", percent: 90, icon: <LineChart size={16}/> },
    { name: "Docker & Git", percent: 80, icon: <Terminal size={16}/> },
    { name: "IoT, BMS & BACnet Protocol", percent: 95, icon: <Globe size={16}/> },
];

const EXPERIENCES = [
    {
        role: "Associate Energy Analyst",
        company: "Nectar Building Technologies Pvt Ltd",
        period: "Jul 2025 – Present",
        location: "Coimbatore, Tamil Nadu / Dubai, UAE",
        client: "10+ Enterprise Clients",
        impact: "Reduced manual onboarding effort by 60% through Python-based automation processing 100,000+ data points per batch.",
        tech: ["Python", "Pandas", "RapidFuzz", "SQL", "Power BI", "IoT", "BACnet", "BMS", "FastAPI"],
        description: [
            "Built a 5-tier fuzzy-matching engine using Python, Pandas, and RapidFuzz with domain-specific matching rules to standardize BMS/BACnet equipment and point data across multi-site enterprise portfolios. Processed 70,000+ data points in a single portfolio analysis using domain-specific validation rules to resolve polarity mismatches, compound-tag containment, abbreviation collisions, and other vendor-specific naming inconsistencies.",
            "Delivered end-to-end IoT and BMS onboarding across 100+ sites for 10+ enterprise clients, reducing manual onboarding effort by 60% through Python-based automation processing 100,000+ data points per batch.",
            "Developed structured ETL workflows for asset mapping, space hierarchy validation, and IoT sensor reconciliation, producing analytics-ready datasets for Power BI dashboards and operational KPI reporting.",
            "Led a 6-member analytics team, coordinating sprint planning, mentoring team members, and collaborating with backend developers, facility teams, vendors, and enterprise clients to deliver projects on schedule.",
            "Completed a 3-month onsite engagement in Dubai, UAE, working directly with enterprise clients and facility operations teams to support IoT/BMS onboarding, data validation, and deployment activities."
        ]
    },
    {
        role: "Relationship Manager",
        company: "PNB MetLife India Insurance Co Ltd",
        period: "May 2023 – Jun 2025",
        location: "Coimbatore, Tamil Nadu",
        client: "10,000+ Customer Accounts",
        impact: "Measurable improvement in cross-sell conversion and policy renewal rates.",
        tech: ["Data Segmentation", "Trend Analysis", "Excel", "Reporting", "Business Analysis"],
        description: [
            "Managed a portfolio of 10,000+ customer accounts; applied behavioral trend analysis and data segmentation to prioritize outreach, contributing to measurable improvement in cross-sell conversion and policy renewal rates.",
            "Produced structured performance reports and business analysis summaries to support operational decision-making and branch-level planning."
        ]
    }
];

const FEATURED_PROJECTS = [
    {
        title: "BMS Point Mapping Automation Tool",
        techList: "Python, Pandas, RapidFuzz, OpenPyXL, OpenAI",
        description: "Designed and developed a scalable BMS data standardization engine using a 5-tier matching algorithm with a domain-specific alias dictionary to normalize vendor-specific point names across enterprise building portfolios.",
        bullets: [
            "Engineered domain-specific validation rules to resolve short-code collisions, reverse-containment patterns, and instance-specific false matches, improving matching accuracy across diverse client datasets.",
            "Processed over 100,000 data points in under two minutes and, during benchmarking, identified approximately 16% incorrect matches in an LLM-generated mapping of the same dataset through rule-based validation."
        ],
        tech: ["Python", "Pandas", "RapidFuzz", "OpenPyXL", "OpenAI"],
        icon: <Database size={24} className="text-[#38BDF8]" />
    },
    {
        title: "AI-Powered Project Management Platform",
        techList: "Python, FastAPI, React, PostgreSQL, Docker, AI Agents",
        description: "Designed and developed an AI-powered project and workflow management platform that streamlines project planning, task management, document management, analytics, and AI-driven workflow automation in a single application.",
        bullets: [
            "Implemented Excel-based bulk project creation, allowing users to upload a standardized project template that automatically generates projects, milestones, tasks, assignees, priorities, and deadlines—eliminating repetitive manual project setup.",
            "Integrated a function-calling AI agent using the OpenAI API, enabling users to create, update, assign, delete, and retrieve tasks using natural language, with an extensible architecture for future AI-driven workflows.",
            "Built a modular FastAPI backend, React dashboard, PostgreSQL database, and Docker-based architecture with REST APIs, role-based access control, real-time dashboards, and analytics."
        ],
        tech: ["FastAPI", "React", "PostgreSQL", "Docker", "AI Agents", "OpenAI"],
        icon: <BrainCircuit size={24} className="text-[#EC4899]" />
    },
    {
        title: "Daily Activity Tracker",
        techList: "Flutter, SQLite, Excel, PDF",
        description: "Architected and implemented an offline-first daily activity tracking application using Flutter, leveraging AI-assisted development while owning application design, testing, debugging, and feature integration.",
        bullets: [
            "Designed automated Excel and PDF report generation, reducing manual reporting effort by approximately 40%."
        ],
        tech: ["Flutter", "SQLite", "Excel", "PDF"],
        icon: <Activity size={24} className="text-[#8B5CF6]" />
    },
    {
        title: "Global Climate & Energy Dashboard",
        techList: "Power BI, DAX, Looker Studio",
        description: "Designed and developed interactive Power BI dashboards with drill-down analysis, KPI visualization, and dynamic filtering for climate and energy datasets.",
        bullets: [
            "Built calculated measures and KPIs using DAX to analyze energy consumption, emissions, and sustainability metrics.",
            "Published the project as a portfolio showcase demonstrating business intelligence, data modeling, and dashboard design capabilities."
        ],
        tech: ["Power BI", "DAX", "Looker Studio"],
        icon: <LineChart size={24} className="text-[#22C55E]" />
    }
];

const EDUCATION = [
    { degree: "MBA – HR & Business Analytics", institution: "Tamilnadu College of Engineering", period: "2023 – 2025" },
    { degree: "B.E. – Mechanical Engineering", institution: "Tamilnadu College of Engineering", period: "2017 – 2021" }
];

const CERTIFICATIONS = [
    { title: "SQL – MySQL for Data Analytics and Business Intelligence Credential", provider: "Udemy / Corporate Certification" },
    { title: "Business Analysis Fundamentals", provider: "IIBA-endorsed Credential" }
];

const LANGUAGES = [
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Professional Fluent" },
    { name: "Malayalam", level: "Conversational" }
];

const RESUME_DOWNLOADS = [
    { title: "Puviraj R - Full Resume (PDF)", file: "./Puviraj_R_Resume.pdf" },
    { title: "Data Analyst Resume (PDF)", file: "./Puviraj_Data_Analyst_Resume.pdf" },
    { title: "Data & AI Engineer Resume", file: "./Puviraj_R_Resume.pdf" },
    { title: "Software Engineer Resume", file: "./Puviraj_R_Resume.pdf" }
];

const SectionHeader = ({ title, subtitle, center = false }: { title: string; subtitle?: string; center?: boolean }) => (
    <div className={`mb-16 reveal ${center ? 'text-center' : 'text-center md:text-left'}`}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            {title}
        </h2>
        {subtitle && (
            <p className={`text-[#94A3B8] text-lg max-w-2xl ${center ? 'mx-auto' : ''}`}>
                {subtitle}
            </p>
        )}
        <div className={`h-1 w-20 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full mt-6 ${center ? 'mx-auto' : 'mx-auto md:mx-0'}`}></div>
    </div>
);

const ResumeDropdown = ({ isMobile }: { isMobile: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="relative group">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 font-medium text-white transition-all ${isMobile ? 'w-full p-2 text-lg glass-card justify-between rounded-lg' : 'glass-card px-5 py-2.5 rounded-full text-sm hover:bg-white/10 hover:border-white/20 shadow-lg'}`}
            >
                <div className="flex items-center gap-2">
                    <FileText size={isMobile ? 20 : 16} /> 
                    Resume
                </div>
                <ChevronDown size={isMobile ? 20 : 16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`
                ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'} 
                ${isMobile ? 'static w-full mt-2' : 'absolute top-full right-0 mt-2 w-56'}
                transition-all duration-200 glass-card rounded-xl p-2 flex flex-col gap-1 shadow-2xl z-50 border-white/10 border
            `}>
                {RESUME_DOWNLOADS.map((item, idx) => (
                    <a 
                        key={idx} 
                        href={item.file} 
                        download 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-lg text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 flex items-center justify-between group/item transition-colors"
                    >
                        <span>{item.title}</span>
                        <Download size={14} className="text-[#38BDF8] group-hover/item:scale-110 transition-transform" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default function Portfolio() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    
    useEffect(() => {
        injectStyles();
    }, []);

    useScrollReveal();

    // Triggered by konami code or /ai
    useEasterEgg(() => setIsChatOpen(true));

    return (
        <div className="min-h-screen relative selection:bg-[#2563EB]/30 selection:text-white bg-[#020617]">
            {/* Background Effects */}
            <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#38BDF8] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <Navbar />
            
            <main>
                <HeroSection openChat={() => setIsChatOpen(true)} />
                <WhatIBuildSection />
                <KpiSection />
                <AiProjectShowcase />
                <FeaturedProjectsSection />
                <ArchitectureSection />
                <ExperienceSection />
                <SkillsSection />
                <EducationCertificationsSection />
                <ContactSection />
            </main>

            <Footer />
            <AiChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
    );
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Capabilities', href: '#what-i-build' },
        { name: 'Projects', href: '#projects' },
        { name: 'Architecture', href: '#architecture' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="text-2xl font-heading font-bold tracking-tight text-white flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-sm group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        PR
                    </div>
                    Puviraj<span className="text-[#38BDF8]">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <ResumeDropdown isMobile={false} />
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white hover:text-[#38BDF8] transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <XCircle size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden shadow-2xl ${mobileMenuOpen ? 'max-h-[550px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#94A3B8] hover:text-white p-2 border-b border-white/5">
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <ResumeDropdown isMobile={true} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const MenuIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
);

const HeroSection = ({ openChat }: { openChat: () => void }) => {
    const titles = [
        "Data & AI Engineer",
        "Python Backend Developer",
        "FastAPI & React Developer",
        "Power BI & Analytics Professional",
        "Enterprise SaaS & IoT Engineer"
    ];
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-[100vh] flex items-center justify-center pt-24 pb-12 px-6 relative">
            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-[#22C55E] mb-8 border-[#22C55E]/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                        </span>
                        Coimbatore, India / Dubai, UAE
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter mb-4 text-white">
                        PUVIRAJ R
                    </h1>
                    
                    {/* Animated Rotating Text */}
                    <div className="h-12 md:h-16 overflow-hidden relative w-full flex justify-center lg:justify-start mb-6">
                        {titles.map((title, i) => (
                            <div 
                                key={title}
                                className={`absolute transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) font-heading font-semibold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#2563EB]
                                ${i === titleIndex ? "opacity-100 transform-none" : i < titleIndex ? "opacity-0 -translate-y-8" : "opacity-0 translate-y-8"}`}
                            >
                                {title}
                            </div>
                        ))}
                    </div>

                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-xl mb-8 leading-relaxed font-light">
                        Data & AI Engineer with experience building enterprise automation platforms, AI-assisted workflow systems, and scalable data pipelines for Smart Buildings and IoT. Experienced in Python, SQL, FastAPI, React, PostgreSQL, and enterprise data engineering with a strong focus on workflow automation and AI integration.
                    </p>

                    {/* Technical Skills Pill Badge Header */}
                    <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start max-w-xl">
                        {["Python", "SQL", "FastAPI", "React", "Power BI", "Enterprise SaaS", "Docker", "BMS/IoT"].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs rounded-full bg-[#2563EB]/15 text-[#38BDF8] border border-[#2563EB]/30 font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                        <button onClick={openChat} className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-white flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                            <Bot size={20} className="group-hover:animate-pulse" />
                            Ask Puviraj AI
                        </button>
                        <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-white glass-card flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border-white/20">
                            <Workflow size={18} />
                            View Projects
                        </a>
                    </div>

                    <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10 w-full justify-center lg:justify-start">
                        {[
                            { icon: <Linkedin size={22} />, url: "https://linkedin.com/in/puviraj-r-8a648016b" },
                            { icon: <Github size={22} />, url: "https://github.com/puviraj7" },
                            { icon: <Mail size={22} />, url: "mailto:puvirajpuvi2309@gmail.com" },
                            { icon: <Phone size={20} />, url: "tel:+916374913771" }
                        ].map((social, i) => (
                            <a key={i} href={social.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#94A3B8] hover:text-white hover:-translate-y-1 hover:border-[#38BDF8]/50 transition-all shadow-lg">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Visual / Profile Photo */}
                <div className="hidden lg:flex justify-end relative reveal" style={{ transitionDelay: '0.2s'}}>
                    <div className="relative w-[450px] h-[550px]">
                        {/* Premium Photo Frame */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/30 to-[#38BDF8]/30 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
                        <div className="absolute inset-0 glass-card rounded-3xl border border-white/20 p-2 transform transition-transform hover:-translate-y-2 duration-500 overflow-hidden">
                            <div className="w-full h-full bg-[#0F172A] rounded-2xl overflow-hidden relative group">
                                <img 
                                    src="./puviraj.jpg" 
                                    alt="Puviraj R - Profile Photo" 
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                                
                                {/* Overlay Badges */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="glass-card px-4 py-2 rounded-xl backdrop-blur-md bg-[#020617]/80 border-white/20 shadow-xl">
                                        <div className="text-xs text-[#38BDF8] font-bold tracking-wider mb-0.5">CURRENT ROLE</div>
                                        <div className="text-white text-sm font-semibold">Associate Energy Analyst</div>
                                        <div className="text-xs text-[#94A3B8]">Nectar Building Technologies</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center backdrop-blur-md bg-[#2563EB]/40 border-white/20 shadow-lg">
                                        <Code className="text-white" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatIBuildSection = () => {
    return (
        <section id="what-i-build" className="py-20 px-6 relative bg-[#0F172A]/30 border-t border-white/5">
            <div className="container mx-auto max-w-7xl relative z-10">
                <SectionHeader 
                    title="What I Build" 
                    subtitle="Core technical capabilities delivering high-impact software, automation, and analytics."
                    center={true}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {WHAT_I_BUILD_CARDS.map((card, index) => (
                        <div 
                            key={index} 
                            className="glass-card p-8 rounded-2xl reveal group border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <span className="text-[11px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-full border border-[#38BDF8]/20">
                                        {card.badge}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-[#38BDF8] transition-colors">{card.title}</h3>
                                <p className="text-xs text-[#38BDF8] font-medium mb-3">{card.subtitle}</p>
                                <p className="text-[#94A3B8] text-xs leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const KpiSection = () => {
    const stats = [
        { label: "Sites Delivered", value: "100+", subtitle: "IoT & BMS Onboarding" },
        { label: "Points Processed", value: "100K+", subtitle: "Per batch automation" },
        { label: "Enterprise Clients", value: "10+", subtitle: "Smart building portfolios" },
        { label: "Automation Savings", value: "60%", subtitle: "Manual effort reduced" },
        { label: "Team Leadership", value: "6-member", subtitle: "Analytics sprint team" },
    ];

    return (
        <section className="py-16 relative border-y border-white/5 bg-[#0F172A]/40 backdrop-blur-md">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-[#F8FAFC] text-center md:text-left p-6 glass-card rounded-2xl reveal group hover:border-[#38BDF8]/40 transition-all" style={{ transitionDelay: `${i * 0.08}s`}}>
                            <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-white font-medium mb-1">{stat.label}</p>
                            <p className="text-xs text-[#94A3B8]">{stat.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AiProjectShowcase = () => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <SectionHeader 
                    title="Enterprise AI Project Management" 
                    subtitle="An enterprise SaaS platform designed to improve project execution using AI Agents and workflow automation." 
                    center={true}
                />

                {/* Main Showcase Container */}
                <div className="glass-card rounded-3xl p-1 mt-16 reveal bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-[#020617] rounded-[22px] overflow-hidden">
                        
                        {/* Top App Bar Mockup */}
                        <div className="h-12 border-b border-white/10 bg-[#0F172A] flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="mx-auto px-4 py-1 rounded-md bg-[#020617] text-xs text-[#64748B] border border-white/5 font-mono">
                                pm-ai-platform.enterprise.app
                            </div>
                        </div>

                        <div className="p-8 lg:p-12 grid lg:grid-cols-5 gap-12 items-center">
                            
                            {/* Left Text Detail */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2563EB]/10 text-[#38BDF8] text-sm font-semibold border border-[#2563EB]/20 mb-4">
                                        <Zap size={14} /> Case Study
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">AI-Powered Project Management Platform</h3>
                                    <p className="text-[#94A3B8] leading-relaxed text-sm mb-4">
                                        Designed and developed an AI-powered project and workflow management platform that streamlines project planning, task management, document management, analytics, and AI-driven workflow automation in a single application.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed text-sm mb-4">
                                        Implemented Excel-based bulk project creation, allowing users to upload a standardized project template that automatically generates projects, milestones, tasks, assignees, priorities, and deadlines—eliminating repetitive manual project setup.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed text-sm">
                                        Integrated a function-calling AI agent using the OpenAI API, enabling users to create, update, assign, delete, and retrieve tasks using natural language.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <BrainCircuit/>, title: "AI Assistant", desc: "Function-calling natural language AI agent" },
                                        { icon: <Workflow/>, title: "Bulk Onboarding", desc: "Excel-based automated project setup" },
                                        { icon: <Lock/>, title: "Role-Based Access", desc: "Enterprise RBAC & secure auth" },
                                        { icon: <Activity/>, title: "Analytics", desc: "Real-time dashboards & metrics" }
                                    ].map((feat, i) => (
                                        <div key={i} className="p-4 glass-card rounded-xl border-white/5 hover:border-[#38BDF8]/30 transition-colors">
                                            <div className="text-[#38BDF8] mb-2">{feat.icon}</div>
                                            <h4 className="text-white text-sm font-semibold">{feat.title}</h4>
                                            <p className="text-[#64748B] text-xs mt-1">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/10 flex gap-4">
                                    <a href="https://github.com/puviraj7" target="_blank" rel="noreferrer" className="btn-primary px-6 py-2.5 rounded-lg text-sm font-medium text-white shadow-lg flex items-center gap-2">
                                        <Github size={16}/> View GitHub Profile
                                    </a>
                                </div>
                            </div>

                            {/* Right UI Mockup */}
                            <div className="lg:col-span-3 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] blur-[100px] opacity-20 rounded-full"></div>
                                <div className="relative glass-card border border-white/10 rounded-2xl p-4 shadow-2xl bg-[#0F172A]/80">
                                    {/* Mock Dashboard UI */}
                                    <div className="flex gap-4">
                                        {/* Sidebar */}
                                        <div className="w-16 h-80 rounded-xl bg-[#020617]/50 border border-white/5 flex flex-col items-center py-4 gap-6">
                                            <div className="w-8 h-8 rounded-full bg-[#2563EB]"></div>
                                            <Layout size={18} className="text-white/40"/>
                                            <Activity size={18} className="text-[#38BDF8]"/>
                                            <Lock size={18} className="text-white/40"/>
                                            <Server size={18} className="text-white/40 mt-auto"/>
                                        </div>
                                        {/* Main Content */}
                                        <div className="flex-1 flex flex-col gap-4">
                                            {/* Header */}
                                            <div className="flex justify-between items-center bg-[#020617]/50 p-4 rounded-xl border border-white/5">
                                                <div>
                                                    <div className="w-32 h-2 bg-white/20 rounded-full mb-2"></div>
                                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#22C55E] to-emerald-500"></div>
                                            </div>
                                            {/* Chart/Data Area */}
                                            <div className="flex-1 bg-[#020617]/50 rounded-xl border border-white/5 p-4 relative overflow-hidden flex flex-col gap-3">
                                                 <div className="w-full h-32 border-b border-dashed border-white/10 flex items-end gap-2 px-2 pb-2">
                                                    {[40,70,45,90,60,85,50].map((h, i) => (
                                                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#2563EB]/80 to-[#38BDF8]" style={{height: `${h}%`}}></div>
                                                    ))}
                                                 </div>
                                                 {/* AI Agent Chat overlay mock */}
                                                 <div className="absolute bottom-4 right-4 w-48 glass-card border-white/20 p-3 rounded-xl shadow-2xl border-t-[#38BDF8] border-t-2">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <BrainCircuit size={14} className="text-[#38BDF8]" />
                                                        <span className="text-[10px] font-bold text-white">Function-Calling AI</span>
                                                    </div>
                                                    <p className="text-[10px] text-[#94A3B8]">"Created 12 tasks from Excel template & assigned priorities."</p>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tech Stack Ribbon */}
                        <div className="bg-[#0F172A] border-t border-white/10 p-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-[#64748B]">
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><Code size={16}/> Python</span>
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><Server size={16}/> FastAPI</span>
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><Layout size={16}/> React</span>
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><Database size={16}/> PostgreSQL</span>
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><Terminal size={16}/> Docker</span>
                            <span className="flex items-center gap-2 hover:text-white transition-colors"><BrainCircuit size={16}/> OpenAI Agents</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturedProjectsSection = () => {
    return (
        <section className="py-16 px-6 relative bg-[#0F172A]/20">
            <div className="container mx-auto max-w-7xl relative z-10">
                <SectionHeader 
                    title="Featured Projects" 
                    subtitle="Engineering scalable data standardization tools, AI platforms, activity trackers, and BI dashboards."
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {FEATURED_PROJECTS.map((project, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl reveal group border-white/5 hover:border-[#38BDF8]/30 transition-all duration-300 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-xl bg-[#020617] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    {project.icon}
                                </div>
                                <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full border border-[#38BDF8]/20">
                                    {project.techList}
                                </span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{project.title}</h3>
                            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {project.bullets.map((bullet, idx) => (
                                    <li key={idx} className="text-[#94A3B8] text-xs leading-relaxed flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-[#22C55E] shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-[#94A3B8] border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArchitectureSection = () => {
    return (
        <section id="architecture" className="py-24 px-6 bg-[#0F172A]/20">
            <div className="container mx-auto max-w-6xl">
                <SectionHeader 
                    title="System Architecture & Flow" 
                    subtitle="How I design scalable, secure, and intelligent enterprise applications."
                    center={true}
                />

                <div className="relative mt-12 p-8 lg:p-16 glass-card rounded-3xl reveal border-[#2563EB]/20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 relative z-10">
                        
                        {/* Client */}
                        <div className="w-full lg:w-1/5 flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center text-[#38BDF8] shadow-lg">
                                <Layout size={28} />
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-semibold">Client Tier</h4>
                                <p className="text-[#64748B] text-xs">React, Vite, Tailwind</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:flex flex-1 items-center justify-center text-white/20">
                            <ArrowRight className="w-full" strokeWidth={1} strokeDasharray="4 4" />
                        </div>
                        <div className="lg:hidden text-white/20 my-2"><ChevronDown /></div>

                        {/* API Gateway / Auth */}
                        <div className="w-full lg:w-1/5 flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center text-[#22C55E] shadow-lg">
                                <Lock size={28} />
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-semibold">Auth & API Gateway</h4>
                                <p className="text-[#64748B] text-xs">FastAPI, JWT, REST</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:flex flex-1 items-center justify-center text-white/20 relative">
                            <ArrowRight className="w-full" strokeWidth={1} strokeDasharray="4 4" />
                            <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-white/20 -translate-y-full border-l border-dashed border-white/20"></div>
                        </div>
                        <div className="lg:hidden text-white/20 my-2"><ChevronDown /></div>

                        {/* Business Logic */}
                        <div className="w-full lg:w-1/5 flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center text-[#8B5CF6] shadow-lg">
                                <Server size={28} />
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-semibold">Service Layer</h4>
                                <p className="text-[#64748B] text-xs">Python, Pandas, RapidFuzz</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden lg:flex flex-1 items-center justify-center text-white/20">
                            <ArrowRight className="w-full" strokeWidth={1} strokeDasharray="4 4" />
                        </div>
                        <div className="lg:hidden text-white/20 my-2"><ChevronDown /></div>

                        {/* Database */}
                        <div className="w-full lg:w-1/5 flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center text-[#2563EB] shadow-lg">
                                <Database size={28} />
                            </div>
                            <div className="text-center">
                                <h4 className="text-white font-semibold">Data & Storage</h4>
                                <p className="text-[#64748B] text-xs">PostgreSQL, MySQL, Docker</p>
                            </div>
                        </div>

                    </div>

                    {/* AI Branch */}
                    <div className="mt-8 lg:mt-0 lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-48 flex flex-col items-center gap-3 reveal">
                         <div className="w-14 h-14 rounded-2xl bg-[#020617] border border-[#38BDF8]/50 flex items-center justify-center text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                            <BrainCircuit size={24} />
                        </div>
                        <div className="text-center">
                            <h4 className="text-white font-semibold">AI Agent Integration</h4>
                            <p className="text-[#64748B] text-xs">OpenAI API, Function Calling</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                <SectionHeader 
                    title="Professional Experience" 
                    subtitle="Proven track record in energy analytics, BMS/BACnet data standardization, and enterprise automation." 
                />

                <div className="space-y-12 mt-16">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="glass-card rounded-2xl p-6 lg:p-10 reveal border-l-4 border-l-[#2563EB] group hover:border-l-[#38BDF8] transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB] rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-2">{exp.role}</h3>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <p className="text-[#38BDF8] font-medium flex items-center gap-2">
                                            <Briefcase size={16} /> {exp.company}
                                        </p>
                                        <span className="text-[#64748B] text-sm flex items-center gap-1">
                                            <Calendar size={14}/> {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left lg:text-right">
                                     <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-xs text-[#94A3B8] border border-white/5">
                                        <MapPin size={12} /> {exp.location}
                                    </span>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-4">
                                    <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Key Contributions</h4>
                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-[#94A3B8] text-sm leading-relaxed flex items-start gap-3">
                                                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-[#020617]/50 rounded-xl p-4 border border-white/5">
                                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Impact & Output</h4>
                                        <p className="text-[#38BDF8] text-sm font-medium">{exp.impact}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t, i) => (
                                                <span key={i} className="px-2.5 py-1 text-xs rounded-md glass-card text-[#94A3B8] border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-[#0F172A]/20">
            <div className="container mx-auto max-w-6xl">
                <SectionHeader 
                    title="Technical Skills & Stack" 
                    subtitle="Comprehensive technical skill set verified across enterprise projects and production deployments." 
                />

                {/* Categorized Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {SKILL_CATEGORIES.map((cat, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl reveal border-white/5 hover:border-[#38BDF8]/30 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                    {cat.icon}
                                </div>
                                <h4 className="text-white font-heading font-semibold text-base">{cat.title}</h4>
                            </div>
                            <p className="text-xs text-[#94A3B8] leading-relaxed">
                                {cat.skills}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Skill Proficiency Bars */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {SKILLS.map((skill, index) => (
                        <div key={index} className="reveal group" style={{ transitionDelay: `${index * 0.05}s`, '--progress-width': `${skill.percent}%` } as React.CSSProperties}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <span className="text-[#38BDF8] group-hover:scale-110 transition-transform">{skill.icon}</span>
                                    {skill.name}
                                </div>
                                <span className="text-sm font-mono text-[#94A3B8]">{skill.percent}%</span>
                            </div>
                            <div className="h-2 w-full bg-[#020617] rounded-full overflow-hidden border border-white/5">
                                <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-full progress-bar-fill relative">
                                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EducationCertificationsSection = () => {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <SectionHeader 
                    title="Education & Certifications" 
                    subtitle="Academic background in Business Analytics & Mechanical Engineering alongside industry credentials." 
                />

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {/* Education */}
                    <div className="glass-card p-8 rounded-2xl reveal space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-[#2563EB]/20 text-[#38BDF8] border border-[#2563EB]/30">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Education</h3>
                        </div>
                        <div className="space-y-6">
                            {EDUCATION.map((edu, idx) => (
                                <div key={idx} className="border-l-2 border-[#2563EB] pl-4 space-y-1">
                                    <h4 className="text-white font-semibold text-base">{edu.degree}</h4>
                                    <p className="text-[#94A3B8] text-xs">{edu.institution}</p>
                                    <span className="text-[#38BDF8] font-mono text-xs inline-block">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="glass-card p-8 rounded-2xl reveal space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Certifications</h3>
                        </div>
                        <div className="space-y-6">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <div key={idx} className="border-l-2 border-[#22C55E] pl-4 space-y-1">
                                    <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                                    <p className="text-[#94A3B8] text-xs">{cert.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="glass-card p-8 rounded-2xl reveal space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
                                <Languages size={24} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Languages</h3>
                        </div>
                        <div className="space-y-3">
                            {LANGUAGES.map((lang, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-white font-medium text-sm">{lang.name}</span>
                                    <span className="text-xs text-[#38BDF8] font-mono">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Interview / Discussion Request from ${name || 'Recruiter'}`);
        const body = encodeURIComponent(`Hi Puviraj,\n\nI would like to discuss an opportunity with you.\n\nName: ${name}\nEmail: ${email}\n\nBest regards,\n${name}`);
        window.location.href = `mailto:puvirajpuvi2309@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl reveal">
                <div className="glass-card rounded-[2rem] p-8 md:p-16 relative overflow-hidden border-[#2563EB]/20">
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        {/* Left: Info & Links */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Let's Build Something Together.</h2>
                            <p className="text-[#94A3B8] mb-8 leading-relaxed">
                                Open for opportunities in Data Engineering, AI Software Engineering, Backend Development, Enterprise SaaS, and Smart Building Data Analytics.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:puvirajpuvi2309@gmail.com" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-[#38BDF8]"><Mail size={18} /></div>
                                    <div>
                                        <div className="text-xs text-[#94A3B8] font-medium">Email</div>
                                        <div className="text-white font-medium">puvirajpuvi2309@gmail.com</div>
                                    </div>
                                </a>
                                <a href="tel:+916374913771" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E]"><Phone size={18} /></div>
                                    <div>
                                        <div className="text-xs text-[#94A3B8] font-medium">Phone / WhatsApp</div>
                                        <div className="text-white font-medium">+91 6374913771</div>
                                    </div>
                                </a>
                                <a href="https://linkedin.com/in/puviraj-r-8a648016b" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#0A66C2]/20 flex items-center justify-center text-[#38BDF8]"><Linkedin size={18} /></div>
                                    <div>
                                        <div className="text-xs text-[#94A3B8] font-medium">LinkedIn</div>
                                        <div className="text-white font-medium">linkedin.com/in/puviraj-r-8a648016b</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"><MapPin size={18} /></div>
                                    <div>
                                        <div className="text-xs text-[#94A3B8] font-medium">Locations</div>
                                        <div className="text-white font-medium">Coimbatore, India / Dubai, UAE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Functional Direct Mail Form */}
                        <div className="glass-card bg-[#020617]/80 rounded-2xl p-6 md:p-8 border-white/5 shadow-2xl flex flex-col justify-center">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Book a Technical Discussion</h3>
                                <p className="text-sm text-[#94A3B8]">Send a direct inquiry email to connect with Puviraj.</p>
                            </div>
                            
                            {submitted ? (
                                <div className="p-6 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h4 className="text-white font-semibold text-base">Opening Email Client</h4>
                                    <p className="text-xs text-[#94A3B8]">Your email client has been launched with your inquiry pre-filled to puvirajpuvi2309@gmail.com.</p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-xs text-[#38BDF8] underline mt-2 hover:text-white"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-xs font-medium text-[#94A3B8] ml-1 mb-1 block">Your Name / Organization</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#38BDF8] transition-all" 
                                            placeholder="Recruiter / Hiring Team @ Company" 
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-[#94A3B8] ml-1 mb-1 block">Work Email</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#38BDF8] transition-all" 
                                            placeholder="recruitment@company.com" 
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 mt-6">
                                        <Calendar size={18} /> Schedule Interview Call
                                    </button>
                                    <div className="text-center mt-4">
                                         <span className="text-xs text-[#64748B] flex items-center justify-center gap-1"><Lock size={10}/> Direct inquiry email launch</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AiChatWidget = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: "Hello! I'm Puviraj's AI Assistant. Ask me anything about his experience, BMS automation, AI PM platform, tech stack, or education." }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const presetQuestions = [
        "Tell me about your BMS Automation project",
        "What is your tech stack?",
        "Explain your AI PM Tool",
        "What is your experience in Dubai?"
    ];

    const getAiResponse = (q: string) => {
        const lowerQ = q.toLowerCase();
        
        if (lowerQ.includes('bms') || lowerQ.includes('fuzzy') || lowerQ.includes('automation tool')) {
            return "Puviraj built a 5-tier fuzzy matching engine using Python, Pandas and RapidFuzz with domain-specific matching rules. It processed 100,000+ BMS/BACnet data points in under 2 minutes and identified ~16% errors in LLM-generated mappings.";
        }
        if (lowerQ.includes('yourself') || lowerQ.includes('about you') || lowerQ.includes('summary')) {
            return "Puviraj R is a Data & AI Engineer with experience building enterprise automation platforms, AI-assisted workflow systems, and scalable data pipelines for Smart Buildings and IoT.";
        }
        if (lowerQ.includes('technologies') || lowerQ.includes('tech stack') || lowerQ.includes('skills')) {
            return "Puviraj's tech stack includes Python, SQL, TypeScript, FastAPI, React, Tailwind CSS, PostgreSQL, MySQL, Power BI, Pandas, Docker, Git, and OpenAI AI Agents with Function Calling.";
        }
        if (lowerQ.includes('pm tool') || lowerQ.includes('project management') || lowerQ.includes('platform')) {
            return "His AI PM Platform streamlines project planning with Excel bulk project creation and OpenAI function-calling AI agents for managing tasks via natural language, built with FastAPI, React, PostgreSQL, & Docker.";
        }
        if (lowerQ.includes('dubai') || lowerQ.includes('onsite') || lowerQ.includes('nectar') || lowerQ.includes('experience')) {
            return "At Nectar Building Technologies, Puviraj delivered IoT/BMS onboarding across 100+ sites for 10+ clients, led a 6-member analytics team, and completed a 3-month onsite engagement in Dubai, UAE!";
        }
        if (lowerQ.includes('education') || lowerQ.includes('degree') || lowerQ.includes('mba')) {
            return "Puviraj holds an MBA in HR & Business Analytics (2023-2025) and a B.E. in Mechanical Engineering (2017-2021) from Tamilnadu College of Engineering.";
        }
        return "Thanks for asking! For a deep dive into Puviraj's qualifications or to discuss career opportunities, reach out directly at puvirajpuvi2309@gmail.com or +91 6374913771.";
    };

    const handleSend = (text: string) => {
        setMessages(prev => [...prev, { type: 'user', text }]);
        setIsTyping(true);
        
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'ai', text: getAiResponse(text) }]);
            setIsTyping(false);
        }, 1200);
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, isOpen]);

    return (
        <>
            {/* Toggle Button (Hidden if open) */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 rounded-full btn-primary flex items-center justify-center text-white shadow-[0_0_25px_rgba(37,99,235,0.5)] z-50 hover:scale-110 transition-transform group"
                    title="Open Puviraj AI Assistant"
                >
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25"></span>
                    <Bot size={26} className="group-hover:rotate-12 transition-transform" />
                </button>
            )}

            {/* Chat Panel - Fully Constrained & Always Visible */}
            <div className={`fixed bottom-3 right-3 sm:bottom-6 sm:right-6 glass-card bg-[#020617]/95 border-white/15 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 origin-bottom-right overflow-hidden ${
                isExpanded 
                    ? 'w-[640px] max-w-[calc(100vw-1.5rem)] h-[calc(100vh-2.5rem)] max-h-[640px]' 
                    : 'w-[380px] sm:w-[400px] max-w-[calc(100vw-1.5rem)] h-[calc(100vh-3rem)] max-h-[480px]'
            } ${isOpen ? 'scale-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'}`}>
                
                {/* Header - Fixed Height & Shrink-0 */}
                <div className="shrink-0 flex items-center justify-between p-3.5 border-b border-white/10 bg-gradient-to-r from-[#2563EB]/25 via-blue-900/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center shadow-lg relative">
                            <Bot size={18} className="text-white"/>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#020617]"></div>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white leading-tight flex items-center gap-2">
                                Puviraj AI
                                <span className="text-[9px] font-normal px-2 py-0.5 rounded-full bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/20">Assistant</span>
                            </h4>
                            <span className="text-[11px] text-[#94A3B8]">Online & Ready to help</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        {/* Resize Toggle Button */}
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                            title={isExpanded ? "Collapse to standard size" : "Expand window"}
                        >
                            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                        </button>
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                            title="Close chat"
                        >
                            <XCircle size={18} />
                        </button>
                    </div>
                </div>

                {/* Messages List - Flex-1, Min-h-0, Overflow-y-auto */}
                <div className="flex-1 min-h-0 overflow-y-auto p-3.5 flex flex-col gap-3 custom-scrollbar">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3 text-xs sm:text-sm leading-relaxed ${m.type === 'user' ? 'chat-bubble-user text-white shadow-lg' : 'chat-bubble-ai text-[#E2E8F0] shadow-md'}`}>
                                {m.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="chat-bubble-ai p-2.5 flex gap-1.5 items-center h-8 w-14 justify-center">
                                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full typing-dot"></div>
                                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full typing-dot"></div>
                                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full typing-dot"></div>
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef}></div>
                </div>

                {/* Suggestions Bar - Shrink-0, Always Pinned to Bottom */}
                <div className="shrink-0 p-2.5 border-t border-white/5 bg-[#0F172A]/80">
                    <div className="flex gap-2 overflow-x-auto pb-1 custom-scrollbar hide-scrollbar">
                        {presetQuestions.map((q, i) => (
                            <button 
                                key={i}
                                onClick={() => handleSend(q)}
                                disabled={isTyping}
                                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-[#38BDF8]/30 transition-all disabled:opacity-50"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#020617] py-16 px-6 mt-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
            
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                PR
                            </div>
                            <span className="font-heading font-semibold text-white text-lg">Puviraj R</span>
                        </div>
                        <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mb-6">
                            Data & AI Engineer architecting enterprise SaaS platforms, AI agents, fuzzy matching data tools, and smart building analytics.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/puviraj7" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] transition-all">
                                <Github size={16} />
                            </a>
                            <a href="https://linkedin.com/in/puviraj-r-8a648016b" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] transition-all">
                                <Linkedin size={16} />
                            </a>
                            <a href="mailto:puvirajpuvi2309@gmail.com" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] transition-all">
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-self-end w-full md:w-auto">
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li><a href="#home" className="hover:text-[#38BDF8] transition-colors">Home</a></li>
                                <li><a href="#what-i-build" className="hover:text-[#38BDF8] transition-colors">Capabilities</a></li>
                                <li><a href="#projects" className="hover:text-[#38BDF8] transition-colors">Projects</a></li>
                                <li><a href="#experience" className="hover:text-[#38BDF8] transition-colors">Experience</a></li>
                                <li><a href="#skills" className="hover:text-[#38BDF8] transition-colors">Skills</a></li>
                                <li><a href="#education" className="hover:text-[#38BDF8] transition-colors">Education</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Links & Resumes</h4>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li><a href="./Puviraj_R_Resume.pdf" download className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">Download Resume PDF <Download size={12}/></a></li>
                                <li><a href="https://github.com/puviraj7" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors">GitHub Profile</a></li>
                                <li><a href="https://linkedin.com/in/puviraj-r-8a648016b" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors">LinkedIn Profile</a></li>
                                <li><a href="#contact" className="hover:text-[#38BDF8] transition-colors">Book Call</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#64748B] text-xs">
                        &copy; {new Date().getFullYear()} Puviraj R. Designed for Enterprise Scale. 
                        <span className="opacity-0 hover:opacity-100 transition-opacity ml-2 text-[#38BDF8]">Type /ai</span>
                    </p>
                    <a href="#home" className="text-xs font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1">
                        Back to Top <ChevronDown size={14} className="rotate-180"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};
