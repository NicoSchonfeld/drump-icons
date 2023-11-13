import IconSectionComponent from "@/components/IconSectionComponent";
import Image from "next/image";
import React from "react";

const App: React.FC = () => {
  return (
    <main className="w-full h-auto bg-white relative">
      <div className="container mx-auto p-20">
        <IconSectionComponent />
      </div>
    </main>
  );
};

export default App;
