# 3JS

While I was learning three.js, I created this repository to share with you what I learned.

# INTRO
In the beginning of my three.js journey, I created basic shapes and used basic structures of the three.js. I learned 
how to use @react-three/fiber package and its providings such as Canvas,mesh,position,material,lights,etc. 
Here is the code:
/*Firstly I downloaded necessary packages using that command: "npx expo install three @react-three/fiber expo-gl expo-three expo-file-system" */
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
