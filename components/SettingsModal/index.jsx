import React from "react";
import ModalContainer from "../ModalContainer";
import OptionsToggler from "../OptionsToggler";
import { useRecoilState } from "recoil";
import roomSettingState from "@/atoms/roomSettingState";
import lampState from "@/atoms/lampState";

const SettingsModal = ({ closeSettingsModal, show }) => {
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);
  const [lampSetting, setLampSettings] = useRecoilState(lampState);
  return (
    <ModalContainer title="Settings" show={show} onClose={closeSettingsModal}>
      <OptionsToggler
        title="Room"
        options={[
          { label: "LIVING", value: "living" },
          { label: "DINING", value: "dining" },
        ]}
        selectedOption={roomSetting?.layout}
        onChange={(e) =>
          setRoomSettings((prevState) => ({ ...prevState, layout: e }))
        }
      />
      <OptionsToggler
        title="Environment"
        options={[
          { icon: true, label: "/icons/icon-beach.svg", value: "beach" },
          { icon: true, label: "/icons/icon-forest.svg", value: "forest" },
        ]}
        selectedOption={roomSetting?.environment}
        onChange={(e) =>
          setRoomSettings((prevState) => ({ ...prevState, environment: e }))
        }
      />
      <OptionsToggler
        title="Time of day"
        options={[
          { icon: true, label: "/icons/icon-morning.svg", value: "morning" },
          {
            icon: true,
            label: "/icons/icon-afternoon.svg",
            value: "afternoon",
          },
          { icon: true, label: "/icons/icon-evening.svg", value: "night" },
        ]}
        selectedOption={roomSetting?.time_of_day}
        onChange={(e) => {
          setRoomSettings((prevState) => ({ ...prevState, time_of_day: e }));
          e?.value === "morning"
            ? setLampSettings({
                lamp_living: false,
                lamp_dining: false,
              })
            : setLampSettings({
                lamp_living: true,
                lamp_dining: true,
              });
        }}
      />
    </ModalContainer>
  );
};

export default SettingsModal;
