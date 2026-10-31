import React, { useMemo, useState } from 'react';
import { projects } from './data/portfolio';
import './styles.css';

const categories = ['All Projects', ...new Set(projects.map(project => project.category))];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [search, setSearch] = useState('');

  const visibleProjects = useMemo(() => projects.filter(project => {
    const matchesCategory = activeCategory === 'All Projects' || project.category === activeCategory;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || [project.name, project.summary, ...project.tech].join(' ').toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  return (
    <main className="projects-page">
      <header className="projects-header">
        <a className="projects-logo" href="#projects" aria-label="Haritha Kongi home">HK<span>.</span></a>
        <span className="header-caption">PORTFOLIO / SELECTED WORK</span>
        <a className="github-link" href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      </header>

      <section className="projects-intro" id="projects">
        <p className="projects-eyebrow"><span /> A COLLECTION OF THINGS I'VE BUILT</p>
        <h1>Explore Projects<br /><span>of Haritha Kongi.</span></h1>
        <p className="projects-description">A selection of projects, experiments, and ideas brought to life through code. Explore what I've been building and learning.</p>
        <div className="projects-meta"><span>{String(projects.length).padStart(2, '0')} PROJECTS</span><i /><span>DESIGN · DEVELOPMENT · EXPERIMENTS</span></div>
      </section>

      <section className="project-library" aria-label="Project collection">
        <div className="library-heading">
          <div><p className="projects-eyebrow">THE COLLECTION</p><h2>Things I've created<span>.</span></h2></div>
          <span className="result-count">{String(visibleProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </div>

        <div className="project-controls">
          <div className="category-filters" aria-label="Filter by category">
            {categories.map(category => <button key={category} className={activeCategory === category ? 'selected' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
          <label className="project-search"><span>⌕</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Find a project..." aria-label="Search projects" /></label>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className="work-card" key={project.id} style={{ '--card-index': index }}>
              <div className="work-card-top"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span className="card-arrow">↗</span></div>
              <div className="work-card-content">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="work-tags">{project.tech.map(technology => <span key={technology}>{technology}</span>)}</div>
              <div className="work-card-actions">
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <span>↗</span></a>}
                {project.source && <a href={project.source} target="_blank" rel="noreferrer">Source code <span>↗</span></a>}
              </div>
            </article>
          ))}
          {visibleProjects.length === 0 && <p className="no-projects">No projects found. Try another search.</p>}
        </div>
      </section>

      <footer className="projects-footer">
        <div><a className="projects-logo" href="#projects">HK<span>.</span></a><p>Built with curiosity and a love for learning.</p></div>
        <div className="footer-socials"><a href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Haritha_Kongi/" target="_blank" rel="noreferrer">LeetCode ↗</a></div>
        <span className="copyright">© {new Date().getFullYear()} Haritha Kongi</span>
      </footer>
    </main>
  );
}
