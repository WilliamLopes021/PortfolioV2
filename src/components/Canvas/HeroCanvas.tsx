import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import HackerRoom from "../3DModels/HackerRoom";
// import { useMediaQuery } from "react-responsive";
import ReactLogo from "../3DModels/ReactLogo";
import TypeScriptLogo from "../3DModels/TypeScriptLogo";
// import { Leva } from "leva";
// import { useControls } from "leva";

function HeroCanvas() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // const controls = useControls("TypeScriptLogo", {
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  return (
    <>
      {/* <Leva /> */}
      <Canvas className="size-full bg-sky-950">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <HackerRoom
            scale={0.75}
            position={[-1.2, -1.3, -2]}
            rotation={[0.3, 3.7, 0]}
          />
          <group>
            <ReactLogo
              scale={0.4}
              position={[0.8, 0.5, -6.5]}
              rotation={[-0.3, -5.7, -1.7]}
            />
            <TypeScriptLogo
              scale={6.3}
              position={[-2.3, 0.3, -2.2]}
              rotation={[-6.6, 1, 0.3]}
            />
          </group>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default HeroCanvas;
