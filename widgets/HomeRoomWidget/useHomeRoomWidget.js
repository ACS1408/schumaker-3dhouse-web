import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const useHomeRoomWidget = () => {
  let [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  let [isWallTextureModalOpen, setIsWallTextureModalOpen] = useState(false);
  let [isRugTextureModalOpen, setIsRugTextureModalOpen] = useState(false);
  let [isCurtainTextureModalOpen, setIsCurtainTextureModalOpen] =
  useState(false);
  let [isUpholsteryTextureModalOpen, setIsUpholsteryTextureModalOpen] = useState(false);
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

  const closeWallTextureModal = () => {
    setIsWallTextureModalOpen(false);
  };
  const openWallTextureModal = () => {
    setIsWallTextureModalOpen(true);
  };

  const closeRugTextureModal = () => {
    setIsRugTextureModalOpen(false);
  };
  const openRugTextureModal = () => {
    setIsRugTextureModalOpen(true);
  };

  const closeCurtainTextureModal = () => {
    setIsCurtainTextureModalOpen(false);
  };
  const openCurtainTextureModal = () => {
    setIsCurtainTextureModalOpen(true);
  };

  const closeUpholsteryTextureModal = () => {
    setIsUpholsteryTextureModalOpen(false);
  };
  const openUpholsteryTextureModal = () => {
    setIsUpholsteryTextureModalOpen(true);
  };

  useEffect(() => {
    if (isSettingsMenuOpen) {
      setTimeout(() => {
        document.querySelector(".home-room-widget").removeAttribute("inert");
      }, 300);
    }
  }, [isSettingsMenuOpen]);
  return {
    takeSnapShot,
    convertBase64ToFile,
    closeSettingsModal,
    openSettingsModal,
    isSettingsMenuOpen,
    setIsSettingsMenuOpen,
    threeContext,
    setThreeContext,
    openWallTextureModal,
    closeWallTextureModal,
    isWallTextureModalOpen,
    setIsWallTextureModalOpen,
    openRugTextureModal,
    closeRugTextureModal,
    isRugTextureModalOpen,
    setIsRugTextureModalOpen,
    openCurtainTextureModal,
    closeCurtainTextureModal,
    isCurtainTextureModalOpen,
    setIsCurtainTextureModalOpen,
    openUpholsteryTextureModal,
    closeUpholsteryTextureModal,
    isUpholsteryTextureModalOpen,
    setIsUpholsteryTextureModalOpen,
  };
};

export default useHomeRoomWidget;
