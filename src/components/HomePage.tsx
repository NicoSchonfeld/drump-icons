"use client";

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-5 pt-20 py-20">
      <span className=" text-white text-center font-bold text-lg shadow-lg shadow-black/40 bg-gradient-to-bl to-indigo-950 from-blue-50/20 border border-white/20 rounded-md px-20 py-2 z-[1]">
        Muy pronto
      </span>

      <h1 className="bg-clip-text text-center text-transparent bg-gradient-to-t from-blue-200 to-white z-[1] text-5xl md:text-6xl lg:text-8xl font-bold">
        Drump Icons
      </h1>
      <p className="text-center text-sm lg:text-base text-gray-600 z-[1]">
        ¡Durmp te regala los mejores íconos para usar en tu web! <br /> Puedes
        elegir entre copiar el componente de React o el SVG.
      </p>
    </section>
  );
};

export default HomePage;
