import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="section">
            <div className="name-header">Grace McPadden</div>
            <div className="output">
              <div className="email">Grace.Mcpadden@UConn.edu | linkedin.com/in/grace-mcpadden | github.com/GraceMcPadden2</div>
            </div>
            <div className="output" style={{ marginTop: '16px' }}>
              <span className="label">status:</span> <span className="value">Associate Software Engineer @ The Hartford</span>
            </div>
            <div className="output">
              <span className="label">education:</span> <span className="value">B.S. Computer Science & B.S. Mathematics, University of Connecticut (Expected May 2026)</span>
            </div>
            <div className="output">
              <span className="label">gpa:</span> <span className="value">3.7/4.0</span>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="section">
            <div className="section-title">Professional Experience</div>

            <div className="experience-item">
              <div>
                <span className="job-title">Associate Software Engineer</span> • <span className="company">The Hartford</span>
              </div>
              <div className="date">June 2026 – Present | Hartford, CT</div>
              <ul className="bullet-list">
                <li>Working on Agentic AI solutions for Reliability Engineering</li>
              </ul>
            </div>

            <div className="experience-item">
              <div>
                <span className="job-title">Software Engineer Intern</span> • <span className="company">The Hartford</span>
              </div>
              <div className="date">May 2025 – August 2025 | Hartford, CT</div>
              <ul className="bullet-list">
                <li>Built a Retrieval-Augmented Generation (RAG) chatbot using AWS OpenSearch and vector embeddings to enable semantic search across internal documentation</li>
                <li>Developed a multimodal document classification system combining text embeddings with a ResNet vision model, achieving 82% accuracy on a 10K+ document dataset</li>
              </ul>
            </div>

            <div className="experience-item">
              <div>
                <span className="job-title">Teaching Assistant</span> • <span className="company">University of Connecticut</span>
              </div>
              <div className="date">August 2024 – Present | Storrs, CT</div>
              <ul className="bullet-list">
                <li>Led weekly programming labs for 150+ students in CSE3140 and CSE1010, teaching debugging, algorithms, and Python programming fundamentals</li>
              </ul>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="section">
            <div className="section-title">Projects & Activities</div>

            <div className="experience-item">
              <div>
                <span className="job-title">Senior Design Project: Embodied AI Agent on Unitree Go2 Robot</span>
              </div>
              <ul className="bullet-list">
                <li>Developed AI agent for a Unitree Go2 robot for autonomous navigation and task execution</li>
              </ul>
            </div>

            <div className="experience-item">
              <div>
                <span className="job-title">Segmentation of Weapons from CCTV Footage with Computer Vision</span>
              </div>
              <ul className="bullet-list">
                <li>Developed a real-time weapon detection system using YOLOv5 trained on 5,000+ annotated CCTV images</li>
                <li>Improved detection accuracy through hyperparameter tuning</li>
              </ul>
            </div>

            <div className="experience-item">
              <div>
                <span className="job-title">Husky Quantitative Group</span>
              </div>
              <div className="date">August 2025 – May 2026 | University of Connecticut</div>
              <ul className="bullet-list">
                <li>Trained a reinforcement learning based portfolio optimization model using PPO to optimize Sharpe ratio across SPY, GLD, BTC, and IEF</li>
                <li>Used credit card data from partnership with CarbonArc to predict earnings per share with a 95% confidence interval</li>
              </ul>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="section">
            <div className="section-title">Skills</div>

            <div className="output">
              <div className="label">Languages:</div>
              <div>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>

            <div className="output">
              <div className="label">Machine Learning:</div>
              <div>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">Reinforcement Learning</span>
              </div>
            </div>

            <div className="output">
              <div className="label">Data:</div>
              <div>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
              </div>
            </div>

            <div className="output" style={{ marginTop: '12px' }}>
              <div className="label">Coursework:</div>
              <div>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">Algorithms & Complexity</span>
                <span className="skill-tag">Real Analysis</span>
                <span className="skill-tag">Numerical Analysis</span>
                <span className="skill-tag">Linear Algebra</span>
                <span className="skill-tag">Databases</span>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="section">
            <div className="section-title">Contact</div>
            <div className="contact-links">
              <span className="contact-link">📧 Grace.Mcpadden@UConn.edu</span>
              <span className="contact-link">🔗 linkedin.com/in/grace-mcpadden</span>
              <span className="contact-link">💻 github.com/GraceMcPadden2</span>
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
          <span className="terminal-title">grace-mcpadden [portfolio] – /home</span>
        </div>

        <div className="terminal-content">
          <div className="nav-bar">
            <span
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              home
            </span>
            <span
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              experience
            </span>
            <span
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              projects
            </span>
            <span
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              skills
            </span>
            <span
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              contact
            </span>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
