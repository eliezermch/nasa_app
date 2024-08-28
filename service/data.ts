import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const sunTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/sun.jpg'));
const mercuryTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/mercury.jpg'));
const venusTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/venus.jpg'));
const earthTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/earth.jpg'));
const marsTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/mars.jpg'));
const jupiterTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/jupiter.jpg'));
const saturnTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/saturn.jpg'));
const uranusTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/uranus.jpg'));
const neptuneTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/neptune.jpg'));
const plutoTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/pluto.jpg'));

const saturnRingTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/saturn_ring.png'));
const uranusRingTexture: any = useLoader(THREE.TextureLoader, require('../assets/solar_sys/uranus_ring.png'));

export const planets = [
  { id: 1, texture: mercuryTexture, size: 3.2, position: [28, 0, 0] },
  { id: 2, texture: venusTexture, size: 5.8, position: [44, 0, 0] },
  { id: 3, texture: earthTexture, size: 6, position: [62, 0, 0] },
  { id: 4, texture: marsTexture, size: 4, position: [78, 0, 0] },
  { id: 5, texture: jupiterTexture, size: 12, position: [100, 0, 0] },
  {
    id: 5,
    texture: saturnTexture,
    size: 10,
    position: [138, 0, 0],
    ring: { innerRadius: 10, outerRadius: 20, texture: saturnRingTexture },
  },
  {
    id: 6,
    texture: uranusTexture,
    size: 7,
    position: [176, 0, 0],
    ring: { innerRadius: 7, outerRadius: 12, texture: uranusRingTexture },
  },
  { id: 7, texture: neptuneTexture, size: 7, position: [200, 0, 0] },
  { id: 8, texture: plutoTexture, size: 2.8, position: [216, 0, 0] },
];
