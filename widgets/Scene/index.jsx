import React, { useEffect, useRef, useState } from "react";
import { RoomModel } from "@/components/models/RoomModel";
import { OrbitControls, PerspectiveCamera, StatsGl } from "@react-three/drei";
import { DiningModel } from "@/components/models/DiningModel";
import { LivingModel } from "@/components/models/LivingModel";
import { useRecoilState } from "recoil";
import roomSettingState from "@/atoms/roomSettingState";
import { useThree } from "@react-three/fiber";
import gsap from "gsap/all";
import cameraState from "@/atoms/cameraState";
import { cameraPositions } from "@/data/cameraPositions";
import modalState from "@/atoms/modalState";
// import {
//   Bloom,
//   DepthOfField,
//   EffectComposer,
//   Noise,
// } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
// import { useControls } from "leva";

const Scene = ({ setThreeContext }) => {
  const { gl, scene, camera } = useThree();
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const orbitControlRef = useRef();
  const [camSettings, setCamSettings] = useRecoilState(cameraState);
  const [isOrbitControlEnabled, setIsOrbitControlEnabled] = useState(true);
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

  // const { posX, posY, posZ, intensity } =
  //   useControls({
  //     posX: {
  //       value: -54.7,
  //       min: -100,
  //       max: 100,
  //       step: 0.05,
  //     },
  //     posY: {
  //       value: 20.5,
  //       min: -100,
  //       max: 100,
  //       step: 0.05,
  //     },
  //     posZ: {
  //       value: 6.55,
  //       min: -100,
  //       max: 100,
  //       step: 0.05,
  //     },
  //     intensity: {
  //       value: 2.9,
  //       min: 0,
  //       max: 10,
  //       step: 0.05,
  //     },
  //   });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(camera.position, {
      ...camSettings?.position,
      duration: 1,
      ease: "expo.out",
    })
      .to(
        camera.rotation,
        {
          ...camSettings?.rotation,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      )
      .to(
        camera,
        {
          fov: camSettings?.fov,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      );
  }, [camSettings]);

  useEffect(() => {
    if (
      !modalOpen.wall &&
      !modalOpen.rug &&
      !modalOpen.curtain &&
      !modalOpen.upholstery
    ) {
      setIsOrbitControlEnabled(true);
      setCamSettings({ ...cameraPositions.default });
    } else {
      setIsOrbitControlEnabled(false);
    }
  }, [modalOpen]);

  return (
    <>
      <StatsGl />
      {/* <EffectComposer>
        <Noise premultiply blendFunction={BlendFunction.SKIP} />
        <DepthOfField focusDistance={2} focalLength={0.1} bokehScale={0.6} />
        <Bloom mipmapBlur luminanceThreshold={1.4} levels={8} intensity={0.7} />
      </EffectComposer> */}
      <PerspectiveCamera
        makeDefault
        position={Object?.values(camSettings?.position)}
        rotation={Object?.values(camSettings?.rotation)}
        fov={camSettings?.fov}
      />
      {isOrbitControlEnabled ? (
        <OrbitControls
          enablePan={false}
          ref={orbitControlRef}
          maxDistance={1.2}
          minDistance={0.43}
          dampingFactor={0.08}
        />
      ) : null}
      <hemisphereLight
        position={[5, -2, 4]}
        intensity={1.2}
        skyColor={"#ffffbb"}
        groundColor={"#080820"}
        castShadow
      />
      <spotLight
        color={"#dcccb5"}
        intensity={1}
        position={[-0.5, -0.15, 0.7]}
        castShadow
        angle={7.3}
        shadow-normalBias={0.05}
      />
      <directionalLight
        position={[-54.7, 20.5, 6.55]}
        shadow-normalBias={0.05}
        castShadow
        color={"#dcccb5"}
        intensity={2.9}
      />
      <RoomModel position={[0, 0, 0.28]} showAnnotation={showAnnotation} />
      {roomSetting?.layout?.value === "dining" ? (
        <>
          <DiningModel
            scale={0.27}
            position={[0.22, 0.055, -0.25]}
            showAnnotation={showAnnotation}
          />
        </>
      ) : (
        <>
          <LivingModel
            scale={0.245}
            position={[0.27, -0.143, -0.19]}
            showAnnotation={showAnnotation}
          />
        </>
      )}
    </>
  );
};

export default Scene;
