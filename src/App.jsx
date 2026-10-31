import React, { useMemo, useState } from 'react';
import { projects } from './data/portfolio.js';
import './styles.css';

const skillGroups = [
  { title: 'Web development', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'] },
  { title: 'Programming', items: ['Java', 'Object-Oriented Programming', 'Data Structures & Algorithms'] },
  { title: 'Tools & data', items: ['Node.js', 'SQL', 'Firebase', 'Supabase', 'Git & GitHub'] },
];
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/HarithaKongi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haritha-kongi/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Haritha_Kongi/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/haritha_kongi' },
];

export default function App() {
  const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.category))], []);
  const [category, setCategory] = useState('All');
  const visibleProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return <div className="portfolio">
    <header className="site-header">
      <a className="wordmark" href="#home">HK<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a>
      </nav>
      <a className="header-link" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span/> COMPUTER SCIENCE STUDENT · DEVELOPER</p>
          <h1>Hello, I'm<br/><span>Haritha Kongi.</span></h1>
          <p className="hero-description">I'm Haritha Kongi — a Computer Science student focused on full-stack development, clean user interfaces and practical software solutions. I enjoy turning ideas into reliable, usable products.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↗</span></a><a className="button button-light" href="#contact">Get in touch</a></div>
          <div className="hero-socials">{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
        </div>
        <aside className="hero-note"><span className="note-index">01 / PROFILE</span><div className="monogram">H<span>K</span></div><h2>Full-stack<br/>development.</h2><p>Learn. Build. Improve. Repeat.</p><span className="note-line"/></aside>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>About me</h2></div>
        <div className="about-content"><p className="about-lead">Curious by nature. Builder by practice.</p><p>I completed a Diploma in Computer Engineering at Vijaya Institute of Technology for Women (VITW), Vijayawada. My work spans frontend development, programming fundamentals and database-backed applications. I value thoughtful design, readable code and learning by building real projects.</p></div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <div className="section-heading"><p className="eyebrow">TECHNOLOGIES & FUNDAMENTALS</p><h2>Skills</h2></div>
        <div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading projects-heading"><div><p className="eyebrow">SELECTED WORK & PRACTICE</p><h2>Projects</h2></div><p className="project-count">{projects.length.toString().padStart(2,'0')} PROJECTS</p></div>
        <div className="filters" aria-label="Filter projects">{categories.map(item => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((project,index) => <article className="project-card" key={project.id}>
          <div className="project-card-top"><span>{String(index+1).padStart(2,'0')}</span><span>{project.category}</span></div>
          <h3>{project.name}</h3><p>{project.summary}</p>
          <div className="tag-list project-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">{project.demo && <a href={project.demo}>Live demo ↗</a>}<a href={project.source} target="_blank" rel="noreferrer">Source code ↗</a></div>
        </article>)}</div>
        <p className="section-footnote">Project descriptions and links are retained from the existing portfolio records. Open each project to view its available demo or source repository.</p>
      </section>

      <section className="content-section section-wrap" id="education">
        <div className="section-heading"><p className="eyebrow">ACADEMIC BACKGROUND</p><h2>Education</h2></div>
        <article className="education-card"><div className="education-mark">01</div><div><p className="eyebrow">DIPLOMA · COMPUTER ENGINEERING</p><h3>Vijaya Institute of Technology for Women (VITW)</h3><p>Vijayawada, Andhra Pradesh</p></div><span className="education-status">Completed</span></article>
        <article className="education-card"><div className="education-mark">02</div><div><p className="eyebrow">B.TECH · COMPUTER SCIENCE & ENGINEERING</p><h3>Rajeev Gandhi Memorial College of Engineering & Technology</h3><p>Nandyal, Andhra Pradesh</p></div><span className="education-status">In progress</span></article>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><p className="eyebrow">LET'S CONNECT</p><h2>Have a project or opportunity<br/>in mind?</h2><p>I'd be happy to connect and learn about it.</p><a className="button button-primary" href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><div className="contact-socials">{socialLinks.map(link=><a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home">HK<span>.</span></a><span>© {new Date().getFullYear()} Haritha Kongi</span><a href="#home">Back to top ↑</a></footer>
  </div>;
}
