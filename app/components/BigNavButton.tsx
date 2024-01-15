"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Player } from "@lottiefiles/react-lottie-player";

interface BigNavButtonProps {
  name: string;
  number: string;
  translateX: string;
  pathName: string;
}

const BigNavButton: React.FC<BigNavButtonProps> = ({
  name,
  number,
  translateX,
  pathName,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef<Player>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay,
      );
    });

    tl.add(() => likeCrazyLottieRef?.current?.play(), 0.8).to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2,
    );

    return () => {};
  }, []);

  useEffect(() => {
    // Button hover animation
    gsap.to(buttonRef.current, {
      duration: 1.3,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      scaleX: 1.55,
      scaleY: 1.55,
    });
  }, []);

  return (
    <motion.div
      ref={buttonRef}
      className=" text-white font-bold text-center w-4/12 hover:w-full overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/${pathName}`} legacyBehavior={true}>
        <a className="text-2xl py-1">
          <div className="flex flex-row gap-2">
            {/*default only*/}
            {!isHovered && (
              <div
                style={{ transform: `translateX(${translateX})` }}
                className="group flex  h-full cursor-pointer items-center whitespace-nowrap"
              >
                <h2 className="text-5xl">{name} &nbsp;</h2>
                <p className="absolute -right-5 top-0">{number}</p>
              </div>
            )}
            {/*hover only*/}
            {isHovered && (
              <div className="group flex font-serif flex-row  h-full cursor-pointer items-center whitespace-nowrap">
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
                <h2 className="text-5xl group-hover:animate-loopL">
                  {name} &nbsp;
                </h2>
              </div>
            )}
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default BigNavButton;
