"use client";

import React, { useRef } from "react";
import { MainLogo } from "./icons";
import gsap from "gsap";
import { MenuButton } from "@/app/components/menuButton";
import Link from "next/link";

export const Header = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const onLogoEnter = () => {
    const currColor = logoRef.current?.getAttribute("data-color");
    const logoSvg = logoRef.current?.firstChild?.firstChild;

    if (typeof currColor !== "string" || !logoSvg) {
      return;
    }

    const nextColor =
      currColor === "#a6e2e3"
        ? "#8566f6"
        : currColor === "#8566f6"
          ? "#ed7c50"
          : currColor === "#ed7c50"
            ? "#f6c343"
            : currColor === "#f6c343"
              ? "#a6ff4f"
              : currColor === "#a6ff4f"
                ? "#119eee"
                : currColor === "#119eee"
                  ? "#bb06f6"
                  : currColor === "#bb06f6"
                    ? "#da1c50"
                    : currColor === "#da1c50"
                      ? "#33d121"
                      : currColor === "#33d121"
                        ? "#a6e2e3" // default value
                        : "#a6e2e3"; // default value

    logoRef.current?.setAttribute("data-color", nextColor);
    gsap.to(logoSvg, { fill: currColor, duration: 0.2, ease: "power1.out" });
  };
  const onLogoLeave = () => {
    const logoSvg = logoRef.current?.firstChild?.firstChild;

    if (!logoSvg) {
      return;
    }

    gsap.to(logoSvg, {
      fill: "#282829",
      duration: 0.2,
      ease: "power1.out",
    });
  };

  return (
    <div className="header  min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container  flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
          <MenuButton>
            <Link href="/menu">Menu</Link>
          </MenuButton>
          <div
            className="header_logo  pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16 "
            data-color="#a6e2e3"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <MainLogo />
          </div>
          <MenuButton>Contact</MenuButton>
        </div>
      </div>
    </div>
  );
};
