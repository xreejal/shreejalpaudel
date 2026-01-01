import { useEffect, useState } from 'react'
import collageImage from './assets/collage.png'
import medLogo from './assets/med.png'
import toshibaLogo from './assets/toshiba.png'
import batonLogo from './assets/baton.png'
import uncLogo from './assets/unc.png'
import sunnyImage from './assets/sunny.gif'
import contrib2023 from './assets/contrib-2023.svg'
import contrib2024 from './assets/contrib-2024.svg'
import contrib2025 from './assets/contrib-2025.svg'
import xLogo from './assets/X.png'
import emailLogo from './assets/email.png'
import linkedinLogo from './assets/linkedin.webp'
import githubLogo from './assets/github.png'
import './App.css'

function App() {
  const [year, setYear] = useState(2025)
  const graphByYear = {
    2023: contrib2023,
    2024: contrib2024,
    2025: contrib2025,
  }

  useEffect(() => {
    const reveals = document.querySelectorAll('.section, .reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    reveals.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="landing">
        <div className="optical">
          <div className="content">
          <div className="stack">
            <h1 className="typewriter">shreejal paudel</h1>
            <div className="hero-row">
              <p className="subtitle">
                I am currently studying computer science & data science @ unc chapel hill. I enjoy building products that incorporate ai, design & engineering.
              </p>
              <div className="hero-side">
                {/*
                <nav className="hero-nav reveal" aria-label="Hero navigation">
                  <a href="#work">Work</a>
                  <a href="#about">About</a>
                </nav>
                */}
                <div className="hero-gif reveal" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="section">
          <h2 id="work">Experience</h2>
            <div className="list">
              <div className="list-item split experience-item">
                <div className="experience-main">
                  <img className="experience-logo reveal" src={toshibaLogo} alt="Toshiba" />
                  <div>
                    <strong>
                      <a
                        className="role-link"
                        href="https://commerce.toshiba.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        incoming ai software engineering intern
                      </a>
                    </strong>
                    <p>Toshiba Global Commerce Solutions – AI Agentic Products</p>
                  </div>
                </div>
                <span className="meta">Jan 2026 - Apr 2026</span>
              </div>

              <div className="list-item split experience-item">
                <div className="experience-main">
                  <img className="experience-logo reveal" src={batonLogo} alt="Baton AI" />
                  <div>
                    <strong>
                      <a
                        className="role-link"
                        href="https://www.getbaton.ai/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        software engineering intern
                      </a>
                    </strong>
                    <p>Baton AI (PearX W25) - Agentic AI </p>
                  </div>
                </div>
                <span className="meta">Jun 2025 – Aug 2025</span>
              </div>

              <div className="list-item split experience-item">
                <div className="experience-main">
                  <img
                    className="experience-logo reveal"
                    src={medLogo}
                    alt="UNC School of Medicine"
                  />
                  <div>
                    <strong>
                      <a
                        className="role-link"
                        href="https://www.med.unc.edu/psych/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        machine learning research assistant
                      </a>
                    </strong>
                    <p>UNC Chapel Hill School of Medicine - ADHD Neuro feedback</p>
                  </div>
                </div>
                <span className="meta">Apr 2025 – Dec 2025</span>
              </div>

              <div className="list-item split experience-item">
                <div className="experience-main">
                  <img className="experience-logo reveal" src={uncLogo} alt="UNC" />
                  <div>
                    <strong>
                      <a
                        className="role-link"
                        href="https://oasis.unc.edu/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        technology analyst intern
                      </a>
                    </strong>
                    <p>UNC Chapel Hill - OASIS</p>
                  </div>
                </div>
                <span className="meta">Oct 2024 – May 2025</span>
              </div>
            </div>
          </div>

        <div className="section">
          <h2>Projects</h2>
          <div className="list">
              <div className="list-item split">
                <div>
                  <strong>
                    <a
                      className="role-link"
                      href="https://github.com/xreejal/gesture-draw-ai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ai hand drawing recognition app
                    </a>
                  </strong>
                  <p>Python, MediaPipe, Google Gemini API, Streamlit</p>
                </div>
                <span className="meta">Apr 2025 – May 2025</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>
                    <a
                      className="role-link"
                      href="https://zellitmarketplace.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      zellit – student marketplace platform
                    </a>
                  </strong>
                  <p>React Native, Firebase</p>
                </div>
                <span className="meta">Apr 2025 – Present</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>
                    <a
                      className="role-link"
                      href="https://github.com/xreejal/slack"
                      target="_blank"
                      rel="noreferrer"
                    >
                      pr reviewer bot
                    </a>
                  </strong>
                  <p>Express.js, Node.js, Slack API, Mastra AI Framework</p>
                </div>
                <span className="meta">Feb 2025 – Mar 2025</span>
              </div>
          </div>
        </div>

        <div className="section">
          <h2>Contributions</h2>
          <div className="year-toggle">
            {[2023, 2024, 2025].map((value) => (
              <button
                key={value}
                type="button"
                className={value === year ? 'active' : ''}
                onClick={() => setYear(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <img
            className="github-graph reveal"
            src={graphByYear[year]}
            alt={`GitHub contribution graph for xreejal in ${year}`}
          />
        </div>

        <div className="section">
          <h2 id="about">About</h2>
          <div className="list">
            <p>
              I enjoy experiences that feel thoughtful and well-crafted. Furthermore, I like
              building cool products and seeing ideas turn into things people
              actually use. Over time, that curiosity turned into a deeper
              interest in software and how systems are designed end to end. I’m
              a software developer focused on full-stack development and
              agentic AI. I’m looking to collaborate with motivated people on
              software projects where creativity and engineering come together.
            </p>
            <div className="about-media">
              <img
                className="about-collage reveal"
                src={collageImage}
                alt="Collage"
              />
              <p>oakland, ca</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 id="about">Music</h2>
          <div className="list">
            <div className="music-row">
              <iframe
                className="spotify-embed"
                src="https://open.spotify.com/embed/track/7eqoqGkKwgOaWNNHx90uEZ"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Nights - Frank Ocean"
              />
              <iframe
                className="spotify-embed"
                src="https://open.spotify.com/embed/album/0yLtZLUcjbZpI7dtmA81rY"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Outside - Weston Estate"
              />
            </div>
          </div>
        </div>
        
        <div>
        <img
                className="about-collage reveal"
                src={sunnyImage}
                alt="Sunny"
              />
        <p>I'll see you around 👋🏼</p>

        </div>

        <div className="section">
          <h2>Connect</h2>
          <div className="list compact">
              <a className="icon-link" href="https://x.com/soupgou" aria-label="X">
                <img className="reveal" src={xLogo} alt="" />
              </a>
              <a className="icon-link" href="mailto:shreejal@unc.edu" aria-label="Email">
                <img className="reveal" src={emailLogo} alt="" />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/xreejal/"
                aria-label="LinkedIn"
              >
                <img className="reveal" src={linkedinLogo} alt="" />
              </a>
              <a
                className="icon-link github-shift"
                href="https://github.com/xreejal"
                aria-label="GitHub"
              >
                <img className="reveal" src={githubLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
