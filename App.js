import { Canvas,useFrame } from '@react-three/fiber';
import { useState,useRef } from 'react';

function Box(props){
  const [active,setActive]=useState(false);
  const mesh=useRef();
  
  useFrame((state,delta)=>{
    if(active){
    mesh.current.rotation.x+=delta*5
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
export default function App() {
  return( 
  <Canvas>
    {/*<ambientLight/>*/}
    <pointLight position={[10,10,10]} />
    <mesh >
  <sphereGeometry/>
  <meshStandardMaterial color={'red'} />
  </mesh> 

  <Box position={[1,2,0]}/>
  <Box position={[-1,2,0]}/>


  <mesh position={[-0.5,-2.5,0]} scale={0.08}>
    <torusKnotGeometry radius={10} args={[10,1,260,6,10,16]}/>
    <meshStandardMaterial color={'green'} />
  </mesh> 
  </Canvas>
);
}