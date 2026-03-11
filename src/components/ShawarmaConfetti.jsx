import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const ShawarmaConfetti = ({ count = 80, active = true }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/images/shawarma-confetti.png');
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Start from center
      const x = 0;
      const y = 0;
      const z = 0;
      
      // Explosion velocities
      const vx = (Math.random() - 0.5) * 0.2;
      const vy = (Math.random() - 0.2) * 0.25; // More upwards
      const vz = (Math.random() - 0.5) * 0.1;
      
      const rotSpeed = (Math.random() - 0.5) * 0.1;
      const scale = 0.3 + Math.random() * 0.4;
      const gravity = 0.002 + Math.random() * 0.003;
      
      temp.push({ x, y, z, vx, vy, vz, rotSpeed, scale, gravity, life: 1 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      if (active) {
        // Apply physics
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.vy -= p.gravity; // Gravity
        
        // Slower rotation
        dummy.rotation.x += p.rotSpeed;
        dummy.rotation.y += p.rotSpeed;
      } else {
        // Fade out or move out of view when not active
        p.y -= 0.1;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent={true} 
        alphaTest={0.5}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
};

export default ShawarmaConfetti;
