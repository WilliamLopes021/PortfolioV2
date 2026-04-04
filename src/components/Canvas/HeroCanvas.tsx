import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import HackerRoom from "../3DModels/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { getResponsiveCoord } from "../../constants/mobileCoordinates";
import ReactLogo from "../3DModels/ReactLogo";
import TypeScriptLogo from "../3DModels/TypeScriptLogo";
// import { Leva } from "leva";
// import { useControls } from "leva";

function HeroCanvas() {
  const isMobile = useMediaQuery({ maxWidth: 968 });

  const {hackerRoom, typescriptLogo, reactLogo} = getResponsiveCoord(isMobile);

  return (
    <>
      <Canvas className="size-full bg-primary">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <HackerRoom
            scale={hackerRoom.scale}
            position={hackerRoom.position}
            rotation={hackerRoom.rotation}
          />
          <group>
            <ReactLogo
            scale={reactLogo.scale}
            position={reactLogo.position}
            rotation={reactLogo.rotation}
            />
            <TypeScriptLogo
            scale={typescriptLogo.scale}
            position={typescriptLogo.position}
            rotation={typescriptLogo.rotation}
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
