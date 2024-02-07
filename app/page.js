"use client";
import HomeRoomWidget from "@/widgets/HomeRoomWidget";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <HomeRoomWidget />
    </RecoilRoot>
  );
}
