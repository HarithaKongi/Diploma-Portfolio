import React, { useEffect, useMemo, useState } from 'react';
import './styles.css';

const topicData = [
  { name: 'Arrays & Hashing', problems: [
    ['Contains Duplicate','Easy','contains-duplicate'],['Valid Anagram','Easy','valid-anagram'],['Two Sum','Easy','two-sum'],['Group Anagrams','Medium','group-anagrams'],['Top K Frequent Elements','Medium','top-k-frequent-elements'],['Product of Array Except Self','Medium','product-of-array-except-self'],['Valid Sudoku','Medium','valid-sudoku'],['Longest Consecutive Sequence','Hard','longest-consecutive-sequence']
  ]},
  { name: 'Two Pointers', problems: [
    ['Valid Palindrome','Easy','valid-palindrome'],['Two Sum II - Input Array Is Sorted','Medium','two-sum-ii-input-array-is-sorted'],['3Sum','Medium','3sum'],['Container With Most Water','Medium','container-with-most-water'],['Trapping Rain Water','Hard','trapping-rain-water']
  ]},
  { name: 'Sliding Window', problems: [
    ['Best Time to Buy and Sell Stock','Easy','best-time-to-buy-and-sell-stock'],['Longest Substring Without Repeating Characters','Medium','longest-substring-without-repeating-characters'],['Longest Repeating Character Replacement','Medium','longest-repeating-character-replacement'],['Permutation in String','Medium','permutation-in-string'],['Minimum Window Substring','Hard','minimum-window-substring'],['Sliding Window Maximum','Hard','sliding-window-maximum']
  ]},
  { name: 'Stack', problems: [
    ['Valid Parentheses','Easy','valid-parentheses'],['Min Stack','Medium','min-stack'],['Evaluate Reverse Polish Notation','Medium','evaluate-reverse-polish-notation'],['Generate Parentheses','Medium','generate-parentheses'],['Daily Temperatures','Medium','daily-temperatures'],['Largest Rectangle in Histogram','Hard','largest-rectangle-in-histogram']
  ]},
  { name: 'Binary Search', problems: [
    ['Binary Search','Easy','binary-search'],['Search a 2D Matrix','Medium','search-a-2d-matrix'],['Koko Eating Bananas','Medium','koko-eating-bananas'],['Find Minimum in Rotated Sorted Array','Medium','find-minimum-in-rotated-sorted-array'],['Search in Rotated Sorted Array','Medium','search-in-rotated-sorted-array'],['Median of Two Sorted Arrays','Hard','median-of-two-sorted-arrays']
  ]},
  { name: 'Linked List', problems: [
    ['Reverse Linked List','Easy','reverse-linked-list'],['Merge Two Sorted Lists','Easy','merge-two-sorted-lists'],['Linked List Cycle','Easy','linked-list-cycle'],['Reorder List','Medium','reorder-list'],['Remove Nth Node From End of List','Medium','remove-nth-node-from-end-of-list'],['Copy List with Random Pointer','Medium','copy-list-with-random-pointer'],['Add Two Numbers','Medium','add-two-numbers'],['Find the Duplicate Number','Medium','find-the-duplicate-number'],['LRU Cache','Hard','lru-cache']
  ]},
  { name: 'Trees', problems: [
    ['Invert Binary Tree','Easy','invert-binary-tree'],['Maximum Depth of Binary Tree','Easy','maximum-depth-of-binary-tree'],['Same Tree','Easy','same-tree'],['Subtree of Another Tree','Easy','subtree-of-another-tree'],['Binary Tree Level Order Traversal','Medium','binary-tree-level-order-traversal'],['Validate Binary Search Tree','Medium','validate-binary-search-tree'],['Kth Smallest Element in a BST','Medium','kth-smallest-element-in-a-bst'],['Construct Binary Tree from Preorder and Inorder Traversal','Medium','construct-binary-tree-from-preorder-and-inorder-traversal'],['Binary Tree Maximum Path Sum','Hard','binary-tree-maximum-path-sum'],['Serialize and Deserialize Binary Tree','Hard','serialize-and-deserialize-binary-tree'],['Lowest Common Ancestor of a Binary Search Tree','Medium','lowest-common-ancestor-of-a-binary-search-tree']
  ]},
  { name: 'Graphs', problems: [
    ['Number of Islands','Medium','number-of-islands'],['Clone Graph','Medium','clone-graph'],['Max Area of Island','Medium','max-area-of-island'],['Pacific Atlantic Water Flow','Medium','pacific-atlantic-water-flow'],['Course Schedule','Medium','course-schedule'],['Course Schedule II','Medium','course-schedule-ii'],['Graph Valid Tree','Medium','graph-valid-tree'],['Number of Connected Components in an Undirected Graph','Medium','number-of-connected-components-in-an-undirected-graph'],['Word Ladder','Hard','word-ladder']
  ]},
  { name: 'Dynamic Programming', problems: [
    ['Climbing Stairs','Easy','climbing-stairs'],['Min Cost Climbing Stairs','Easy','min-cost-climbing-stairs'],['House Robber','Medium','house-robber'],['House Robber II','Medium','house-robber-ii'],['Longest Palindromic Substring','Medium','longest-palindromic-substring'],['Palindromic Substrings','Medium','palindromic-substrings'],['Decode Ways','Medium','decode-ways'],['Coin Change','Medium','coin-change'],['Maximum Product Subarray','Medium','maximum-product-subarray'],['Word Break','Medium','word-break'],['Longest Increasing Subsequence','Medium','longest-increasing-subsequence'],['Unique Paths','Medium','unique-paths'],['Longest Common Subsequence','Medium','longest-common-subsequence'],['Edit Distance','Hard','edit-distance'],['Burst Balloons','Hard','burst-balloons']
  ]},
  { name: 'Backtracking', problems: [
    ['Subsets','Medium','subsets'],['Combination Sum','Medium','combination-sum'],['Permutations','Medium','permutations'],['Subsets II','Medium','subsets-ii'],['Combination Sum II','Medium','combination-sum-ii'],['Word Search','Medium','word-search'],['Palindrome Partitioning','Medium','palindrome-partitioning'],['Letter Combinations of a Phone Number','Medium','letter-combinations-of-a-phone-number'],['N-Queens','Hard','n-queens']
  ]},
  { name: 'Heap / Priority Queue', problems: [
    ['Kth Largest Element in an Array','Medium','kth-largest-element-in-an-array'],['Last Stone Weight','Easy','last-stone-weight'],['K Closest Points to Origin','Medium','k-closest-points-to-origin'],['Task Scheduler','Medium','task-scheduler'],['Design Twitter','Medium','design-twitter'],['Find Median from Data Stream','Hard','find-median-from-data-stream'],['Merge k Sorted Lists','Hard','merge-k-sorted-lists']
  ]},
  { name: 'Greedy', problems: [
    ['Maximum Subarray','Medium','maximum-subarray'],['Jump Game','Medium','jump-game'],['Jump Game II','Medium','jump-game-ii'],['Gas Station','Medium','gas-station'],['Hand of Straights','Medium','hand-of-straights'],['Merge Triplets to Form Target Triplet','Medium','merge-triplets-to-form-target-triplet'],['Partition Labels','Medium','partition-labels'],['Valid Parenthesis String','Hard','valid-parenthesis-string']
  ]}
];

const allProblems = topicData.flatMap((topic, topicIndex) => topic.problems.map(([title, difficulty, slug], index) => ({
  id: slug, title, difficulty, slug, topic: topic.name, topicIndex, index
})));
const links = [
  { label: 'Email', href: 'mailto:harithakongi@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/haritha-kongi/' },
  { label: 'GitHub', href: 'https://github.com/HarithaKongi' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Haritha_Kongi/' }
];
const todayKey = () => new Date().toLocaleDateString('en-CA');
const loadProgress = () => { try { return JSON.parse(localStorage.getItem('haritha-dsa-progress') || '{}'); } catch { return {}; } };

export default function App() {
  const [completed, setCompleted] = useState(loadProgress);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState('Arrays & Hashing');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => { localStorage.setItem('haritha-dsa-progress', JSON.stringify(completed)); }, [completed]);

  const stats = useMemo(() => {
    const done = allProblems.filter(p => completed[p.id]).length;
    return {
      done, total: allProblems.length,
      easy: allProblems.filter(p => p.difficulty === 'Easy' && completed[p.id]).length,
      medium: allProblems.filter(p => p.difficulty === 'Medium' && completed[p.id]).length,
      hard: allProblems.filter(p => p.difficulty === 'Hard' && completed[p.id]).length,
      easyTotal: allProblems.filter(p => p.difficulty === 'Easy').length,
      mediumTotal: allProblems.filter(p => p.difficulty === 'Medium').length,
      hardTotal: allProblems.filter(p => p.difficulty === 'Hard').length
    };
  }, [completed]);

  const filteredTopics = topicData.map(topic => ({
    ...topic,
    visible: topic.problems.map(([title, difficulty, slug]) => ({ title, difficulty, slug, id: slug }))
      .filter(p => (!query || p.title.toLowerCase().includes(query.toLowerCase())) && (filter === 'All' || p.difficulty === filter) && (!showCompleted || completed[p.id]))
  })).filter(topic => topic.visible.length > 0 || (!query && filter === 'All' && !showCompleted));

  const toggleProblem = id => setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  const streak = completed.__streak || { days: 0, best: 0, last: '' };
  const doneToday = streak.last === todayKey();

  const toggleDone = id => {
    setCompleted(prev => {
      const next = { ...prev, [id]: !prev[id] };
      if (!prev[id]) {
        const current = prev.__streak || { days: 0, best: 0, last: '' };
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yKey = yesterday.toLocaleDateString('en-CA');
        const days = current.last === todayKey() ? current.days : current.last === yKey ? current.days + 1 : 1;
        next.__streak = { days, best: Math.max(current.best, days), last: todayKey() };
      }
      return next;
    });
  };

  return <div className="tracker-shell">
    <header className="tracker-header">
      <a className="tracker-brand" href="#top"><span className="brand-mark">H</span><span>HARITHA<span className="brand-muted"> / DSA TRACKER</span></span></a>
      <nav><a href="#dashboard">Dashboard</a><a href="#topics">Topics</a><a href="#footer">About</a></nav>
      <a className="header-cta" href="https://leetcode.com/u/Haritha_Kongi/" target="_blank" rel="noreferrer">LeetCode <span>↗</span></a>
    </header>

    <main id="top" className="tracker-main">
      <section className="tracker-hero">
        <div className="hero-text">
          <p className="overline"><span className="live-dot"/> YOUR PERSONAL PRACTICE SPACE</p>
          <h1>Master <span>DSA.</span></h1>
          <p className="hero-lead">A focused roadmap for essential data structures and algorithms. Track your progress, build consistency, and prepare for your next opportunity.</p>
          <a className="start-button" href="#topics">Start learning <span>↘</span></a>
          <div className="hero-caption"><span>99 CURATED PROBLEMS</span><i/> <span>12 TOPICS</span><i/> <span>ONE STEP AT A TIME</span></div>
        </div>
        <div className="hero-art" aria-label="DSA progress illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-core">DS<span>A</span></div>
          <span className="orbit-tag tag-array">ARRAYS</span><span className="orbit-tag tag-tree">TREES</span><span className="orbit-tag tag-graph">GRAPHS</span><span className="orbit-tag tag-code">{"{ }"}</span>
        </div>
      </section>

      <section className="dashboard-section" id="dashboard">
        <div className="section-heading"><div><p className="overline">YOUR ACTIVITY</p><h2>Progress overview</h2></div><span className="date-label">{new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short',year:'numeric'})}</span></div>
        <div className="stats-grid">
          <article className="stat-card streak-card"><div className="stat-top"><span>Current streak</span><span className="stat-icon">✳</span></div><div className="stat-value">{streak.days}<small> days</small></div><p>{doneToday ? 'You showed up today. Keep going!' : 'Complete a problem to start your streak.'}</p><div className="streak-bottom"><span>BEST: {streak.best} DAYS</span><span>{doneToday ? 'TODAY ✓' : 'TODAY ·'}</span></div></article>
          <article className="stat-card"><div className="stat-top"><span>Total solved</span><span className="stat-icon">⌁</span></div><div className="stat-value">{stats.done}<small> / {stats.total}</small></div><div className="mini-progress"><span style={{width: (stats.done/stats.total*100)+'%'}}/></div><p>{Math.round(stats.done/stats.total*100)}% of your roadmap completed</p></article>
          <article className="stat-card"><div className="stat-top"><span>Daily consistency</span><span className="stat-icon">◷</span></div><div className="stat-value">{doneToday ? '1' : '0'}<small> / 1 today</small></div><p>{doneToday ? 'Daily goal reached. Nice work.' : 'One problem a day makes a difference.'}</p><div className="streak-bottom"><span>SMALL STEPS</span><span>BIG RESULTS</span></div></article>
        </div>
        <div className="progress-panel">
          <div className="progress-head"><div><p className="overline">ROADMAP COMPLETION</p><h3>You're building momentum.</h3></div><strong>{Math.round(stats.done/stats.total*100)}<small>%</small></strong></div>
          <div className="progress-track"><span style={{width:(stats.done/stats.total*100)+'%'}}/></div>
          <div className="difficulty-grid">
            {['Easy','Medium','Hard'].map(level => { const count=stats[level.toLowerCase()], total=stats[level.toLowerCase()+'Total']; return <div className="difficulty-stat" key={level}><div><span className={'difficulty-dot '+level.toLowerCase()}/><b>{level}</b></div><strong>{count}<small> / {total}</small></strong><div className="difficulty-track"><span className={level.toLowerCase()} style={{width:(count/total*100)+'%'}}/></div></div>; })}
          </div>
        </div>
      </section>

      <section className="topics-section" id="topics">
        <div className="section-heading topics-heading"><div><p className="overline">THE ROADMAP</p><h2>Pick a topic. Solve a problem.</h2><p className="section-subtitle">Work through each pattern at your own pace. Your progress is saved on this device.</p></div><div className="topic-total"><strong>{stats.done}<span>/{stats.total}</span></strong><small>PROBLEMS SOLVED</small></div></div>
        <div className="problem-toolbar">
          <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions..." aria-label="Search questions"/></label>
          <div className="filter-row">{['All','Easy','Medium','Hard'].map(level=><button key={level} className={filter===level?'active':''} onClick={()=>setFilter(level)}>{level}</button>)}<button className={'completed-filter '+(showCompleted?'active':'')} onClick={()=>setShowCompleted(v=>!v)}>✓ Completed</button></div>
        </div>
        <div className="topic-list">
          {filteredTopics.map(topic => {
            const total=topic.problems.length;
            const done=topic.problems.filter(p=>completed[p[2]]).length;
            const isOpen=expanded===topic.name || !!query || filter!=='All' || showCompleted;
            return <article className={'topic-card '+(isOpen?'open':'')} key={topic.name}>
              <button className="topic-trigger" onClick={()=>setExpanded(expanded===topic.name?'':topic.name)} aria-expanded={isOpen}>
                <span className="topic-index">{String(topicData.findIndex(t=>t.name===topic.name)+1).padStart(2,'0')}</span><span className="topic-name">{topic.name}<small>{done} of {total} completed</small></span><span className="topic-progress"><span style={{width:(done/total*100)+'%'}}/></span><span className="topic-fraction">{done}/{total}</span><span className="topic-chevron">⌄</span>
              </button>
              {isOpen && <div className="problem-list">{topic.visible.map(problem=><div className={'problem-row '+(completed[problem.id]?'is-done':'')} key={problem.id}>
                <button className="check-button" aria-label={completed[problem.id]?'Mark incomplete':'Mark complete'} onClick={()=>toggleDone(problem.id)}>{completed[problem.id]?'✓':''}</button>
                <a className="problem-name" href={'https://leetcode.com/problems/'+problem.slug+'/'} target="_blank" rel="noreferrer">{problem.title}<span>↗</span></a>
                <span className={'difficulty-pill '+problem.difficulty.toLowerCase()}>{problem.difficulty}</span>
              </div>)}</div>}
            </article>;
          })}
          {filteredTopics.length===0 && <div className="empty-state">No questions match your search. Try another title or filter.</div>}
        </div>
      </section>
    </main>

    <footer className="tracker-footer" id="footer"><div className="footer-inner"><div><a className="footer-brand" href="#top">HK<span>.</span></a><h2>Consistency beats<br/><span>intensity.</span></h2><p>One problem at a time. Keep learning, keep growing.</p></div><div className="footer-links"><p className="overline">CONNECT WITH ME</p>{links.map(link=><a key={link.label} href={link.href} target={link.href.startsWith('mailto:')?undefined:'_blank'} rel="noreferrer">{link.label}<span>↗</span></a>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Haritha Kongi</span><span>Problem links open on LeetCode. All problem rights belong to their respective platforms.</span><a href="#top">Back to top ↑</a></div></footer>
  </div>;
}
