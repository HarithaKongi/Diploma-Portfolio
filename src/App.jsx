import React, { useEffect, useMemo, useState } from 'react';
import { projects } from './data/portfolio';
import './styles.css';

const categories = ['All', ...new Set(projects.map(project => project.category))];
const skills = [
  {name:'Java',used:'DSA practice, coursework, backend fundamentals',level:78},
  {name:'JavaScript',used:'Web projects and interactive applications',level:82},
  {name:'React.js',used:'Full-stack interfaces and dashboards',level:78},
  {name:'TypeScript',used:'SpendWise and modern frontend development',level:65},
  {name:'Python',used:'AI chatbot and machine-learning projects',level:68},
  {name:'SQL & PostgreSQL',used:'Database-backed applications',level:65},
  {name:'HTML & CSS',used:'Responsive websites and UI development',level:88}
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const completedCount = projects.filter(project => project.status === 'Completed').length;
  const technologyCount = new Set(projects.flatMap(project => project.tech)).size;

  const visibleProjects = useMemo(() => projects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    const term = search.trim().toLowerCase();
    const searchMatch = !term || [project.name, project.summary, project.category, ...project.tech].join(' ').toLowerCase().includes(term);
    return categoryMatch && searchMatch;
  }), [activeCategory, search]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll('.rv');
    if (reduce) {
      revealItems.forEach(item => item.classList.add('in'));
      document.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w + '%'; });
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      entry.target.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w + '%'; });
      observer.unobserve(entry.target);
    }), {threshold:0.12});
    revealItems.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [visibleProjects]);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const progress = document.getElementById('prog');
      if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? root.scrollTop / max : 0) + ')';
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <div id="prog" />
      <nav className="site-nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">Haritha Kongi<span>.</span></a>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <p className="eyebrow seq" style={{'--i':0}}>COMPUTER SCIENCE ENGINEERING · DEVELOPER PORTFOLIO</p>
          <h1 className="seq" style={{'--i':1}}>Building ideas into<br/> meaningful digital experiences.</h1>
          <p className="role seq" style={{'--i':2}}>I build <span className="typed-words">web applications, full-stack products &amp; AI projects</span><span className="caret" /></p>
          <p className="intro seq" style={{'--i':3}}>I'm Haritha Kongi, a final-year Computer Science Engineering student with a Diploma in Computer Engineering. I enjoy building practical products, exploring AI, and turning ideas into useful experiences.</p>
          <div className="cta seq" style={{'--i':4}}>
            <a className="btn main" href="#projects">Explore projects <span>↘</span></a>
            <a className="btn" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="stats seq" style={{'--i':5}}>
            <div><b>{projects.length}</b><span>Projects showcased</span></div>
            <div><b>{completedCount}</b><span>Completed projects</span></div>
            <div><b>{technologyCount}+</b><span>Tools &amp; technologies</span></div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap rv">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <h2>About me</h2>
          <p className="lead">Curious by nature. Builder by practice.</p>
          <p className="about-text">I'm a <mark>Computer Science Engineering student</mark> at Rajeev Gandhi Memorial College of Engineering &amp; Technology, with a Diploma in Computer Engineering from Vijaya Institute of Technology for Women. My interests include <code>Java</code>, <code>React</code>, full-stack development, databases, and applied AI. I like learning by building and improving projects through real implementation.</p>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="rv">
            <p className="section-kicker">SELECTED WORK &amp; LEARNING</p>
            <h2>Explore Projects of Haritha Kongi</h2>
            <p className="lead">From diploma mini projects to full-stack applications, AI experiments, and community-focused websites.</p>
            <div className="project-tools">
              <div className="chips" role="group" aria-label="Filter projects by category">
                {categories.map(category => <button key={category} className="chip" data-active={activeCategory === category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
              </div>
              <label className="search-box"><span>⌕</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search projects or technologies..." aria-label="Search projects" /></label>
            </div>
            <p className="project-count">Showing <strong>{visibleProjects.length}</strong> of {projects.length} projects</p>
          </div>

          <div className="grid" id="grid">
            {visibleProjects.map((project, index) => {
              const progress = project.status === 'Completed' ? 100 : project.status === 'In progress' ? 10 : 0;
              return <article className={'card rv ' + (project.status === 'Completed' ? 'st-done' : project.status === 'In progress' ? 'st-wip' : 'st-plan')} data-c={project.category} key={project.id} style={{'--d':(index%3)*80+'ms'}} onPointerMove={event => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty('--mx',(event.clientX-rect.left)+'px');
                event.currentTarget.style.setProperty('--my',(event.clientY-rect.top)+'px');
              }}>
                <div className="card-top"><span className="ico">{project.icon || '✦'}</span><div><h3>{project.name}</h3><span className="cat">{project.category}</span></div><span className="badge">{project.status}</span></div>
                <p>{project.summary}</p>
                <div><div className="meter-row"><span>{project.status === 'Completed' ? 'Project status' : 'Development status'}</span><span>{progress}%</span></div><div className="bar"><span data-w={progress} style={{'--w':progress+'%'}} /></div></div>
                <div className="tags">{project.tech.map(technology => <i key={technology}>{technology}</i>)}</div>
                <div className="links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source code ↗</a>}
                </div>
              </article>;
            })}
          </div>
          {visibleProjects.length === 0 && <p className="empty" style={{display:'block'}}>No projects match your search. Try another keyword or category.</p>}
        </div>
      </section>

      <section id="skills">
        <div className="wrap rv">
          <p className="section-kicker">TOOLS OF THE TRADE</p>
          <h2>Skills &amp; technologies</h2>
          <p className="lead">Technologies I've used across coursework, experiments, and applications.</p>
          <div className="table-box">
            <table>
              <thead><tr><th>Skill</th><th>Used in</th><th>Experience</th></tr></thead>
              <tbody>{skills.map(skill => <tr key={skill.name}><td>{skill.name}</td><td>{skill.used}</td><td><div className="bar"><span data-w={skill.level} style={{'--w':skill.level+'%'}} /></div></td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap rv">
          <div className="contact">
            <p className="section-kicker">LET'S CONNECT</p>
            <h2>Have an idea? Let's build it.</h2>
            <p className="lead">I'm interested in software engineering opportunities, internships, hackathons, and meaningful collaborations.</p>
            <div className="cta">
              <a className="btn main" href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
              <a className="btn" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">Explore GitHub ↗</a>
              <a className="btn" href="https://leetcode.com/u/Haritha_Kongi/" target="_blank" rel="noreferrer">LeetCode ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Haritha Kongi</span><span>Built with curiosity, code, and consistency.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
