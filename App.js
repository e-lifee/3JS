import { Canvas,useFrame,useLoader } from '@react-three/fiber';
import { useState,useRef, Suspense, useLayoutEffect } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {TextureLoader} from 'expo-three';

function Box(props){
  const [active,setActive]=useState(false);
  const mesh=useRef();
  
  useFrame((state,delta)=>{
    if(active){
    mesh.current.rotation.x+=delta
    {/*-/+ changes the rotate direction*/}
    {/*delta*number changes the rotation speed */}
    mesh.current.rotation.y-=delta
    mesh.current.rotation.z+=delta
  }
  });

  return (
    <mesh 
    {...props}
    ref={mesh}
    onClick={(event)=>setActive(!active)}
    >
      <boxGeometry/>
      <meshStandardMaterial color={active?'blue':'grey'}/>
    </mesh>
  );
}

function Car(props){
  const [base,normal,rough]=useLoader(TextureLoader,
    [
      require('./assets/Car/textures/BaseColor.jpg'),
      require('./assets/Car/textures/Normal.jpg'),
      require('./assets/Car/textures/Roughness.png'),
    ]);
  const material=useLoader(MTLLoader,require('./assets/Car/shoe.mtl'));
  const obj=useLoader(OBJLoader,
    require('./assets/Car/shoe.obj'),(loader)=>{
    material.preload();
    loader.setMaterials(material);

    loader.setCrossOrigin([0,2,5])
  }
  );

  useLayoutEffect(()=>{
    obj.traverse((child)=>{
      if(child instanceof THREE.Mesh){
        child.material.map=base;
      }
    })
  },[obj])
  return(
   <mesh rotation={[1,0,0]}>
    <primitive object={obj} scale={10}/>
  </mesh>
  );
}
export default function App() {
  return( 
  <Canvas>
    <ambientLight/>
    
    <pointLight position={[10,10,10]} />
    {/* 
    <mesh >
  <sphereGeometry/>
  <meshStandardMaterial color={'red'} />
  </mesh> 

  <Box position={[1,2,0]}/>
  <Box position={[-1,2,0]}/>


  <mesh position={[-0.5,-2.5,0]} scale={0.08}>
    <torusKnotGeometry radius={10} args={[10,1,260,6,10,16]}/>
    <meshStandardMaterial color={'green'} />
  </mesh> }
  */}
  <Suspense fallback={null}>
    <Car/>
    </Suspense>
  

  </Canvas>
);
}