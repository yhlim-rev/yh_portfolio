// ─── Site-wide data ───────────────────────────────────────────────────────────
// Edit this file to update ALL content across the portfolio.

export const siteConfig = {
  name: "Lim Yonghay",
  role: "Software Developer",
  tagline: "Building secure, scalable, and user-friendly web applications with clean code and modern technologies.",
  email: "yh.lim825@gmail.com",
  phone: "+855 11 234 027",
  location: "Phnom Penh, Cambodia",
  website: "https://yh-portfolio-two.vercel.app/",
  // Put your photo in /public/avatar.jpg — set to null to show initials placeholder
  avatarImage: "/avatar.jpg",
  copyright: "© 2026 Lim Yonghay. All rights reserved.",
  socials: {
    github: "https://github.com/limyonghay",
    linkedin: "https://linkedin.com/in/limyonghay",
    email: "mailto:yh.lim825@gmail.com",
  },
};

export const heroImages = [
  { src: "/photos/image1.jpg",  alt: "Headshot"  },
  { src: "/photos/image2.jpg",  alt: "Working"   },
  { src: "/photos/image3.jpg",  alt: "Japan"     },
  { src: "/photos/image4.jpg",  alt: "Teaching"  },
  { src: "/photos/image5.jpg",  alt: "Outdoors"  },
];

export const aboutStats = [
  { icon: "Calendar", label: "Experience", value: "2+ Years" },
  { icon: "MapPin",   label: "Location",   value: "Phnom Penh, Cambodia" },
  { icon: "GraduationCap", label: "Education", value: "Information Technology" },
];

export const aboutDescription = [
  "I'm a Software Developer with experience in building full-stack web applications and solving real-world problems.",
  "I specialize in Python and JavaScript ecosystems, with hands-on experience in modern frameworks and tools.",
  "I'm passionate about Data Science, automation, and building secure systems with DevSecOps practices.",
];

export const education = [
  {
    icon: "GraduationCap",
    degree: "Bachelor of IT",
    school: "University of Puthisastra",
    period: "2019 – 2024",
  },
  {
    icon: "BookOpen",
    degree: "Bachelor of Japanese",
    school: "Royal University of Phnom Penh, Institute of Foreign Languages",
    period: "2023 – 2026",
  },
  {
    icon: "Plane",
    degree: "Exchange Program",
    school: "Shikoku University of Japan",
    period: "2024 – 2025",
  },
  {
    icon: "Award",
    degree: "Full-Stack Certification",
    school: "freeCodeCamp — Online",
    period: "2022",
  },
  {
    icon: "Cpu",
    degree: "DevSecOps Fundamentals",
    school: "Linux Foundation — Online",
    period: "2023",
  },
];

export const professionalProjects = [
  {
    company: "Bikay",
    name: "Joa Invoice System",
    description: "Web-based invoice management system for small businesses with PDF export.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    icon: "FileText",
  },
  {
    company: "Bikay",
    name: "Raccoon Marti",
    description: "E-commerce platform with product management and Stripe payment integration.",
    tags: ["Vue.js", "Express.js", "PostgreSQL"],
    icon: "ShoppingCart",
  },
  {
    company: "Bikay",
    name: "Immigration Lamonde",
    description: "Information system for immigration services and document management.",
    tags: ["Django", "Python", "PostgreSQL"],
    icon: "Globe",
  },
  {
    company: "Bikay",
    name: "HR Portal",
    description: "Internal HR tool for leave tracking, payroll summaries, and onboarding.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "Users",
  },
  {
    company: "Bikay",
    name: "Logistics Dashboard",
    description: "Real-time shipment tracking dashboard with interactive map views.",
    tags: ["Vue.js", "Mapbox", "Redis"],
    icon: "Truck",
  },
  {
    company: "Bikay",
    name: "Notification Engine",
    description: "Multi-channel notification microservice supporting email, SMS, and push.",
    tags: ["Node.js", "RabbitMQ", "Docker"],
    icon: "Bell",
  },
];

export const sideProjects = [
  {
    icon: "Leaf",
    name: "Habitree",
    description: "Habit tracking app to build better daily routines with streaks and insights.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    icon: "BookOpen",
    name: "Kanji Keeper",
    description: "A minimalist app to learn and review Japanese kanji with spaced repetition.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    icon: "Code2",
    name: "Dev Notes",
    description: "A collection of notes, cheatsheets, and snippets for developers.",
    tags: ["Markdown", "Next.js", "Vercel"],
  },
  {
    icon: "BarChart2",
    name: "Budget Lens",
    description: "Personal finance tracker with category breakdowns and monthly trend graphs.",
    tags: ["React", "Recharts", "IndexedDB"],
  },
  {
    icon: "Rss",
    name: "FeedMorph",
    description: "RSS aggregator that summarises articles with AI and sends a daily digest.",
    tags: ["Python", "FastAPI", "OpenAI"],
  },
];

export const skills = [
  { category: "Frontend", items: ["Vue.js", "HTML/CSS", "JavaScript"] },
  { category: "Backend",  items: ["Python", "Node.js", "Django", "Laravel", "Express.js"] },
  { category: "Tools",    items: ["Docker", "Git", "PostgreSQL"] },
];

export const experience = [
  {
    role: "Sales Engineer",
    company: "Daikin Airconditioning (Cambodia) Co., Ltd.",
    companyLink: 'https://daikin-airconditioning.com.kh/',
    period: "Jul 2026 – Present",
    description:
      "Managed HVAC project sales, prepared technical proposals, and built strong client relationships with contractors and developers to support successful project delivery.",
  },
  {
    role: "Software Developer",
    company: "Bikay",
    companyLink: 'https://bi-kay.com/',
    period: "Mar 2021 – August 2024",
    description:
      "Developing and maintaining web applications, integrating APIs, and optimizing system performance.",
  },
  {
    role: "Chinese Teacher",
    company: "Jing Fa School",
    companyLink: null,
    period: "Jan 2018 – Sep 2018",
    description:
      "Taught basic Chinese language skills to students, developed lesson plans, and assessed student progress.",
  },
];

export const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];
