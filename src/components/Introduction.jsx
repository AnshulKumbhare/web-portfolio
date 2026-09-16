import { useEffect } from "react";
import "../assets/css/introduction.css";

const navigation = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
];

const projects = [
  {
    title: "Finycs",
    description:
      "A cloud based Finance and Accounting application for business management and financial operations.",
    technologies: ["Django", "Python", "SQL", "Docker"],
  },
  {
    title: "Get It Done",
    description:
      "Internal task management application for organizing and tracking work.",
    technologies: ["React", "Python", "Django"],
  },
  {
    title: "Inventory Management",
    description:
      "Inventory management functionality integrated into the accounting ecosystem.",
    technologies: ["Python", "Django", "SQL"],
  },
];

const experience = [
  {
    period: "Sept 2024 - Present",
    title: "Software Developer",
    company: "Artdex & Cognoscis Technologies LLP, Vashi",
    description:
      "Worked on accounting, inventory, analytics, task management, and desktop synchronization applications.",
  },
  {
    period: "Jun 2024 - Aug 2024",
    title: "Software Developer Intern",
    company: "Artdex & Cognoscis Technologies LLP, Vashi",
    description:
      "Designed and developed application functionality across web and desktop environments.",
  },
];

const skills = [
  "Rust",
  "Tauri",
  "Python",
  "Django",
  "SQL",
  "Docker",
  "HTML",
  "CSS",
];

const education = [
  {
    period: "May 2019 - May 2023",
    title: "B.E Mechanical Engineering",
    company: "Terna College of Engineering, Nerul, Navi Mumbai",
    description: "Mechanical Engineering",
  },
  {
    period: "2017 - 2019",
    title: "Higher Secondary Certificate",
    company: "Tilak Public School, Seawoods, Navi Mumbai",
    description: "12th",
  },
  {
    period: "2017",
    title: "Senior Secondary Certificate",
    company: "St Joseph's High School (C.B.S.E), New Panvel",
    description: "10th",
  }
];

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionHeading({ number, title }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item reveal-card" key={index}>
          <span className="timeline-marker" />

          <div className="timeline-content">
            <span className="timeline-period">
              {item.period}
            </span>

            <h3>{item.title}</h3>

            <h4>{item.company}</h4>

            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card reveal-card">
      <span className="project-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-list">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

function Skills({ items }) {
  return (
    <div className="skills">
      {items.map((skill) => (
        <span className="skill reveal-card" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          AK<span>.</span>
        </div>

        <div className="nav-links">
          {navigation.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>

          <h1>
            Anshul
            <span>Kumbhare.</span>
          </h1>

          <h2>Software Developer</h2>

          <p className="hero-description">
            I build web applications and software systems
            with a focus on creating practical, reliable,
            and intuitive solutions.
          </p>

          <div className="hero-actions">
            <button
              className="button primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>

            <button
              className="button secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img
              src="/profile.jpg"
              alt="Anshul Kumbhare"
            />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="section about reveal"
      >
        <SectionHeading number="01" title="About" />

        <div className="about-content">
          <p>
            I am a software developer focused on building
            practical and reliable software applications.
          </p>

          <p>
            I enjoy working across the stack, understanding
            how systems work, and turning ideas into useful
            products.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section reveal"
      >
        <SectionHeading number="02" title="Projects" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="section reveal"
      >
        <SectionHeading number="03" title="Experience" />

        <Timeline items={experience} />
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="section skills-section reveal"
      >
        <SectionHeading number="04" title="Skills" />

        <Skills items={skills} />
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="section reveal"
      >
        <SectionHeading number="05" title="Education" />

        <Timeline items={education} />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section contact reveal"
      >
        <p className="eyebrow">Get In Touch</p>

        <h2>Let's build something.</h2>

        <p>
          Have a project, idea, or opportunity?
          I'd love to hear from you.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="button primary"
        >
          Contact Me
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Anshul Kumbhare</span>
        <span>Software Developer</span>
      </footer>

    </div>
  );
}