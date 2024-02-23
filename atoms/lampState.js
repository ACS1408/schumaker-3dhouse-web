import { atom } from "recoil";

const lampState = atom({
  key: "lampState",
  default: {
    lamp_living: false,
    lamp_dining: false,
  },
});

export default lampState;
