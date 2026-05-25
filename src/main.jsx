import React from "react";
import { createRoot } from "react-dom/client";

import {
  Github,
  Mail,
  MapPin,
  ScrollText,
  Globe2,
  Clock3,
  Download,
  FileText,
  Layers,
  Home,
  BriefcaseBusiness,
  Folder,
  GraduationCap,
  Code2,
  Award,
  Wrench,
  User
} from "lucide-react";

import "./styles.css";

const navItems = [
  { id: "home", label: "/home", icon: Home },
  { id: "about", label: "/about", icon: User },
  { id: "experience", label: "/experience", icon: BriefcaseBusiness },
  { id: "projects", label: "/projects", icon: Folder },
  { id: "education", label: "/education", icon: GraduationCap },
  { id: "skills", label: "/skills", icon: Code2 },
  { id: "publications", label: "/publications", icon: ScrollText },
  { id: "certifications", label: "/certifications", icon: Award }
];

const experienceGroups = [
  {
    company: "University of Thessaly (Dept. of Informatics & Telecommunications)",
    role: "Associate Researcher",
    date: "Apr 2025 - Present",
    details: "Analyzed technical requirements and designed architectures for distributed IoT systems and edge infrastructures. Developed interoperability mechanisms and integrated containerized services."
  },
  {
    company: "University of Thessaly (Dept. of Digital Systems)",
    role: "Associate Researcher",
    date: "Sep 2024 - Apr 2025",
    details: "Designed and developed smart IoT platforms using Docker, MQTT, LoRaWAN, FIWARE, and MongoDB/InfluxDB. Installed, configured, and evaluated edge computing pilot implementations."
  }
];

const technicalProjects = [
  {
    title: "ROS1-to-ROS2 Bridge",
    meta: "Robotics Infrastructure",
    body: "Containerized message bridge supporting legacy ROS Noetic and ROS Foxy nodes with automated multi-architecture deployment flows.",
    link: "https://github.com/losandriana"
  },
  {
    title: "MQTT-to-FIWARE-NGSIv2 Pipeline",
    meta: "Distributed Middleware",
    body: "Designed real-time telemetry pipelines feeding into an Orion Context Broker with InfluxDB persistent storage and Prometheus cluster analytics.",
    link: "https://github.com/losandriana"
  },
  {
    title: "DFROBOT Calibration Logic",
    meta: "Embedded Firmware",
    body: "Automated verification routines on Arduino Uno processors reading multi-tier analog transformations from water quality testing hardware.",
    link: "https://github.com/losandriana"
  }
];

const educationHistory = [
  { title: "Ph.D. Candidate in Digital Systems", meta: "Apr 2026 - Present · University of Thessaly", body: "Thesis Focus: Edge Intelligence and Resilient Wireless Networking for Real-Time Autonomous and IoT Systems." },
  { title: "M.Sc. Advanced Communication Systems & IoT", meta: "Oct 2024 - March 2026 · University of Thessaly", body: "Graduated with Honors (9.71/10). Thesis: Neural Network-Assisted LLR Estimation and Adaptive Modulation for Improved Channel Quality." },
  { title: "B.Sc. Digital Systems", meta: "Oct 2020 - July 2024 · University of Thessaly", body: "Graduated 7.74/10. Thesis: Design for Optimal Coverage in Low-Power LoRa Networks. WiMoTS Research Lab Member." }
];

const skillsInventory = [
  { category: "Languages", items: ["Python", "C", "C++", "Java", "SQL", "PHP", "JavaScript"] },
  { category: "Networks & IoT", items: ["LoRaWAN", "MQTT", "Kafka", "FIWARE", "Docker", "Edge Computing", "Postman"] },
  { category: "Robotics & Simulation", items: ["ROS1", "ROS2", "NS-3", "Android Studio", "Gazebo"] },
  { category: "Databases & Analytics", items: ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "MATLAB", "SPSS"] }
];

const publicationList = [
  { title: "AI-Enabled Autoencoder-Based Physical Layer Design for 6G Communication Systems", source: "Electronics 2026, 15, 538", url: "https://doi.org/10.3390/electronics15030538" },
  { title: "Distributed Prescribed Performance Formation Tracking for Unknown Euler-Lagrange Systems Under Input Saturation", source: "Sensors 2025, 25, 6002", url: "https://doi.org/10.3390/s25196002" },
  { title: "Design and Implementation of Scalable and Low-Latency LoRaWAN IoT Architecture for Smart Cities", source: "IEEE ISCC 2025 · Bologna, Italy", url: "https://doi.org/10.1109/ISCC65549.2025.11326417" },
  { title: "On the use of AI for 6G Signal Decoding in DVB - S.2 Applications", source: "IEEE CSCN 2024 · Belgrade, Serbia", url: "https://doi.org/10.1109/CSCN63874.2024.10849750" }
];

const certificationsList = [
  { name: "Wireless Communications Onramp", provider: "MathWorks · Nov 2024" },
  { name: "Signal Processing Onramp", provider: "MathWorks · Oct 2024" },
  { name: "MATLAB Fundamentals", provider: "MathWorks · May 2024" },
  { name: "Academy for LoRaWAN", provider: "Semtech · Dec 2023" },
  { name: "Cybersecurity and Routing in Computer Networks", provider: "Cisco Academy · Oct 2021" }
];

function handleScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerWidth > 960 ? 40 : 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

function App() {
  const cvPath = `${import.meta.env.BASE_URL}cv.pdf`;

  return (
    <div className="portfolio-site">
      
      {/* Structural Left Sidebar Layout */}
      <aside className="left-sidebar-nav">
        <div className="sidebar-stacked-brand">
          <img 
            src={`${import.meta.env.BASE_URL}bio-page-logo.png`} 
            alt="Andriana Christopoulou Logo" 
            className="sidebar-logo" 
          />
        </div>
        
        <nav className="sidebar-links-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="sidebar-nav-btn"
              onClick={() => handleScroll(item.id)}
            >
              <item.icon className="sidebar-nav-icon" />
              
              <span className="nav-label-text">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
                
        <div className="sidebar-footer-icons">
          <a href="https://github.com/losandriana" target="_blank" rel="noreferrer" title="GitHub"><Github size={15} /></a>
          <a href="https://scholar.google.gr/citations?user=C20oMOQAAAAJ&hl=el" target="_blank" rel="noreferrer" title="Google Scholar"><ScrollText size={15} /></a>
          <a href="https://hub.docker.com/u/losandriana" target="_blank" rel="noreferrer" title="Docker Hub"><Layers size={15} /></a>
        </div>
      </aside>

      {/* Main Stream Pane */}
      <main className="content-stream">
        
        {/* Clean Static Headline Hero Block */}
        <section className="hero-section" id="home">
        
          {/* LEFT SIDE */}
          <div className="hero-text-content">
            <h1 className="static-name-heading">
              Andriana<br />Christopoulou
            </h1>
        
            <p className="static-role-subline">
              Networks & IoT Engineer <span>•</span> Robotics Specialist
            </p>
        
            <div className="hero-cta-row">
              <button
                className="cta-primary-btn"
                onClick={() => handleScroll("contact")}
              >
                Contact Me
              </button>
            </div>
        
            <div className="social-icon-circles">
              <a href="https://github.com/losandriana" target="_blank" rel="noreferrer" title="GitHub">
                <Github size={16} />
              </a>
        
              <a href="https://scholar.google.gr/citations?user=C200MOOAAAAJ&hl=el" target="_blank" rel="noreferrer" title="Google Scholar">
                <ScrollText size={16} />
              </a>
        
              <a href="https://hub.docker.com/u/losandriana" target="_blank" rel="noreferrer" title="Docker Hub">
                <Layers size={16} />
              </a>
        
              <a href="mailto:andrianachristopoulou02@gmail.com" title="Personal Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        
          {/* RIGHT SIDE */}
          <div className="hero-side-panel">
        
            <div className="hero-focus-card">
              <span className="mini-card-label">Researching</span>
        
              <ul>
                <li>→ Edge Intelligence</li>
                <li>→ Network optimization & resilience</li>
                <li>→ Robotics & network middleware</li>
              </ul>
            </div>
        
            <div className="hero-mini-grid">
        
              <div className="mini-stat-card">
                <span className="mini-card-label">FOCUS</span>
        
                <div className="focus-tags">
                  <span>IoT Systems</span>
                  <span>Distributed Middleware</span>
                  <span>Edge AI</span>
                  <span>Wireless Networks</span>
                </div>
              </div>
        
              <div className="mini-stat-card">
                <span className="mini-card-label">STATS</span>
        
                <div className="stats-list">
                  <div>
                    <strong>4</strong>
                    <span>Publications</span>
                  </div>
        
                  <div>
                    <strong>2</strong>
                    <span>Research Roles</span>
                  </div>
        
                  <div>
                    <strong>10+</strong>
                    <span>IoT Deployments</span>
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        
        </section>

        {/* Section 3: Experience */}
        <section className="generic-section" id="experience">
          <h2 className="section-title-line">Experience</h2>
          <div className="editorial-stack">
            {experienceGroups.map((job, idx) => (
              <article className="editorial-tile" key={idx}>
                <div className="tile-header-row">
                  <h3>{job.role}</h3>
                  <span className="tile-date-label">{job.date}</span>
                </div>
                <p className="tile-institution-sub">{job.company}</p>
                <p className="tile-description-body">{job.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Projects */}
        <section className="generic-section" id="projects">
          <h2 className="section-title-line">Projects</h2>
          <div className="cards-structural-grid">
            {technicalProjects.map((proj, idx) => (
              <article className="info-display-card" key={idx}>
                <div className="card-top-row">
                  <h3>{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="card-git-link" title="Source Files"><Github size={14} /></a>
                </div>
                <span className="card-tag-meta">{proj.meta}</span>
                <p>{proj.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5: Education */}
        <section className="generic-section" id="education">
          <h2 className="section-title-line">Education</h2>
          <div className="editorial-stack">
            {educationHistory.map((edu, idx) => (
              <article className="editorial-tile" key={idx}>
                <div className="tile-header-row">
                  <h3>{edu.title}</h3>
                  <span className="tile-date-label">{edu.meta.split('·')[0]}</span>
                </div>
                <p className="tile-institution-sub">{edu.meta.split('·')[1]}</p>
                <p className="tile-description-body">{edu.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 6: Skills */}
        <section className="generic-section" id="skills">
          <h2 className="section-title-line">Skills</h2>
          <div className="skills-split-layout">
            {skillsInventory.map((bucket, idx) => (
              <div key={idx} className="skills-bucket-block">
                <h4>{bucket.category}</h4>
                <div className="flat-pill-cloud">
                  {bucket.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Publications */}
        <section className="generic-section" id="publications">
          <h2 className="section-title-line">Publications</h2>
          <div className="editorial-stack">
            {publicationList.map((pub, idx) => (
              <article className="editorial-tile" key={idx}>
                <h3>{pub.title}</h3>
                <p className="tile-institution-sub">{pub.source}</p>
                <a href={pub.url} target="_blank" rel="noreferrer" className="editorial-link">Read Source Publication →</a>
              </article>
            ))}
          </div>
        </section>

        {/* Section 8: Certifications */}
        <section className="generic-section" id="certifications">
          <h2 className="section-title-line">Certifications</h2>
          <div className="flat-rows-list">
            {certificationsList.map((cert, idx) => (
              <div className="flat-list-row" key={idx}>
                <span className="row-main-title">{cert.name}</span>
                <span className="row-side-meta">{cert.provider}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section className="generic-section contact-footer-block" id="contact">
          <h2 className="section-title-line">Contact</h2>
          <p>Let's discuss distributed infrastructures, systems automation, or research targets.</p>
          <div className="footer-links-stack">
            <a href="mailto:anchristopoulou@uth.gr" className="footer-email-link">anchristopoulou@uth.gr</a>
            <a href="mailto:andrianachristopoulou02@gmail.com" className="footer-email-link">andrianachristopoulou02@gmail.com</a>
          </div>
        </section>

      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
