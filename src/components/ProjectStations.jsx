import React from 'react';
import { Float, Text } from '@react-three/drei';
import { projects } from '../data/portfolio.js';

const palette = ['#65c9f2','#f5c85d','#83d6aa','#ef9cba','#9d9bf2'];

/**
 * Fifteen individually clickable project inventions.
 * The original portfolio data remains the single source of truth.
 */
export default function ProjectStations({ onSelect }) {
  return (
    <group>
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 7.1 + (index % 2) * 0.35;
        const x = 13 + Math.cos(angle) * radius;
        const z = -12 + Math.sin(angle) * radius;
        const color = palette[index % palette.length];
        return (
          <group
            key={project.id}
            position={[x, 0, z]}
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(project);
            }}
          >
            <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.82, 0.94, 0.36, 24]} />
              <meshStandardMaterial color="#183b59" metalness={0.48} roughness={0.32} />
            </mesh>
            <mesh position={[0, 0.43, 0]}>
              <cylinderGeometry args={[0.7, 0.7, 0.12, 24]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.22} />
            </mesh>
            <Float speed={1.4 + (index % 3) * 0.25} floatIntensity={0.16}>
              <mesh position={[0, 1.18, 0]} castShadow>
                {index % 3 === 0 ? (
                  <dodecahedronGeometry args={[0.43, 0]} />
                ) : index % 3 === 1 ? (
                  <boxGeometry args={[0.68, 0.68, 0.68]} />
                ) : (
                  <octahedronGeometry args={[0.48, 0]} />
                )}
                <meshStandardMaterial color={color} metalness={0.34} roughness={0.24} emissive={color} emissiveIntensity={0.2} />
              </mesh>
            </Float>
            <Text
              position={[0, 2.02, 0]}
              fontSize={0.19}
              maxWidth={2.3}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
              color="#09264b"
              outlineWidth={0.012}
              outlineColor="#ffffff"
            >
              {project.name}
            </Text>
            <mesh position={[0, 0.95, 0]} scale={1.28}>
              <sphereGeometry args={[0.58, 16, 12]} />
              <meshBasicMaterial color={color} transparent opacity={0.08} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
