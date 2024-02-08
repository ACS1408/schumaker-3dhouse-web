import { atom } from "recoil";

const textureState = atom({
  key: "textureState",
  default: {
    wall: {
      id: 1,
      name: "Coromandel",
      image: "/images/textures/wall/coromandel.jpg",
    },
    rug: {
      id: 1,
      name: "Fitzgerald",
      image: "/images/textures/rug/fitzgerald.jpg",
    },
  },
});

export default textureState;
