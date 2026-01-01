import { useState } from 'react'
import collageImage from './assets/collage.png'
import sunnyImage from './assets/sunny.gif'
import contrib2023 from './assets/contrib-2023.svg'
import contrib2024 from './assets/contrib-2024.svg'
import contrib2025 from './assets/contrib-2025.svg'
import './App.css'

function App() {
  const [year, setYear] = useState(2025)
  const graphByYear = {
    2023: contrib2023,
    2024: contrib2024,
    2025: contrib2025,
  }

  return (
    <div className="landing">
      <div className="optical">
        <div className="content">
          <div className="stack">
            <h1 className="typewriter">shreejal paudel</h1>
            <div className="hero-row">
              <p className="subtitle">
                I am currently studying computer science & data science @ unc chapel hill. I enjoy building products that incorporate ai, design & engineering.
              </p>
              <div className="hero-gif" aria-hidden="true" />
            </div>
          </div>

          <div className="section">
            <h2>Experience</h2>
            <div className="list">
              <div className="list-item split">
                <div>
                  <strong>Incoming AI Software Engineering Intern</strong>
                  <p>Toshiba Global Commerce Solutions – AI Agentic Products</p>
                </div>
                <span className="meta">Spring 2026</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>Software Engineering Intern</strong>
                  <p>Baton AI (PearX W25)</p>
                </div>
                <span className="meta">Jun 2025 – Aug 2025</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>Machine Learning Research Intern</strong>
                  <p>University of North Carolina at Chapel Hill</p>
                </div>
                <span className="meta">Apr 2025 – Dec 2025</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>Technology Analyst Intern</strong>
                  <p>OASIS – UNC Chapel Hill</p>
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
                  <strong>AI Hand Drawing Recognition App</strong>
                  <p>Python, MediaPipe, Google Gemini API, Streamlit</p>
                </div>
                <span className="meta">Apr 2025 – May 2025</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>Zellit – Student Marketplace Platform </strong>
                  <p>React Native, Firebase</p>
                </div>
                <span className="meta">Apr 2025 – Present</span>
              </div>

              <div className="list-item split">
                <div>
                  <strong>PR Reviewer Bot</strong>
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
            className="github-graph"
            src={graphByYear[year]}
            alt={`GitHub contribution graph for xreejal in ${year}`}
          />
        </div>

        <div className="section">
          <h2>About</h2>
          <div className="list">
            <p>
              I enjoy experiences that feel thoughtful and well-crafted. I like
              building cool products and seeing ideas turn into things people
              actually use. Over time, that curiosity turned into a deeper
              interest in software and how systems are designed end to end. I’m
              a software developer focused on full-stack development and
              agentic AI. I’m looking to collaborate with motivated people on
              software projects where creativity and engineering come together.
            </p>
            <div className="about-media">
              <img
                className="about-collage"
                src={collageImage}
                alt="Collage"
              />
              <p>oakland, ca</p>
            </div>
          </div>
        </div>
        
        <div>
        <img
                className="about-collage"
                src={sunnyImage}
                alt="Sunny"
              />
        <p>I'll see you around 👋🏼</p>

        </div>

        <div className="section">
          <h2>Connect</h2>
          <div className="list compact">
              <a href="https://x.com/soupgou">X</a>
              <a href="mailto:shreejal@unc.edu">Email</a>
              <a href="https://www.linkedin.com/in/xreejal/">LinkedIn</a>
              <a href="https://github.com/xreejal">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
