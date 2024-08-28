import * as THREE from 'three';
import { useSpring, a } from '@react-spring/three';
import { Particles } from './Particles';

const SolarSysExperienceAndroid = () => {
  // const sunMap = new THREE.TextureLoader().load(
  //   'https://s3.amazonaws.com/fresco-augmented-reality.com/3d_files/fresco_redesign/assets/test/sun.jpg'
  // );

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

  function createLineLoopWithMesh(radius: number, color: number, width: number) {
    const material = new THREE.LineBasicMaterial({
      color: color,
      linewidth: width,
    });
    const geometry = new THREE.BufferGeometry();
    const lineLoopPoints = [];

    const numSegments = 100; // Number of segments to create the circular path
    for (let i = 0; i <= numSegments; i++) {
      const angle = (i / numSegments) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      lineLoopPoints.push(x, 0, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(lineLoopPoints, 3));
    return new THREE.LineLoop(geometry, material);
  }

  return (
    <group>
      {/* Sun */}
      {/* <Sun /> */}
      <mesh>
        <sphereGeometry args={[15, 50, 50]} />
        <meshBasicMaterial color={'#FCE570'} />
      </mesh>
      <pointLight intensity={20000} distance={300} decay={2} castShadow position={[0, 0, 0]} />

      {/* {planets.map((planet: any) => (
        <mesh key={planet.id} position={planet.position}>
          <sphereGeometry args={[planet.size, 50, 50]} />
          <meshStandardMaterial map={planet.texture} />
        </mesh>
      ))} */}

      <Particles />

      {/* Circular paths for each planet */}
      <primitive object={createLineLoopWithMesh(28, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(44, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(62, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(78, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(100, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(138, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(176, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(200, 0xaaaaaa, 1)} />
      <primitive object={createLineLoopWithMesh(216, 0xaaaaaa, 1)} />

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
        <meshStandardMaterial color={'#787878'} />
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
        <meshStandardMaterial color={'#E6E6E6'} />
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
        <meshStandardMaterial color={'#1E90FF'} />
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
        <meshStandardMaterial color={'#B22222'} />
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
        <meshStandardMaterial color={'#FFA07A'} />
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
          <meshStandardMaterial color={'#8B4513'} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[10, 20, 32]} />
          <meshStandardMaterial color={'#F0F8FF'} side={THREE.DoubleSide} />
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
          <meshStandardMaterial color={'#4682B4'} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[7, 12, 32]} />
          <meshStandardMaterial color={'#A52A2A'} side={THREE.DoubleSide} />
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
        <meshStandardMaterial color={'#000080'} />
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
        <meshStandardMaterial color={'#BFAF9B'} />
      </a.mesh>

      {/* {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))} */}
    </group>
  );
};

export { SolarSysExperienceAndroid };
