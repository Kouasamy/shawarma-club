import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

/**
 * Stylized 3D Shawarma
 * A mix of procedural shapes to represent a shawarma without needing heavy external assets.
 */
const Shawarma3D = ({ scale = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group scale={scale}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group ref={meshRef}>
          {/* The Wrap / Pita */}
          <mesh castShadow>
            <cylinderGeometry args={[0.5, 0.45, 2, 32]} />
            <meshStandardMaterial color="#f7e8cf" roughness={0.9} />
          </mesh>

          {/* Grilled Marks */}
          {[...Array(6)].map((_, i) => (
            <mesh key={i} position={[0, -0.6 + i * 0.3, 0.48]} rotation={[0, 0, 0.1]}>
              <boxGeometry args={[0.6, 0.05, 0.05]} />
              <meshStandardMaterial color="#8b4513" opacity={0.3} transparent />
            </mesh>
          ))}

          {/* Top filling (Meat bits) */}
          <group position={[0, 1, 0]}>
            <mesh>
              <sphereGeometry args={[0.48, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#5d2e0a" roughness={0.7} />
            </mesh>
            {/* Some greens */}
            <mesh position={[0.1, 0.05, 0.1]} rotation={[0.5, 0.2, 0]}>
              <boxGeometry args={[0.2, 0.1, 0.2]} />
              <meshStandardMaterial color="#4f7942" />
            </mesh>
          </group>

          {/* Sauce Drip (Animated) */}
          <mesh position={[0, 0.8, 0.4]} scale={[0.3, 1, 0.3]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <MeshDistortMaterial color="#fbc02d" speed={3} distort={0.4} radius={0.8} />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

export default Shawarma3D;
