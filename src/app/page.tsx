import React from "react";
import Image from "next/image";

import IconSectionComponent from "@/components/IconSectionComponent";

import Luz from "../../public/luz.svg";
import HomePage from "@/components/HomePage";

const App: React.FC = () => {
  return (
    <main className="relative w-full h-auto bg-blue-950">
      <div className="w-full h-full container mx-auto p-10 lg:p-20">
        <HomePage />
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
