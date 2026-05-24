import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Folder,
  GraduationCap,
  Home,
  Mail,
  Menu,
  MapPin,
  ScrollText,
  ShieldCheck,
  Globe2,
  Clock3,
  Wrench,
  X
} from "lucide-react";
import "./styles.css";

const navItems = [
  { id: "home", label: "/home", icon: Home },
  { id: "experience", label: "/experience", icon: BriefcaseBusiness },
  { id: "projects", label: "/projects", icon: Folder },
  { id: "education", label: "/education", icon: GraduationCap },
  { id: "skills", label: "/skills", icon: Code2 },
  { id: "publications", label: "/publications", icon: ScrollText },
  { id: "certifications", label: "/certifications", icon: Award },
  { id: "more", label: "/more", icon: Wrench }
];

const featuredProjects = [
  {
    title: "ROS1-to-ROS2 Bridge",
    description: "Containerized multi-architecture bridge for ROS Noetic and Foxy with deployment automation.",
    tags: ["ROS1/2", "Docker", "Robotics", "CI/CD"],
    visual: "bridge"
  },
  {
    title: "MQTT-to-FIWARE-NGSIv2",
    description: "IoT data pipeline infrastructure featuring real-time telemetry analytics and monitoring.",
    tags: ["MQTT", "FIWARE", "InfluxDB", "Prometheus"],
    visual: "pipeline"
  },
  {
    title: "DFROBOT Calibration",
    description: "Automated real-time sensor processing and calibration firmware for water quality metrics.",
    tags: ["C++", "Arduino", "Sensors", "Automation"],
    visual: "calibration"
  }
];

const skillMeters = [
  ["Edge Computing & IoT", 95, "Expert"],
  ["Networks & Middleware", 90, "Expert"],
  ["Robotics (ROS)", 85, "Advanced"],
  ["Embedded Programming", 80, "Advanced"]
];

const experienceGroups = [
  {
    company: "University of Thessaly (Dept. of Computer Science & Telecommunications)",
    logo: "uth-cs",
    items: [
      {
        role: "IT Researcher",
        date: "Apr 2025 - Present",
        duration: "Ongoing",
        location: "Greece · Hybrid",
        details: "Distributed IoT architectures, Edge computing, Containerized services orchestration, Low-latency optimization, Technical deliverables writing."
      }
    ]
  },
  {
    company: "University of Thessaly (Dept. of Digital Systems)",
    logo: "uth-ds",
    items: [
      {
        role: "Part-time IT Professional",
        date: "Sep 2024 - Apr 2025",
        duration: "8 mos",
        location: "Greece · Hybrid",
        details: "Smart IoT platforms, LoRaWAN network structures, Interoperability interfaces, Pilot edge installations."
      }
    ]
  }
];

const moreProjects = [
  {
    title: "ROS1-to-ROS2 Containerized Bridge",
    meta: "Open Source · Robotics Systems",
    body: "Developed a multi-architecture custom message bridge supporting cross-version communication between legacy ROS Noetic and ROS Foxy nodes. Automated deployments.",
    href: "https://github.com/losandriana"
  },
  {
    title: "MQTT-to-FIWARE Data Pipeline",
    meta: "Distributed Middleware · Smart Systems",
    body: "Designed an automated IoT ingestion pipeline channeling data via MQTT into an Orion Context Broker, backed by InfluxDB and Prometheus metrics monitoring.",
    href: "https://github.com/losandriana"
  },
  {
    title: "DFROBOT Sensor Calibration Engine",
    meta: "Embedded System Firmware",
    body: "Wrote automated operational modules for Arduino Uno computing analog processing transformations on water quality, pH, and turbidity sensing endpoints.",
    href: "https://github.com/losandriana"
  }
];

const education = [
  ["Ph.D. Candidate in Digital Systems", "Apr 2026 - Present · University of Thessaly", "Thesis Focus: Edge Intelligence and Resilient Wireless Networking for Real-Time Autonomous and IoT Systems."],
  ["M.Sc. Advanced Communication Systems and IoT", "Oct 2024 - Mar 2026 · University of Thessaly", "Graduated with Honors (9.71/10). Thesis: Neural Network-Assisted LLR Estimation and Adaptive Modulation for Improved Channel Quality in DVB-S2 Systems."],
  ["B.Sc. Digital Systems", "Oct 2020 - Jul 2024 · University of Thessaly", "Graduated 7.74/10. Thesis: Design for Optimal Coverage in Low-Power LoRa Networks. WiMoTS Research Laboratory Member."]
];

const certifications = [
  ["Wireless Communications Onramp", "MathWorks · Nov 2024", ""],
  ["Signal Processing Onramp", "MathWorks · Oct 2024", ""],
  ["MATLAB Fundamentals", "MathWorks · May 2024", ""],
  ["Academy for LoRaWAN", "Semtech · Dec 2023", ""],
  ["Cybersecurity and Routing in Computer Networks", "Cisco Academy · Oct 2021", ""]
];

const skillBuckets = [
  ["Programming Languages", ["Python", "C", "C++", "Java", "SQL", "PHP", "JavaScript"]],
  ["Networks & IoT", ["LoRaWAN", "MQTT", "Kafka", "FIWARE", "Docker", "Edge Computing"]],
  ["Robotics & Simulation", ["ROS1", "ROS2", "NS-3", "Android Studio"]],
  ["Databases & Analytics", ["MySQL", "PostgreSQL", "MongoDB", "InfluxDB", "MATLAB", "SPSS"]]
];

const initialTerminalLines = [
  { type: "hint", text: "Type help to see available commands." }
];

const commandHelp = "Commands: help, whoami, focus, experience, projects, education, skills, publications, certifications, more, contact, clear";
const sectionCommands = new Set(["experience", "projects", "education", "skills", "publications", "certifications", "more"]);
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function scrollToSection(id, behavior = "smooth") {
  const target = document.getElementById(id);
  const root = document.querySelector(".content-shell");
  if (!target) return;

  if (root) {
    const top = Math.max(0, target.offsetTop - 24);
    if (behavior === "auto") {
      root.scrollTop = top;
      root.scrollTo?.(0, top);
    } else {
      root.scrollTo({ top, behavior });
    }
    return;
  }
  target.scrollIntoView({ behavior, block: "start" });
}

function NeuralCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let raf = 0;
    let lastFrame = 0;
    let nodes = [];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(96, Math.floor((width * height) / 13200));
      nodes = Array.from({ length: count }, (_, index) => {
        const cluster = index % 3;
        const xBase = cluster === 0 ? width * 0.52 : cluster === 1 ? width * 0.68 : width * 0.84;
        const yBase = cluster === 0 ? height * 0.18 : cluster === 1 ? height * 0.25 : height * 0.34;
        return {
          x: xBase + (Math.random() - 0.5) * width * 0.26,
          y: yBase + (Math.random() - 0.5) * height * 0.32,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 0.8 + Math.random() * 1.25
        };
      });
    };

    const draw = (timestamp = 0) => {
      if (!media.matches && timestamp - lastFrame < 33) {
        raf = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width * 0.58, height * 0.08, 0, width * 0.58, height * 0.08, width * 0.78);
      gradient.addColorStop(0, "rgba(30, 50, 90, .34)");
      gradient.addColorStop(0.42, "rgba(8, 11, 28, .78)");
      gradient.addColorStop(1, "rgba(2, 4, 14, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const node of nodes) {
        if (!media.matches) {
          node.x += node.vx;
          node.y += node.vy;
        }
        if (node.x < -80) node.x = width + 80;
        if (node.x > width + 80) node.x = -80;
        if (node.y < -80) node.y = height + 80;
        if (node.y > height + 80) node.y = -80;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            const alpha = (1 - dist / 145) * 0.26;
            ctx.strokeStyle = `rgba(75, 130, 255, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 5);
        glow.addColorStop(0, "rgba(70, 140, 255, .86)");
        glow.addColorStop(0.46, "rgba(67, 230, 210, .1)");
        glow.addColorStop(1, "rgba(67, 230, 210, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(74, 130, 255, 0.72)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.8, node.r * 0.85), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!media.matches) {
        raf = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="neural-canvas" ref={ref} aria-hidden="true" />;
}

function Sidebar({ active, setActive, mobileMenuOpen, setMobileMenuOpen }) {
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <aside className={`sidebar ${mobileMenuOpen ? "menu-open" : ""}`}>
      <a
        className="brand"
        href="#home"
        onClick={() => {
          setActive("home");
          closeMenu();
        }}
        aria-label="Andriana Christopoulou home"
      >
        <span className="brand-mark" style={{color: '#4af', fontWeight: 'bold', fontSize: '1.2rem'}}>
          AC
        </span>
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className="side-nav" aria-label="Main navigation">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            href={`#${id}`}
            onClick={() => {
              setActive(id);
              closeMenu();
            }}
          >
            <Icon size={16} strokeWidth={1.9} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="social-row">
          <a href="https://github.com/losandriana" target="_blank" rel="noreferrer">
            <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="mailto:andrianachristopoulou02@gmail.com">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </aside>
  );
}

function InteractiveTerminal() {
  const [lines, setLines] = useState(initialTerminalLines);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setLines(initialTerminalLines);
      return;
    }

    const nextLines = [{ type: "command", text: `~ ${rawCommand.trim()}` }];

    if (command === "help") {
      nextLines.push({ type: "output", text: commandHelp });
    } else if (command === "whoami") {
      nextLines.push({ type: "output", text: "Andriana Christopoulou — Networks, IoT, and Robotics Systems Engineer. Current Ph.D. Candidate specializing in edge intelligence frameworks." });
    } else if (command === "focus") {
      nextLines.push({ type: "output", text: "Edge Intelligence · LoRaWAN Infrastructure · Containerized Orchestration Systems · Real-Time Micro-Services." });
    } else if (sectionCommands.has(command)) {
      document.activeElement?.blur();
      window.location.hash = command;
      nextLines.push({ type: "output", text: `Navigating to #${command}.` });
    } else if (command === "contact") {
      nextLines.push({
        type: "links",
        text: "Direct links:",
        links: [
          ["GitHub", "https://github.com/losandriana"],
          ["Scholar", "https://scholar.google.gr/citations?user=C200MOOAAAAJ&hl=el"],
          ["Email", "mailto:andrianachristopoulou02@gmail.com"]
        ]
      });
    } else {
      nextLines.push({ type: "error", text: "Command not found. Enter 'help' for options." });
    }

    setLines((current) => [...current, ...nextLines]);
  };

  return (
    <div className="terminal-card" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <i className="red" />
        <i className="yellow" />
        <i className="green" />
        <span>andriana@edge-shell: ~/bio</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, index) => (
          <p className={`terminal-line ${line.type}`} key={`${line.type}-${index}`}>
            {line.text}
            {line.links && (
              <span className="terminal-links">
                {line.links.map(([label, href]) => (
                  <a href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>
                ))}
              </span>
            )}
          </p>
        ))}
        <form className="terminal-input-row" onSubmit={(e) => { e.preventDefault(); runCommand(input); setInput(""); }}>
          <label htmlFor="terminal-input">~</label>
          <input
            ref={inputRef}
            id="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-grid" id="home">
      <div className="intro-panel">
        <h1>Andriana<br />Christopoulou</h1>
        <p className="role-line">Networks, IoT, and Robotics Systems Engineer</p>
        <SkillMeters />
      </div>

      <div className="terminal-area">
        <div className="info-strip">
          <span><MapPin size={15} /> Lamia, Greece</span>
          <span><Globe2 size={15} /> Edge Intelligence Architecture</span>
          <span><Clock3 size={15} /> UTC+2</span>
        </div>
        <InteractiveTerminal />
      </div>
    </section>
  );
}

function SkillMeters() {
  return (
    <section className="glass-card compact-card" id="technical-skills">
      <div className="card-heading">
        <div><Code2 size={17} /> <span>Core Architecture Focus</span></div>
      </div>
      <div className="meter-list">
        {skillMeters.map(([name, value, level]) => (
          <div className="meter-row" key={name}>
            <span>{name}</span>
            <div className="meter-track"><i style={{ width: `${value}%`, backgroundColor: '#47a5ff' }} /></div>
            <strong>{level}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="glass-card experience-card" id="experience">
      <div className="card-heading">
        <div><BriefcaseBusiness size={17} /> <span>Research & Experience</span></div>
      </div>
      <div className="timeline-shell">
        {experienceGroups.map((group) => (
          <div className="timeline-group" key={group.company}>
            <div className="role-list">
              {group.items.map((item) => (
                <article className="role-item" key={item.role}>
                  <span className="timeline-dot current" />
                  <div className="role-main">
                    <h3>{item.role}</h3>
                    <p style={{color: '#9cf'}}>{group.company}</p>
                    <p>{item.date} · {item.duration}</p>
                    <p className="role-skill"><ShieldCheck size={14} /> {item.details}</p>
                  </div>
                  <div className="role-location">{item.location}</div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionedContent() {
  return (
    <div className="section-stack">
      <section className="glass-card content-section" id="projects">
        <div className="card-heading">
          <div><Folder size={17} /> <span>Technical Projects</span></div>
        </div>
        <div className="data-grid project-data-grid">
          {moreProjects.map((project) => (
            <article className="data-tile project-tile" key={project.title}>
              <h3>{project.title}</h3>
              <p className="muted">{project.meta}</p>
              <p>{project.body}</p>
              {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Open Profile →</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card content-section" id="education">
        <div className="card-heading">
          <div><GraduationCap size={17} /> <span>Education</span></div>
        </div>
        <div className="data-stack">
          {education.map(([title, meta, body]) => (
            <div className="data-tile" key={title}>
              <h3>{title}</h3>
              <p className="muted">{meta}</p>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card content-section" id="skills">
        <div className="card-heading">
          <div><Code2 size={17} /> <span>Full Technical Spectrum</span></div>
        </div>
        <div className="skill-buckets">
          {skillBuckets.map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>
              <div className="tag-cloud">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="publications">
        <div className="card-heading">
          <div><ScrollText size={17} /> <span>Publications</span></div>
        </div>
        <div className="data-stack">
          <div className="data-tile">
            <h3>AI-Enabled Autoencoder-Based Physical Layer Design for 6G Communication Systems</h3>
            <p className="muted">Electronics 2026, 15, 538</p>
            <a href="https://doi.org/10.3390/electronics15030538" target="_blank" rel="noreferrer">Read Publication →</a>
          </div>
          <div className="data-tile">
            <h3>Distributed Prescribed Performance Formation Tracking for Unknown Euler-Lagrange Systems Under Input Saturation</h3>
            <p className="muted">Sensors 2025, 25, 6002</p>
            <a href="https://doi.org/10.3390/s25196002" target="_blank" rel="noreferrer">Read Publication →</a>
          </div>
          <div className="data-tile">
            <h3>Design and Implementation of Scalable and Low-Latency LoRaWAN IoT Architecture for Smart Cities</h3>
            <p className="muted">IEEE ISCC 2025 · Bologna, Italy</p>
            <a href="https://doi.org/10.1109/ISCC65549.2025.11326417" target="_blank" rel="noreferrer">Read Publication →</a>
          </div>
          <div className="data-tile">
            <h3>On the use of AI for 6G Signal Decoding in DVB - S.2 Applications</h3>
            <p className="muted">IEEE CSCN 2024 · Belgrade, Serbia</p>
            <a href="https://doi.org/10.1109/CSCN63874.2024.10849750" target="_blank" rel="noreferrer">Read Publication →</a>
          </div>
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="certifications">
        <div className="card-heading">
          <div><Award size={17} /> <span>Certifications & Seminars</span></div>
        </div>
        <div className="cert-stack">
          {certifications.map(([title, meta]) => (
            <article className="cert-row" key={title}>
              <span>{title}</span>
              <small>{meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card content-section compact-section" id="more">
        <div className="card-heading">
          <div><Wrench size={17} /> <span>Languages & Frameworks</span></div>
        </div>
        <div className="data-tile">
          <h3>Languages</h3>
          <p>Greek (Native) · English (C2 - Full Professional Proficiency) · German (A2 - Elementary)</p>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      window.requestAnimationFrame(() => {
        scrollToSection(id, "auto");
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const root = document.querySelector(".content-shell");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { root, rootMargin: "-20% 0px -55% 0px", threshold: [0.08, 0.22, 0.45] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NeuralCanvas />
      <div className="app-frame">
        <Sidebar
          active={active}
          setActive={setActive}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <div className="shell-title"><span /> andriana@edge-shell: ~</div>
        <main className="content-shell">
          <Hero />
          <div className="dashboard-grid experience-only">
            <Experience />
          </div>
          <SectionedContent />
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
