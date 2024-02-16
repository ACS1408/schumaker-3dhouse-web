import React, { useEffect, useState } from "react";
import { RoomModel } from "@/components/FloatingControllerNav/models/RoomModel";
// import { useControls } from "leva";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { DiningModel } from "@/components/FloatingControllerNav/models/DiningModel";
import { LivingModel } from "@/components/FloatingControllerNav/models/LivingModel";
import { useRecoilState } from "recoil";
import roomSettingState from "@/atoms/roomSettingState";
import { useThree } from "@react-three/fiber";

const Scene = ({ setThreeContext }) => {
  const { gl, scene, camera } = useThree();
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);

  const [showAnnotation, setShowAnnotation] = useState(true);
  let timeoutId;

  const handleMouseMove = () => {
    setShowAnnotation(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setShowAnnotation(false);
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setThreeContext({ gl, scene, camera });
  }, [gl, scene, camera]);

  //   const {
  //     camPosX,
  //     camPosY,
  //     camPosZ,
  //     fov,
  //     diningScale,
  //     diningPosX,
  //     diningPosY,
  //     diningPosZ,
  //     livingScale,
  //     livingPosX,
  //     livingPosY,
  //     livingPosZ,
  //   } = useControls({
  //     camPosX: {
  //       value: 1,
  //       min: -5,
  //       max: 5,
  //       step: 0.1,
  //     },
  //     camPosY: {
  //       value: 0,
  //       min: -5,
  //       max: 5,
  //       step: 0.1,
  //     },
  //     camPosZ: {
  //       value: -0.5,
  //       min: -5,
  //       max: 5,
  //       step: 0.1,
  //     },
  //     fov: {
  //       value: 60,
  //       min: 1,
  //       max: 180,
  //       step: 1,
  //     },
  //     diningScale: {
  //       value: 0.25,
  //       min: 0.01,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     diningPosX: {
  //       value: 0.25,
  //       min: -5,
  //       max: 5,
  //       step: 0.05,
  //     },
  //     diningPosY: {
  //       value: 0.03,
  //       min: -1,
  //       max: 1,
  //       step: 0.05,
  //     },
  //     diningPosZ: {
  //       value: -0.55,
  //       min: -1,
  //       max: 1,
  //       step: 0.05,
  //     },

  //     livingScale: {
  //       value: 0.28,
  //       min: 0.01,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     livingPosX: {
  //       value: 0.25,
  //       min: -5,
  //       max: 5,
  //       step: 0.05,
  //     },
  //     livingPosY: {
  //       value: -0.143,
  //       min: -1,
  //       max: 1,
  //       step: 0.05,
  //     },
  //     livingPosZ: {
  //       value: -0.43,
  //       min: -1,
  //       max: 1,
  //       step: 0.05,
  //     },
  //   });

  return (
    <>
      <PerspectiveCamera makeDefault position={[1.15, 0, -0.5]} fov={60} />
      {/* <PerspectiveCamera
        makeDefault
        position={[camPosX, camPosY, camPosZ]}
        fov={fov}
      /> */}
      <OrbitControls />
      <directionalLight position={[5, -2, 4]} />
      <ambientLight intensity={0.7} />
      <RoomModel showAnnotation={showAnnotation} />
      {roomSetting?.layout?.value === "dining" ? (
        <>
          <DiningModel
            scale={0.25}
            position={[0.25, 0.03, -0.55]}
            showAnnotation={showAnnotation}
          />
          {/* <DiningModel
            scale={diningScale}
            position={[diningPosX, diningPosY, diningPosZ]}
          /> */}
        </>
      ) : (
        <>
          {/* <LivingModel
          scale={livingScale}
          position={[livingPosX, livingPosY, livingPosZ]}
        /> */}
          <LivingModel
            scale={0.28}
            position={[0.25, -0.143, -0.43]}
            showAnnotation={showAnnotation}
          />
        </>
      )}
      {/* <Environment preset="sunset" /> */}
      {/* <axesHelper args={[5]} />
      <gridHelper /> */}
    </>
  );
};

export default Scene;
