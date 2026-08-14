import { useEffect, useState } from "react";
import "./App.css";
import "./overrides.css";
import "./layout.css";
import "./contact-form.css";

const projects = [
  {
    name: "Alpha Commerce",
    type: "FULL-STACK PLATFORM",
    image: "/user_dashboard.png",
    description:
      "A production-minded shopping experience with separate customer and admin workflows.",
    details: [
      "Role-based JWT authentication",
      "Razorpay payments + order tracking",
      "S3-powered product image storage",
    ],
    stack: ["Spring Boot", "React", "PostgreSQL", "AWS S3"],
    url: "https://github.com/ShreyaaPawar/alpha-ecommerce-website",
    accent: "coral",
  },
  {
    name: "DTO Generator",
    type: "DEVELOPER TOOL",
    image: "/main-ui.png",
    description:
      "A Java utility that turns JSON schemas into clean DTOs and mapping logic—without the repetitive manual work.",
    details: [
      "Config-driven code generation",
      "Handles nested objects and arrays",
      "One-click dark-mode Swing UI",
    ],
    stack: ["Java", "Jackson", "Swing", "JSON"],
    url: "https://github.com/ShreyaaPawar/APIAutomationTool",
    accent: "blue",
  },
  {
    name: "NewsMonkey",
    type: "API EXPERIENCE",
    image: "/newsmonkey-preview.png",
    description:
      "A responsive news reader that makes a continuously-updating API feel fast, focused, and easy to browse.",
    details: [
      "Category-based news discovery",
      "Infinite scrolling",
      "Responsive React interface",
    ],
    stack: ["React", "NewsAPI", "Bootstrap"],
    url: "https://github.com/ShreyaaPawar/NewsMonkeyApp",
    accent: "lime",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflowX;
    const previousBodyOverflow = body.style.overflowX;
    root.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    window.scrollTo({ left: 0 });
    return () => {
      root.style.overflowX = previousRootOverflow;
      body.style.overflowX = previousBodyOverflow;
    };
  }, []);
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top">
          <span>SP</span> shreya pawar
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav nav--open" : "nav"}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#contact" className="nav-contact">
            Let’s talk <span>↗</span>
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> SOFTWARE DEVELOPMENT ENGINEER · MUMBAI, INDIA
            </p>
            <h1>
              Building the
              <br />
              systems that make
              <br />
              <em>things work.</em>
            </h1>
            <p className="hero-intro">
              I’m <strong>Shreya Pawar</strong>, a software development engineer
              building reliable, secure products—from high-volume financial
              systems to thoughtful user experiences.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button--ink">
                See selected work <span>↓</span>
              </a>
              <a
                href="/Shreya_Pawar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="button button--paper"
              >
                Read résumé <span>↗</span>
              </a>
            </div>
            <div className="hero-meta">
              <a
                href="https://github.com/ShreyaaPawar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>Open to SDE opportunities</span>
            </div>
          </div>
          <div className="hero-art">
            <span className="shape shape--coral" />
            <span className="shape shape--blue" />
            <span className="shape shape--lime" />
            <div className="portrait">
              <img src="/profile.jpg" alt="Shreya Pawar" />
              <div className="portrait-note">
                <span>Currently</span>
                <strong>
                  Staff Consultant
                  <br />@ Oracle
                </strong>
              </div>
            </div>
            <div className="float-card float-card--transactions">
              <b>150K+</b>
              <span>daily transactions</span>
            </div>
            <div className="float-card float-card--uptime">
              <i />{" "}
              <b>
                High-stakes
                <br />
                systems
              </b>
            </div>
          </div>
        </section>
        <div className="ticker" aria-label="Technology highlights">
          <div className="ticker-track">
            <span>JAVA + SPRING BOOT <i>✦</i> MICROSERVICES <i>✦</i> REST API DESIGN <i>✦</i> KAFKA + RABBITMQ <i>✦</i> SQL + POSTGRESQL <i>✦</i> AWS + DOCKER <i>✦</i> KUBERNETES <i>✦</i> JENKINS + CI/CD <i>✦</i> REACT + JAVASCRIPT <i>✦</i> JUNIT + MOCKITO <i>✦</i></span>
            <span aria-hidden="true">JAVA + SPRING BOOT <i>✦</i> MICROSERVICES <i>✦</i> REST API DESIGN <i>✦</i> KAFKA + RABBITMQ <i>✦</i> SQL + POSTGRESQL <i>✦</i> AWS + DOCKER <i>✦</i> KUBERNETES <i>✦</i> JENKINS + CI/CD <i>✦</i> REACT + JAVASCRIPT <i>✦</i> JUNIT + MOCKITO <i>✦</i></span>
          </div>
        </div>
        <section className="section about" id="about">
          <div className="section-heading">
            <p>01 · ABOUT</p>
            <h2>
              Reliable by default.
              <br />
              <em>Curious by nature.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I care about the invisible part of a great product: the services,
              data flows, and thoughtful decisions that make it feel effortless.
            </p>
            <p>
              Over 4+ years at Oracle Financial Services, I’ve helped build
              secure transaction flows used at scale—while always making time to
              explore the tools and patterns that can make an engineer’s work
              better.
            </p>
            <a href="#experience">
              My experience <span>↓</span>
            </a>
          </div>
        </section>
        <section className="section experience" id="experience">
          <div className="section-heading">
            <p>02 · EXPERIENCE</p>
            <h2>
              Engineering for
              <br />
              <em>the real world.</em>
            </h2>
          </div>
          <div className="experience-list">
            <article className="role role--featured">
              <div className="role-top">
                <p>SEP 2024 — NOW</p>
                <span>Oracle Financial Services · Mumbai</span>
              </div>
              <h3>
                Staff Consultant
                <br />
                <em>Software Development Engineer</em>
              </h3>
              <p className="role-summary">
                I build and evolve Java services for enterprise banking
                journeys, with a focus on secure integrations, API reliability,
                and the operational details that let high-volume systems run
                with confidence.
              </p>
              <div className="impact-grid">
                <p>
                  <b>150K+</b>
                  <span>daily netbanking transactions supported</span>
                </p>
                <p>
                  <b>10+</b>
                  <span>REST APIs designed for onboarding & transactions</span>
                </p>
                <p>
                  <b>2M+</b>
                  <span>fraudulent attempts prevented annually</span>
                </p>
              </div>
              <div className="role-detail">
                <div>
                  <b>What I shipped</b>
                  <ul>
                    <li>
                      Designed and developed secure RT/NRT integrations across
                      HDFC Netbanking flows, supporting 20+ transaction journeys
                      and high-throughput request handling.
                    </li>
                    <li>
                      Built and optimised Spring Boot REST APIs for customer
                      onboarding and transaction processing, including defensive
                      validation, error handling, and clear service contracts.
                    </li>
                    <li>
                      Integrated BioCatch and PRM fraud controls into sensitive
                      financial flows to strengthen risk detection while keeping
                      core user journeys smooth.
                    </li>
                  </ul>
                </div>
                <div>
                  <b>How I improve systems</b>
                  <ul>
                    <li>
                      Implemented rate limiting, request validation, and
                      session-expiry behaviour for high-value
                      transactions—improving resilience against stale sessions
                      and critical attack patterns.
                    </li>
                    <li>
                      Troubleshoot distributed production issues end to end,
                      partnering across teams to protect availability and
                      resolve recurring faults at the root cause.
                    </li>
                    <li>
                      Contribute to release readiness through code reviews,
                      Agile ceremonies, deployment support, and mentoring for
                      junior engineers.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="role">
              <div className="role-top">
                <p>JUN 2022 — AUG 2024</p>
                <span>Oracle Financial Services · Mumbai</span>
              </div>
              <h3>
                Associate Consultant
                <br />
                <em>Software Development Engineer</em>
              </h3>
              <p className="role-summary">
                Worked across UI and backend services for enterprise financial
                products, balancing feature delivery, production support,
                performance work, and evolving compliance requirements.
              </p>
              <div className="role-detail role-detail--compact">
                <div>
                  <ul>
                    <li>
                      Optimised EPI transaction workflows and resolved
                      bug-bounty and production issues supporting 50K+ monthly
                      HDFC users.
                    </li>
                    <li>
                      Improved application performance and stability by
                      resolving 10+ production incidents and addressing
                      recurring root causes.
                    </li>
                    <li>
                      Implemented RBI-mandated compliance updates and text
                      changes across customer-facing financial experiences.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="section work" id="work">
          <div className="section-heading">
            <p>03 · SELECTED WORK</p>
            <h2>
              Side projects with
              <br />
              <em>serious intent.</em>
            </h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project project--${project.accent}`}
                key={project.name}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} interface`}
                    />
                  ) : (
                    <div className="news-visual">
                      <span>
                        THE
                        <br />
                        DAILY
                        <br />
                        BRIEF.
                      </span>
                      <i>LIVE</i>
                      <p>Business · Tech · Culture</p>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <p className="project-type">
                    0{index + 1} · {project.type}
                  </p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="project-bottom">
                    <div className="tag-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Explore code ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section proof" id="toolkit">
          <div className="proof-intro">
            <p>04 · TOOLKIT</p>
            <h2>
              Tools that ship
              <br />
              <em>the real thing.</em>
            </h2>
            <p className="proof-copy">
              From clean service contracts to reliable delivery pipelines—the
              stack behind the work.
            </p>
            <span className="cert-wrap">
              <a className="cert-badge" href="/oracle-java-se8-certificate.jpg" target="_blank" rel="noreferrer" aria-label="Open Oracle Java SE 8 certificate">
                <img src="/oracle-certified-professional-badge.png" alt="Oracle Certified Professional badge" />
                <p>
                  <b>Oracle Certified Professional</b>
                  <br />
                  Java SE 8 <em>↗</em>
                </p>
              </a>
              <span className="cert-preview" aria-hidden="true"><img src="/oracle-java-se8-certificate.jpg" alt="" /></span>
            </span>
            <span className="cert-wrap cert-wrap--award">
              <a className="cert-badge cert-badge--award" href="/fsgiu-pacesetter-spark-award.png" target="_blank" rel="noreferrer" aria-label="Open FSGIU Pacesetter Spark Award">
                <img src="/fsgiu-pacesetter-spark-badge.png" alt="FSGIU Pacesetter Spark Award gold star" />
                <p>
                  <b>FSGIU Pacesetter Spark Award</b>
                  <br />
                  Oracle Financial Services <em>↗</em>
                </p>
              </a>
              <span className="cert-preview" aria-hidden="true"><img src="/fsgiu-pacesetter-spark-award.png" alt="" /></span>
            </span>
          </div>
          <div className="toolkit-wall">
            <article className="toolkit-card toolkit-card--java">
              <div className="toolkit-heading">
                <span>01</span>
                <h3>
                  Backend
                  <br />
                  engineering
                </h3>
              </div>
              <div className="logo-row">
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/openjdk/191A20" alt="Java" />Java</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/spring/191A20" alt="Spring" />Spring</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/hibernate/191A20" alt="Hibernate" />Hibernate</span>
              </div>
              <p>
                Java · Spring Boot · Spring Security · Hibernate · JPA · REST
                APIs · OAuth2
              </p>
            </article>
            <article className="toolkit-card toolkit-card--data">
              <div className="toolkit-heading">
                <span>02</span>
                <h3>
                  Data &<br />
                  messaging
                </h3>
              </div>
              <div className="logo-row">
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/postgresql/191A20" alt="PostgreSQL" />Postgres</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/mysql/191A20" alt="MySQL" />MySQL</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/apachekafka/191A20" alt="Apache Kafka" />Kafka</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/rabbitmq/191A20" alt="RabbitMQ" />RabbitMQ</span>
              </div>
              <p>
                Oracle DB · PostgreSQL · MySQL · SQL · Apache Kafka · RabbitMQ
              </p>
            </article>
            <article className="toolkit-card toolkit-card--cloud">
              <div className="toolkit-heading">
                <span>03</span>
                <h3>
                  Cloud &<br />
                  delivery
                </h3>
              </div>
              <div className="logo-row">
                <span className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />AWS</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/docker/191A20" alt="Docker" />Docker</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/kubernetes/191A20" alt="Kubernetes" />Kubernetes</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/jenkins/191A20" alt="Jenkins" />Jenkins</span>
              </div>
              <p>
                AWS · Docker · Kubernetes · Jenkins · Maven · Git · CI/CD ·
                WebLogic
              </p>
            </article>
            <article className="toolkit-card toolkit-card--frontend">
              <div className="toolkit-heading">
                <span>04</span>
                <h3>
                  Frontend &<br />
                  product
                </h3>
              </div>
              <div className="logo-row">
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/react/191A20" alt="React" />React</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/javascript/191A20" alt="JavaScript" />JavaScript</span>
                <span className="tech-icon"><img src="https://cdn.simpleicons.org/bootstrap/191A20" alt="Bootstrap" />Bootstrap</span>
              </div>
              <p>
                React · JavaScript · HTML5 · CSS3 · Bootstrap · Responsive UI
              </p>
            </article>
            <article className="toolkit-card toolkit-card--quality">
              <div className="toolkit-heading">
                <span>05</span>
                <h3>
                  Quality &<br />
                  AI workflow
                </h3>
              </div>
              <div className="tool-symbols">
                <span>✓</span>
                <span>✦</span>
                <span>↗</span>
              </div>
              <p>
                JUnit · Mockito · Postman · API testing · ChatGPT · OpenAI Codex
              </p>
            </article>
          </div>
        </section>
        <section className="education-strip">
          <div>
            <span>Education</span>
            <b>KJ Somaiya College of Engineering</b>
            <p>B.Tech, Electronics & Telecommunication · 2019–2022</p>
          </div>
          <div>
            <span>Foundation</span>
            <b>Agnel Polytechnic</b>
            <p>Diploma, Industrial Electronics · 2016–2019</p>
          </div>
          <a href="/Shreya_Pawar_Resume.pdf" target="_blank" rel="noreferrer">
            Full résumé ↗
          </a>
        </section>
        <section className="contact" id="contact">
          <p>
            LET’S BUILD SOMETHING THAT <em>MATTERS.</em>
          </p>
          <h2>
            Have a problem
            <br />
            worth solving?
          </h2>
          <div className="contact-layout">
            <div className="contact-copy">
              <a className="contact-email" href="mailto:shreyapawar451@gmail.com">Say hello <span>↗</span></a>
              <p>Or leave a quick note—I’ll get back to you soon.</p>
            </div>
            <form className="contact-form" action="https://formsubmit.co/b3fb6ab854147d06cb643c232db452a0" method="POST">
              <input type="hidden" name="_subject" value="New portfolio enquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="sr-only" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
              <label className="message-field">Message<textarea name="message" rows="4" placeholder="Tell me a little about the opportunity…" required /></label>
              <button type="submit">Send message <span>↗</span></button>
            </form>
          </div>
          <div>
            <span>shreyapawar451@gmail.com</span>
            <a
              href="https://linkedin.com/in/shreya-pawar12"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/ShreyaaPawar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()} Shreya Pawar · Built with care in Mumbai.
      </footer>
    </div>
  );
}
export default App;
