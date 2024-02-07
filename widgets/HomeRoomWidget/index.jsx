"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import FloatingControllerNav from "@/components/FloatingControllerNav";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import SettingsModal from "@/components/SettingsModal";
import { saveAs } from "file-saver";

const HomeRoomWidget = () => {
  let [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [threeContext, setThreeContext] = useState({});

  const takeSnapShot = () => {
    const { gl, scene, camera } = threeContext;
    gl.render(scene, camera);
    const screenshot = gl.domElement.toDataURL();
    const date = new Date();
    const fileName = `output-${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}.png`;
    let file = convertBase64ToFile(screenshot, fileName);
    saveAs(file, fileName);
  };

  const convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
      uint8Array[n] = bstr.charCodeAt(n);
    }
    let file = new File([uint8Array], fileName, { type: mime });
    return file;
  };

  const closeSettingsModal = () => {
    setIsSettingsMenuOpen(false);
  };

  const openSettingsModal = () => {
    setIsSettingsMenuOpen(true);
  };
  useEffect(() => {
    if (isSettingsMenuOpen) {
      setTimeout(() => {
        document.querySelector(".home-room-widget").removeAttribute("inert");
      }, 300);
    }
  }, [isSettingsMenuOpen]);

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
      <FloatingControllerNav
        openSettingsModal={openSettingsModal}
        takeSnapShot={takeSnapShot}
      />
    </main>
  );
};

export default HomeRoomWidget;
