import { SolarSysExperience } from '@/components/SolarSysExperience';
import { ThemedView } from '@/components/ThemedView';
import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';

export default function TabTwoScreen() {
  const [OrbitControls, events] = useControls();

  return (
    <ThemedView className="flex-[1]" {...events}>
      <Canvas
        // scene={{ background: cubeTexture }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 4000,
          position: [-50, 320, 500],
        }}
        // onCreated={(state) => {
        //   const _gl = state.gl.getContext();
        //   const pixelStorei = _gl.pixelStorei.bind(_gl);
        //   _gl.pixelStorei = function (...args) {
        //     const [parameter] = args;
        //     switch (parameter) {
        //       case _gl.UNPACK_FLIP_Y_WEBGL:
        //         return pixelStorei(...args);
        //       default:
        //         console.warn(`EXGL: gl.pixelStorei() doesn't support this parameter yet!`);
        //     }
        //   };
        // }}
      >
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.75}
          enableRotate={true}
          rotateSpeed={1.0}
          enablePan={true}
          panSpeed={0.75}
        />

        <ambientLight intensity={0.2} />

        {/* <Environment
          // background={true}
          files={[
            require('../../assets/images/stars.jpg'),
            require('../../assets/images/stars.jpg'),
            require('../../assets/images/stars.jpg'),
            require('../../assets/images/stars.jpg'),
            require('../../assets/images/stars.jpg'),
            require('../../assets/images/stars.jpg'),
          ]}
        /> */}

        {/* <color args={['#000']} attach={'background'} /> */}

        <SolarSysExperience />
      </Canvas>
    </ThemedView>
  );
}
