import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Object3D } from "three";

const Sanctum = () => {
  const cageRef = useRef<Object3D>(null!);
  const ballRef = useRef<Object3D>(null!);

  useFrame(() => {
    cageRef.current.rotation.x += 0.02;
    cageRef.current.rotation.y += 0.02;

    ballRef.current.rotation.x += 0.02;
  });

  return (
    <group>
      <mesh
        ref={cageRef}
        scale={3.5}
        rotation={[-3.1, 3.1, 1.7]}
        position={[0.1, 0.3, -8.7]}
      >
        <icosahedronGeometry />
        <meshPhysicalMaterial
          color={"white"}
          transmission={1}
          wireframe={true}
        />
      </mesh>
      <mesh
        ref={ballRef}
        scale={1.75}
        position={[0.1, 0.3, -8.3]}
        rotation={[0.1, -0.3, -1.3]}
      >
        <sphereGeometry />
        <meshPhysicalMaterial
          color={"sky"}
          transmission={1}
          wireframe={true}
        />
      </mesh>
    </group>
  );
};

export default Sanctum;
