import Image from "next/image";
import React from "react";
import TitleTooltip from "../TitleTooltip";
import cameraState from "@/atoms/cameraState";
import { useRecoilState } from "recoil";
import { cameraPositions } from "@/data/cameraPositions";
import roomSettingState from "@/atoms/roomSettingState";

const FloatingControllerNav = ({
  openSettingsModal,
  openWallTextureModal,
  openRugTextureModal,
  openCurtainTextureModal,
  openUpholsteryTextureModal,
  takeSnapShot,
}) => {
  const [camSettings, setCamSettings] = useRecoilState(cameraState);
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);

  const nav = {
    default:
      "bg-[#2d2d2d1a] backdrop-blur-sm border border-[#FCFBF6] rounded-xl flex justify-center fixed bottom-6 left-1/2 -translate-x-1/2",
    inner_wrap: {
      default: "flex px-6 py-3 gap-12",
    },
    item_wrap: {
      default: "flex gap-6 relative",
      before:
        "before:content-[''] before:w-px before:h-full before:bg-[#FCFBF6] before:absolute before:top-1/2 before:-right-6 before:-translate-y-1/2",
    },
    item: {
      default:
        "w-[58px] h-[58px] flex justify-center items-center rounded-full border border-[#FCFBF6] backdrop-blur-sm",
      hover:
        "transition-all ease-in-out duration-300 will-change-transform hover:scale-110 hover:bg-[#2d2d2d4a]",
    },
  };

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
  const handleClickUpholstery = () => {
    openUpholsteryTextureModal();
    if (roomSetting?.layout?.value === "living") {
      setCamSettings({ ...cameraPositions.upholstery_living });
    } else {
      setCamSettings({ ...cameraPositions.upholstery_dining });
    }
  };

  return (
    <nav className={`floating-controller-nav ${nav.default}`}>
      <div className={`${nav.inner_wrap.default}`}>
        <div
          className={`item-wrap ${nav.item_wrap.default} ${nav.item_wrap.before}`}
        >
          <TitleTooltip title="ENVIRONMENT SETTINGS" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={openSettingsModal}
            >
              <Image
                src="/icons/icon-settings.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
        </div>
        <div
          className={`item-wrap ${nav.item_wrap.default} ${nav.item_wrap.before}`}
        >
          <TitleTooltip title="CHANGE WALLCOVERING" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={handleClickWall}
            >
              <Image
                src="/icons/icon-wallpaper.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
          <TitleTooltip title="CHANGE RUG" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={handleClickRug}
            >
              <Image
                src="/icons/icon-rug.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
          <TitleTooltip title="CHANGE CURTAIN" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={handleClickCurtain}
            >
              <Image
                src="/icons/icon-curtain.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
          <TitleTooltip title="CHANGE UPHOLSTERY" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={handleClickUpholstery}
            >
              <Image
                src="/icons/icon-sofa.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
        </div>
        <div className={`item-wrap ${nav.item_wrap.default}`}>
          <TitleTooltip title="TAKE ROOM SNAPSHOT" orientation="top">
            <button
              className={`item ${nav.item.default} ${nav.item.hover}`}
              onClick={takeSnapShot}
            >
              <Image
                src="/icons/icon-snapshot.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
          <TitleTooltip title="LEAVE FEEDBACK" orientation="top">
            <button className={`item ${nav.item.default} ${nav.item.hover}`}>
              <Image
                src="/icons/icon-comments.svg"
                width={32}
                height={32}
                alt="icon-settings"
              />
            </button>
          </TitleTooltip>
        </div>
      </div>
    </nav>
  );
};

export default FloatingControllerNav;
