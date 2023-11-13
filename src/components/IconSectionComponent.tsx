"use client";

import React, { useState } from "react";
import HeartIcon from "./icons/HeartIcon";
import BarsIcon from "./icons/BarsIcon";
import XIcon from "./icons/XIcon";
import TrashIcon from "./icons/TrashIcon";
import HomeIcon from "./icons/HomeIcon";

type IconsArray = { id: number; icon: object };

const IconSectionComponent: React.FC = () => {
  const [changeIcon, setChangeIcon] = useState<boolean>(false);

  const Icons: Array<IconsArray> = [
    {
      id: 1,
      icon: <HeartIcon solid={changeIcon ? true : false} w="24" h="24" />,
    },
    {
      id: 2,
      icon: <BarsIcon solid={changeIcon ? true : false} w="24" h="24" />,
    },
    { id: 3, icon: <XIcon solid={changeIcon ? true : false} w="24" h="24" /> },
    {
      id: 4,
      icon: <TrashIcon solid={changeIcon ? true : false} w="24" h="24" />,
    },
    {
      id: 5,
      icon: <HomeIcon solid={changeIcon ? true : false} w="24" h="24" />,
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold">Icons</h1>

      <button
        onClick={() => setChangeIcon(!changeIcon)}
        className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none"
      >
        {changeIcon ? "Outline" : "Solid"}
      </button>

      <ul className="grid grid-cols-8 gap-20">
        {Icons?.map((dato) => (
          <li
            key={dato?.id}
            className="border flex items-center justify-center rounded-md w-32 h-32 hover:shadow transition-all"
          >
            <>{dato?.icon}</>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IconSectionComponent;
