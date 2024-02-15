import { atom } from "recoil";
import { textures as wallTextures } from "@/data/wallTextures";
import { textures as rugTextures } from "@/data/rugTextures";
import { textures as curtainTextures } from "@/data/curtainTextures";
import { textures as upholsteryTextures } from "@/data/upholsteryTextures";

const textureState = atom({
  key: "textureState",
  default: {
    wall: wallTextures[0],
    rug: rugTextures[0],
    curtain: curtainTextures[0],
    upholstery: upholsteryTextures[0],
    lamp_living: false,
    lamp_dining: false,
  },
});

export default textureState;
