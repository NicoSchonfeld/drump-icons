import React from "react";
import Image from "next/image";

import IconSectionComponent from "@/components/IconSectionComponent";

import Luz from "../../public/luz.svg";

const App: React.FC = () => {
  return (
    <main className="relative w-full h-auto bg-indigo-950">
      <div className="w-full h-full container mx-auto p-20">
        <section className="w-full h-full flex flex-col items-center justify-center gap-5 p-20">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-indigo-200  to-white z-[1] text-8xl font-bold">
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
