import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Twitter, Linkedin, Mail, Terminal, Shield, Code, Bug, ExternalLink, Cpu, Globe, Target, Lock, Webhook, Network, FileSearch, Braces, Fingerprint, Radar } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      'Initializing security protocols...',
      'Loading penetration testing modules...',
      'Establishing secure connection...',
      'Access granted. Welcome to my portfolio.',
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowIntro(false), 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const certifications = [
    "Google Cybersecurity Professional Certificate",
    "TryHackMe Top 1%",
    "CEH (In Progress)",
    "OSCP (Aspirant)"
  ];

  const skills = [
    {
      name: "Penetration Testing",
      level: 75,
      icon: <Bug className="w-5 h-5 text-red-400" />
    },
    {
      name: "Red Teaming & Offensive Security",
      level: 70,
      icon: <Target className="w-5 h-5 text-orange-400" />
    },
    {
      name: "Cybersecurity Fundamentals",
      level: 90,
      icon: <Shield className="w-5 h-5 text-green-400" />
    },
    {
      name: "Python & Scripting",
      level: 80,
      icon: <Code className="w-5 h-5 text-cyan-400" />
    },
  ];

  const securityTools = [
    {
      category: "Reconnaissance",
      icon: <Radar className="w-8 h-8 text-cyan-400" />,
      tools: [
        { name: "Nmap", description: "Network scanning and host discovery" },
        { name: "Shodan", description: "Internet-connected device search engine" },
        { name: "theHarvester", description: "OSINT gathering tool" }
      ]
    },
    {
      category: "Web Application Testing",
      icon: <Webhook className="w-8 h-8 text-purple-400" />,
      tools: [
        { name: "Burp Suite", description: "Web vulnerability scanner and proxy" },
        { name: "OWASP ZAP", description: "Security testing for web applications" },
        { name: "Nikto", description: "Web server scanner" }
      ]
    },
    {
      category: "Network Analysis",
      icon: <Network className="w-8 h-8 text-green-400" />,
      tools: [
        { name: "Wireshark", description: "Network protocol analyzer" },
        { name: "tcpdump", description: "Command-line packet analyzer" },
        { name: "Netcat", description: "Networking utility for reading/writing data" }
      ]
    },
    {
      category: "Exploitation",
      icon: <Bug className="w-8 h-8 text-red-400" />,
      tools: [
        { name: "Metasploit", description: "Penetration testing framework" },
        { name: "SQLmap", description: "Automatic SQL injection tool" },
        { name: "Hydra", description: "Password cracking and brute-forcing" }
      ]
    },
    {
      category: "Forensics",
      icon: <FileSearch className="w-8 h-8 text-yellow-400" />,
      tools: [
        { name: "Volatility", description: "Memory forensics framework" },
        { name: "Autopsy", description: "Digital forensics platform" },
        { name: "dd", description: "Disk imaging and analysis" }
      ]
    },
    {
      category: "Post Exploitation",
      icon: <Fingerprint className="w-8 h-8 text-orange-400" />,
      tools: [
        { name: "Mimikatz", description: "Credential dumping and PTH attacks" },
        { name: "Empire", description: "Post-exploitation framework" },
        { name: "Bloodhound", description: "Active Directory visualization tool" }
      ]
    }
  ];

  if (showIntro) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          {terminalLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2"
            >
              <span className="text-purple-500">root@security:~$</span> {line}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Cpu className="w-8 h-8 text-cyan-500" />
            </motion.div>
            <div className="flex space-x-8">
              {['home', 'about', 'tools', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium relative group ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glitch-container mb-6">
              <h1 className="text-5xl font-bold glitch-text">
                <TypeAnimation
                  sequence={[
                    'Dhruv Prajapati',
                    1000,
                    'Cybersecurity Enthusiast',
                    1000,
                    'Aspiring Penetration Tester',
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                />
              </h1>
            </div>
            <p className="text-xl text-gray-400 mb-8 font-mono">Breaking systems to make them stronger.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/dpraj611" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://x.com/cyberdhruv" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/dpraj" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                  Hey, I'm Dhruv Prajapati, a cybersecurity enthusiast specializing in penetration testing & red teaming. 
                  I break into systems (ethically, of course) and test security defenses, always staying ahead of the curve.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                  Currently, I'm mastering ethical hacking, vulnerability research, and exploit development, 
                  aiming for CEH & OSCP certifications. I also dive deep into bug bounty hunting, CTFs, 
                  and cybersecurity research.
                </p>
                <p className="text-gray-300 leading-relaxed font-mono">
                  I believe in breaking things to make them stronger—because true security is built from the wreckage of vulnerabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Skills & Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-900/50 p-4 rounded-lg border border-purple-900/30"
                    >
                      <div className="flex items-center mb-2">
                        {skill.icon}
                        <span className="text-gray-300 font-mono ml-2">{skill.name}</span>
                        <span className="text-cyan-400 font-mono ml-auto">{skill.level}/100</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />
                      </div>
                      <p className="text-sm text-gray-400 font-mono">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8 text-purple-400">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-gray-300 font-mono"
                    >
                      <Shield className="w-5 h-5 text-cyan-400 mr-3" />
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Security Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityTools.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-purple-900/50 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center mb-4 space-x-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="group/tool">
                      <div className="flex items-start">
                        <Braces className="w-4 h-4 text-purple-400 mt-1 mr-2 group-hover/tool:text-cyan-400 transition-colors" />
                        <div>
                          <h4 className="text-gray-300 font-mono group-hover/tool:text-cyan-400 transition-colors">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-gray-500 font-mono">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-t from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Get in Touch</h2>
            <p className="text-gray-300 mb-8 font-mono">
              Interested in collaborating or have a security project in mind? Let's connect!
            </p>
            <a
              href="mailto:praj.dhruv6@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} Dhruv Prajapati. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;