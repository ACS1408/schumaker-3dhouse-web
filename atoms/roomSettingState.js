import { atom } from "recoil";

const roomSettingState = atom({
  key: "roomSettingState",
  default: {
    layout: { label: "LIVING", value: "living" },
    environment: { icon: true, label: "/icons/icon-beach.svg", value: "beach" },
    time_of_day: {
      icon: true,
      label: "/icons/icon-morning.svg",
      value: "morning",
    },
  },
});

export default roomSettingState;
