import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState([
    "Windows PowerShell",
    "Copyright (C) Microsoft Corporation. All rights reserved.",
    "",
    "Welcome to Grace McPadden's Portfolio",
    "Commands available: /home /experience /projects /skills /contact /help /clear",
    ""
  ]);
  const [input, setInput] = useState('');
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newOutput = [...output, `PS C:\\grace-mcpadden> ${cmd}`];

    if (trimmed === '/home' || trimmed === 'home') {
      newOutput.push('');
      newOutput.push('Grace McPadden');
      newOutput.push('Grace.Mcpadden@UConn.edu | linkedin.com/in/grace-mcpadden | github.com/GraceMcPadden2');
      newOutput.push('');
      newOutput.push('status:    Associate Software Engineer @ The Hartford');
      newOutput.push('education: B.S. Computer Science & B.S. Mathematics, UConn (May 2026)');
      newOutput.push('gpa:       3.7/4.0');
      newOutput.push('');
    } else if (trimmed === '/experience' || trimmed === 'experience') {
      newOutput.push('');
      newOutput.push('Associate Software Engineer - The Hartford (June 2026 – Present)');
      newOutput.push('  • Working on Agentic AI solutions for Reliability Engineering');
      newOutput.push('');
      newOutput.push('Software Engineer Intern - The Hartford (May 2025 – August 2025)');
      newOutput.push('  • Built a Retrieval-Augmented Generation (RAG) chatbot using AWS OpenSearch');
      newOutput.push('    and vector embeddings to enable semantic search across internal documentation');
      newOutput.push('');
      newOutput.push('Teaching Assistant - University of Connecticut (August 2024 – Present)');
      newOutput.push('  • Led weekly programming labs for 150+ students in CSE3140 and CSE1010,');
      newOutput.push('    teaching debugging, algorithms, and Python programming fundamentals');
      newOutput.push('');
    } else if (trimmed === '/projects' || trimmed === 'projects') {
      newOutput.push('');
      newOutput.push('Senior Design Project: Embodied AI Agent on Unitree Go2 Robot');
      newOutput.push('  • Developed AI agent for a Unitree Go2 robot for autonomous navigation');
      newOutput.push('    and task execution');
      newOutput.push('');
      newOutput.push('Segmentation of Weapons from CCTV Footage with Computer Vision');
      newOutput.push('  • Developed a real-time weapon detection system using YOLOv5 trained on');
      newOutput.push('    5,000+ annotated CCTV images');
      newOutput.push('  • Improved detection accuracy through hyperparameter tuning');
      newOutput.push('');
      newOutput.push('Husky Quantitative Group (August 2025 – May 2026)');
      newOutput.push('  • Trained a reinforcement learning based portfolio optimization model');
      newOutput.push('    using PPO to optimize Sharpe ratio across SPY, GLD, BTC, and IEF');
      newOutput.push('  • Used credit card data from partnership with CarbonArc to predict');
      newOutput.push('    earnings per share with a 95% confidence interval');
      newOutput.push('');
    } else if (trimmed === '/skills' || trimmed === 'skills') {
      newOutput.push('');
      newOutput.push('Languages: Python, C++, C, SQL');
      newOutput.push('Machine Learning: PyTorch, TensorFlow, Computer Vision, Reinforcement Learning');
      newOutput.push('Data: Pandas, NumPy');
      newOutput.push('');
      newOutput.push('Coursework: Machine Learning, Computer Vision, Algorithms & Complexity,');
      newOutput.push('            Real Analysis, Numerical Analysis, Linear Algebra, Databases');
      newOutput.push('');
    } else if (trimmed === '/contact' || trimmed === 'contact') {
      newOutput.push('');
      newOutput.push('📧 Email:    Grace.Mcpadden@UConn.edu');
      newOutput.push('🔗 LinkedIn: linkedin.com/in/grace-mcpadden');
      newOutput.push('💻 GitHub:   github.com/GraceMcPadden2');
      newOutput.push('');
    } else if (trimmed === '/help' || trimmed === 'help' || trimmed === '?') {
      newOutput.push('');
      newOutput.push('Available Commands:');
      newOutput.push('  /home        - Display home/intro information');
      newOutput.push('  /experience  - View professional experience');
      newOutput.push('  /projects    - See projects and activities');
      newOutput.push('  /skills      - Display technical skills');
      newOutput.push('  /contact     - Show contact information');
      newOutput.push('  /clear       - Clear the terminal');
      newOutput.push('  /help        - Display this help message');
      newOutput.push('');
    } else if (trimmed === '/clear' || trimmed === 'clear') {
      setOutput(['']);
      setInput('');
      return;
    } else if (trimmed === '') {
      newOutput.push('');
    } else {
      newOutput.push(`The term '${cmd}' is not recognized as the name of a cmdlet, function, script`);
      newOutput.push(`file, or operable program. Check the spelling of the name, or if a path`);
      newOutput.push(`was included, verify that the path is correct and try again.`);
      newOutput.push('');
    }

    setOutput(newOutput);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    }
  };

  return (
    <div className="App">
      <div className="terminal">
        <div className="terminal-output" ref={outputRef}>
          {output.map((line, idx) => (
            <div key={idx} className="output-line">
              {line}
            </div>
          ))}
        </div>

        <div className="terminal-input-line">
          <div className="terminal-prompt">PS C:\grace-mcpadden&gt;</div>
          <div className="terminal-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter command (type /help for available commands)"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
