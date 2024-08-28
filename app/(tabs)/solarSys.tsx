import { SolarSysExperience } from '@/components/SolarSysExperience';
import { SolarSysExperienceAndroid } from '@/components/SolarSystemExperienceAndroid';
import { ThemedView } from '@/components/ThemedView';
import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import { Platform } from 'react-native';

export default function TabTwoScreen() {
  const [OrbitControls, events] = useControls();

  return (
    <ThemedView darkColor="#000" className="flex-[1]" {...events}>
      <Canvas
        // scene={{ background: cubeTexture }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 4000,
          position: [-50, 320, 500],
        }}
        onCreated={(state) => {
          const _gl = state.gl.getContext();
          const pixelStorei = _gl.pixelStorei.bind(_gl);
          _gl.pixelStorei = function (...args) {
            const [parameter] = args;
            switch (parameter) {
              case _gl.UNPACK_FLIP_Y_WEBGL:
                return pixelStorei(...args);
            }
          };
        }}
      >
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.75}
          enableRotate={true}
          rotateSpeed={1.0}
          enablePan={true}
          panSpeed={0.75}
        />

        <ambientLight intensity={0.5} />

        {/* <color args={['#000']} attach={'background'} /> */}

        {Platform.OS === 'ios' && <SolarSysExperience />}
        {Platform.OS === 'android' && <SolarSysExperienceAndroid />}
      </Canvas>
    </ThemedView>
  );
}
