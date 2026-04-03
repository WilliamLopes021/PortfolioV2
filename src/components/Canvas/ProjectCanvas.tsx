import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import Computer from "../3DModels/Computer";
// import { useMediaQuery } from "react-responsive";

const ProjectCanvas = ({ video }: { video: string }) => {
  return (
    <>
      <Canvas className="absolute size-full bg-black">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <spotLight position={[-1, 0, 1]} intensity={3} />
          <Computer
            position={[-0.2, -0.1, -2.1]}
            rotation={[3.3, -9.7, -3.1]}
            scale={1.4}
          />
        </Suspense>
      </Canvas>   
    </>
  );
};

export default ProjectCanvas;
