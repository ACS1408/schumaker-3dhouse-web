import React from "react";
import ModalContainer from "../ModalContainer";
import Image from "next/image";
import { textures } from "@/data/curtainTextures";
import Style from "./CurtainTexturesModal.module.scss";
import { useRecoilState } from "recoil";
import textureState from "@/atoms/textureStates";

const CurtainTexturesModal = ({
  closeCurtainTextureModal,
  show,
}) => {
  const [selectedTexture, setSelectedTexture] = useRecoilState(textureState);

  return (
    <ModalContainer
      title="Choose your curtain fabric"
      show={show}
      onClose={closeCurtainTextureModal}
    >
      <div
        className={`${Style.curtain_textures_wrap} h-[calc(100vh_-_330px)] overflow-auto`}
      >
        <div className="texture-gallery grid grid-cols-3 gap-3">
          {textures?.map((texture, i) => {
            return (
              <figure
                className={`${
                  selectedTexture?.curtain === texture
                    ? "border border-[#333] p-1.5"
                    : ""
                } texture-item cursor-pointer transition-all duration-300 ease-out`}
                key={i}
                onClick={() =>
                  setSelectedTexture((prevState) => ({
                    ...prevState,
                    curtain: texture,
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
        {selectedTexture?.curtain?.name}
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

export default CurtainTexturesModal;
