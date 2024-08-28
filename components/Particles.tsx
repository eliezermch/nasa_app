import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber/native';
import { useRef, useMemo, useEffect } from 'react';

export function Particles() {
  //   const { scene } = useThree();

  const particleTexture1: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/star1.png'));
  const particleTexture2: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/star2.png'));
  const particleTexture3: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/star3.png'));

  const particlesRef = useRef<any>();

  useEffect(() => {
    const scene = particlesRef.current;

    /**
     * Particles
     */
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 20000;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const textures = [];

    const minDistance = 300; // Minimum distance from the Sun
    const maxDistance = 350; // Maximum distance

    for (let i = 0; i < count; i++) {
      const distance = minDistance + Math.random() * (maxDistance - minDistance); // Distance between minDistance and maxDistance
      const theta = Math.random() * 2 * Math.PI; // Random angle in spherical coordinates
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);

      colors[i * 3] = Math.random(); // r
      colors[i * 3 + 1] = Math.random(); // g
      colors[i * 3 + 2] = Math.random(); // b

      // Alternate between the three textures
      if (i % 3 === 0) textures.push(particleTexture1);
      else if (i % 3 === 1) textures.push(particleTexture2);
      else textures.push(particleTexture3);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterials = textures.map((texture) => {
      return new THREE.PointsMaterial({
        size: 0.6,
        sizeAttenuation: true,
        map: texture,
        transparent: true,
        depthWrite: false,
        vertexColors: true, // Enable vertex colors
      });
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterials[0]);
    particles.position.y = 27;
    scene.add(particles);

    return () => {
      scene.remove(particles);
      particlesGeometry.dispose();
      particleMaterials.forEach((material) => material.dispose());
    };
  }, [particleTexture1, particleTexture2, particleTexture3]);

  return <group ref={particlesRef} />;
}
