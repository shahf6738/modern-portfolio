// src/App.tsx
import React, { useEffect, useState } from "react";
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
  location: "Rajouri Kadal, Srinagar, Jammu & Kashmir, India",
  phone: "+91 7780-846120",
  email: "shahf6738@gmail.com",
  github: "https://github.com/shahf6738",
  linkedin: "https://www.linkedin.com/in/shah-faisal-ahmad-ba4a71212",
  summary:
    "Front-end Software Engineer with 3+ years of hands-on experience building scalable, performant, and interactive web applications. Proficient in React, TypeScript, JavaScript (ES6+), HTML5 and CSS3. Strong focus on clean code, responsive design and polished UI/UX for data-driven dashboards and web apps.",
  skills: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Elastic UI (EUI)",
    "AmCharts 4",
    "Redux Toolkit",
    "Cypress",
    "OpenSearch Dashboards (OSD)",
    "Performance optimization",
  ],
  experience: [
    {
      role: "Software Engineer — Front-end Development",
      company: "Everlytics, Bangalore",
      period: "August 2022 – Present",
      bullets: [
        "Develop and maintain large, data-driven front-end applications using React, TypeScript, JavaScript, HTML, and CSS.",
        "Build reusable, accessible and responsive UI components with Elastic UI (EUI) and create custom OpenSearch Dashboards (OSD) plugins.",
        "Design and implement complex interactive charts and visualizations using AmCharts 4 and Elastic Charts.",
        "Improve runtime performance through virtualization, memoization and efficient data transforms for high-volume datasets.",
        "Manage application state with Redux Toolkit and write end-to-end tests using Cypress.",
        "Contribute to the company website (modern, responsive pages built with JavaScript, HTML, and CSS).",
      ],
    },
  ] as Experience[],
  education: [
    {
      degree: "B.E., Computer Science",
      school: "University of Kashmir",
      year: "2021",
      extra: "CGPA: 7.34",
    },
    { degree: "HSC", school: "JKBOSE", year: "2016", extra: "75.6%" },
    { degree: "SSC", school: "JKBOSE", year: "2014", extra: "86.8%" },
  ],
  projects: [
    {
      id: "number-predictor-game",
      title: "number-predictor-game",
      description:
        "Interactive number prediction game showcasing modern web development techniques. Features animated UI elements, gradient backgrounds, responsive design, and an engaging user experience. Demonstrates clean code practices and contemporary CSS patterns.",
      link: "https://github.com/shahf6738/number-predictor-game",
    },
    {
      id: "name-prediction-game",
      title: "name-prediction-game",
      description:
        "Interactive mind-reading game that predicts any name you're thinking of using a clever mathematical algorithm.",
      link: "https://github.com/shahf6738/name-prediction-game",
    },
    {
      id: "shahtech-solutions-website",
      title: "shahtech-solutions-website",
      description:
        "Modern, responsive technology consulting website showcasing IT services, industry solutions, and digital transformation expertise. Built with HTML, CSS, and JavaScript.",
      link: "https://github.com/shahf6738/shahtech-solutions-website",
    },
  ] as Project[],
  certifications: [
    "JavaScript Algorithms and Data Structures — freeCodeCamp",
    "Responsive Web Design — freeCodeCamp",
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

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
          <p className="subtitle">Front-end Software Engineer</p>
        </div>
        <nav className="nav">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
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
                  {data.skills.slice(0, 6).map((skill) => (
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
              {data.summary} I also contribute to my current company's
              public-facing website — building modern, responsive pages using
              JavaScript, HTML and CSS as part of cross-functional
              responsibilities. I'm passionate about creating intuitive user
              experiences and writing clean, maintainable code.
            </p>
          </div>
        </section>

        {/* Skills Bento Grid */}
        <section id="skills" className="section animate-in">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="bento-grid">
            {data.skills.map((skill, index) => (
              <div
                key={skill}
                className="bento-item glass-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" />
                  </svg>
                </div>
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
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
                <div className="experience-badge">Current</div>
              </div>
              <ul className="experience-list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
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
                    <span className="edu-grade">{edu.extra}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title">Certifications</h2>
              <div className="cert-grid">
                {data.certifications.map((cert) => (
                  <div key={cert} className="cert-card glass-card">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                    <span>{cert}</span>
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
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submission would happen here!");
                }}
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
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
                    className="form-textarea"
                    rows={5}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </button>
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
