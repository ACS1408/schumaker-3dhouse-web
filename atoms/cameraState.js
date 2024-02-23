import { atom } from "recoil";

const cameraState = atom({
  key: "cameraState",
  default: {
    position: { x: 0.2, y: 0, z: -0.2 },
    rotation: { x: 0, y: 1.8, z: 0 },
  },
});

export default cameraState;
