import React from "react";
import Style from "./LoadingScreen.module.scss";
import Image from "next/image";

const LoadingScreen = () => {
  const classes = {
    loading_screen:
      "fixed w-[100vw] h-svh top-0 left-0 z-50 bg-white flex flex-col justify-center items-center",
    loading_content: "text-center z-[2] text-white ff-chronicle-display",
    loading_image: "absolute size-full blur-[14px] brightness-[0.6]",
    loading_text: {
      default: "",
      line_1: "text-3xl mb-5 tracking-wider",
      line_2: "text-8xl leading-[1.1]",
    },
    progress: "absolute bottom-0 left-0 w-full",
    progress_text: "text-center mb-2 text-white",
    progress_bar: {
      default: "relative h-[6px] bg-[#202020]",
      after:
        "after:content-[''] after:w-full after:h-[10px] after:bg-[#fad915] after:absolute after:top-0 after:left-0 after:origin-left",
    },
  };
  return (
    <div className={classes.loading_screen}>
      <figure className={classes.loading_image}>
        <Image
          src="/images/loading-screen.jpg"
          fill
          alt="loading-screen-image"
          sizes="100vw"
          quality={90}
        />
      </figure>
      <div className={classes.loading_content}>
        <div className={classes.loading_text.default}>
          <div className={classes.loading_text.line_1}>WELCOME TO THE</div>
          <div className={classes.loading_text.line_2}>SCHUMACHER</div>
          <div className={classes.loading_text.line_2}>HOUSE</div>
        </div>
      </div>
      <div className={classes.progress}>
        <div className={classes.progress_text}>Loading Scene...</div>
        <div
          className={`${Style.progress_anim} ${classes.progress_bar.default} ${classes.progress_bar.after}`}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
