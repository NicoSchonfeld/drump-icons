"use client";

import React, { useState } from "react";
import HeartIcon from "./icons/HeartIcon";
import BarsIcon from "./icons/BarsIcon";
import XIcon from "./icons/XIcon";
import TrashIcon from "./icons/TrashIcon";
import HomeIcon from "./icons/HomeIcon";
import ArchiveBoxIcon from "./icons/ArchiveBoxIcon";
import ArrowTrayIcon from "./icons/ArrowTrayIcon";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import ArrowbackLeftIcon from "./icons/ArrowbackLeftIcon";
import ArrowPointingOutIcon from "./icons/ArrowPointingOutIcon";
import ArrowPointingInIcon from "./icons/ArrowPointingInIcon";
import BellAlertIcon from "./icons/BellAlertIcon";
import BellIcon from "./icons/Bellicon";
import BellSlashIcon from "./icons/BellSlashIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import XSolialIcon from "./icons/XSocialIcon";
import TypeIcon from "./icons/TypeIcon";
import PlayIcon from "./icons/PlayIcon";
import PlusIcon from "./icons/PlusIcon";
import PlusCircleIcon from "./icons/PlusCircleIcon";
import EyeIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";
import MoreIcon from "./icons/MoreIcon";
import ClipboardIcon from "./icons/ClipboardIcon";
import KeyIcon from "./icons/KeyIcon";
import ChatIcon from "./icons/ChatIcon";
import CheckIcon from "./icons/CheckIcon";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";

import { motion } from "framer-motion";
import SettingsIcon from "./icons/SettingsIcon";
import EditIcon from "./icons/EditIcon";
import HelpIcon from "./icons/HelpIcon";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import RotateIcon from "./icons/RotateIcon";
import MailIcon from "./icons/MailIcon";

type IconsArray = { id: number; icon: object; title: string };

const IconSectionComponent: React.FC = () => {
  const [changeIcon, setChangeIcon] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);

  const Icons: Array<IconsArray> = [
    {
      id: 1,
      icon: <HeartIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "heart",
    },
    {
      id: 2,
      icon: <BarsIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "bars",
    },
    {
      id: 3,
      icon: <XIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "x",
    },

    {
      id: 4,
      icon: <TrashIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "trash",
    },
    {
      id: 5,
      icon: <HomeIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "home",
    },
    {
      id: 6,
      icon: <ArchiveBoxIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "archive-box",
    },
    {
      id: 7,
      icon: <ArrowTrayIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "arrow-tray",
    },
    {
      id: 8,
      icon: <ArrowLeftIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "arrow-left",
    },
    {
      id: 9,
      icon: <ArrowRightIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "arrow-rigth",
    },
    {
      id: 10,
      icon: <ArrowDownIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "arrow-down",
    },
    {
      id: 11,
      icon: <ArrowUpIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "arrow-up",
    },
    {
      id: 12,
      icon: (
        <ArrowbackLeftIcon solid={changeIcon ? true : false} w="24" h="24" />
      ),
      title: "arrow-back-left",
    },
    {
      id: 13,
      icon: (
        <ArrowPointingOutIcon solid={changeIcon ? true : false} w="24" h="24" />
      ),
      title: "arrow-pointing-out",
    },
    {
      id: 14,
      icon: (
        <ArrowPointingInIcon solid={changeIcon ? true : false} w="24" h="24" />
      ),
      title: "arrow-pointing-in",
    },
    {
      id: 15,
      icon: <BellAlertIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "bell-alert",
    },
    {
      id: 16,
      icon: <BellIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "bell",
    },
    {
      id: 17,
      icon: <BellSlashIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "bell-slash",
    },
    {
      id: 18,
      icon: <MoonIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "moon",
    },
    {
      id: 19,
      icon: <SunIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "sun",
    },
    {
      id: 20,
      icon: <XSolialIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "twitter",
    },
    {
      id: 21,
      icon: <TypeIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "type",
    },
    {
      id: 22,
      icon: <PlayIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "play",
    },
    {
      id: 23,
      icon: <PlusIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "plus",
    },
    {
      id: 24,
      icon: <PlusCircleIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "plus-circle",
    },
    {
      id: 25,
      icon: <EyeIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "eye",
    },
    {
      id: 26,
      icon: <EyeSlashIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "eye-slash",
    },
    {
      id: 27,
      icon: <MoreIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "more",
    },
    {
      id: 28,
      icon: <ClipboardIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "clipboard",
    },
    {
      id: 29,
      icon: <KeyIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "key",
    },
    {
      id: 30,
      icon: <ChatIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "chat",
    },
    {
      id: 31,
      icon: <CheckIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "check",
    },
    {
      id: 32,
      icon: <ChevronLeftIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "chevron-left",
    },
    {
      id: 33,
      icon: (
        <ChevronRightIcon solid={changeIcon ? true : false} w="24" h="24" />
      ),
      title: "chevron-right",
    },
    {
      id: 34,
      icon: <SettingsIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "settings",
    },
    {
      id: 35,
      icon: <EditIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 36,
      icon: <HelpIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 37,
      icon: <SearchIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "Search",
    },
    {
      id: 38,
      icon: (
        <ShoppingCartIcon solid={changeIcon ? true : false} w="24" h="24" />
      ),
      title: "shopping-cart",
    },
    {
      id: 39,
      icon: <RotateIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "rotate",
    },
    {
      id: 40,
      icon: <MailIcon solid={changeIcon ? true : false} w="24" h="24" />,
      title: "mail",
    },
  ];

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-white">Drump Icons</h1>

      <button
        onClick={() => setChangeIcon(!changeIcon)}
        className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none"
      >
        {changeIcon ? "Outline" : "Solid"}
      </button>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {Icons?.map((dato, index) => (
          <li
            className="flex items-center justify-center flex-col gap-2"
            key={dato?.id}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex cursor-pointer text-white items-center justify-center rounded-md w-full h-40 shadow bg-gradient-to-bl from-white/10 to-white/5 border-t border-white/20 ransition-all"
            >
              <>{dato?.icon}</>
            </motion.div>

            <p className="font-light text-[12px] text-gray-500 text-center">
              {dato?.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IconSectionComponent;
