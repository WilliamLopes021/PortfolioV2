import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useRef, useEffect, type JSX } from "react";
import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Chair_Material_0: THREE.Mesh;
    Door_Material_0: THREE.Mesh;
    Setup_Material_0: THREE.Mesh;
    Setup_Material001_0: THREE.Mesh;
    Room_Material_0: THREE.Mesh;
    Room_EEVEE_Architectural_Glass_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    EEVEE_Architectural_Glass: THREE.MeshStandardMaterial;
  };
};

const HackerRoom = (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null!);
  const baseLocation = useRef<THREE.Euler | null>(null);
  const monitorTexture = useTexture("textures/image.png");

  const { pointer } = useThree();

  useEffect(() => {
    if (!ref.current) return;

    baseLocation.current = ref.current.rotation.clone();
  }, []);

  useFrame(() => {
    if (!ref.current || !baseLocation.current) return;

    const targetY = baseLocation.current.y + pointer.x * 0.3;
    const targetX = baseLocation.current.x + pointer.y * 0.2;

    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
  });

  const { nodes, materials } = useGLTF(
    "/models/HackerRoom.glb",
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null} ref={ref}>
      <group scale={0.01}>
        <group position={[-34.318, 228.922, 250.863]}>
          <group position={[-19.58, -129.73, -69.708]}>
            <mesh
              geometry={nodes.Setup_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Setup_Material001_0.geometry}
              material={materials["Material.001"]}
            >
              <meshMatcapMaterial map={monitorTexture} />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Room_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Room_EEVEE_Architectural_Glass_0.geometry}
            material={materials.EEVEE_Architectural_Glass}
          />
          <mesh
            geometry={nodes.Chair_Material_0.geometry}
            material={materials.Material}
            position={[-61.627, -149.74, -252.357]}
          />
          <mesh
            geometry={nodes.Door_Material_0.geometry}
            material={materials.Material}
            position={[-298.42, -83.427, -204.755]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/HackerRoom.glb");

export default HackerRoom;
