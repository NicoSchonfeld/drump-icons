"use client";

import React, { useState, useEffect, type MouseEvent } from "react";
import Image from "next/image";

import IconSectionComponent from "@/components/IconSectionComponent";

import Luz from "../../public/luz.svg";

import { motion } from "framer-motion";

const App: React.FC = () => {
  const style =
    "w-4 h-4 rounded-full bg-white fixed top-0 left-0 pointer-events-none z-10";

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window?.addEventListener("mousemove", mouseMove);

    return () => {
      window?.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },

    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <main className="relative w-full h-auto bg-indigo-950">
      <motion.div
        variants={variants}
        initial={false}
        animate={cursorVariant}
        className={style}
      ></motion.div>

      <div className="w-full h-full container mx-auto p-20">
        <section className="w-full h-full flex flex-col items-center justify-center gap-5 p-20">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="bg-clip-text text-transparent bg-gradient-to-t from-indigo-200  to-white z-[1] text-8xl font-bold"
          >
            Drump Icons
          </h1>
          <p className="text-center text-gray-600 z-[1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ut,
            maiores.
          </p>
        </section>

        <IconSectionComponent />
      </div>

      <Image
        src={Luz}
        alt="Background"
        width={1200}
        height={1200}
        className="fixed inset-0 w-screen h-screen object-cover"
      />
    </main>
  );
};

export default App;
