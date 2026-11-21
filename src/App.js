import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="section">
            <pre className="ascii-art">
{`  _____ _____             __  __              _    _
 / ____|  __ \\           |  \\/  |            | |  | |
| |  __| |  | |_ __ __ _| |\\/| | __ _ _ __ | |__| | ___
| | |_ | |  | | '__/ _\` | |  | |/ _\` | '_ \\|  __  |/ _ \\
| |__| | |__| | | | (_| | |  | | (_| | | | | |  | | (_) |
 \\_____|_____/|_|  \\__,_|_|  |_|\\__,_|_| |_|_|  |_|\\___/`}
            </pre>
            <div className="command">whoami</div>
            <div className="output">
              <strong>Grace McPadden</strong> - Full Stack Developer & Tech Enthusiast
            </div>
            <div className="command">echo $BIO</div>
            <div className="output">
              Passionate about building beautiful, functional web applications with modern technologies.
              Experienced in React, Node.js, and cloud technologies. Always learning and exploring new tech.
            </div>
            <div style={{ marginTop: '20px' }}>
              <span className="cursor"></span>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="section">
            <div className="command">cat about.txt</div>
            <div className="output">
              <div>
                <strong>Background</strong>
                <br />
                I'm a developer with a passion for creating clean, intuitive user experiences and scalable backend systems.
                With experience across the full stack, I enjoy solving complex problems and collaborating with teams.
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>Education</strong>
                <br />
                [Add your education details here]
              </div>
              <div style={{ marginTop: '15px' }}>
                <strong>When I'm not coding...</strong>
                <br />
                [Add your interests/hobbies here]
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="section">
            <div className="command">ls -la ~/skills</div>
            <div className="output">
              <div><strong>Frontend:</strong></div>
              <div style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '15px' }}>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">TypeScript</span>
              </div>

              <div><strong>Backend:</strong></div>
              <div style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '15px' }}>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>

              <div><strong>Tools & Other:</strong></div>
              <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="section">
            <div className="command">ls ~/projects</div>
            <div className="output">
              <div className="project-box">
                <div className="project-title">> Project 1: [Project Name]</div>
                <div className="project-description">
                  Description of your first project. What problem did it solve? What technologies did you use?
                </div>
                <div>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span className="project-link">» GitHub Repo</span> |
                  <span className="project-link" style={{ marginLeft: '10px' }}>» Live Demo</span>
                </div>
              </div>

              <div className="project-box">
                <div className="project-title">> Project 2: [Project Name]</div>
                <div className="project-description">
                  Description of your second project. What technologies were involved?
                </div>
                <div>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Firebase</span>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span className="project-link">» GitHub Repo</span> |
                  <span className="project-link" style={{ marginLeft: '10px' }}>» Live Demo</span>
                </div>
              </div>

              <div className="project-box">
                <div className="project-title">> Project 3: [Project Name]</div>
                <div className="project-description">
                  Description of your third project and what you learned from it.
                </div>
                <div>
                  <span className="skill-tag">Full Stack</span>
                  <span className="skill-tag">AWS</span>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span className="project-link">» GitHub Repo</span> |
                  <span className="project-link" style={{ marginLeft: '10px' }}>» Live Demo</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="section">
            <div className="command">cat contact.txt</div>
            <div className="output">
              <div><strong>Let's connect! You can reach me at:</strong></div>
              <div className="contact-links">
                <span className="contact-link">» Gmail: gracemcpadden9@gmail.com</span>
              </div>
              <div className="contact-links">
                <span className="contact-link">» LinkedIn: [Your LinkedIn]</span>
              </div>
              <div className="contact-links">
                <span className="contact-link">» GitHub: [Your GitHub]</span>
              </div>
              <div className="contact-links">
                <span className="contact-link">» Twitter/X: [Your Twitter]</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <strong>Message:</strong>
                <div style={{ marginTop: '10px', fontSize: '14px' }}>
                  Feel free to reach out for collaborations, opportunities, or just to chat about tech!
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-title">grace-terminal-portfolio ~</span>
          <div className="terminal-buttons">
            <div className="terminal-btn minimize"></div>
            <div className="terminal-btn maximize"></div>
            <div className="terminal-btn close"></div>
          </div>
        </div>

        <div className="terminal-content">
          <div className="nav-bar">
            <span
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              [home]
            </span>
            <span
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              [about]
            </span>
            <span
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              [skills]
            </span>
            <span
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              [projects]
            </span>
            <span
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              [contact]
            </span>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
