"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ClipboardIcon from "./icons/ClipboardIcon";
import CheckIcon from "./icons/CheckIcon";

const HomePage = () => {
  const [copy, setCopy] = useState<boolean>(false);

  const copyInstall = "npm install drump-icons";

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3500);
  }, [copy]);

  const toggleCopy = () => {
    setCopy(true);
    typeof window !== "undefined" &&
      window.navigator.clipboard.writeText(copyInstall);
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-5 pt-20 py-20">
      {/*  <span className=" text-white text-center font-bold text-lg shadow-lg shadow-black/40 bg-gradient-to-bl to-indigo-950 from-blue-50/20 border border-white/20 rounded-md px-20 py-2 z-[1]">
        Muy pronto
      </span> */}

      <h1 className="bg-clip-text text-center text-transparent bg-gradient-to-t from-blue-200 to-white z-[1] text-5xl md:text-6xl lg:text-8xl font-bold">
        Drump Icons
      </h1>
      <p className="text-center text-sm lg:text-base text-gray-500 z-[1]">
        ¡Durmp te regala los mejores íconos para usar en tus proyectos de React!
        <br />
        Compatible con Tailwind css.
      </p>

      <div className=" w-full flex items-center justify-center mt-10">
        <code
          className={`z-[1] relative hover:shadow-md hover:shadow-black transition-all flex items-center justify-between text-sm text-white px-10 gap-3 w-80 h-12 border border-white/20 rounded-lg ${
            copy ? "bg-indigo-500/20" : "bg-black/40"
          }`}
        >
          <p>
            <span className="text-indigo-500">$ npm install</span> drump-icons
          </p>
          {copy ? (
            <CheckIcon
              solid={true}
              w={14}
              h={14}
              className="text-white absolute right-4 cursor-pointer"
            />
          ) : (
            <ClipboardIcon
              solid={false}
              w={14}
              h={14}
              className="text-white absolute right-4 cursor-pointer"
              onClick={toggleCopy}
            />
          )}
        </code>
      </div>
    </section>
  );
};

export default HomePage;
