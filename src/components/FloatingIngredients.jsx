import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Floating Shawarma Confetti (Background Decorations)
 * Uses a texture from the user's provided 3D image.
 */
const FloatingIngredients = ({ count = 40 }) => {
  const meshRef = useRef();
  
  // Create randomized positions, rotations, colors and movement parameters
  const items = useMemo(() => {
    const temp = [];
    const colors = ['#f2590d', '#4daa57', '#ffffff']; // Orange, Green, White
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 8;
      const speed = 0.005 + Math.random() * 0.015;
      const rotationSpeedX = (Math.random() - 0.5) * 0.05;
      const rotationSpeedY = (Math.random() - 0.5) * 0.04;
      const scale = 0.1 + Math.random() * 0.2;
      const color = colors[i % colors.length];
      temp.push({ x, y, z, speed, rotationSpeedX, rotationSpeedY, scale, color: new THREE.Color(color) });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    items.forEach((item, i) => {
      // Gentle downward and drifting motion
      item.y -= item.speed;
      item.x += Math.sin(time + i) * 0.002;
      
      // Loop back to top
      if (item.y < -10) item.y = 10;
      
      dummy.position.set(item.x, item.y, item.z);
      dummy.rotation.x += item.rotationSpeedX;
      dummy.rotation.y += item.rotationSpeedY;
      dummy.scale.setScalar(item.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, item.color);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.5} metalness={0.2} />
    </instancedMesh>
  );
};

export default FloatingIngredients;

