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
// import { useControls } from "leva";
// import { Perf } from "r3f-perf";

const Scene = ({ setThreeContext }) => {
  const { gl, scene, camera } = useThree();
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const orbitControlRef = useRef();
  const [camSettings, setCamSettings] = useRecoilState(cameraState);
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

  // const { camPosX, camPosY, camPosZ, camRotateX, camRotateY, camRotateZ } =
  //   useControls({
  //     camPosX: {
  //       value: 1.1,
  //       min: -5,
  //       max: 5,
  //       step: 0.05,
  //     },
  //     camPosY: {
  //       value: 0,
  //       min: -5,
  //       max: 5,
  //       step: 0.05,
  //     },
  //     camPosZ: {
  //       value: -0.4,
  //       min: -5,
  //       max: 5,
  //       step: 0.05,
  //     },
  //     camRotateX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //       step: 0.05,
  //     },
  //     camRotateY: {
  //       value: 1.8,
  //       min: -10,
  //       max: 10,
  //       step: 0.05,
  //     },
  //     camRotateZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //       step: 0.05,
  //     },
  //   });

  useEffect(() => {
    if (orbitControlRef?.current) {
      orbitControlRef.current.enabled = false;
    }
    gsap.to(camera.position, {
      x: camSettings?.position?.x,
      y: camSettings?.position?.y,
      z: camSettings?.position?.z,
      duration: 1,
      ease: "expo.out",
      onStart: () => {
        if (orbitControlRef?.current) {
          orbitControlRef.current.enabled = false;
        }
      },
      onComplete: () => {
        if (orbitControlRef?.current) {
          orbitControlRef.current.enabled = true;
        }
      },
    });
    gsap.to(camera.rotation, {
      x: camSettings?.rotation?.x,
      y: camSettings?.rotation?.y,
      z: camSettings?.rotation?.z,
      duration: 1,
      ease: "expo.out",
      onStart: () => {
        if (orbitControlRef?.current) {
          orbitControlRef.current.enabled = false;
        }
      },
      onComplete: () => {
        if (orbitControlRef?.current) {
          orbitControlRef.current.enabled = true;
        }
      },
    });
  }, [camSettings]);

  useEffect(() => {
    setTimeout(() => {
      setCamSettings({ ...cameraPositions.default });
    }, 500);
  }, []);

  useEffect(() => {
    if (
      (modalOpen.settings || !modalOpen.settings) &&
      !modalOpen.wall &&
      !modalOpen.rug &&
      !modalOpen.curtain &&
      !modalOpen.upholstery
    ) {
      setCamSettings({ ...cameraPositions.default });
    }
  }, [modalOpen]);

  return (
    <>
      {/* <Perf position="bottom-left" /> */}
      <StatsGl />
      <PerspectiveCamera
        makeDefault
        position={[
          camSettings?.position?.x,
          camSettings?.position?.y,
          camSettings?.position?.z,
        ]}
        rotation={[
          camSettings?.rotation?.x,
          camSettings?.rotation?.y,
          camSettings?.rotation?.z,
        ]}
        fov={60}
      />
      <OrbitControls enablePan={false} ref={orbitControlRef} />
      <directionalLight position={[5, -2, 4]} />
      <ambientLight intensity={0.7} />
      <RoomModel
        showAnnotation={showAnnotation}
        setCamSettings={setCamSettings}
      />
      {roomSetting?.layout?.value === "dining" ? (
        <>
          <DiningModel
            scale={0.25}
            position={[0.25, 0.03, -0.55]}
            showAnnotation={showAnnotation}
          />
        </>
      ) : (
        <>
          <LivingModel
            scale={0.245}
            position={[0.25, -0.143, -0.43]}
            showAnnotation={showAnnotation}
            camSettings={camSettings}
            setCamSettings={setCamSettings}
          />
        </>
      )}
    </>
  );
};

export default Scene;
