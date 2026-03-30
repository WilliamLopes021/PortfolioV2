import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import type { JSX } from "react";

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
  const { nodes, materials } = useGLTF(
    "/HackerRoom.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
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
            />
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

useGLTF.preload("/HackerRoom.glb");

export default HackerRoom;
