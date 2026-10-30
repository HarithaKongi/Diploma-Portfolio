import React,{useEffect,useMemo,useRef,useState} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
import {OrbitControls,Stars,Text,Float,ContactShadows} from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import {projects,locations} from './data/portfolio.js';
import './styles.css';

const BLUE='#168de2', NAVY='#09264b';
function Building({position=[0,0,0],color='#b8dcf4',label='LAB',height=4}){
 return <group position={position}>
  <mesh position={[0,height/2,0]} castShadow receiveShadow><boxGeometry args={[5,height,4]}/><meshStandardMaterial color={color} roughness={.78}/></mesh>
  <mesh position={[0,height+.18,0]}><boxGeometry args={[5.3,.35,4.3]}/><meshStandardMaterial color="#f6d66b"/></mesh>
  {[-1.5,0,1.5].map((x,i)=><mesh key={i} position={[x,2,-2.02]}><boxGeometry args={[.85,1.1,.08]}/><meshStandardMaterial color="#54c7f5" emissive="#1b6b9b" emissiveIntensity={.35}/></mesh>)}
  <mesh position={[0,height+.8,-2.08]}><boxGeometry args={[3.8,.75,.12]}/><meshStandardMaterial color={NAVY}/></mesh>
  <Text position={[0,height+.8,-2.16]} fontSize={.27} color="white" anchorX="center" anchorY="middle">{label}</Text>
 </group>
}
function Tree({position}){return <group position={position}><mesh position={[0,.8,0]} castShadow><cylinderGeometry args={[.18,.25,1.6,8]}/><meshStandardMaterial color="#98613e"/></mesh><mesh position={[0,2,0]} castShadow><icosahedronGeometry args={[1.05,1]}/><meshStandardMaterial color="#49a86e" roughness={1}/></mesh></group>}
function Doraemon({moving=false,driving=false}) {
 const root=useRef(),arm=useRef(),leg=useRef();
 useFrame(({clock})=>{const t=clock.elapsedTime; if(root.current)root.current.position.y=Math.sin(t*5)*.045*(moving?1.8:1);if(arm.current)arm.current.rotation.z=Math.sin(t*(moving?9:2))*.25;if(leg.current)leg.current.rotation.x=moving?Math.sin(t*10)*.45:0});
 return <group ref={root} scale={driving ? 0.72 : 1}>
  <mesh position={[0,1.05,0]} castShadow><capsuleGeometry args={[.58,.78,8,16]}/><meshStandardMaterial color="#168de2"/></mesh>
  <mesh position={[0,2.15,0]} castShadow><sphereGeometry args={[.72,32,24]}/><meshStandardMaterial color="#168de2"/></mesh>
  <mesh position={[0,2.04,.48]} scale={[.88,.72,.35]}><sphereGeometry args={[.66,32,24]}/><meshStandardMaterial color="white"/></mesh>
  <mesh position={[-.23,2.27,.77]}><sphereGeometry args={[.105,20,16]}/><meshStandardMaterial color="white"/></mesh><mesh position={[.23,2.27,.77]}><sphereGeometry args={[.105,20,16]}/><meshStandardMaterial color="white"/></mesh>
  <mesh position={[-.21,2.27,.86]}><sphereGeometry args={[.045,16,12]}/><meshStandardMaterial color="#101c2c"/></mesh><mesh position={[.21,2.27,.86]}><sphereGeometry args={[.045,16,12]}/><meshStandardMaterial color="#101c2c"/></mesh>
  <mesh position={[0,2.04,.88]}><sphereGeometry args={[.12,20,16]}/><meshStandardMaterial color="#ed4545"/></mesh>
  <mesh position={[0,1.82,.8]}><torusGeometry args={[.22,.018,8,32,Math.PI]}/><meshStandardMaterial color="#333"/></mesh>
  <mesh position={[0,1.08,.55]}><torusGeometry args={[.34,.07,10,32]}/><meshStandardMaterial color="#f4c842"/></mesh><mesh position={[0,1.08,.62]}><sphereGeometry args={[.11,16,12]}/><meshStandardMaterial color="#e9a923"/></mesh>
  <group ref={arm} position={[-.55,1.45,0]}><mesh rotation={[0,0,.65]}><capsuleGeometry args={[.16,.48,6,10]}/><meshStandardMaterial color="#168de2"/></mesh></group>
  <group ref={leg} position={[-.27,.43,0]}><mesh><capsuleGeometry args={[.18,.52,6,10]}/><meshStandardMaterial color="#168de2"/></mesh><mesh position={[0,-.3,.12]} scale={[1.2,.45,1.5]}><sphereGeometry args={[.22,16,12]}/><meshStandardMaterial color="white"/></mesh></group>
  <group position={[.3,.45,0]}><mesh><capsuleGeometry args={[.18,.52,6,10]}/><meshStandardMaterial color="#168de2"/></mesh><mesh position={[0,-.3,.12]} scale={[1.2,.45,1.5]}><sphereGeometry args={[.22,16,12]}/><meshStandardMaterial color="white"/></mesh></group>
 </group>
}
function Nobita({moving=false,driving=false}) {
 const root=useRef(),arm=useRef(),legs=useRef();
 useFrame(({clock})=>{const t=clock.elapsedTime;if(root.current)root.current.position.y=Math.sin(t*5+.5)*.04*(moving?2:1);if(arm.current)arm.current.rotation.z=Math.sin(t*(moving?9:2)+1)*.22;if(legs.current)legs.current.rotation.x=moving?Math.sin(t*10+1)*.42:0});
 return <group ref={root} position={[1.55,0,0]} scale={driving ? 0.72 : 1}>
  <mesh position={[0,1.03,0]} castShadow><capsuleGeometry args={[.4,.65,8,14]}/><meshStandardMaterial color="#f2c743"/></mesh>
  <mesh position={[0,1.9,0]} castShadow><sphereGeometry args={[.52,24,20]}/><meshStandardMaterial color="#f1c49d"/></mesh>
  <mesh position={[0,2.3,-.02]} scale={[1,.48,.9]}><sphereGeometry args={[.52,20,16]}/><meshStandardMaterial color="#292b35"/></mesh>
  <mesh position={[-.18,1.96,.43]}><sphereGeometry args={[.055,16,12]}/><meshStandardMaterial color="#171717"/></mesh><mesh position={[.18,1.96,.43]}><sphereGeometry args={[.055,16,12]}/><meshStandardMaterial color="#171717"/></mesh>
  {[-.18,.18].map(x=><mesh key={x} position={[x,1.99,.46]}><torusGeometry args={[.12,.025,8,24]}/><meshStandardMaterial color="#343b49"/></mesh>)}
  <mesh position={[0,1.79,.47]}><sphereGeometry args={[.055,12,8]}/><meshStandardMaterial color="#d87969"/></mesh>
  <group ref={arm} position={[-.4,1.3,0]}><mesh rotation={[0,0,.55]}><capsuleGeometry args={[.12,.4,6,10]}/><meshStandardMaterial color="#f1c49d"/></mesh></group>
  <group ref={legs} position={[-.2,.4,0]}><mesh><capsuleGeometry args={[.13,.5,6,10]}/><meshStandardMaterial color="#315ca5"/></mesh><mesh position={[0,-.28,.12]} scale={[1.2,.4,1.5]}><sphereGeometry args={[.18,16,12]}/><meshStandardMaterial color="white"/></mesh></group>
  <mesh position={[.2,.4,0]}><capsuleGeometry args={[.13,.5,6,10]}/><meshStandardMaterial color="#315ca5"/></mesh><mesh position={[.2,.12,.12]} scale={[1.2,.4,1.5]}><sphereGeometry args={[.18,16,12]}/><meshStandardMaterial color="white"/></mesh>
 </group>
}
function MiniCar({position}){return <group position={position}><mesh position={[0,.55,0]} castShadow><boxGeometry args={[3,.65,1.7]}/><meshStandardMaterial color="#f6d24b" metalness={0.25}/></mesh><mesh position={[0,1.05,-.1]}><boxGeometry args={[1.45,.65,1.45]}/><meshStandardMaterial color="#a9e4f8" transparent opacity={.75}/></mesh>{[-1,1].flatMap(x=>[-.58,.58].map(z=><mesh key={x+':'+z} position={[x,.25,z]} rotation={[Math.PI/2,0,0]}><cylinderGeometry args={[.32,.32,.2,20]}/><meshStandardMaterial color="#26364d"/></mesh>))}</group>}
function World({activeZone,setActiveZone,vehicle,setVehicle,walking,setWalking,onDialogue}) {
 const player=useRef(),keys=useRef({}),moving=useRef(false),[near,setNear]=useState(null);
 useEffect(()=>{const down=e=>{keys.current[e.key.toLowerCase()]=true;if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(e.key.toLowerCase()))e.preventDefault();if(e.key.toLowerCase()==='v')setVehicle(v=>!v);if(e.key.toLowerCase()==='e'&&near){setActiveZone(near.id);onDialogue(near.dialogue)}};const up=e=>keys.current[e.key.toLowerCase()]=false;window.addEventListener('keydown',down);window.addEventListener('keyup',up);return()=>{window.removeEventListener('keydown',down);window.removeEventListener('keyup',up)}},[near,setVehicle,setActiveZone,onDialogue]);
 useFrame((state,delta)=>{if(!player.current)return;const k=keys.current;let dx=(k.d||k.arrowright?1:0)-(k.a||k.arrowleft?1:0),dz=(k.s||k.arrowdown?1:0)-(k.w||k.arrowup?1:0);const movingNow=Math.abs(dx)+Math.abs(dz)>0;moving.current=movingNow;if(movingNow){const speed=vehicle?10:5;player.current.position.x=THREE.MathUtils.clamp(player.current.position.x+dx*speed*delta,-29,29);player.current.position.z=THREE.MathUtils.clamp(player.current.position.z+dz*speed*delta,-29,29);player.current.rotation.y=Math.atan2(dx,dz)}state.camera.position.lerp(new THREE.Vector3(player.current.position.x+13,13,player.current.position.z+18),.045);state.camera.lookAt(player.current.position.x,1,player.current.position.z);let closest=null,dist=999;locations.forEach(l=>{const d=Math.hypot(player.current.position.x-l.position[0],player.current.position.z-l.position[2]);if(d<7&&d<dist){dist=d;closest=l}});setNear(prev=>prev?.id===closest?.id?prev:closest)});
 const trees=useMemo(()=>Array.from({length:28},(_,i)=>{const x=(i%7)*9-27,z=Math.floor(i/7)*15-22;return [x,0,z]}),[]);
 return <><ambientLight intensity={1.2}/><directionalLight position={[15,25,12]} intensity={2.2} castShadow shadow-mapSize={[1024,1024]}/><hemisphereLight args={['#b9e7ff','#47714c',.8]}/><Stars radius={100} depth={35} count={1000} factor={2} fade speed={.4}/>
 <mesh rotation={[-Math.PI/2,0,0]} position={[0,-.08,0]} receiveShadow><planeGeometry args={[100,100]}/><meshStandardMaterial color="#82c88c"/></mesh>
 <gridHelper args={[90,45,'#a9e1bb','#a9e1bb']} position={[0,0,0]}/>
 <mesh position={[0,.02,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[9,80]}/><meshStandardMaterial color="#586b80"/></mesh><mesh position={[0,.025,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[80,9]}/><meshStandardMaterial color="#586b80"/></mesh>
 {Array.from({length:9},(_,i)=><mesh key={i} position={[-36+i*9,.04,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[.25,1.5]}/><meshStandardMaterial color="#f9edb6"/></mesh>)}
 {locations.map((l,i)=><group key={l.id} position={l.position}><Building position={[0,0,0]} color={['#b7dff5','#d9e6ff','#c1e8d1','#ffe1a9','#c6ddf7','#d8d0fa'][i]} height={i===2?5:4} label={['WELCOME','ACADEMY','PROJECT LAB','INNOVATION','TECH PARK','CONTACT'][i]}/><mesh position={[0,.18,3.5]}><cylinderGeometry args={[2.2,2.2,.25,32]}/><meshStandardMaterial color="#f4d46b"/></mesh><Text position={[0,.45,3.5]} fontSize={.38} color={NAVY} anchorX="center">{l.name}</Text></group>)}
 {trees.map((p,i)=><Tree key={i} position={p}/>)} 
 <group ref={player} position={[0,0,4]}><Doraemon moving={moving.current} driving={vehicle}/><Nobita moving={moving.current} driving={vehicle}/></group>
 {vehicle&&<MiniCar position={[0,0,6]}/>}
 {near&&<group position={[near.position[0],.5,near.position[2]+5]}><Float speed={2} floatIntensity={.2}><mesh><sphereGeometry args={[.35,16,16]}/><meshStandardMaterial color="#ffdc5e" emissive="#b17b00" emissiveIntensity={.4}/></mesh></Float></group>}
 <ContactShadows position={[0,-.06,0]} opacity={.25} scale={70} blur={2.5}/>
 <OrbitControls enablePan={false} enableZoom minDistance={8} maxDistance={45} maxPolarAngle={Math.PI/2.05}/>
 </>;
}
const opening=[["Nobita","I also want to become an engineer!"],["Doraemon","Then let's see what Haritha has created!"],["Nobita","She built all these projects during her diploma?"],["Doraemon","Yes! Let's learn how she did it!"],["Nobita","Wow! I can't wait to explore!"],["Doraemon","Come on, Nobita! Our adventure begins now!"]];
function App(){
 const [intro,setIntro]=useState(true),[openingIndex,setOpeningIndex]=useState(-1),[dialogue,setDialogue]=useState(null),[dialogueIndex,setDialogueIndex]=useState(0),[activeZone,setActiveZone]=useState("welcome"),[vehicle,setVehicle]=useState(false),[walking,setWalking]=useState(true),[selectedProject,setSelectedProject]=useState(null),[category,setCategory]=useState("All"),[autoTour,setAutoTour]=useState(false),[showHelp,setShowHelp]=useState(false),[quality,setQuality]=useState(true);
 const bubble=useRef(null);
 useEffect(()=>{if(dialogue&&bubble.current)gsap.fromTo(bubble.current,{y:18,opacity:0},{y:0,opacity:1,duration:.35,ease:'power2.out'})},[dialogueIndex,dialogue]);
 const currentDialogue=dialogue?.[dialogueIndex];
 const filtered=category==="All"?projects:projects.filter(p=>p.category===category);
 function startOpening(){setIntro(false);setOpeningIndex(0)}
 function nextOpening(){if(openingIndex<opening.length-1)setOpeningIndex(i=>i+1);else setOpeningIndex(-1)}
 function startDialogue(lines){setDialogue(lines);setDialogueIndex(0)}
 function nextDialogue(){if(!dialogue)return;if(dialogueIndex<dialogue.length-1)setDialogueIndex(i=>i+1);else setDialogue(null)}
 useEffect(()=>{const onKey=e=>{if(e.key==="Escape"){setSelectedProject(null);setShowHelp(false);setDialogue(null)}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
 useEffect(()=>{if(!autoTour)return;let i=0;const visit=()=>{const l=locations[i%locations.length];setActiveZone(l.id);startDialogue(l.dialogue);i++;if(i>=locations.length){setAutoTour(false);return}timer=setTimeout(visit,9000)};let timer=setTimeout(visit,1000);return()=>clearTimeout(timer)},[autoTour]);
 const introDialogue=openingIndex>=0?opening[openingIndex]:currentDialogue;
 return <div className="app-shell">
  <Canvas shadows dpr={quality?[1,1.6]:[1,1.15]} camera={{position:[13,13,22],fov:48}}><World activeZone={activeZone} setActiveZone={setActiveZone} vehicle={vehicle} setVehicle={setVehicle} walking={walking} onDialogue={startDialogue}/></Canvas>
  <header className="hud-top"><a className="brand" href="#">HK<span>✦</span></a><div><small>AN INTERACTIVE PORTFOLIO WORLD</small><strong>HARITHA'S ENGINEERING ADVENTURE</strong></div><button className="icon-btn" onClick={()=>setShowHelp(true)}>Controls ?</button></header>
  <div className="world-label"><span className="pulse-dot"></span> ENGINEERING CITY <span>•</span> {locations.find(l=>l.id===activeZone)?.name||"Explore"}</div>
  <aside className="location-nav"><small>EXPLORE LOCATIONS</small>{locations.map(l=><button key={l.id} className={activeZone===l.id?'selected':''} onClick={()=>{setActiveZone(l.id);startDialogue(l.dialogue)}}><span>{l.name}</span><small>{l.short}</small></button>)}</aside>
  <div className="bottom-hud"><div className="movement-hint"><b>WASD / ↑↓←→</b><span>Move</span><b>E</b><span>Interact</span><b>V</b><span>Vehicle</span></div><div className="actions"><button onClick={()=>setVehicle(v=>!v)}>{vehicle?'🚶 Walk':'🚙 Drive'}</button><button onClick={()=>setAutoTour(v=>!v)}>{autoTour?'Stop tour':'✦ Auto tour'}</button><button onClick={()=>setShowHelp(true)}>Help</button></div></div>
  {intro&&<div className="intro-screen"><div className="intro-card"><div className="eyebrow">A MINIATURE WORLD OF IDEAS</div><h1>DORAEMON & NOBITA<br/><em>HARITHA'S ENGINEERING ADVENTURE</em></h1><p>Exploring ideas. Building solutions. Creating possibilities.</p><div className="intro-actions"><button className="primary" onClick={startOpening}>▶ Start the adventure</button><button className="ghost" onClick={()=>setIntro(false)}>Skip intro</button></div><small>Use WASD or arrow keys to explore the city</small></div></div>}
  {openingIndex>=0&&<div className="dialogue-wrap" ref={bubble}><div className="speaker">{introDialogue[0]}</div><p>{introDialogue[1]}</p><button onClick={nextOpening}>{openingIndex===opening.length-1?'Enter the city':'Next dialogue →'}</button><button className="skip-link" onClick={()=>setOpeningIndex(-1)}>Skip story</button></div>}
  {dialogue&&openingIndex<0&&<div className="dialogue-wrap context" ref={bubble}><div className="speaker">{currentDialogue?.[0]}</div><p>{currentDialogue?.[1]}</p><button onClick={nextDialogue}>{dialogueIndex===dialogue.length-1?'Continue exploring':'Next →'}</button></div>}
  {activeZone==='welcome'&&<div className="info-chip"><b>WELCOME PLAZA</b><span>Meet Haritha Kongi · Computer Engineering & software development</span></div>}
  {activeZone==='academy'&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone('welcome')}>×</button><small>LOCATION 02 · EDUCATION</small><h2>Education Academy</h2><h3>Diploma in Computer Engineering</h3><p>Vijaya Institute of Technology for Women (VITW), Vijayawada.</p><div className="panel-note">A foundation in computer engineering, programming, and practical project development.</div><h3>Learning journey</h3><p>Haritha continued her studies in Computer Science and Engineering at RGMCET, Nandyal.</p></div>}
  {activeZone==='lab'&&<div className="side-panel project-panel"><button className="close" onClick={()=>setActiveZone('welcome')}>×</button><small>LOCATION 03 · PROJECT GALLERY</small><h2>Mini Project Laboratory</h2><p>Choose a workstation to inspect a project from Haritha's portfolio.</p><div className="project-list">{projects.filter(p=>p.category==='Diploma Mini Projects').map((p,i)=><button key={p.id} onClick={()=>setSelectedProject(p)}><span className="project-number">{String(i+1).padStart(2,'0')}</span><span><b>{p.name}</b><small>{p.summary}</small></span><i>↗</i></button>)}</div></div>}
  {activeZone==='innovation'&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone('welcome')}>×</button><small>LOCATION 04 · EXPERIMENTS</small><h2>Innovation Center</h2><p>Experiments and interactive builds from the learning journey.</p><div className="project-list">{projects.filter(p=>p.category==='Technical Experiments').map(p=><button key={p.id} onClick={()=>setSelectedProject(p)}><span><b>{p.name}</b><small>{p.summary}</small></span><i>↗</i></button>)}</div></div>}
  {activeZone==='skills'&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone('welcome')}>×</button><small>LOCATION 05 · TECHNOLOGY</small><h2>Technology Park</h2><p>Tools and technologies reflected in the published project collection.</p><div className="skill-cloud">{['HTML','CSS','JavaScript','Node.js basics','React','TypeScript','Java','SQL','Supabase','Firebase','Tailwind CSS'].map(x=><span key={x}>{x}</span>)}</div><p className="panel-note">Skills are presented from Haritha's shared portfolio information; project-specific stacks are listed separately in each card.</p></div>}
  {activeZone==='contact'&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone('welcome')}>×</button><small>LOCATION 06 · CONNECT</small><h2>Contact Station</h2><p>Continue the conversation or explore more code.</p><div className="contact-links"><a href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Haritha_Kongi/" target="_blank" rel="noreferrer">LeetCode ↗</a><a href="https://www.codechef.com/users/haritha_kongi" target="_blank" rel="noreferrer">CodeChef ↗</a><a href="mailto:">Email Haritha ↗</a></div></div>}
  {selectedProject&&<div className="modal-backdrop" onClick={()=>setSelectedProject(null)}><article className="project-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelectedProject(null)}>×</button><small>{selectedProject.category}</small><h2>{selectedProject.name}</h2><p>{selectedProject.summary}</p><h3>Technologies</h3><div className="skill-cloud">{selectedProject.tech.map(t=><span key={t}>{t}</span>)}</div><div className="panel-note">Project details shown here are limited to information currently available in the portfolio source. A detailed problem statement and personal contribution can be added when verified project documentation is supplied.</div><div className="modal-actions">{selectedProject.demo&&<a href={selectedProject.demo} target="_blank" rel="noreferrer">Open demo ↗</a>}<a href={selectedProject.source} target="_blank" rel="noreferrer">View source code ↗</a></div></article></div>}
  {showHelp&&<div className="modal-backdrop" onClick={()=>setShowHelp(false)}><article className="help-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setShowHelp(false)}>×</button><small>HOW TO EXPLORE</small><h2>City controls</h2><div className="control-grid"><span>W / ↑</span><p>Move forward</p><span>S / ↓</span><p>Move backward</p><span>A / ←</span><p>Move left</p><span>D / →</span><p>Move right</p><span>E</span><p>Interact with nearby location</p><span>V</span><p>Toggle miniature vehicle mode</p><span>Mouse drag</span><p>Orbit the camera</p><span>ESC</span><p>Close open panels</p></div><button className="primary" onClick={()=>setShowHelp(false)}>Got it</button></article></div>}
  <footer className="footer-hud">HARITHA KONGI <span>•</span> DIPLOMA COMPUTER ENGINEERING <span>•</span> <a href="https://github.com/HarithaKongi/Diploma-Portfolio">SOURCE</a></footer>
 </div>
}
export default App;
