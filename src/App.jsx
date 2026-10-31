import React, { useMemo, useState } from 'react';
import { projects } from './data/portfolio.js';
import './styles.css';

const skillGroups = [
  { title: 'Programming Languages', skills: ['Java', 'JavaScript', 'Python', 'C'] },
  { title: 'Frontend Development', skills: ['React.js', 'HTML5', 'CSS3', 'TypeScript', 'Tailwind CSS', 'Responsive Design'] },
  { title: 'Backend & Databases', skills: ['Node.js', 'SQL', 'Supabase', 'Firebase', 'REST API fundamentals'] },
  { title: 'Tools & Core Concepts', skills: ['Git', 'GitHub', 'VS Code', 'OOP', 'DBMS', 'Data Structures & Algorithms'] },
];

const links = [
  { label: 'GitHub', href: 'https://github.com/HarithaKongi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haritha-kongi/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Haritha_Kongi/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/haritha_kongi' },
];

const highlights = [
  { title: 'Frontend development', detail: 'Building responsive interfaces with clear layouts, reusable components and interactive experiences.' },
  { title: 'Application development', detail: 'Turning small ideas and coursework exercises into usable browser-based applications.' },
  { title: 'Continuous learning', detail: 'Strengthening programming fundamentals through hands-on projects and problem solving.' },
];

export default function App() {
  const categories = useMemo(() => ['All', ...new Set(projects.map(project => project.category))], []);
  const [category, setCategory] = useState('All');
  const visibleProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return <div className="portfolio">
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Haritha Kongi home">HK<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Journey</a><a href="#education">Education</a><a href="#contact">Contact</a>
      </nav>
      <a className="header-link" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot"/> DIPLOMA IN COMPUTER ENGINEERING</p>
          <h1>Hi, I'm<br/><span>Haritha Kongi.</span></h1>
          <p className="hero-role">Aspiring Full-Stack Developer</p>
          <p className="hero-description">I enjoy building clean, responsive web experiences and turning ideas into practical applications. Explore my diploma projects, technical skills and development journey.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <span>↗</span></a><a className="button button-outline" href="#contact">Contact me</a></div>
          <div className="hero-socials">{links.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
        </div>
        <aside className="hero-card">
          <div className="hero-card-top"><span>PORTFOLIO / PROFILE</span><span>2026</span></div>
          <div className="hero-initials">HK<span>.</span></div>
          <div className="hero-card-bottom"><p className="eyebrow">FOCUS AREAS</p><h2>Code. Create.<br/>Keep learning.</h2><p>Web development · Programming · Problem solving</p></div>
        </aside>
        <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="section section-wrap" id="about">
        <div className="section-title"><p className="eyebrow">01 / ABOUT ME</p><h2>A little about<br/><span>my journey.</span></h2></div>
        <div className="about-layout">
          <p className="about-statement">I learn by building, experimenting and improving one project at a time.</p>
          <div className="about-copy"><p>I'm Haritha Kongi, a Computer Engineering diploma student and aspiring full-stack developer. I completed my Diploma at Vijaya Institute of Technology for Women (VITW), Vijayawada.</p><p>My interests include frontend development, programming and building useful web applications. This portfolio brings together projects and practical exercises that reflect my learning journey.</p><a className="text-link" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">Explore my GitHub <span>↗</span></a></div>
        </div>
      </section>

      <section className="section section-wrap" id="skills">
        <div className="section-title"><p className="eyebrow">02 / TECHNICAL TOOLKIT</p><h2>Skills &<br/><span>technologies.</span></h2></div>
        <p className="section-intro">The tools and concepts I have explored through coursework, practice and project development.</p>
        <div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="card-number">0{index + 1}</span><h3>{group.title}</h3><div className="tag-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="section section-wrap" id="projects">
        <div className="section-title projects-title"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects I've<br/><span>worked on.</span></h2></div><p className="project-count">{String(projects.length).padStart(2,'0')} PROJECTS</p></div>
        <p className="section-intro">A selection of diploma mini-projects, technical experiments and personal builds. Each project helped me practise a different part of development.</p>
        <div className="project-toolbar"><div className="filters" aria-label="Filter projects">{categories.map(item => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><span>SHOWING {String(visibleProjects.length).padStart(2,'0')}</span></div>
        <div className="project-grid">{visibleProjects.map((project, index) => <article className="project-card" key={project.id} style={{'--card-index': index % 6}}>
          <div className="project-card-top"><span>PROJECT {String(index + 1).padStart(2,'0')}</span><span>{project.category}</span></div>
          <div className="project-card-body"><h3>{project.name}</h3><p>{project.summary}</p></div>
          <div className="tag-list project-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}<a href={project.source} target="_blank" rel="noreferrer">Source code ↗</a></div>
        </article>)}</div>
      </section>

      <section className="section section-wrap" id="experience">
        <div className="section-title"><p className="eyebrow">04 / DEVELOPMENT JOURNEY</p><h2>Learning through<br/><span>hands-on work.</span></h2></div>
        <p className="section-intro">My experience so far has grown through building projects, practising concepts and exploring different areas of software development.</p>
        <div className="journey-grid">{highlights.map((item, index) => <article className="journey-card" key={item.title}><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </section>

      <section className="section section-wrap" id="education">
        <div className="section-title"><p className="eyebrow">05 / EDUCATION</p><h2>Academic<br/><span>background.</span></h2></div>
        <div className="education-list">
          <article className="education-card"><span className="education-number">01</span><div className="education-info"><p className="eyebrow">DIPLOMA · COMPUTER ENGINEERING</p><h3>Vijaya Institute of Technology for Women (VITW)</h3><p>Vijayawada, Andhra Pradesh</p></div><span className="education-status">Completed</span></article>
          <article className="education-card"><span className="education-number">02</span><div className="education-info"><p className="eyebrow">B.TECH · COMPUTER SCIENCE & ENGINEERING</p><h3>Rajeev Gandhi Memorial College of Engineering & Technology</h3><p>Nandyal, Andhra Pradesh</p></div><span className="education-status">In progress</span></article>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><p className="eyebrow">06 / GET IN TOUCH</p><h2>Let's connect<br/><span>and build something.</span></h2><p>I'm open to learning opportunities, collaborations and conversations about technology.</p><a className="button button-primary" href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a><div className="contact-socials">{links.map(link=><a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home">HK<span>.</span></a><span>© {new Date().getFullYear()} Haritha Kongi</span><a href="#home">Back to top ↑</a></footer>
  </div>;
}
