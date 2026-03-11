import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';

/**
 * Premium 3D Canvas Wrapper
 * Handles lighting, shadows, and environment for a consistent "Pro Max" look.
 */
const ThreeScene = ({ children, cameraPos = [0, 0, 5], controls = false }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: controls ? 'all' : 'none' }}>
      <Canvas shadows camera={{ position: cameraPos, fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Environment preset="city" />
          
          {children}
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
          />
          
          {controls && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
