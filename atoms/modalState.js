import { atom } from "recoil";

const modalState = atom({
  key: "modalState",
  default: {
    settings: false,
    wall: false,
    rug: false,
    curtain: false,
    upholstery: false,
  },
});

export default modalState;
