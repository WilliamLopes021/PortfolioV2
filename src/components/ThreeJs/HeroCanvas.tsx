import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function HeroCanvas() {
  return (
    <Canvas className="size-full">
      <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
    </Canvas>
  )
}

export default HeroCanvas;
