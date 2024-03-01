import React from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import TitleTooltip from "@/components/TitleTooltip";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRecoilState } from "recoil";
import textureState from "@/atoms/textureStates";
import * as THREE from "three";
import useHomeRoomWidget from "@/widgets/HomeRoomWidget/useHomeRoomWidget";
import roomSettingState from "@/atoms/roomSettingState";
import { cameraPositions } from "@/data/cameraPositions";
import cameraState from "@/atoms/cameraState";

export const RoomModel = ({ showAnnotation, ...props }) => {
  const { nodes, materials } = useGLTF("/models/room.glb");
  const [currentTexture, setCurrentTexture] = useRecoilState(textureState);
  const [roomSettings, setRoomSettings] = useRecoilState(roomSettingState);
  const [camSettings, setCamSettings] = useRecoilState(cameraState);

  const environment = useLoader(
    TextureLoader,
    roomSettings?.environment?.value === "beach"
      ? "/images/environments/beach.jpg"
      : "/images/environments/forest.jpg"
  );
  const wallTexture = useLoader(TextureLoader, currentTexture?.wall?.image);
  const rugTexture = useLoader(TextureLoader, currentTexture?.rug?.image);
  const curtainTexture = useLoader(
    TextureLoader,
    currentTexture?.curtain?.image
  );
  const { openWallTextureModal, openRugTextureModal, openCurtainTextureModal } =
    useHomeRoomWidget();

  environment.flipY = false;

  wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
  wallTexture.repeat.set(4, -4);

  rugTexture.wrapS = rugTexture.wrapT = THREE.RepeatWrapping;
  rugTexture.repeat.set(1, -1);

  curtainTexture.wrapS = curtainTexture.wrapT = THREE.RepeatWrapping;
  curtainTexture.repeat.set(2, -2);

  const handleClickWall = () => {
    openWallTextureModal();
    setCamSettings({ ...cameraPositions?.wall });
  };
  const handleClickRug = () => {
    openRugTextureModal();
    setCamSettings({ ...cameraPositions.rug });
  };
  const handleClickCurtain = () => {
    openCurtainTextureModal();
    setCamSettings({ ...cameraPositions.curtain });
  };

  return (
    <group {...props} dispose={null}>
      <group position={[0.076, -0.284, -0.292]} scale={0.169}>
        <mesh
          geometry={nodes.Background_Environment.geometry}
          material={materials["Beach View.001"]}
          position={[-0.566, 1.683, 1.735]}
          scale={22.356}
        >
          <meshStandardMaterial map={environment} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BASEBOARD.geometry}
          material={materials.Plaster}
          position={[-2.127, 0.054, 3.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={[1, 0.167, 0.042]}
        />
        <group position={[3.5, 1.981, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Wallpaper}
          >
            <meshStandardMaterial map={wallTexture} side={THREE.DoubleSide} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Wood Floor"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Plaster}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_3.geometry}
            material={materials.Fireplace}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.STATIC_ARMCHAIR.geometry}
          material={materials.Metal}
          position={[2.55, 0.476, 2.301]}
          rotation={[-Math.PI, -0.471, -Math.PI]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FIREPLACE.geometry}
          material={materials.Plaster}
          position={[0.86, 0.051, 2.94]}
          scale={[1.792, 0.167, 0.836]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Door.geometry}
          material={materials.Plaster}
          position={[6.455, 1.41, -0.681]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Door.geometry}
          material={materials.Plaster}
          position={[6.455, 1.41, 0.679]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Handle.geometry}
          material={materials.Gold}
          position={[6.406, 0.823, 0.048]}
          scale={[0.055, 0.074, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Handle.geometry}
          material={materials.Gold}
          position={[6.406, 0.823, -0.047]}
          scale={[0.055, 0.074, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Small_Door.geometry}
          material={materials.Plaster}
          position={[4.829, 1.41, -3.179]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Small_Door_Handle.geometry}
          material={materials.Gold}
          position={[4.198, 0.823, -3.133]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={[0.055, 0.074, 0.074]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Big_Doorframe.geometry}
          material={materials.Plaster}
          position={[6.435, 0.038, -1.386]}
          scale={[0.058, 0.127, 0.127]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Small_Doorframe.geometry}
          material={materials.Plaster}
          position={[4.115, 2.858, -3.149]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.058, 0.127, 0.127]}
        >
          <Html position={[0, -5, -25]}>
            <TitleTooltip title="CHANGE WALLCOVERING" orientation="top">
              <div
                className={`${
                  showAnnotation ? "opacity-100 visible" : "opacity-0 invisible"
                } duration-300 transition-all ease-in-out annotation cursor-pointer`}
                onClick={handleClickWall}
              />
            </TitleTooltip>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.STATIC_ARMCHAIR003.geometry}
          material={materials["FabricLeatherFauxSplitFinished001_1K.001"]}
          position={[2.55, 0.476, 2.301]}
          rotation={[-Math.PI, -0.471, -Math.PI]}
          scale={0.001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Curtain_Big.geometry}
          material={materials.Curtains}
          position={[-2.354, 2.602, 1.511]}
          rotation={[-1.801, 1.547, 0.225]}
          scale={0.893}
        >
          <meshStandardMaterial
            attach="material"
            transparent
            side={THREE.DoubleSide}
            map={curtainTexture}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Curtain_Small.geometry}
          material={materials.Curtains}
          position={[2.906, 2.602, 3.085]}
          rotation={[-3.118, -0.006, 1.566]}
          scale={0.893}
        >
          <meshStandardMaterial
            attach="material"
            transparent
            side={THREE.DoubleSide}
            map={curtainTexture}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Curtain_Big.geometry}
          material={materials.Curtains}
          position={[-2.354, 2.602, -1.521]}
          rotation={[-1.801, 1.547, 0.225]}
          scale={0.893}
        >
          <Html position={[-0.6, 0, 0]}>
            <TitleTooltip title="CHANGE CURTAIN" orientation="top">
              <div
                className={`${
                  showAnnotation ? "opacity-100 visible" : "opacity-0 invisible"
                } duration-300 transition-all ease-in-out annotation cursor-pointer`}
                onClick={handleClickCurtain}
              />
            </TitleTooltip>
          </Html>
          <meshStandardMaterial
            attach="material"
            transparent
            side={THREE.DoubleSide}
            map={curtainTexture}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Curtain_Small.geometry}
          material={materials.Curtains}
          position={[-1.107, 2.602, 3.085]}
          rotation={[-3.118, -0.006, 1.566]}
          scale={0.893}
        >
          <meshStandardMaterial
            attach="material"
            transparent
            side={THREE.DoubleSide}
            map={curtainTexture}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main.geometry}
          material={materials["Cast Iron"]}
          position={[-2.456, 3.828, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.577, 7.037, 1.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Main_Frame.geometry}
          material={materials["Cast Iron"]}
          position={[-2.468, 1.973, -0.001]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[5.559, 6.405, 6.405]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left001.geometry}
          material={materials["Cast Iron"]}
          position={[2.57, 3.828, 3.182]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.577, 3.002, 1.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_Frame.geometry}
          material={materials["Cast Iron"]}
          position={[2.564, 1.973, 3.199]}
          rotation={[-Math.PI / 2, 1.571, 0]}
          scale={[5.559, 6.405, 6.405]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right001.geometry}
          material={materials["Cast Iron"]}
          position={[-0.831, 3.828, 3.182]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.577, 3.002, 1.577]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_Frame.geometry}
          material={materials["Cast Iron"]}
          position={[-0.833, 1.973, 3.199]}
          rotation={[-Math.PI / 2, 1.571, 0]}
          scale={[5.559, 6.405, 6.405]}
        />
        <group position={[0.862, 1.925, 3.014]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Painting}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.Matte}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PLANT.geometry}
          material={materials.blinn1SG}
          position={[-0.823, -0.013, 2.143]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.031}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Plaster}
            position={[-0.011, -0.147, -9.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={24.874}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RugDesignerSeashellGrey001001.geometry}
          material={materials.Rug}
          position={[0.896, 0.003, -0.788]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.501, 1.451, 1.329]}
        >
          <meshStandardMaterial map={rugTexture} />
          <Html position={[0.25, 0, 0.8]}>
            <TitleTooltip title="CHANGE RUG" orientation="top">
              <div
                className={`${
                  showAnnotation ? "opacity-100 visible" : "opacity-0 invisible"
                } duration-300 transition-all ease-in-out annotation cursor-pointer`}
                onClick={handleClickRug}
              />
            </TitleTooltip>
          </Html>
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload("/models/room.glb");
