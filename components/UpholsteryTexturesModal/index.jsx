import React from "react";
import ModalContainer from "../ModalContainer";
import Image from "next/image";
import { textures } from "@/data/upholsteryTextures";
import Style from "./UpholsteryTexturesModal.module.scss";
import { useRecoilState } from "recoil";
import textureState from "@/atoms/textureStates";
import roomSettingState from "@/atoms/roomSettingState";

const UpholsteryTexturesModal = ({ closeUpholsteryTextureModal, show }) => {
  const [selectedTexture, setSelectedTexture] = useRecoilState(textureState);
  const [roomSettings, setRoomSettings] = useRecoilState(roomSettingState);

  return (
    <ModalContainer
      title="Choose your upholstery fabric"
      show={show}
      onClose={closeUpholsteryTextureModal}
    >
      <div
        className={`${Style.upholstery_textures_wrap} h-[calc(100vh_-_330px)] overflow-auto`}
      >
        <div className="texture-gallery grid grid-cols-3 gap-3">
          {textures?.map((texture, i) => {
            return (
              <figure
                className={`${
                  roomSettings?.layout?.value === "living" &&
                  selectedTexture?.upholstery_living === texture
                    ? "border border-[#333] p-1.5"
                    : ""
                } ${
                  roomSettings?.layout?.value === "dining" &&
                  selectedTexture?.upholstery_dining === texture
                    ? "border border-[#333] p-1.5"
                    : ""
                } texture-item cursor-pointer transition-all duration-300 ease-out`}
                key={i}
                onClick={() =>
                  roomSettings?.layout?.value === "living"
                    ? setSelectedTexture((prevState) => ({
                        ...prevState,
                        upholstery_living: texture,
                      }))
                    : setSelectedTexture((prevState) => ({
                        ...prevState,
                        upholstery_dining: texture,
                      }))
                }
                title={texture.name}
              >
                <Image
                  src={texture?.thumb}
                  width={120}
                  height={120}
                  sizes="6vw"
                  quality={90}
                  alt={texture?.name?.toLowerCase()}
                  className="size-full object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>
      <div className="texture-name my-4 text-base">
        {selectedTexture?.upholstery?.name}
      </div>
      <button className="text-[#2d2d2d] rounded-sm border border-[#2d2d2d] bg-transparent px-10 py-3 text-sm w-full">
        SEE PRODUCT PAGE
      </button>
      <button className="text-[#2d2d2d] rounded-sm border border-[#fad915] bg-[#fad915] px-10 py-3 w-full mt-3">
        SAVE CHANGES
      </button>
    </ModalContainer>
  );
};

export default UpholsteryTexturesModal;
