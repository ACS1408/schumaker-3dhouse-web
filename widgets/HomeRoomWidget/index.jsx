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

const HomeRoomWidget = () => {
  const {
    takeSnapShot,
    closeSettingsModal,
    openSettingsModal,
    isSettingsMenuOpen,
    setThreeContext,
    openWallTextureModal,
    closeWallTextureModal,
    isWallTextureModalOpen,
    openRugTextureModal,
    closeRugTextureModal,
    isRugTextureModalOpen,
    openCurtainTextureModal,
    closeCurtainTextureModal,
    isCurtainTextureModalOpen,
    openUpholsteryTextureModal,
    closeUpholsteryTextureModal,
    isUpholsteryTextureModalOpen,
  } = useHomeRoomWidget();
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
        isSettingsMenuOpen={isSettingsMenuOpen}
        openSettingsModal={openSettingsModal}
        closeSettingsModal={closeSettingsModal}
      />
      <WallTexturesModal
        isWallTextureModalOpen={isWallTextureModalOpen}
        openWallTextureModal={openWallTextureModal}
        closeWallTextureModal={closeWallTextureModal}
      />
      <RugTexturesModal
        isRugTextureModalOpen={isRugTextureModalOpen}
        openRugTextureModal={openRugTextureModal}
        closeRugTextureModal={closeRugTextureModal}
      />
      <CurtainTexturesModal
        isCurtainTextureModalOpen={isCurtainTextureModalOpen}
        openCurtainTextureModal={openCurtainTextureModal}
        closeCurtainTextureModal={closeCurtainTextureModal}
      />
      <UpholsteryTexturesModal
        isUpholsteryTextureModalOpen={isUpholsteryTextureModalOpen}
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
