import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { Leva } from "leva";
// import { useMediaQuery } from "react-responsive";

const AboutCanvas = () => {

  return (
    <>
      <Leva />
      <Canvas className="absolute size-full bg-sky-950">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <group>
            <mesh
              scale={2.0}
              rotation={[-3.1, 3.1, 1.7]}
              position={[0.1, 0.3, -8.7]}
            >
              <circleGeometry />
              <meshLambertMaterial color={"white"} />
            </mesh>
            <mesh
              scale={1}
              position={[-0.1, 0.3, -8.3]}
              rotation={[0.1, -0.3, -1.3]}
            >
              <torusGeometry args={[3, 0.2, 32, 64]} />
              <meshLambertMaterial color={"white"} />
            </mesh>
            <mesh
              scale={1}
              position={[-0.1, 0.3, -8.3]}
              rotation={[0.1, 2, -1.3]}
            >
              <torusGeometry args={[3, 0.2, 32, 64]} />
              <meshLambertMaterial color={"white"} />
            </mesh>
            <mesh
              scale={1}
              position={[-0.1, 0.3, -8.3]}
              rotation={[0.1, -0.3, -1.3]}
            >
              <sphereGeometry />
              <meshLambertMaterial color={"white"} />
            </mesh>
          </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default AboutCanvas;
