import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useRecoilState } from "recoil";
import modalState from "@/atoms/modalState";

const useHomeRoomWidget = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
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
    setIsModalOpen((prevState) => ({ ...prevState, settings: false }));
  };
  const openSettingsModal = () => {
    setIsModalOpen({
      settings: true,
      wall: false,
      rug: false,
      curtain: false,
      upholstery: false,
    });
  };

  const closeWallTextureModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, wall: false }));
  };
  const openWallTextureModal = () => {
    setIsModalOpen({
      settings: false,
      wall: true,
      rug: false,
      curtain: false,
      upholstery: false,
    });
  };

  const closeRugTextureModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, rug: false }));
  };
  const openRugTextureModal = () => {
    setIsModalOpen({
      settings: false,
      wall: false,
      rug: true,
      curtain: false,
      upholstery: false,
    });
  };

  const closeCurtainTextureModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, curtain: false }));
  };
  const openCurtainTextureModal = () => {
    setIsModalOpen({
      settings: false,
      wall: false,
      rug: false,
      curtain: true,
      upholstery: false,
    });
  };

  const closeUpholsteryTextureModal = () => {
    setIsModalOpen((prevState) => ({ ...prevState, upholstery: false }));
  };
  const openUpholsteryTextureModal = () => {
    setIsModalOpen({
      settings: false,
      wall: false,
      rug: true,
      curtain: false,
      upholstery: true,
    });
  };

  useEffect(() => {
    if (
      isModalOpen.settings ||
      isModalOpen.wall ||
      isModalOpen.rug ||
      isModalOpen.curtain ||
      isModalOpen.upholstery
    ) {
      setTimeout(() => {
        document.querySelector(".home-room-widget").removeAttribute("inert");
      }, 300);
    }
  }, [isModalOpen]);
  return {
    takeSnapShot,
    convertBase64ToFile,
    closeSettingsModal,
    openSettingsModal,
    threeContext,
    setThreeContext,
    openWallTextureModal,
    closeWallTextureModal,
    openRugTextureModal,
    closeRugTextureModal,
    openCurtainTextureModal,
    closeCurtainTextureModal,
    openUpholsteryTextureModal,
    closeUpholsteryTextureModal,
  };
};

export default useHomeRoomWidget;
