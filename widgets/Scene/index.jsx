import React, { useEffect, useRef, useState } from "react";
import { RoomModel } from "@/components/models/RoomModel";
import { OrbitControls, PerspectiveCamera, StatsGl } from "@react-three/drei";
import { DiningModel } from "@/components/models/DiningModel";
import { LivingModel } from "@/components/models/LivingModel";
import { useRecoilState } from "recoil";
import roomSettingState from "@/atoms/roomSettingState";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap/all";
import cameraState from "@/atoms/cameraState";
import { cameraPositions } from "@/data/cameraPositions";
import modalState from "@/atoms/modalState";
import * as THREE from "three";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  SMAA,
} from "@react-three/postprocessing";
import { lightSettings } from "@/data/lightSettings";

const Scene = ({ setThreeContext }) => {
  const { gl, scene, camera } = useThree();
  const dLightRef = useRef();
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

  useFrame(() => {
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
  });

  useFrame(() => {
    const morningColor = new THREE.Color(lightSettings.morning.color);
    const afternoonColor = new THREE.Color(lightSettings.afternoon.color);
    const nightColor = new THREE.Color(lightSettings.night.color);
    const tl = gsap.timeline();
    roomSetting?.time_of_day?.value === "morning"
      ? tl
          .to(dLightRef?.current?.position, {
            x: lightSettings?.morning?.position?.x,
            duration: 1,
          })
          .to(
            dLightRef?.current?.color,
            {
              ...morningColor,
              duration: 1,
            },
            "<"
          )
      : roomSetting?.time_of_day?.value === "afternoon"
      ? tl
          .to(dLightRef?.current?.position, {
            x: lightSettings?.afternoon?.position?.x,
            duration: 1,
          })
          .to(
            dLightRef?.current?.color,
            {
              ...afternoonColor,
              duration: 1,
            },
            "<"
          )
      : tl
          .to(dLightRef?.current?.position, {
            x: lightSettings?.night?.position?.x,
            duration: 1,
          })
          .to(
            dLightRef?.current?.color,
            {
              ...nightColor,
              duration: 1,
            },
            "<"
          );
    dLightRef.current.updateMatrixWorld();
  }, []);

  return (
    <>
      <StatsGl />
      <EffectComposer>
        <DepthOfField focusDistance={2} focalLength={0.1} bokehScale={0.6} />
        <Bloom
          mipmapBlur
          luminanceThreshold={1.4}
          luminanceSmoothing={0.025}
          levels={8}
          intensity={0.7}
        />
        <SMAA />
      </EffectComposer>
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
        intensity={roomSetting?.time_of_day?.value === "night" ? 0.1 : 1}
        skyColor={
          roomSetting?.time_of_day?.value === "morning"
            ? "#ffffff"
            : roomSetting?.time_of_day?.value === "afternoon"
            ? "#ffffff"
            : lightSettings?.night?.color
        }
        groundColor={"#080820"}
        castShadow
      />
      {roomSetting?.time_of_day?.value !== "night" ? (
        <ambientLight
          position={[5, -2, 4]}
          intensity={0.3}
          color={"#ffffff"}
          castShadow
        />
      ) : null}
      <directionalLight
        position={Object?.values(lightSettings?.morning?.position)}
        shadow-normalBias={0.09}
        castShadow
        color={lightSettings?.morning?.color}
        intensity={5}
        ref={dLightRef}
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
