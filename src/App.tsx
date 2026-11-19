import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import "./styles.css";

type Project = { id: string; title: string; description: string; link: string };
type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const data = {
  name: "Shah Faisal Ahmad",
  location: "Srinagar, Jammu & Kashmir, India",
  phone: "+91 7780-846120",
  email: "shahfaisal3867@gmail.com",
  github: "https://github.com/shahf6738",
  linkedin: "https://www.linkedin.com/in/shah-faisal-ba4a71212/",
  summary:
    "Software Engineer with 4+ years of experience building scalable, high-performance web applications with React.js, Next.js, and TypeScript. Experienced in frontend architecture, reusable component libraries, performance optimisation, Node.js, C#, ASP.NET Core, REST APIs, GraphQL, SQL Server, and enterprise SaaS products.",
  skills: [
    {
      category: "Frontend",
      items: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript (ES6+)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Redux Toolkit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        },
        {
          name: "C# / .NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "ASP.NET Core",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
        {
          name: "REST APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "SQL Server",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
      ],
    },
    {
      category: "Testing & Tools",
      items: [
        {
          name: "Cypress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      category: "Platforms & Engineering",
      items: [
        {
          name: "OpenSearch Dashboards (OSD)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        },
        {
          name: "Performance Optimization",
          icon: "https://www.svgrepo.com/show/409878/rocket.svg",
        },
      ],
    },
  ],
  topSkills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "C# / .NET",
    "Redux Toolkit",
    "GraphQL",
    "SQL Server",
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Horizon Dream Vision",
      period: "September 2026 – Present",
      bullets: [
        "Developed and maintained the BusTracker application with React.js and JavaScript, building responsive interfaces for live trip monitoring, bus locations, and route reports.",
        "Integrated frontend applications with RESTful APIs and C# / .NET backend services to display real-time trip and driver data.",
        "Implemented data-driven tables with search, sorting, pagination, and auto-refresh in responsive layouts.",
        "Troubleshot frontend–backend integration issues and improved existing components, API connectivity, SQL Server integration, and data rendering.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ematrix Solutions",
      period: "January 2026 – September 2026",
      bullets: [
        "Built and maintained the backend API layer for an order aggregator platform using Node.js and Express.js, integrating 100+ external service providers.",
        "Designed and implemented an Express.js RBAC system for authentication and authorization across 1,000+ client applications.",
        "Automated pending-order status updates with Node.js, reducing manual effort from 3 minutes per order to processing 50 orders per second.",
        "Developed responsive Next.js interfaces in TypeScript with Redux for consistent order and status state.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Everlytics Data Science Pte Ltd",
      period: "August 2022 – January 2026",
      bullets: [
        "Designed and maintained accessible, high-performance React.js, Next.js App Router, and TypeScript applications for an AI-powered enterprise SaaS platform.",
        "Built a reusable UI component library with Elastic UI and React Hooks while enforcing design-system consistency.",
        "Created data-intensive 4Pointx interfaces with advanced tables, filtering, pagination across tens of thousands of records, expandable rows, drill-downs, dashboards, and real-time views.",
        "Integrated REST APIs and GraphQL, managed async workflows, Axios interceptors, JWT refresh, protected routes, and timezone handling.",
        "Managed state with Redux Toolkit and Context API across complex forms, modal pipelines, and validated multi-step journeys.",
        "Improved Core Web Vitals with virtualization, memoisation, React Profiler, code splitting, lazy loading, SSR, and SSG.",
        "Performed code reviews, debugging, production support, Cypress E2E testing, API and performance testing, security testing, and mentoring.",
      ],
    },
  ] as Experience[],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.), Computer Engineering",
      school: "University of Kashmir",
      year: "2022",
    },
  ],
  projects: [
    {
      id: "healthcare-app",
      title: "Healthcare App",
      description:
        "Healthcare analytics dashboard built with React, TypeScript, Redux Toolkit, Firebase, and REST APIs.",
      link: "https://github.com/shahf6738/healthcare-app",
    },
    {
      id: "gallery-web-app",
      title: "Gallery Web App",
      description:
        "Responsive image gallery in React and TypeScript with browse, search, sort, select, and download features.",
      link: "https://github.com/shahf6738/gallery-web-app",
    },
    {
      id: "contact-management-app",
      title: "Contact Management App",
      description:
        "React contact manager with full CRUD: create, search, edit, and delete contacts.",
      link: "https://github.com/shahf6738/contact-management-app",
    },
  ] as Project[],
  certifications: [
    {
      title: "Software Engineer",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/52b283fb71ec",
    },
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/3b16208b3620",
    },
    {
      title: "Node.js",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/70893016279f",
    },
    {
      title: "REST API",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/d8c936230b18",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shahf6738/javascript-algorithms-and-data-structures",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/shahf6738/responsive-web-design",
    },
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  // const [scrollY, setScrollY] = useState(0);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);

      const sections = ["about", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Animated gradient background */}
      <div className="gradient-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <header className="header glass-card">
        <div className="header-left">
          <h1 className="gradient-text">{data.name}</h1>
          <p className="subtitle">Software Engineer</p>
        </div>
        <nav className="nav">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div
              className="hero-main glass-card animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="badge">Available for opportunities</span>
              <h2 className="hero-title">
                Hi, I'm <span className="gradient-text">Faisal</span>
              </h2>
              <p className="hero-description">{data.summary}</p>

              <div className="cta-buttons">
                <a
                  className="btn btn-primary"
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  View GitHub
                </a>
                <a
                  className="btn btn-secondary"
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  className="btn btn-resume"
                  href="/Shah_Faisal_Ahmad_Resume_.pdf"
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <aside
              className="hero-sidebar glass-card animate-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="contact-info">
                <h3>Contact</h3>
                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className="contact-text">{data.location}</span>
                </div>
                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span>{data.phone}</span>
                </div>
                <div className="contact-item">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <span>{data.email}</span>
                </div>
              </div>

              <div className="skills-preview">
                <h3>Top Skills</h3>
                <div className="skill-tags">
                  {data.topSkills.slice(0, 6).map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section animate-in">
          <h2 className="section-title">About Me</h2>
          <div className="glass-card">
            <p className="about-text">
              I’m a Software Engineer with 4+ years of experience building
              scalable, high-performance web applications with React.js,
              Next.js, TypeScript, and modern frontend architecture.
              <br />
              <br />
              My experience includes reusable component libraries, enterprise
              SaaS products, data-intensive dashboards, authentication and
              RBAC, REST APIs, GraphQL, Node.js, Express.js, C#, ASP.NET Core,
              and SQL Server.
              <br />
              <br />I enjoy translating complex requirements into clean,
              maintainable code and intuitive user experiences. I’m particularly
              interested in performance optimization, scalable UI architecture,
              and building products that feel fast, reliable, and thoughtful.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section animate-in">
          <h2 className="section-title">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.role} className="experience-card glass-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">
                    {exp.company} · {exp.period}
                  </p>
                </div>
                <div className="experience-badge">Full-time</div>
              </div>
              <ul className="experience-list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Bento Grid */}
        <section id="skills" className="section animate-in">
          <h2 className="section-title">Skills & Technologies</h2>

          {data.skills.map((group, groupIndex) => (
            <div key={group.category} style={{ marginBottom: "40px" }}>
              <h3 style={{ marginBottom: "16px", opacity: 0.9 }}>
                {group.category}
              </h3>

              <div className="bento-grid">
                {group.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bento-item glass-card"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="skill-icon">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                      />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects Grid */}
        <section id="projects" className="section animate-in">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {data.projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card glass-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v10.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-11zm12 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1H13v10.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-11z" />
                    <path d="M5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 4zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 5 7z" />
                  </svg>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="section animate-in">
          <div className="dual-column">
            <div>
              <h2 className="section-title">Education</h2>
              <div className="education-grid">
                {data.education.map((edu) => (
                  <div key={edu.school} className="education-card glass-card">
                    <h4>{edu.degree}</h4>
                    <p className="edu-meta">
                      {edu.school} · {edu.year}
                    </p>
                    {/* <span className="edu-grade">{edu.extra}</span> */}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title">Certifications</h2>
              <div className="cert-grid">
                {data.certifications.map((cert) => (
                  <div key={cert.link} className="cert-card glass-card">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {cert.title} — {cert.issuer}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section animate-in">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info-card glass-card">
              <h3>Let's connect</h3>
              <p className="contact-tagline">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone</span>
                  <a href={`tel:${data.phone}`}>{data.phone}</a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span>{data.location}</span>
                </div>
              </div>

              <div className="social-links">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form-card glass-card">
              <h3>Send a message</h3>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setStatus(null);

                  const form = e.target as HTMLFormElement;

                  emailjs
                    .sendForm(
                      "service_oux02dc",
                      "template_hb3g6bm",
                      form,
                      "WFi4-S0d52SSo0N4j"
                    )
                    .then(() => {
                      setSending(false);
                      setStatus("success");
                      form.reset();
                    })
                    .catch(() => {
                      setSending(false);
                      setStatus("error");
                    });
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button>
                {status === "success" && (
                  <p style={{ color: "#4ade80", marginTop: "12px" }}>
                    Message sent successfully. I’ll get back to you soon 🙂
                  </p>
                )}

                {status === "error" && (
                  <p style={{ color: "#f87171", marginTop: "12px" }}>
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Designed & Built by <span className="gradient-text">{data.name}</span>
        </p>
        <p className="footer-links">
          <a href={data.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="separator">·</span>
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
