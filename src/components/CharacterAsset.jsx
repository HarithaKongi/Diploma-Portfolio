import React,{useEffect,useMemo,useRef} from 'react';
import {useGLTF,useAnimations} from '@react-three/drei';
import {clone} from 'three/addons/utils/SkeletonUtils.js';

/**
 * Reusable licensed GLB character mount.
 * Keep character-specific rigs and animation names inside the model asset;
 * pass the selected clip name through the animation prop.
 */
export default function CharacterAsset({src,animation='Idle',position=[0,0,0],rotation=[0,0,0],scale=1,onLoaded}) {
  const group=useRef();
  const {scene,animations}=useGLTF(src);
  const model=useMemo(()=>clone(scene),[scene]);
  const {actions}=useAnimations(animations,group);
  useEffect(()=>{
    const action=actions[animation]||actions[Object.keys(actions)[0]];
    if(!action)return;
    action.reset().fadeIn(.25).play();
    return ()=>{action.fadeOut(.2)};
  },[actions,animation]);
  useEffect(()=>{onLoaded?.(model)},[model,onLoaded]);
  return <group ref={group} position={position} rotation={rotation} scale={scale}>
    <primitive object={model}/>
  </group>;
}
