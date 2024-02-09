import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";

export const DiningModel = ({ showAnnotation, ...props }) => {
  const { nodes, materials } = useGLTF("/models/dinning.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.553, -1.248, 0.895]} scale={0.631}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOWL.geometry}
          material={materials.MarbleSanPedroHoned001_1K}
          position={[1.094, 0.783, -0.823]}
          rotation={[0, 0.209, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VASE.geometry}
          material={materials.VaseStone001_2K_VAR3}
          position={[1.746, 0.659, -2.935]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.441}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Coffee Table.003"]}
          position={[-0.006, 0.347, -1.133]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shade.geometry}
          material={materials.Lampshade}
          position={[0.891, 2.092, -0.789]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame001.geometry}
          material={materials["Cast Iron.001"]}
          position={[0.891, 2.092, -0.789]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cord.geometry}
          material={materials.Metal}
          position={[0.889, 3.955, -0.789]}
          scale={[0.077, 0.002, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottom_of_Pendant.geometry}
          material={materials.Metal}
          position={[0.891, 1.777, -0.79]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bulb002.geometry}
          material={materials["Light Bulb.001"]}
          position={[0.878, 2.173, -0.788]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.066}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bulb_Holder001.geometry}
            material={nodes.Bulb_Holder001.material}
            position={[-0.002, -1.398, 0]}
            scale={8.978}
          >
            <Html position={[0, 0, 0]}>
              <div
                className={`${
                  showAnnotation ? "opacity-100 visible" : "opacity-0 invisible"
                } duration-300 transition-all ease-in-out annotation cursor-pointer`}
              />
            </Html>
          </mesh>
        </mesh>
        <group
          position={[1.286, 0.225, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_2.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <group
          position={[1.286, 0.387, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_2.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <group
          position={[1.286, 0.545, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <group
          position={[0.377, 0.225, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_2.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <group
          position={[0.377, 0.387, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_1.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <group
          position={[0.377, 0.545, -2.713]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_1.geometry}
            material={materials["Leather.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials["Leather.001"]}
          position={[0.833, -0.012, -2.959]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <group
          position={[0.456, 0.114, -3.146]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[1.194, 0.114, -2.77]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_1.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[1.194, 0.114, -3.146]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_2.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[1.932, 0.114, -2.77]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_3.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[1.932, 0.114, -3.146]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_4.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_4.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[0.456, 0.114, -2.77]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_5.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_5.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-0.269, 0.114, -3.146]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_6.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_6.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-0.269, 0.114, -2.77]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.074, 0.013, 0.074]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_7.geometry}
            material={materials.Gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1_7.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials.Gold}
          position={[1.543, 0.604, -2.732]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.Gold}
          position={[0.634, 0.604, -2.732]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials.Gold}
          position={[0.125, 0.604, -2.732]}
          rotation={[Math.PI / 2, -1.571, 0]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials["Material.003"]}
          position={[0.221, 0.363, -1.627]}
          rotation={[0, 0.206, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials["Material.003"]}
          position={[1.506, 0.363, -1.627]}
          rotation={[0, -0.334, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["Material.003"]}
          position={[2.359, 0.363, -0.857]}
          rotation={[0, -1.273, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials["Material.003"]}
          position={[1.3, 0.363, 0.07]}
          rotation={[-Math.PI, -0.86, -Math.PI]}
        >
          <Html position={[0, 0, 0]}>
            <div
              className={`${
                showAnnotation ? "opacity-100 visible" : "opacity-0 invisible"
              } duration-300 transition-all ease-in-out annotation cursor-pointer`}
            />
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["Material.003"]}
          position={[0.256, 0.363, 0.07]}
          rotation={[-Math.PI, 0.48, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials["Material.003"]}
          position={[-0.616, 0.363, -0.9]}
          rotation={[0, 1.416, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/dinning.glb");
