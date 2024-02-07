import React from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";

const OptionsToggler = ({
  className,
  title,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className={`${className} options-toggler`}>
      <RadioGroup value={selectedOption} onChange={(e) => onChange(e)}>
        <RadioGroup.Label
          as="div"
          className="options-toggler__title text-base my-4"
        >
          {title}
        </RadioGroup.Label>
        <div className="flex items-center border border-[#c9c8c8] p-1">
          {options?.map((option, i) => {
            return (
              <RadioGroup.Option
                value={option}
                className="flex-auto cursor-pointer"
                key={i}
              >
                <div
                  className={`${
                    option?.value === selectedOption?.value
                      ? "border-black"
                      : "border-[#00000000]"
                  } border p-1 h-[42px] text-base flex items-center justify-center`}
                >
                  {option?.icon ? (
                    <Image
                      src={option?.label}
                      width={35}
                      height={35}
                      unoptimized
                      alt={option?.value}
                      className={`${option?.icon ? "invert" : ""}`}
                    />
                  ) : (
                    option?.label
                  )}
                </div>
              </RadioGroup.Option>
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

export default OptionsToggler;
