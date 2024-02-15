"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import FloatingControllerNav from "@/components/FloatingControllerNav";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import SettingsModal from "@/components/SettingsModal";
import useHomeRoomWidget from "./useHomeRoomWidget";
import WallTexturesModal from "@/components/WallTexturesModal";
import RugTexturesModal from "@/components/RugTexturesModal";
import CurtainTexturesModal from "@/components/CurtainTexturesModal";
import UpholsteryTexturesModal from "@/components/UpholsteryTexturesModal";
import { useRecoilState } from "recoil";
import modalState from "@/atoms/modalState";

const HomeRoomWidget = () => {
  const {
    takeSnapShot,
    closeSettingsModal,
    openSettingsModal,
    setThreeContext,
    openWallTextureModal,
    closeWallTextureModal,
    openRugTextureModal,
    closeRugTextureModal,
    openCurtainTextureModal,
    closeCurtainTextureModal,
    openUpholsteryTextureModal,
    closeUpholsteryTextureModal,
  } = useHomeRoomWidget();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  return (
    <main className="home-room-widget w-full h-svh bg-black">
      <div className="flex justify-center py-7 z-10 relative">
        <Image
          src="/brand-logo.svg"
          width={190}
          height={30}
          unoptimized
          alt="schumacher-logo"
        />
      </div>
      <Canvas
        className="!fixed inset-0 !w-full !h-[100svh] z-[0]"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Scene setThreeContext={setThreeContext} />
        </Suspense>
      </Canvas>
      <SettingsModal
        show={isModalOpen.settings}
        openSettingsModal={openSettingsModal}
        closeSettingsModal={closeSettingsModal}
      />
      <WallTexturesModal
        show={isModalOpen.wall}
        openWallTextureModal={openWallTextureModal}
        closeWallTextureModal={closeWallTextureModal}
      />
      <RugTexturesModal
        show={isModalOpen.rug}
        openRugTextureModal={openRugTextureModal}
        closeRugTextureModal={closeRugTextureModal}
      />
      <CurtainTexturesModal
        show={isModalOpen.curtain}
        openCurtainTextureModal={openCurtainTextureModal}
        closeCurtainTextureModal={closeCurtainTextureModal}
      />
      <UpholsteryTexturesModal
        show={isModalOpen.upholstery}
        openUpholsteryTextureModal={openUpholsteryTextureModal}
        closeUpholsteryTextureModal={closeUpholsteryTextureModal}
      />
      <FloatingControllerNav
        openSettingsModal={openSettingsModal}
        openWallTextureModal={openWallTextureModal}
        openRugTextureModal={openRugTextureModal}
        openCurtainTextureModal={openCurtainTextureModal}
        openUpholsteryTextureModal={openUpholsteryTextureModal}
        takeSnapShot={takeSnapShot}
      />
    </main>
  );
};

export default HomeRoomWidget;
