import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const LivingModel = (props) => {
  const { nodes, materials } = useGLTF("/models/living.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.477, -0.507, 0.622]} scale={0.639}>
        <group
          position={[0.7, 0.385, -0.764]}
          rotation={[Math.PI / 2, 0, -2.777]}
          scale={[0.034, 0.029, 0.029]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["uploads_files_2619168_BOOK+FINAL"].geometry}
            material={materials.lambert4SG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["uploads_files_2619168_BOOK+FINAL_1"].geometry}
            material={materials.Material}
          />
        </group>
        <group position={[0.87, 0.49, -2.439]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object008001.geometry}
            material={materials.Couch}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object008001_1.geometry}
            material={materials["Cast Iron.004"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VASE001.geometry}
          material={materials["VaseStone001_2K_VAR3.001"]}
          position={[2.601, 0.489, -2.941]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.441}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Side_Table001.geometry}
          material={materials["Side Table.001"]}
          position={[2.384, 0.252, -2.892]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.004"]}
          position={[-0.729, 0.036, 0.129]}
          rotation={[0, 0.855, 0]}
          scale={[0.161, 0.095, 0.161]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials["Material.004"]}
            position={[0, 0, 4.374]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["Material.004"]}
            position={[-4.45, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials["Couch Fabric"]}
            position={[-1.655, 0.983, 2.222]}
            scale={[6.947, 11.756, 6.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials["Couch Fabric"]}
            position={[-1.37, 2.925, 2.222]}
            scale={[6.947, 11.756, 6.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["Material.004"]}
            position={[-4.45, 0, 4.374]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials["Couch Fabric"]}
            position={[-4.192, 4.281, 2.217]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[6.947, 10.97, 6.947]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Material.004"]}
          position={[1.572, 0.036, 0.299]}
          rotation={[-Math.PI, 1.134, -Math.PI]}
          scale={[0.161, 0.095, 0.161]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials["Couch Fabric"]}
            position={[-4.192, 4.281, 2.217]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[6.947, 10.97, 6.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials["Material.004"]}
            position={[0, 0, 4.374]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["Material.004"]}
            position={[-4.45, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials["Material.004"]}
            position={[-4.45, 0, 4.374]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials["Couch Fabric"]}
            position={[-1.655, 0.983, 2.222]}
            scale={[6.947, 11.756, 6.947]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["Couch Fabric"]}
            position={[-1.37, 2.925, 2.222]}
            scale={[6.947, 11.756, 6.947]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bulb003.geometry}
          material={materials["Light Bulb.002"]}
          position={[-0.787, 1.413, -2.543]}
          scale={0.049}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_Holder002.geometry}
            material={materials.MetalCastIron003_1K}
            position={[-0.002, -1.398, 0]}
            scale={8.978}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.MetalCastIron003_1K}
          position={[-0.787, 0.114, -2.69]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials.MetalCastIron003_1K}
          position={[-0.919, 0.114, -2.479]}
          rotation={[Math.PI / 2, 0, 2.696]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002.geometry}
          material={materials.MetalCastIron003_1K}
          position={[-0.667, 0.114, -2.46]}
          rotation={[Math.PI / 2, 0, 0.588]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.FabricPlainNaturalSheer007_1K}
          position={[-0.787, 1.433, -2.542]}
          scale={[0.729, 0.5, 0.729]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Coffee_Table.geometry}
          material={materials["Coffee Table.001"]}
          position={[0.885, 0.332, -0.759]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.713, 0.139, 2.482]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.MarbleSanPedroHoned001_1K}
          position={[1.139, 0.417, -0.767]}
          rotation={[0, 0.209, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/living.glb");
