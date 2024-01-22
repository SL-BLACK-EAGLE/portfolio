import BigNavButton from "@/app/components/BigNavButton";
import { NAV_BUTTONS } from "@/constants/constants";
import React from "react";

const NavButtonsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
      {NAV_BUTTONS.map((button, index) => (
        <BigNavButton
          key={index}
          name={button.name}
          pathName={button.pathName}
          number={button.number}
          translateX={`${
            index === 0
              ? -30
              : 0 || index === 2
                ? -30
                : 0 || index === 4
                  ? -30
                  : 0 || index === 1
                    ? 30
                    : 0 || index === 3
                      ? 50
                      : 0 || index === 5
                        ? 30
                        : 0
          }%`}
        />
      ))}
    </div>
  );
};

export default NavButtonsPage;
