import ClientLibraries from "./components/ClientLibraries";
import ContactForm from "./components/ContactForm";
import QuantumBackground from "./components/QuantumBackground";

export default function HomePage() {
  return (
    <>
      <ClientLibraries />
      <QuantumBackground />

      <div className="content-wrapper">
        <header>
          <div className="profile-container">
            <img
              src="/assets/IMG_8321.jpeg"
              alt="Sebastian Rincon Camacho"
              className="profile-pic"
            />
          </div>
          <h1>Sebastian Rincon Camacho</h1>
          <p className="tagline">Incoming Software Development Engineer at Amazon</p>
        </header>

        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <main>
          <section id="about">
            <h2>About Me</h2>
            <div className="card about-card">
              <div className="about-content">
                <p>
                  Student at Johns Hopkins University
                  pursuing degrees in Computer Science, Physics, and Applied
                  Mathematics &amp; Statistics. My interests lies at the intersection
                  of quantum computing, machine learning, and software engineering.
                </p>
                <p>
                  With experience at Amazon, Sierra Nevada Corporation, and the
                  JHU Quantum Computing Theory Group, I bring a unique combination
                  of technical skills and research experience to challenging
                  problems.
                </p>
              </div>

              <div className="skills">
                <h3>Technical Skills</h3>
                <ul>
                  <li>
                    Programming Language: C++, C, Java, Python, SQL,
                    TypeScript/JavaScript
                  </li>
                  <li>
                    Full-Stack Development: Flask, React, Django, Node.js,
                    Next.js, HTML5, CSS3
                  </li>
                  <li>ML/AI: TensorFlow, PyTorch, scikit-learn</li>
                  <li>Quantum Computing: Qiskit, Cirq, Quantum Algorithms</li>
                  <li>
                    Tools: Git, Docker, Unix/Linux, MATLAB, AutoCAD, Ansible
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>

            <div className="card">
              <h3>Johns Hopkins University</h3>
              <p className="degree">
                B.S. in Physics, Computer Science, and Applied Mathematics &amp;
                Statistics
              </p>
              <ul>
                <li>Relevant Coursework: Operating Systems, Computer Networks, Data Structures and Algorithms, Deep Learning, Probability, Statistics, Quantum Mechanics 1 and 2</li>
                <li>Vice President, Alpha Epsilon Pi Fraternity</li>
                <li>Member, Baila: Latin Dance Team</li>
              </ul>
            </div>
          </section>

          <section id="experience">
            <h2>Work Experience</h2>

            <div className="card">
              <h3>Software Development Engineer Intern</h3>
              <p className="company">Amazon | Summer 2025</p>
              <ul>
                <li>
                  Deployed a feature on the Amazon Store for an underutilized
                  region of the shopping flow that delivered personalized product
                  recommendations to millions of users with a strategy focused on
                  surfacing products aligned with user intent and past behavior
                </li>
                <li>
                  Built front-end components using TypeScript and AWS frameworks
                  (Lambda, EC2, etc.) to deliver a responsive experience
                </li>
                <li>
                  Architected backend services in Java to support scalable
                  delivery of contextual recs, leveraging internal ML APIs to
                  optimize for latency
                </li>
                <li>
                  Gained experience in large-scale distributed systems,
                  service-oriented architecture, AB testing, AWS, and production
                  environments
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Software Engineer Intern</h3>
              <p className="company">Sierra Nevada Corporation | Summer 2024</p>
              <ul>
                <li>
                  Spearheaded the design and implementation of nanosecond-scale
                  resolution and accuracy of timestamp in software-defined radio RF
                  communication to solve critical synchronization issues, enabling
                  accurate message ordering in defense signal chains
                </li>
                <li>
                  Achieved 88ns resolution using FPGA-driven timing logic and
                  C/C++ backend integration via the Sidekiq SDK framework,
                  significantly outperforming previous latency bounds and creating
                  a roadmap to further improve resolution
                </li>
                <li>
                  Led backend development for an internal RF testing suite,
                  integrating Django and FastAPI, reducing testing from hours to
                  minutes
                </li>
                <li>
                  Deployed containerized services using Azure, Docker, and CI/CD
                  pipelines to operational environments, ensuring reliability
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Machine Learning &amp; Data Analysis Researcher</h3>
              <p className="company">
                JHU Quantum Computing Theory Group | Summer 2023 - Summer 2024
              </p>
              <ul>
                <li>
                  Employed TensorFlow through Python in a deep learning model for
                  the characterization and solution control of quantum systems in
                  real time to tackle the computational and mathematical challenge
                  of stabilizing noisy quantum systems
                </li>
                <li>
                  Processed and analyzed training and testing data using NumPy and
                  SciPy to create an optimized dataset for training deep learning
                  models that would be used by the team in their goal to utilize
                  deep learning in quantum noise error correction
                </li>
                <li>
                  Interpreted foundations of quantum mechanics and translated them
                  into testable code to examine noise characterization
                </li>
                <li>
                  Acquired expertise in various quantum programming languages and
                  data analysis tools, including Qiskit, Cirq, and SciPy
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Mechanical Engineer Intern</h3>
              <p className="company">
                U.S. Army Corps of Engineers | Winter 2022 - Fall 2022
              </p>
              <ul>
                <li>Designed mechanical systems for biochemistry lab using AutoCAD</li>
                <li>Created HVAC and exhaust system for six-building complex</li>
                <li>
                  Contributed to project documentation ensuring federal compliance
                </li>
              </ul>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>

                <div className="card">
              <h3>PotLock - Crypto-based treasury for groups</h3>
              <p className="tech">Solana, Anchor, Rust, React, TypeScript, Convex, Google Gemini API, Phantom, JWT, OpenID Connect, Mastra AI</p>
              <ul>
                <li>
                                Built a Solana-based group treasury dApp end-to-end at a hackathon, implementing a
                  669-line Anchor (Rust) smart contract with a doubly-linked on-chain contract version   
                  history, k-of-n multi-sig approval logic, and four proposal types (spending, add    
                  member, amend contract, switch contract) — enabling trustless fund management for      
                  groups without a single point of control    
                </li>
                <li>
                  Designed a full-stack governance workflow using React 19, TypeScript, Convex         
                    (real-time off-chain DB), and the Google Gemini API to convert plain-language group    
                    rules into structured contract JSON, validate proposed transactions against active     
                    contracts, and gate on-chain SOL transfers behind Convex-tracked member votes and      
                    approval thresholds   
                </li>
                <li>
                  Implemented wallet-signature-based authentication using Solana's                     
                    @solana/wallet-adapter-react with a nonce challenge-response flow and JWT session      
                    tokens, integrating Phantom wallet sign-in, OpenID Connect endpoints, and a Mastra AI  
                    validation pipeline for optional URL verification on transaction proposals
                </li>
              </ul>
              <a
                href="https://devpost.com/software/potlock"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
              <a
                href="https://github.com/arosen64/potlock"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >                                                                                                         
                GitHub Repo →
              </a>
            </div>

            <div className="card">
              <h3>AccessInvest - Stock Outlining Assistant</h3>
              <p className="tech">MongoDB, React, Node.js, Google Gemini API</p>
              <ul>
                <li>
                  Built an AI-driven, full-stack web application that provides
                  users with personalized portfolio insights and suggestions on
                  stocks they own by giving daily updates based on financial
                  filings, news, and trends in the stock market, awarded finalist
                  at MorganHacks (4 of 96)
                </li>
                <li>
                  Aggregated and processed financial data from SEC filings (10-K,
                  10-Q, 8-K, etc.), real-time news sources, and multiple
                  financial APIs
                </li>
                <li>
                  Integrated Google&apos;s Gemini API to perform sentiment
                  analysis and understanding on complex financial documents
                </li>
                <li>
                  Utilized a React front end alongside a Node.js backend hosted on
                  MongoDB Atlas for scalable data storage and a seamless UX
                </li>
              </ul>
              <a
                href="https://devpost.com/software/accessinvest"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
              <a
                href="https://github.com/Sedan513/AccessInvest"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo →
              </a>
            </div>

            <div className="card">
              <h3>Smart-Alert Hackathon App</h3>
              <p className="tech">Flask, Google Maps API, Twilio</p>
              <ul>
                <li>
                  Designed an application that improves emergency response
                  communications between emergency responders, business owners,
                  and everyday people through a UX that allows users to access
                  lists of emergency contacts based on location
                </li>
                <li>
                  Instrumented Google Maps and Twilio messaging APIs, along with
                  Flask, to produce an admin page where business and landowners
                  can draw their geolocation and create custom instructions to be
                  carried out when an emergency is detected by a user
                </li>
                <li>
                  Prioritized accessibility and real-time latency in system
                  architecture, simulating mass-notification scenarios to test
                  throughput
                </li>
              </ul>
              <a
                href="https://devpost.com/software/smartalert-k2u6hp"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
              <a
                href="https://github.com/Sedan513/smartAlert"
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo →
              </a>
            </div>

            <div className="card">
              <h3>Skin Cancer Detection ML Model</h3>
              <p className="tech">Python, TensorFlow, scikit-learn</p>
              <ul>
                <li>
                  Built and validated a computer vision pipeline to differentiate
                  between benign and malignant skin moles in a dataset of photos
                </li>
                <li>
                  Utilized Python, TensorFlow, and scikit-learn for data
                  preprocessing, model development, and performance evaluation
                </li>
                <li>
                  Employed computer vision techniques (CNNs) to build a robust
                  classification model to acquire a 79.8% accurate detection rate
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Navy Federal Credit Union Co-op</h3>
              <p className="tech">UX Design</p>
              <ul>
                <li>Redesigned customer experience for new credit union members</li>
                <li>Iteratively refined UI based on user feedback</li>
                <li>Focused on accessibility and visual consistency</li>
              </ul>
            </div>
          </section>

          <section id="contact">
            <h2>Get In Touch</h2>
            <div className="card contact-card">
              <div className="contact-methods">
                <h3 className="contact-subheading">Contact and Socials</h3>
                <div className="contact-item">
                  <i className="fas fa-envelope" />
                  <a href="mailto:sebastianrincon04@gmail.com">
                    sebastianrincon04@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone" />
                  <a href="tel:614-446-4294">(614) 446-4294</a>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin" />
                  <a
                    href="https://linkedin.com/in/sebas-rincon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/sebas-rincon
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fab fa-github" />
                  <a
                    href="https://github.com/Sedan513"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Sedan513
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" />
                  <span>Seattle, Washington</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer>
          <p>© 2023 Sebastian Rincon Camacho. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/sebas-rincon"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/Sedan513"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
