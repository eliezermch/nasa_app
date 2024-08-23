import * as THREE from 'three';
import { useLoader } from '@react-three/fiber/native';
import { useSpring, a } from '@react-spring/three';
import { useRef } from 'react';
import { useHelper } from '@react-three/drei/native';

const SolarSysExperience = () => {
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

  // MERCURIO ANIMATION
  const mercurioSelfRotationSpeed = 0.004;
  const mercurioRotaingSpeedAroundSun = 0.004;

  const { mercurioRotationY } = useSpring({
    from: { mercurioRotationY: 0 },
    to: { mercurioRotationY: -Math.PI * 2 },
    config: { duration: (1 / mercurioSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { mercurioRotationAroundSun } = useSpring({
    from: { mercurioRotationAroundSun: 0 },
    to: { mercurioRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / mercurioRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // VENUS ANIMATION
  const venusSelfRotationSpeed = 0.002;
  const venusRotaingSpeedAroundSun = 0.015;

  const { venusRotationY } = useSpring({
    from: { venusRotationY: 0 },
    to: { venusRotationY: Math.PI * 2 },
    config: { duration: (1 / venusSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { venusRotationAroundSun } = useSpring({
    from: { venusRotationAroundSun: 0 },
    to: { venusRotationAroundSun: Math.PI * 2 },
    config: { duration: (1 / venusRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // EARTH ANIMATION
  const earthSelfRotationSpeed = 0.02;
  const earthRotaingSpeedAroundSun = 0.01;

  const { earthRotationY } = useSpring({
    from: { earthRotationY: 0 },
    to: { earthRotationY: -Math.PI * 2 },
    config: { duration: (1 / earthSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { earthRotationAroundSun } = useSpring({
    from: { earthRotationAroundSun: 0 },
    to: { earthRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / earthRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // MARS ANIMATION
  const marsSelfRotationSpeed = 0.008;
  const marsRotaingSpeedAroundSun = 0.018;

  const { marsRotationY } = useSpring({
    from: { marsRotationY: 0 },
    to: { marsRotationY: -Math.PI * 2 },
    config: { duration: (1 / marsSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { marsRotationAroundSun } = useSpring({
    from: { marsRotationAroundSun: 0 },
    to: { marsRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / marsRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // JUPITER ANIMATION
  const jupiterSelfRotationSpeed = 0.04;
  const jupiterRotaingSpeedAroundSun = 0.002;

  const { jupiterRotationY } = useSpring({
    from: { jupiterRotationY: 0 },
    to: { jupiterRotationY: -Math.PI * 2 },
    config: { duration: (1 / jupiterSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { jupiterRotationAroundSun } = useSpring({
    from: { jupiterRotationAroundSun: 0 },
    to: { jupiterRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / jupiterRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // SATURN ANIMATION
  const saturnSelfRotationSpeed = 0.038;
  const saturnRotaingSpeedAroundSun = 0.0009;

  const { saturnRotationY } = useSpring({
    from: { saturnRotationY: 0 },
    to: { saturnRotationY: -Math.PI * 2 },
    config: { duration: (1 / saturnSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { saturnRotationAroundSun } = useSpring({
    from: { saturnRotationAroundSun: -Math.PI / 2 },
    to: { saturnRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / saturnRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // URANUS ANIMATION
  const uranusSelfRotationSpeed = 0.03;
  const uranusRotaingSpeedAroundSun = 0.0004;

  const { uranusRotationY } = useSpring({
    from: { uranusRotationY: 0 },
    to: { uranusRotationY: Math.PI * 2 },
    config: { duration: (1 / uranusSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { uranusRotationAroundSun } = useSpring({
    from: { uranusRotationAroundSun: -Math.PI / 2 },
    to: { uranusRotationAroundSun: Math.PI * 2 },
    config: { duration: (1 / uranusRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // NEPTUNE ANIMATION
  const neptuneSelfRotationSpeed = 0.032;
  const neptuneRotaingSpeedAroundSun = 0.0001;

  const { neptuneRotationY } = useSpring({
    from: { neptuneRotationY: 0 },
    to: { neptuneRotationY: -Math.PI * 2 },
    config: { duration: (1 / neptuneSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { neptuneRotationAroundSun } = useSpring({
    from: { neptuneRotationAroundSun: -Math.PI / 2 },
    to: { neptuneRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / neptuneRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  // PLUTO ANIMATION
  const plutoSelfRotationSpeed = 0.008;
  const plutoRotaingSpeedAroundSun = 0.0007;

  const { plutoRotationY } = useSpring({
    from: { plutoRotationY: 0 },
    to: { plutoRotationY: -Math.PI * 2 },
    config: { duration: (1 / plutoSelfRotationSpeed) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete rotation
  });

  const { plutoRotationAroundSun } = useSpring({
    from: { plutoRotationAroundSun: -Math.PI / 2 },
    to: { plutoRotationAroundSun: -Math.PI * 2 },
    config: { duration: (1 / plutoRotaingSpeedAroundSun) * 1000 },
    loop: true, // Infinite loop
    reset: true, // Reset after each complete orbit
  });

  const lightRef = useRef<any>();
  useHelper(lightRef, THREE.PointLightHelper, 1);

  return (
    <group>
      {/* Sun */}
      <group>
        <mesh>
          <sphereGeometry args={[15, 50, 50]} />
          <meshBasicMaterial map={sunTexture} />
        </mesh>
      </group>
      <pointLight ref={lightRef} intensity={15000} distance={300} decay={2} castShadow position={[0, 0, 0]} />

      {/* {planets.map((planet: any) => (
        <mesh key={planet.id} position={planet.position}>
          <sphereGeometry args={[planet.size, 50, 50]} />
          <meshStandardMaterial map={planet.texture} />
        </mesh>
      ))} */}

      {/* Mercurio */}
      <a.mesh
        castShadow
        receiveShadow
        position={[28, 0, 0]}
        rotation-y={mercurioRotationY}
        position-x={mercurioRotationAroundSun.to((val) => 28 * Math.cos(val))}
        position-z={mercurioRotationAroundSun.to((val) => 28 * Math.sin(val))}
      >
        <sphereGeometry args={[3.2, 50, 50]} />
        <meshStandardMaterial map={mercuryTexture} />
      </a.mesh>

      {/* Venus */}
      <a.mesh
        castShadow
        receiveShadow
        position={[44, 0, 0]}
        rotation-y={venusRotationY}
        position-x={venusRotationAroundSun.to((val) => 44 * Math.cos(val))}
        position-z={venusRotationAroundSun.to((val) => 44 * Math.sin(val))}
      >
        <sphereGeometry args={[5.8, 50, 50]} />
        <meshStandardMaterial map={venusTexture} />
      </a.mesh>

      {/* Earth */}
      <a.mesh
        castShadow
        receiveShadow
        position={[62, 0, 0]}
        rotation-y={earthRotationY}
        position-x={earthRotationAroundSun.to((val) => 62 * Math.cos(val))}
        position-z={earthRotationAroundSun.to((val) => 62 * Math.sin(val))}
      >
        <sphereGeometry args={[6, 50, 50]} />
        <meshStandardMaterial map={earthTexture} />
      </a.mesh>

      {/* Mars */}
      <a.mesh
        castShadow
        receiveShadow
        position={[78, 0, 0]}
        rotation-y={marsRotationY}
        position-x={marsRotationAroundSun.to((val) => 78 * Math.cos(val))}
        position-z={marsRotationAroundSun.to((val) => 78 * Math.sin(val))}
      >
        <sphereGeometry args={[4, 50, 50]} />
        <meshStandardMaterial map={marsTexture} />
      </a.mesh>

      {/* Jupiter */}
      <a.mesh
        castShadow
        receiveShadow
        position={[100, 0, 0]}
        rotation-y={jupiterRotationY}
        position-x={jupiterRotationAroundSun.to((val) => 100 * Math.cos(val))}
        position-z={jupiterRotationAroundSun.to((val) => 100 * Math.sin(val))}
      >
        <sphereGeometry args={[15, 50, 50]} />
        <meshStandardMaterial map={jupiterTexture} />
      </a.mesh>

      {/* Saturn */}
      <a.group
        castShadow
        receiveShadow
        position={[138, 0, 0]}
        rotation-y={saturnRotationY}
        position-x={saturnRotationAroundSun.to((val) => 138 * Math.cos(val))}
        position-z={saturnRotationAroundSun.to((val) => 138 * Math.sin(val))}
      >
        <mesh>
          <sphereGeometry args={[10, 50, 50]} />
          <meshStandardMaterial map={saturnTexture} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[10, 20, 32]} />
          <meshStandardMaterial map={saturnRingTexture} side={THREE.DoubleSide} />
        </mesh>
      </a.group>

      {/* Uranus */}
      <a.group
        castShadow
        receiveShadow
        position={[176, 0, 0]}
        rotation-y={uranusRotationY}
        position-x={uranusRotationAroundSun.to((val) => 176 * Math.cos(val))}
        position-z={uranusRotationAroundSun.to((val) => 176 * Math.sin(val))}
      >
        <mesh>
          <sphereGeometry args={[7, 50, 50]} />
          <meshStandardMaterial map={uranusTexture} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[7, 12, 32]} />
          <meshStandardMaterial map={uranusRingTexture} side={THREE.DoubleSide} />
        </mesh>
      </a.group>

      {/* Neptune */}
      <a.mesh
        castShadow
        receiveShadow
        position={[200, 0, 0]}
        rotation-y={neptuneRotationY}
        position-x={neptuneRotationAroundSun.to((val) => 200 * Math.cos(val))}
        position-z={neptuneRotationAroundSun.to((val) => 200 * Math.sin(val))}
      >
        <sphereGeometry args={[7, 50, 50]} />
        <meshStandardMaterial map={neptuneTexture} />
      </a.mesh>

      {/* Pluto */}
      <a.mesh
        castShadow
        receiveShadow
        position={[216, 0, 0]}
        rotation-y={plutoRotationY}
        position-x={plutoRotationAroundSun.to((val) => 216 * Math.cos(val))}
        position-z={plutoRotationAroundSun.to((val) => 216 * Math.sin(val))}
      >
        <sphereGeometry args={[2.8, 50, 50]} />
        <meshStandardMaterial map={plutoTexture} />
      </a.mesh>

      {/* {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))} */}
    </group>
  );
};

export { SolarSysExperience };
