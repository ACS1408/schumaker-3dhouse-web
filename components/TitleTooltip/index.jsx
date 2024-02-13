import React, { useState } from "react";

const TitleTooltip = ({
  title,
  wrapClass,
  orientation,
  className,
  children,
  ...props
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const handleShowTooltip = () => {
    setIsTooltipVisible(true);
  };
  const handleHideTooltip = () => {
    setIsTooltipVisible(false);
  };
  return (
    <div
      className={`${wrapClass} relative`}
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {children}
      <div
        className={`${className} absolute ${
          orientation === "top"
            ? "-top-4 -translate-y-full"
            : "-bottom-4 translate-y-full"
        } left-1/2 -translate-x-1/2 text-[13px] w-max text-white bg-[#000000a5] border border-white px-3 py-1 rounded-full transition-all duration-300 ease-out ${
          isTooltipVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        {...props}
      >
        {title}
      </div>
    </div>
  );
};

export default TitleTooltip;
