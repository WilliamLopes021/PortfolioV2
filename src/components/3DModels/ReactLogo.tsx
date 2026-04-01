import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useRef, type JSX } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type GLTFResult = GLTF & {
  nodes: {
    ["React-Logo_Material002_0"]: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

const ReactLogo = (props: JSX.IntrinsicElements["group"]) => {
  const reactLogoRef = useRef<THREE.Object3D>(null!);

  useGSAP(() => {
    gsap.to(reactLogoRef.current.position, {
      y: reactLogoRef.current.position.y + 0.5,
      x: reactLogoRef.current.position.x + 5,
      duration: 10.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const { nodes, materials } = useGLTF(
    "/models/react_logo-transformed.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={reactLogoRef}
        geometry={nodes["React-Logo_Material002_0"].geometry}
        material={materials["Material.002"]}
        position={[0, 0.079, 0.181]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.392, 0.392, 0.527]}
      />
    </group>
  );
};

useGLTF.preload("/models/react_logo-transformed.glb");

export default ReactLogo;
