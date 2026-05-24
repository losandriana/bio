import React from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Folder,
  GraduationCap,
  Mail,
  MapPin,
  ScrollText,
  Globe2,
  Clock3,
  Wrench,
  Github,
  Download,
  FileText
} from "lucide-react";
import "./styles.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "certifications", label: "Certifications" }
];

const experienceGroups = [
  {
    company: "University of Thessaly (Dept. of Computer Science & Telecommunications) [cite: 8]",
    role: "Associate Researcher [cite: 7]",
    date: "Apr 2025 - Present [cite: 8]",
    details: "Analyzed technical requirements and designed architectures for distributed IoT systems and edge infrastructures[cite: 9]. Integrated subsystems via containerized services[cite: 11]."
  },
  {
    company: "University of Thessaly (Dept. of Digital Systems) [cite: 16]",
    role: "Associate Researcher [cite: 15]",
    date: "Sep 2024 - Apr 2025 [cite: 16]",
    details: "Designed and developed smart IoT platforms using Docker, MQTT, LoRaWAN, FIWARE, and MongoDB/InfluxDB[cite: 18]. Installed and configured pilot implementations[cite: 21]."
  }
];

const technicalProjects = [
  {
    title: "ROS1-to-ROS2 Bridge [cite: 37]",
    meta: "Robotics Infrastructure",
    body: "Containerized message bridge supporting legacy ROS Noetic and ROS Foxy nodes with automated multi-architecture deployment flows[cite: 38, 39]."
  },
  {
    title: "MQTT-to-FIWARE-NGSIv2 Pipeline [cite: 40]",
    meta: "Distributed Middleware",
    body: "Designed real-time telemetry pipelines feeding into an Orion Context Broker with InfluxDB persistent storage and Prometheus cluster analytics[cite: 41, 42]."
  },
  {
    title: "DFROBOT Calibration Logic [cite: 44]",
    meta: "Embedded Firmware",
    body: "Automated verification routines on Arduino Uno processors reading multi-tier analog transformations from water quality testing hardware[cite: 45, 47]."
  }
];

const educationHistory = [
  { title: "Ph.D. Candidate in Digital Systems [cite: 24]", meta: "Apr 2026 - Present · University of Thessaly [cite: 23, 24]", 
   body: "Thesis Focus: Edge Intelligence and Resilient Wireless Networking for Real-Time Autonomous and IoT Systems[cite: 24]." },
  { title: "M.Sc. Advanced Communication Systems & IoT [cite: 26]", meta: "Oct 2024 - March 2026 · University of Thessaly [cite: 25, 26]", 
   body: "Graduated with Honors (9.71/10)[cite: 28]. Thesis on Neural Network-Assisted LLR Estimation and Adaptive Modulation[cite: 29]." },
  { title: "B.Sc. Digital Systems [cite: 31]", meta: "Oct 2020 - July 2024 · University of Thessaly [cite: 30, 31]", 
   body: "Graduated 7.74/10[cite: 33]. Thesis: Design for Optimal Coverage in Low-Power LoRa Networks[cite: 34]. WiMoTS Research Lab Member[cite: 35]." }
];

const skillsInventory = [
  { category: "Languages", items: ["Python", "C", "C++", "Java", "SQL", "PHP", "JavaScript"] }, // [cite: 49]
  { category: "Networks & IoT", items: ["LoRaWAN", "MQTT", "Kafka", "FIWARE", "Docker", "Edge Computing"] }, // [cite: 50]
  { category: "Robotics & Simulation", items: ["ROS1", "ROS2", "NS-3", "Android Studio"] }, // [cite: 50]
  { category: "Databases & Analytics", items: ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "MATLAB", "SPSS"] } // [cite: 51, 52]
];

const publicationList = [
  { title: "AI-Enabled Autoencoder-Based Physical Layer Design for 6G Communication Systems", source: "Electronics 2026, 15, 538", url: "https://doi.org/10.3390/electronics15030538" }, // [cite: 62, 63]
  { title: "Distributed Prescribed Performance Formation Tracking for Unknown Euler-Lagrange Systems Under Input Saturation", source: "Sensors 2025, 25, 6002", url: "https://doi.org/10.3390/s25196002" }, // [cite: 63, 64]
  { title: "Design and Implementation of Scalable and Low-Latency LoRaWAN IoT Architecture for Smart Cities", source: "IEEE ISCC 2025 · Bologna, Italy", url: "https://doi.org/10.1109/ISCC65549.2025.11326417" }, // [cite: 65]
  { title: "On the use of AI for 6G Signal Decoding in DVB - S.2 Applications", source: "IEEE CSCN 2024 · Belgrade, Serbia", url: "https://doi.org/10.1109/CSCN63874.2024.10849750" } // [cite: 66]
];

const certificationsList = [
  { name: "Wireless Communications Onramp", provider: "MathWorks · Nov 2024" }, // [cite: 54]
  { name: "Signal Processing Onramp", provider: "MathWorks · Oct 2024" }, // [cite: 54]
  { name: "MATLAB Fundamentals", provider: "MathWorks · May 2024" }, // [cite: 55]
  { name: "Academy for LoRaWAN", provider: "Semtech · Dec 2023" }, // [cite: 56]
  { name: "Cybersecurity and Routing in Computer Networks", provider: "Cisco Academy · Oct 2021" } // [cite: 60]
];

// Handles scrolling manually via viewport calculations to keep URLs clean
function handleScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 70; // Matches top navigation height configuration
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
      <header className="top-navbar">
        <nav className="header-nav-links">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleScroll(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="content-stream">
        
        {/* Section 1: Hero Block */}
        <section className="hero-section" id="home">
          <div className="hero-text-content">
            <h1 className="static-name-heading">
              Andriana<br />Christopoulou {/* [cite: 1] */}
            </h1>
            <p className="static-role-subline">
              Networks Researcher <span>•</span> IoT Engineer <span>•</span> Robotics Specialist {/* [cite: 2] */}
            </p>
            <div className="hero-cta-row">
              <button className="cta-primary-btn" onClick={() => handleScroll("contact")}>
                Contact Me
              </button>
            </div>
            <div className="social-icon-circles">
              <a href="https://github.com/losandriana" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a> {/* [cite: 4] */}
              <a href="mailto:andrianachristopoulou02@gmail.com" aria-label="Personal Email"><Mail size={16} /></a> {/* [cite: 3] */}
              <a href="mailto:anchristopoulou@uth.gr" aria-label="Academic Email"><FileText size={16} /></a>
            </div>
          </div>
        </section>

        {/* Section 2: About Me & Interactive PDF Frame */}
        <section className="about-section" id="about">
          <h2 className="section-title-line">About Me</h2>
          <p className="detailed-narrative">
            As a Ph.D. Candidate at the University of Thessaly [cite: 24], my research focus addresses Edge Intelligence and Resilient Wireless Networking[cite: 24]. I design scalable distributed containerized middleware communication engines to allow robust, low-latency execution and real-time responsiveness across autonomous IoT domains.
          </p>
          <div className="quick-specs-grid">
            <span><MapPin size={14} /> Lamia/Larissa, Greece</span> {/* [cite: 3] */}
            <span><Mail size={14} /> <a href="mailto:anchristopoulou@uth.gr" className="inline-email-link">anchristopoulou@uth.gr</a></span>
            <span><Globe2 size={14} /> Available Worldwide</span>
            <span><Clock3 size={14} /> EEST / UTC+2</span>
          </div>

          {/* Embedded Full CV Document Container */}
          <div className="cv-document-container">
            <div className="cv-document-header">
              <span className="document-title">Curriculum_Vitae.pdf</span>
              <a href={cvPath} download="CV_Christopoulou_Andriana.pdf" className="download-cv-icon-btn">
                <Download size={14} /> Download
              </a>
            </div>
            <div className="cv-iframe-wrapper">
              <iframe 
                src={`${cvPath}#toolbar=0&navpanes=0`}
                title="Andriana Christopoulou English CV Preview"
                width="100%"
                height="100%"
              />
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
                <h3>{proj.title}</h3>
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
            <a href="mailto:andrianachristopoulou02@gmail.com" className="footer-email-link subtle">andrianachristopoulou02@gmail.com [cite: 3]</a>
          </div>
        </section>

      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
