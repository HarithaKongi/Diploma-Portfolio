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
  {[-1.5,0,1.5].map((x,i)=><mesh key={i} position={[x,2,2.02]}><boxGeometry args={[.85,1.1,.08]}/><meshStandardMaterial color="#54c7f5" emissive="#1b6b9b" emissiveIntensity={.35}/></mesh>)}
  <mesh position={[0,height+.8,2.08]}><boxGeometry args={[3.8,.75,.12]}/><meshStandardMaterial color={NAVY}/></mesh>
  <Text position={[0,height+.8,2.16]} fontSize={.27} color="white" anchorX="center" anchorY="middle">{label}</Text>
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
function MiniCar({moving}){const wheels=useRef([]);useFrame((_,delta)=>{if(moving)wheels.current.forEach(w=>{if(w)w.rotation.x+=delta*5})});return <group position={[0,.05,0]}><mesh position={[0,.48,0]} castShadow receiveShadow><boxGeometry args={[3.25,.62,1.95]}/><meshStandardMaterial color="#f6d24b" metalness={.32} roughness={.28}/></mesh><mesh position={[0,.91,-.05]}><boxGeometry args={[1.72,.55,1.65]}/><meshStandardMaterial color="#a9e4f8" transparent opacity={.42} metalness={.18} roughness={.12}/></mesh>{[-1,1].flatMap(x=>[-.68,.68].map((z,i)=><mesh key={x+':'+z} ref={el=>{if(el)wheels.current[(x===-1?0:2)+i]=el}} position={[x,.24,z]} rotation={[Math.PI/2,0,0]}><cylinderGeometry args={[.34,.34,.22,24]}/><meshStandardMaterial color="#26364d" roughness={.85}/></mesh>))}</group>}
function StreetLight({position}){return <group position={position}><mesh position={[0,2.1,0]}><cylinderGeometry args={[.07,.1,4.2,10]}/><meshStandardMaterial color="#52677d" metalness={.65}/></mesh><mesh position={[.45,4.05,0]} rotation={[0,0,-.2]}><boxGeometry args={[1.05,.12,.16]}/><meshStandardMaterial color="#52677d" metalness={.6}/></mesh><mesh position={[.9,3.92,0]}><sphereGeometry args={[.2,16,12]}/><meshStandardMaterial color="#fff2b8" emissive="#ffdc80" emissiveIntensity={1.6}/></mesh><pointLight position={[.9,3.8,0]} color="#ffe5a6" intensity={.45} distance={7}/></group>}
function Bench({position}){return <group position={position}><mesh position={[0,.55,0]}><boxGeometry args={[1.8,.16,.55]}/><meshStandardMaterial color="#a66d42"/></mesh>{[-.65,.65].map(x=><mesh key={x} position={[x,.27,0]}><boxGeometry args={[.12,.55,.48]}/><meshStandardMaterial color="#344d65"/></mesh>)}<mesh position={[0,.92,-.22]}><boxGeometry args={[1.8,.65,.12]}/><meshStandardMaterial color="#a66d42"/></mesh></group>}
function FlowerPatch({position}){return <group position={position}>{Array.from({length:9},(_,i)=><group key={i} position={[(i%3-.9)*.45,.12,(Math.floor(i/3)-.9)*.45]}><mesh><sphereGeometry args={[.13,10,8]}/><meshStandardMaterial color={['#f78ba7','#f5d45c','#b7a0f5'][i%3]}/></mesh><mesh position={[0,-.12,0]}><cylinderGeometry args={[.025,.025,.25,6]}/><meshStandardMaterial color="#3e9a5b"/></mesh></group>)}</group>}
function MovingCloud({position,speed=0.5}){const ref=useRef();useFrame((_,delta)=>{if(ref.current){ref.current.position.x+=delta*speed;if(ref.current.position.x>52)ref.current.position.x=-52}});return <group ref={ref} position={position}><mesh><sphereGeometry args={[3.2,16,12]}/><meshStandardMaterial color="white" roughness={1}/></mesh><mesh position={[2.8,-.3,.2]}><sphereGeometry args={[2.5,16,12]}/><meshStandardMaterial color="#f8fcff" roughness={1}/></mesh><mesh position={[-2.6,-.4,-.1]}><sphereGeometry args={[2.2,16,12]}/><meshStandardMaterial color="#f8fcff" roughness={1}/></mesh></group>}
function IntroVehicle({stage}){const ref=useRef(),start=useRef(null);useFrame(({clock})=>{if(!ref.current)return;if(stage===3){if(start.current===null)start.current=clock.elapsedTime;const p=THREE.MathUtils.clamp((clock.elapsedTime-start.current)/4.8,0,1);ref.current.position.x=-25+12*p;ref.current.rotation.y=.12}else start.current=null});return <group ref={ref} position={[-25,0,5]}><MiniCar moving={stage===3}/></group>}
function World({activeZone,setActiveZone,vehicle,setVehicle,walking,setWalking,onDialogue,tourTarget,introPlaying,introStage}) {
 const player=useRef(),controls=useRef(),keys=useRef({}),moving=useRef(false),[near,setNear]=useState(null),[isMoving,setIsMoving]=useState(false);
 useEffect(()=>{if(!player.current||!tourTarget)return;const tween=gsap.to(player.current.position,{x:tourTarget[0],z:tourTarget[2]+5,duration:1.45,ease:"power3.inOut"});return()=>tween.kill()},[tourTarget]);
 useEffect(()=>{const down=e=>{keys.current[e.key.toLowerCase()]=true;if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(e.key.toLowerCase()))e.preventDefault();if(e.key.toLowerCase()==='v')setVehicle(v=>!v);if(e.key.toLowerCase()==='e'&&near){setActiveZone(near.id);onDialogue(near.dialogue)}};const up=e=>keys.current[e.key.toLowerCase()]=false;window.addEventListener('keydown',down);window.addEventListener('keyup',up);return()=>{window.removeEventListener('keydown',down);window.removeEventListener('keyup',up)}},[near,setVehicle,setActiveZone,onDialogue]);
 useFrame((state,delta)=>{if(!player.current)return;const k=keys.current;
 if(introPlaying){
  const shots=[
   {p:[0,34,48],t:[0,0,0]},
   {p:[-34,15,30],t:[0,2,0]},
   {p:[24,19,28],t:[0,2,0]},
   {p:[-15,8,13],t:[0,1,0]},
   {p:[9,7,14],t:[0,1,4]},
   {p:[5,6,11],t:[0,1.5,4]}
  ];
  const shot=shots[Math.min(introStage,shots.length-1)];
  state.camera.position.lerp(new THREE.Vector3(...shot.p),1-Math.exp(-1.25*delta));
  const target=new THREE.Vector3(...shot.t);
  if(controls.current){controls.current.target.lerp(target,1-Math.exp(-1.5*delta));controls.current.update()}else state.camera.lookAt(...shot.t);
  return;
 }
let dx=(k.d||k.arrowright?1:0)-(k.a||k.arrowleft?1:0),dz=(k.s||k.arrowdown?1:0)-(k.w||k.arrowup?1:0);const movingNow=Math.abs(dx)+Math.abs(dz)>0;if(moving.current!==movingNow){moving.current=movingNow;setIsMoving(movingNow)}const length=Math.hypot(dx,dz)||1;dx/=length;dz/=length;if(movingNow){const boost=k.shift?1.55:1,brake=k[' '] ? .42 : 1,speed=(vehicle?9.5:4.8)*boost*brake;const nx=THREE.MathUtils.clamp(player.current.position.x+dx*speed*delta,-34,34),nz=THREE.MathUtils.clamp(player.current.position.z+dz*speed*delta,-34,34);const blocked=locations.some(l=>Math.hypot(nx-l.position[0],nz-l.position[2])<3.65);if(!blocked){player.current.position.x=nx;player.current.position.z=nz}{const target=Math.atan2(dx,dz),diff=Math.atan2(Math.sin(target-player.current.rotation.y),Math.cos(target-player.current.rotation.y));player.current.rotation.y+=diff*(1-Math.exp(-(vehicle?8:12)*delta))}}const offset=new THREE.Vector3(11,10,15).applyAxisAngle(new THREE.Vector3(0,1,0),player.current.rotation.y);const followAlpha=1-Math.exp(-4.2*delta);state.camera.position.lerp(player.current.position.clone().add(offset),followAlpha);if(controls.current){controls.current.target.lerp(new THREE.Vector3(player.current.position.x,1.1,player.current.position.z),followAlpha);controls.current.update()}else state.camera.lookAt(player.current.position.x,1.1,player.current.position.z);let closest=null,dist=999;locations.forEach(l=>{const d=Math.hypot(player.current.position.x-l.position[0],player.current.position.z-l.position[2]);if(d<7&&d<dist){dist=d;closest=l}});setNear(prev=>prev?.id===closest?.id?prev:closest)});
 const trees=useMemo(()=>Array.from({length:28},(_,i)=>{const x=(i%7)*9-27,z=Math.floor(i/7)*15-22;return [x,0,z]}),[]);
 return <><fog attach="fog" args={['#bde7f8',42,105]}/><ambientLight intensity={1.2}/><directionalLight position={[15,25,12]} intensity={2.2} castShadow shadow-mapSize={[1024,1024]}/><hemisphereLight args={['#b9e7ff','#47714c',.8]}/><Stars radius={100} depth={35} count={1000} factor={2} fade speed={.4}/>
 {Array.from({length:8},(_,i)=><MovingCloud key={'cloud'+i} position={[-42+(i%4)*27,15+(i%3)*3,-30+Math.floor(i/4)*48]} speed={.25+(i%3)*.12}/>)}
 <mesh rotation={[-Math.PI/2,0,0]} position={[0,-.08,0]} receiveShadow><planeGeometry args={[100,100]}/><meshStandardMaterial color="#82c88c"/></mesh>
 <gridHelper args={[90,45,'#a9e1bb','#a9e1bb']} position={[0,0,0]}/>
 <mesh position={[0,.02,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[9,80]}/><meshStandardMaterial color="#586b80"/></mesh><mesh position={[0,.025,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[80,9]}/><meshStandardMaterial color="#586b80"/></mesh>
 {Array.from({length:9},(_,i)=><mesh key={i} position={[-36+i*9,.04,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[.25,1.5]}/><meshStandardMaterial color="#f9edb6"/></mesh>)}
 {Array.from({length:15},(_,i)=><mesh key={'roadx'+i} position={[-35+i*5,.035,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[2.1,.14]}/><meshStandardMaterial color="#f5e8b7"/></mesh>)}
 {Array.from({length:15},(_,i)=><mesh key={'roadz'+i} position={[0,.035,-35+i*5]} rotation={[-Math.PI/2,0,Math.PI/2]}><planeGeometry args={[2.1,.14]}/><meshStandardMaterial color="#f5e8b7"/></mesh>)}
 {[-5.2,5.2].map(x=><mesh key={'curbx'+x} position={[x,.04,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[.32,80]}/><meshStandardMaterial color="#d7e2e8"/></mesh>)}
 {[-5.2,5.2].map(z=><mesh key={'curbz'+z} position={[0,.04,z]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[80,.32]}/><meshStandardMaterial color="#d7e2e8"/></mesh>)}
 {locations.map((l,i)=><group key={l.id} position={l.position}><Building position={[0,0,0]} color={['#b7dff5','#d9e6ff','#c1e8d1','#ffe1a9','#c6ddf7','#d8d0fa'][i]} height={i===2?5:4} label={['WELCOME','ACADEMY','PROJECT LAB','INNOVATION','TECH PARK','CONTACT'][i]}/><mesh position={[0,.18,3.5]}><cylinderGeometry args={[2.2,2.2,.25,32]}/><meshStandardMaterial color="#f4d46b"/></mesh><Text position={[0,.45,3.5]} fontSize={.38} color={NAVY} anchorX="center">{l.name}</Text></group>)}
 {trees.map((p,i)=><Tree key={i} position={p}/>)}
 {Array.from({length:12},(_,i)=><StreetLight key={'lamp'+i} position={[-30+(i%6)*12,0,-24+Math.floor(i/6)*48]}/>)}
 {Array.from({length:8},(_,i)=><Bench key={'bench'+i} position={[-25+(i%4)*16,0,-18+Math.floor(i/4)*36]}/>)}
 {Array.from({length:10},(_,i)=><FlowerPatch key={'flower'+i} position={[-24+(i%5)*12,.05,-22+Math.floor(i/5)*44]}/>)}
 <mesh position={[0,.08,-31]} rotation={[-Math.PI/2,0,0]}><circleGeometry args={[3.4,48]}/><meshStandardMaterial color="#54a9c9" roughness={.2} metalness={.1}/></mesh><mesh position={[0,.16,-31]}><torusGeometry args={[3.3,.12,12,48]}/><meshStandardMaterial color="#f5d36b" metalness={.45}/></mesh>
 {introPlaying&&<IntroVehicle stage={introStage}/>}
 <group ref={player} position={[0,0,4]} visible={!introPlaying||introStage>=4}><group position={vehicle?[-.78,.52,.05]:[0,0,0]}><Doraemon moving={isMoving&&!vehicle} driving={vehicle}/></group><group position={vehicle?[-.78,.52,.05]:[0,0,0]}><Nobita moving={moving.current&&!vehicle} driving={vehicle}/></group>{vehicle&&<MiniCar moving={isMoving}/>}</group>
 {near&&<group position={[near.position[0],.5,near.position[2]+5]}><Float speed={2} floatIntensity={.2}><mesh><sphereGeometry args={[.35,16,16]}/><meshStandardMaterial color="#ffdc5e" emissive="#b17b00" emissiveIntensity={.4}/></mesh></Float></group>}
 <ContactShadows position={[0,-.06,0]} opacity={.25} scale={70} blur={2.5}/>
 <OrbitControls ref={controls} enablePan={false} enableZoom minDistance={8} maxDistance={45} maxPolarAngle={Math.PI/2.05}/>
 </>;
}
const opening=[
 ["Nobita","I also want to become an engineer!"],
 ["Doraemon","Then let's see what Haritha has created!"],
 ["Nobita","She built all these projects during her diploma?"],
 ["Doraemon","Yes! Let's learn how she did it!"],
 ["Nobita","Wow! I can't wait to explore!"],
 ["Doraemon","Come on, Nobita! Our adventure begins now!"]
];
const navItems=["Home","About","Education","Projects","Skills","Contact"];
function App(){
 const [intro,setIntro]=useState(true),[introPlaying,setIntroPlaying]=useState(false),[introStep,setIntroStep]=useState(0),[introStage,setIntroStage]=useState(0),[introTitle,setIntroTitle]=useState(false);
 const [dialogue,setDialogue]=useState(null),[dialogueIndex,setDialogueIndex]=useState(0),[activeZone,setActiveZone]=useState("welcome"),[tourTarget,setTourTarget]=useState(null),[vehicle,setVehicle]=useState(false),[walking,setWalking]=useState(true),[selectedProject,setSelectedProject]=useState(null),[category,setCategory]=useState("All"),[autoTour,setAutoTour]=useState(false),[showHelp,setShowHelp]=useState(false),[quality,setQuality]=useState(true);
 const [activeView,setActiveView]=useState("Home"),[showAllProjects,setShowAllProjects]=useState(false),[audioPanel,setAudioPanel]=useState(false),[muted,setMuted]=useState(false),[subtitles,setSubtitles]=useState(true),[masterVol,setMasterVol]=useState(.7),[musicVol,setMusicVol]=useState(.28),[voiceVol,setVoiceVol]=useState(.9),[sfxVol,setSfxVol]=useState(.55);
 const [subtitle,setSubtitle]=useState(null);
 const bubble=useRef(null),audio=useRef({ctx:null,master:null,music:null,sfx:null,interval:null});
 const currentDialogue=dialogue?.[dialogueIndex];
 const filtered=category==="All"?projects:projects.filter(p=>p.category===category);
 const allCategories=["All",...new Set(projects.map(p=>p.category))];
 const stopSpeech=()=>{if("speechSynthesis" in window)window.speechSynthesis.cancel()};
 const speak=(speaker,line)=>{
  setSubtitle({speaker,line});
  if(!("speechSynthesis" in window)||muted)return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(line);
  const voices=window.speechSynthesis.getVoices();
  const preferred=voices.find(v=>speaker==="Doraemon"?/en.*(female|samantha|zira|aria)/i.test(v.name+" "+v.lang):/en.*(male|david|guy|mark)/i.test(v.name+" "+v.lang));
  if(preferred)utterance.voice=preferred;
  utterance.rate=speaker==="Doraemon" ? 0.94 : 1.06;
  utterance.pitch=speaker==="Doraemon" ? 0.88 : 1.18;
  utterance.volume=voiceVol;
  window.speechSynthesis.speak(utterance);
 };
 const startAudio=()=>{
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return;
  let a=audio.current;
  if(!a.ctx){
   const ctx=new AudioCtx(),master=ctx.createGain(),music=ctx.createGain(),sfx=ctx.createGain();
   music.connect(master);sfx.connect(master);master.connect(ctx.destination);
   a={...a,ctx,master,music,sfx};audio.current=a;
   const notes=[261.63,329.63,392,329.63,293.66,349.23,440,392];
   let index=0;
   a.interval=window.setInterval(()=>{
    if(!a.ctx||a.ctx.state!=="running")return;
    const osc=a.ctx.createOscillator(),gain=a.ctx.createGain();
    osc.type="sine";osc.frequency.value=notes[index++%notes.length];
    gain.gain.setValueAtTime(.0001,a.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.11,a.ctx.currentTime+.08);
    gain.gain.exponentialRampToValueAtTime(.0001,a.ctx.currentTime+.58);
    osc.connect(gain);gain.connect(a.music);osc.start();osc.stop(a.ctx.currentTime+.6);
   },620);
  }
  if(a.ctx.state==="suspended")a.ctx.resume();
  a.master.gain.setTargetAtTime(muted?0:masterVol,a.ctx.currentTime,.08);
  a.music.gain.setTargetAtTime(musicVol,a.ctx.currentTime,.08);
  a.sfx.gain.setTargetAtTime(sfxVol,a.ctx.currentTime,.08);
 };
 const playSfx=(frequency=660)=>{
  const a=audio.current;if(!a.ctx||muted)return;
  const osc=a.ctx.createOscillator(),gain=a.ctx.createGain();
  osc.type="triangle";osc.frequency.setValueAtTime(frequency,a.ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(frequency*.55,a.ctx.currentTime+.16);
  gain.gain.setValueAtTime(.0001,a.ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.16,a.ctx.currentTime+.015);gain.gain.exponentialRampToValueAtTime(.0001,a.ctx.currentTime+.2);
  osc.connect(gain);gain.connect(a.sfx);osc.start();osc.stop(a.ctx.currentTime+.21);
 };
 useEffect(()=>{const a=audio.current;if(a.ctx){a.master.gain.setTargetAtTime(muted?0:masterVol,a.ctx.currentTime,.06);a.music.gain.setTargetAtTime(musicVol,a.ctx.currentTime,.06);a.sfx.gain.setTargetAtTime(sfxVol,a.ctx.currentTime,.06)}},[muted,masterVol,musicVol,sfxVol]);
 useEffect(()=>{if(!introPlaying)return;
  if(introStep<opening.length){
   setIntroStage(Math.min(5,introStep));
   speak(opening[introStep][0],opening[introStep][1]);
   const timer=window.setTimeout(()=>setIntroStep(i=>i+1),5200);
   return ()=>window.clearTimeout(timer);
  }
  setIntroTitle(true);setIntroStage(5);setSubtitle(null);
  const timer=window.setTimeout(()=>{setIntroPlaying(false);setIntro(false);setIntroTitle(false);stopSpeech()},5200);
  return ()=>window.clearTimeout(timer);
 },[introPlaying,introStep]);
 useEffect(()=>{if(muted)stopSpeech()},[muted]);
 useEffect(()=>{if(dialogue&&bubble.current)gsap.fromTo(bubble.current,{y:18,opacity:0},{y:0,opacity:1,duration:.35,ease:"power2.out"})},[dialogueIndex,dialogue]);
 useEffect(()=>{const onKey=e=>{if(e.key==="Escape"){setSelectedProject(null);setShowHelp(false);setDialogue(null);setAudioPanel(false);setShowAllProjects(false)}if(e.key.toLowerCase()==="m"){setMuted(v=>!v)}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 useEffect(()=>()=>{const a=audio.current;if(a.interval)clearInterval(a.interval);if(a.ctx)a.ctx.close();stopSpeech()},[]);
 useEffect(()=>{if(!autoTour)return;let i=0;const visit=()=>{const l=locations[i%locations.length];setActiveZone(l.id);setTourTarget(l.position);startDialogue(l.dialogue);i++;if(i>=locations.length){setAutoTour(false);return}timer=setTimeout(visit,9000)};let timer=setTimeout(visit,1000);return()=>clearTimeout(timer)},[autoTour]);
 function startDialogue(lines){setDialogue(lines);setDialogueIndex(0);if(lines?.[0])speak(lines[0][0],lines[0][1])}
 function nextDialogue(){if(!dialogue)return;if(dialogueIndex<dialogue.length-1){const n=dialogueIndex+1;setDialogueIndex(n);speak(dialogue[n][0],dialogue[n][1])}else{setDialogue(null);setSubtitle(null);stopSpeech()}}
 function beginIntro(){startAudio();playSfx(520);setIntro(true);setIntroPlaying(true);setIntroStep(0);setIntroTitle(false);setSubtitle(null)}
 function skipIntro(){setIntroPlaying(false);setIntro(false);setIntroTitle(false);setSubtitle(null);stopSpeech();playSfx(740)}
 function visitLocation(l){setActiveZone(l.id);setTourTarget(l.position);startDialogue(l.dialogue);playSfx(740)}
 function chooseView(view){setActiveView(view);setShowAllProjects(view==="Projects");setSelectedProject(null);playSfx(600);if(view==="Home"||view==="About"){setActiveZone("welcome");setTourTarget([0,0,4])}else if(view==="Education")visitLocation(locations[1]);else if(view==="Projects")visitLocation(locations[2]);else if(view==="Skills")visitLocation(locations[4]);else if(view==="Contact")visitLocation(locations[5])}
 const introLine=introStep<opening.length?opening[introStep]:null;
 return <div className="app-shell">
  <Canvas shadows dpr={quality?[1,1.6]:[1,1.15]} camera={{position:[0,34,48],fov:48}} fallback={<div className="webgl-fallback"><h2>3D mode is unavailable</h2><p>Your browser or device could not initialize WebGL. Open the preserved traditional portfolio instead.</p><a href="/legacy/index.html">Open traditional portfolio ↗</a></div>}>
   <World activeZone={activeZone} setActiveZone={setActiveZone} vehicle={vehicle} setVehicle={setVehicle} walking={walking} onDialogue={startDialogue} tourTarget={tourTarget} introPlaying={introPlaying} introStage={introStage}/>
  </Canvas>
  <header className="hud-top cinematic-hud"><a className="brand" href="#" onClick={e=>{e.preventDefault();chooseView("Home")}}>HK<span>✦</span></a><div><small>AN INTERACTIVE PORTFOLIO WORLD</small><strong>HARITHA'S ENGINEERING ADVENTURE</strong></div><nav className="top-nav">{navItems.map(item=><button key={item} className={activeView===item?"active":""} onClick={()=>chooseView(item)}>{item}</button>)}</nav><a className="icon-btn traditional-link" href="/legacy/index.html">Traditional Mode ↗</a><button className="icon-btn" onClick={beginIntro}>Replay intro ↻</button>{introPlaying&&<button className="icon-btn" onClick={skipIntro}>Skip intro</button>}<button className="icon-btn" onClick={()=>setAudioPanel(v=>!v)}>Audio ♪</button><button className="icon-btn" onClick={()=>setShowHelp(true)}>?</button></header>
  <div className="world-label"><span className="pulse-dot"></span> ENGINEERING CITY <span>•</span> {locations.find(l=>l.id===activeZone)?.name||"Explore"}</div>
  <aside className="location-nav"><small>EXPLORE LOCATIONS</small>{locations.map(l=><button key={l.id} className={activeZone===l.id?"selected":""} onClick={()=>visitLocation(l)}><span>{l.name}</span><small>{l.short}</small></button>)}</aside>
  <div className="mini-map"><span> CITY MAP </span>{locations.map((l,i)=><button key={l.id} title={l.name} className={activeZone===l.id?"active":""} onClick={()=>visitLocation(l)}>{i+1}</button>)}</div>
  <div className="bottom-hud"><div className="movement-hint"><b>WASD / ↑↓←→</b><span>Move</span><b>SHIFT</b><span>Boost</span><b>SPACE</b><span>Brake</span><b>E</b><span>Interact</span><b>V</b><span>Vehicle</span></div><div className="actions"><button onClick={()=>setVehicle(v=>!v)}>{vehicle?"🚶 Walk":"🚙 Drive"}</button><button onClick={()=>setAutoTour(v=>!v)}>{autoTour?"Stop tour":"✦ Auto tour"}</button><button onClick={()=>setQuality(q=>!q)}>{quality?"High quality":"Low graphics"}</button><button onClick={()=>setShowAllProjects(true)}>View all projects</button><button onClick={()=>setShowHelp(true)}>Help</button></div></div>
  <div className="mobile-pad" aria-label="Touch movement controls"><div></div><button onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);window.dispatchEvent(new KeyboardEvent("keydown",{key:"w"}))}} onPointerUp={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"w"}))} onPointerCancel={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"w"}))}>▲</button><div></div><button onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);window.dispatchEvent(new KeyboardEvent("keydown",{key:"a"}))}} onPointerUp={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"a"}))} onPointerCancel={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"a"}))}>◀</button><button onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);window.dispatchEvent(new KeyboardEvent("keydown",{key:"s"}))}} onPointerUp={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"s"}))} onPointerCancel={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"s"}))}>▼</button><button onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);window.dispatchEvent(new KeyboardEvent("keydown",{key:"d"}))}} onPointerUp={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"d"}))} onPointerCancel={()=>window.dispatchEvent(new KeyboardEvent("keyup",{key:"d"}))}>▶</button></div>
  {intro&&<div className="episode-layer">
   {introPlaying&&<div className="episode-vignette"><span>AN ORIGINAL ENGINEERING ADVENTURE</span><div className="episode-progress"><i style={{width:((introStep+1)/7*100)+"%"}}/></div><button onClick={skipIntro}>SKIP INTRO ↗</button></div>}
   {!introPlaying&&!introTitle&&<div className="episode-card"><span className="episode-kicker">A CINEMATIC MINIATURE-WORLD ADVENTURE</span><h1>DORAEMON & NOBITA</h1><h2>HARITHA'S ENGINEERING ADVENTURE</h2><p>Exploring ideas. Building solutions. Creating possibilities.</p><div className="episode-buttons"><button className="episode-primary" onClick={beginIntro}>▶ PLAY EPISODE</button><button onClick={skipIntro}>SKIP INTRO</button></div><small>Original synthesized soundtrack · Browser-generated dialogue · Subtitles available</small></div>}
   {introTitle&&<div className="episode-title"><span>AN ADVENTURE BEGINS</span><h1>DORAEMON & NOBITA:<br/>HARITHA'S ENGINEERING ADVENTURE</h1><p>Exploring ideas. Building solutions. Creating possibilities.</p><button className="episode-primary" onClick={skipIntro}>ENTER ADVENTURE →</button><button onClick={beginIntro}>↻ REPLAY INTRO</button></div>}
   {introPlaying&&introLine&&subtitles&&<div className="episode-subtitle"><b>{introLine[0]}</b><p>“{introLine[1]}”</p></div>}
   <button className="episode-mute" onClick={()=>setMuted(v=>!v)}>{muted?"UNMUTE":"MUTE"} ♪</button>
  </div>}
  {subtitle&&subtitles&&!introPlaying&&!intro&&<div className="live-subtitle"><b>{subtitle.speaker}</b><span>{subtitle.line}</span></div>}
  {dialogue&&<div className="dialogue-wrap context" ref={bubble}><div className="speaker">{currentDialogue?.[0]}</div><p>{currentDialogue?.[1]}</p><button onClick={nextDialogue}>{dialogueIndex===dialogue.length-1?"Continue exploring":"Next →"}</button><button className="skip-link" onClick={()=>{setDialogue(null);setSubtitle(null);stopSpeech()}}>Dismiss</button></div>}
  {activeView==="About"&&<div className="side-panel about-panel"><button className="close" onClick={()=>setActiveView("Home")}>×</button><small>ABOUT THE ENGINEER</small><h2>Learning by building.</h2><p>I'm Haritha Kongi — a Computer Science student who enjoys turning ideas into useful, interactive web experiences.</p><p>These projects represent my diploma learning journey and practical exploration of web technologies.</p><div className="skill-cloud">{["HTML5","CSS3","JavaScript","Responsive Design","Node.js basics"].map(x=><span key={x}>{x}</span>)}</div><a className="about-link" href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>}
  {activeZone==="welcome"&&<div className="info-chip"><b>WELCOME PLAZA</b><span>Meet Haritha Kongi · Diploma Computer Engineering project collection</span></div>}
  {activeZone==="academy"&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone("welcome")}>×</button><small>LOCATION 02 · EDUCATION</small><h2>Education Academy</h2><h3>Diploma in Computer Engineering</h3><p>Vijaya Institute of Technology for Women (VITW), Vijayawada.</p><div className="panel-note">A foundation in computer engineering, programming, and practical project development.</div><h3>Learning journey</h3><p>Haritha continued her studies in Computer Science and Engineering at RGMCET, Nandyal.</p></div>}
  {activeZone==="lab"&&<div className="side-panel project-panel"><button className="close" onClick={()=>setActiveZone("welcome")}>×</button><small>LOCATION 03 · PROJECT GALLERY</small><h2>Mini Project Laboratory</h2><p>Choose a workstation to inspect a project from Haritha's portfolio.</p><div className="project-list">{projects.filter(p=>p.category==="Diploma Mini Projects").map((p,i)=><button key={p.id} onClick={()=>{setSelectedProject(p);startDialogue([["Doraemon","Let's discover "+p.name+"!"],["Nobita",p.summary]]);playSfx(880)}}><span className="project-number">{String(i+1).padStart(2,"0")}</span><span><b>{p.name}</b><small>{p.summary}</small></span><i>↗</i></button>)}</div></div>}
  {activeZone==="innovation"&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone("welcome")}>×</button><small>LOCATION 04 · EXPERIMENTS</small><h2>Innovation Center</h2><p>Experiments and interactive builds from the learning journey.</p><div className="project-list">{projects.filter(p=>p.category!=="Diploma Mini Projects").map(p=><button key={p.id} onClick={()=>setSelectedProject(p)}><span><b>{p.name}</b><small>{p.summary}</small></span><i>↗</i></button>)}</div></div>}
  {activeZone==="skills"&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone("welcome")}>×</button><small>LOCATION 05 · TECHNOLOGY</small><h2>Technology Park</h2><p>Tools and technologies reflected in the published project collection.</p><div className="skill-cloud">{["HTML","CSS","JavaScript","Node.js basics","React","TypeScript","Java","SQL","Supabase","Firebase","Tailwind CSS"].map(x=><span key={x}>{x}</span>)}</div><p className="panel-note">Skills are presented from Haritha's shared portfolio information; project-specific stacks are listed separately in each card.</p></div>}
  {activeZone==="contact"&&<div className="side-panel"><button className="close" onClick={()=>setActiveZone("welcome")}>×</button><small>LOCATION 06 · CONNECT</small><h2>Contact Station</h2><p>Continue the conversation or explore more code.</p><div className="contact-links"><a href="https://github.com/HarithaKongi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/haritha-kongi/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Haritha_Kongi/" target="_blank" rel="noreferrer">LeetCode ↗</a><a href="https://www.codechef.com/users/haritha_kongi" target="_blank" rel="noreferrer">CodeChef ↗</a><a href="mailto:">Email Haritha ↗</a></div></div>}
  {showAllProjects&&<div className="modal-backdrop" onClick={()=>setShowAllProjects(false)}><article className="all-projects-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setShowAllProjects(false)}>×</button><small>THE PROJECT ARCHIVE · {projects.length} PROJECTS</small><h2>Explore Haritha's projects</h2><div className="category-filters">{allCategories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="project-list">{filtered.map((p,i)=><button key={p.id} onClick={()=>{setSelectedProject(p);setShowAllProjects(false);playSfx(880)}}><span className="project-number">{String(i+1).padStart(2,"0")}</span><span><b>{p.name}</b><small>{p.summary}</small></span><i>↗</i></button>)}</div></article></div>}
  {selectedProject&&<div className="modal-backdrop" onClick={()=>setSelectedProject(null)}><article className="project-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelectedProject(null)}>×</button><small>{selectedProject.category}</small><h2>{selectedProject.name}</h2><p>{selectedProject.summary}</p><h3>Technologies</h3><div className="skill-cloud">{selectedProject.tech.map(t=><span key={t}>{t}</span>)}</div><div className="panel-note">Project information is shown as recorded in the existing portfolio data.</div><div className="modal-actions">{selectedProject.demo&&<a href={selectedProject.demo} target="_blank" rel="noreferrer">Open live demo ↗</a>}<a href={selectedProject.source} target="_blank" rel="noreferrer">View GitHub source ↗</a></div></article></div>}
  {audioPanel&&<div className="modal-backdrop" onClick={()=>setAudioPanel(false)}><article className="audio-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setAudioPanel(false)}>×</button><small>ORIGINAL AUDIO MIXER</small><h2>Sound & subtitles</h2><p>Music is synthesized in-browser. Dialogue uses your browser's speech engine; no recorded episode audio is used.</p><label><input type="checkbox" checked={!muted} onChange={e=>setMuted(!e.target.checked)}/> Sound enabled</label><label><input type="checkbox" checked={subtitles} onChange={e=>setSubtitles(e.target.checked)}/> Show subtitles</label>{[["Master volume",masterVol,setMasterVol],["Music volume",musicVol,setMusicVol],["Voice volume",voiceVol,setVoiceVol],["Sound effects",sfxVol,setSfxVol]].map(([name,value,setter])=><label className="volume-row" key={name}>{name}<input type="range" min="0" max="1" step=".01" value={value} onChange={e=>setter(Number(e.target.value))}/></label>)}<button className="primary" onClick={()=>{startAudio();playSfx(700)}}>Test sound</button></article></div>}
  {showHelp&&<div className="modal-backdrop" onClick={()=>setShowHelp(false)}><article className="help-modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setShowHelp(false)}>×</button><small>HOW TO EXPLORE</small><h2>City controls</h2><div className="control-grid"><span>WASD / Arrows</span><p>Walk or drive through the city</p><span>E</span><p>Interact with a nearby location</p><span>V</span><p>Enter or exit the miniature vehicle</p><span>Shift</span><p>Boost while moving</p><span>Space</span><p>Brake / slow down</p><span>Mouse drag</span><p>Orbit the camera</p><span>ESC</span><p>Close open panels</p><span>M</span><p>Mute or unmute audio</p></div><button className="primary" onClick={()=>setShowHelp(false)}>Got it</button></article></div>}
  <footer className="footer-hud">HARITHA KONGI <span>•</span> DIPLOMA COMPUTER ENGINEERING <span>•</span> <a href="https://github.com/HarithaKongi/Diploma-Portfolio">SOURCE</a> <span>•</span> <a href="/legacy/index.html">TRADITIONAL PORTFOLIO</a></footer>
 </div>
}
export default App;
