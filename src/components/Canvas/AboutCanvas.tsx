import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import Sanctum from "../3DModels/Sanctum";

const AboutCanvas = () => {
  return (
    <>
      <Canvas className="absolute size-full bg-bg" style={{ overflow: "auto" }}>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <Sanctum />
        </Suspense>
      </Canvas>
    </>
  );
};

export default AboutCanvas;
