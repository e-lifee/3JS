import { Canvas } from '@react-three/fiber';

export default function App() {
  return( 
  <Canvas>
    {/*<ambientLight/>*/}
    <pointLight position={[10,10,10]} />
    <mesh >
  <sphereGeometry/>
  <meshStandardMaterial color={'red'} />
  </mesh> 

  <mesh position={[1,2,0]}>
    <boxGeometry/>
    <meshStandardMaterial color={'blue'} />
  </mesh> 
  <mesh position={[-0.5,-2.5,0]} scale={0.08}>
    <torusKnotGeometry radius={10} args={[10,1,260,6]}/>
    <meshStandardMaterial color={'green'} />
  </mesh> 
  </Canvas>
);
}