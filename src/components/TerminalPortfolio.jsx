import React from 'react';
import { projects } from '../data/portfolio.js';

const skills = [
  { group: 'FRONTEND', command: 'npm run dev', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'] },
  { group: 'BACKEND & DATA', command: 'connect --services', items: ['Node.js basics', 'SQL', 'Firebase', 'Supabase'] },
  { group: 'PROGRAMMING', command: 'javac Main.java', items: ['Java', 'Object-Oriented Programming', 'Data Structures & Algorithms'] },
];
const links = [
  { label: 'GitHub', href: 'https://github.com/HarithaKongi', command: 'git clone' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haritha-kongi/', command: 'connect' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Haritha_Kongi/', command: 'solve' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/haritha_kongi', command: 'compete' },
];

function SectionHeading({ number, command, title, path }) {
  return <div className="term-section-heading"><span>{number} / {path}</span><p>$ {command}</p><h2>{title}</h2></div>;
}

export default function TerminalPortfolio({ onEnter3D }) {
  const categories = [...new Set(projects.map(project => project.category))];
  return <main className="terminal-site">
    <div className="term-noise" aria-hidden="true" />
    <header className="term-header">
      <a className="term-logo" href="#home" aria-label="Haritha Kongi home">HK<span>_</span></a>
      <nav aria-label="Main navigation">
        {[['about','about'],['skills','skills'],['projects','projects'],['education','education'],['contact','contact']].map(([id,label],i)=><a key={id} href={'#'+id}><span>0{i+1}</span> {label}</a>)}
      </nav>
      <a className="term-hire" href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">LET'S CONNECT <span>↗</span></a>
    </header>

    <section className="term-hero" id="home">
      <div className="term-hero-copy">
        <div className="term-prompt"><span className="term-dot"/> SYSTEM ONLINE <i/> PORTFOLIO.SYS v1.0</div>
        <p className="term-command">root@haritha:~$ whoami</p>
        <h1>Haritha <em>Kongi</em><span className="term-cursor">_</span></h1>
        <div className="term-role">COMPUTER SCIENCE ENGINEERING STUDENT <span>//</span> DEVELOPER</div>
        <p className="term-intro">I turn ideas into useful digital experiences through code, curiosity, and continuous learning. Explore my projects, technologies, and engineering journey.</p>
        <div className="term-hero-actions">
          <a className="term-primary" href="#projects">./view_projects <span>↗</span></a>
          <a className="term-secondary" href="#contact">./contact_me</a>
          <button className="term-adventure-link" onClick={onEnter3D}>ENTER 3D ADVENTURE ↗</button>
        </div>
        <div className="term-social-row">{links.map(link=><a key={link.label} href={link.href} target="_blank" rel="noreferrer"><span>{link.command}</span> /{link.label.toLowerCase()} ↗</a>)}</div>
      </div>
      <div className="term-hero-aside">
        <div className="term-code-window">
          <div className="term-window-bar"><span/><span/><span/><b>~/developer.config.js</b></div>
          <pre><span className="term-code-muted">const</span> developer = {'{'}{ '\n' }
  name: <i>'Haritha Kongi'</i>,{ '\n' }
  focus: [<i>'Web Development'</i>,{ '\n' }
         <i>'Software Engineering'</i>],{ '\n' }
  learning: <i>true</i>,{ '\n' }
  building: <i>'ideas → applications'</i>{ '\n' }
{'}'};</pre>
          <div className="term-window-footer"><span>● AVAILABLE FOR OPPORTUNITIES</span><span>AP / INDIA</span></div>
        </div>
        <div className="term-aside-note"><span>01</span><p>BUILDING SMALL PROJECTS.<br/><b>THINKING BIGGER EVERY DAY.</b></p></div>
      </div>
    </section>

    <div className="term-metrics" aria-label="Portfolio overview">
      <div><b>{String(projects.length).padStart(2,'0')}</b><span>PROJECTS BUILT</span></div>
      <div><b>{categories.length}</b><span>PROJECT CATEGORIES</span></div>
      <div><b>{skills.reduce((n,s)=>n+s.items.length,0)}+</b><span>TECHNOLOGIES & CONCEPTS</span></div>
      <div><b>∞</b><span>IDEAS TO EXPLORE</span></div>
    </div>

    <section className="term-section term-about" id="about">
      <SectionHeading number="01." path="about.txt" command="cat about.txt" title="A little about me."/>
      <div className="term-about-grid">
        <div className="term-file-label">~/profile/haritha.json <span>READ_ONLY</span></div>
        <div className="term-about-copy">
          <p className="term-lead">A developer in progress, driven by <em>curiosity and creation.</em></p>
          <p>I'm Haritha Kongi, a Computer Science and Engineering student with a Diploma in Computer Engineering. I enjoy learning how software works and building practical projects that turn concepts into interactive experiences.</p>
          <p>My portfolio brings together diploma mini-projects, JavaScript experiments, and selected personal builds. Each project is a step forward in my engineering journey.</p>
          <div className="term-inline-tags"><span>PROBLEM SOLVING</span><span>WEB DEVELOPMENT</span><span>CONTINUOUS LEARNING</span></div>
        </div>
      </div>
    </section>

    <section className="term-section" id="skills">
      <SectionHeading number="02." path="skills --list" command="./skills --list-all" title="Tools in my toolbox."/>
      <div className="term-skills-grid">{skills.map((group,i)=><article className="term-skill-card" key={group.group}><div className="term-card-top"><span>0{i+1} / MODULE</span><span>● ACTIVE</span></div><p>~/stack/{group.group.toLowerCase().replaceAll(' ','_')}</p><h3>{group.group}</h3><code>$ {group.command}</code><div className="term-skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
      <p className="term-data-note">// Skills are presented from the technologies and learning areas listed in the existing portfolio.</p>
    </section>

    <section className="term-section term-projects" id="projects">
      <SectionHeading number="03." path="./projects/" command="ls -la ./projects/" title="Things I've built."/>
      <div className="term-project-intro"><p>From diploma assignments to practical experiments — browse the complete project archive.</p><span>{projects.length} RECORDS FOUND</span></div>
      <div className="term-project-grid">{projects.map((project,index)=><article className="term-project-card" key={project.id}>
        <div className="term-project-meta"><span>[{String(index+1).padStart(2,'0')}]</span><span>{project.category}</span></div>
        <div className="term-project-icon">{['◷','✓','＋','☁','▣','⌁','◉','▥','◈','ƒ','±','↻','⌖','▤','✳'][index]}</div>
        <h3>{project.name}</h3><p>{project.summary}</p>
        <div className="term-project-tech">{project.tech.map(tech=><span key={tech}>{tech}</span>)}</div>
        <div className="term-project-links">{project.demo&&<a href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}<a href={project.source} target="_blank" rel="noreferrer">git clone ↗</a></div>
      </article>)}</div>
    </section>

    <section className="term-section term-education" id="education">
      <SectionHeading number="04." path="education.log" command="cat education.log" title="The learning journey."/>
      <div className="term-education-card"><div className="term-edu-date">DIPLOMA <span>COMPUTER ENGINEERING</span></div><div><h3>Diploma in Computer Engineering</h3><p>Vijaya Institute of Technology for Women (VITW)</p><span>Vijayawada, Andhra Pradesh</span></div><div className="term-edu-status">COMPLETED</div></div>
      <div className="term-education-card"><div className="term-edu-date">B.TECH <span>COMPUTER SCIENCE</span></div><div><h3>B.Tech in Computer Science & Engineering</h3><p>Rajeev Gandhi Memorial College of Engineering & Technology</p><span>Nandyal, Andhra Pradesh</span></div><div className="term-edu-status term-current">IN PROGRESS</div></div>
      <p className="term-data-note">// No grades, dates, or awards are added here unless they are recorded in the source portfolio.</p>
    </section>

    <section className="term-contact" id="contact">
      <SectionHeading number="05." path="contact.sh" command="./initiate_contact.sh" title="Let's build something."/>
      <p>Have an opportunity, project idea, or collaboration in mind? Find me on these platforms.</p>
      <div className="term-contact-links">{links.map(link=><a key={link.label} href={link.href} target="_blank" rel="noreferrer"><span>{link.command} ./{link.label.toLowerCase()}</span><b>{link.label} ↗</b></a>)}</div>
      <div className="term-contact-bottom"><span>root@haritha:~$ echo "Thanks for visiting."</span><button onClick={onEnter3D}>EXPLORE THE 3D WORLD ↗</button></div>
    </section>
    <footer className="term-footer"><a className="term-logo" href="#home">HK<span>_</span></a><span>DESIGNED & BUILT BY HARITHA KONGI</span><span>© {new Date().getFullYear()} · ALL SYSTEMS OPERATIONAL</span></footer>
  </main>;
}
