import React from "react";
import ModalContainer from "../ModalContainer";
import OptionsToggler from "../OptionsToggler";
import { useRecoilState } from "recoil";
import roomSettingState from "@/atoms/roomSettingState";

const SettingsModal = ({ closeSettingsModal, show }) => {
  const [roomSetting, setRoomSettings] = useRecoilState(roomSettingState);
  return (
    <ModalContainer
      title="Settings"
      show={show}
      onClose={closeSettingsModal}
    >
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
        onChange={(e) =>
          setRoomSettings((prevState) => ({ ...prevState, time_of_day: e }))
        }
      />
    </ModalContainer>
  );
};

export default SettingsModal;
