"use client";

import { MouseEvent, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

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
import SettingsIcon from "./icons/SettingsIcon";
import EditIcon from "./icons/EditIcon";
import HelpIcon from "./icons/HelpIcon";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import RotateIcon from "./icons/RotateIcon";
import MailIcon from "./icons/MailIcon";
import UserIcon from "./icons/UserIcon";
import MapIcon from "./icons/MapIcon";
import ShareIcon from "./icons/ShareIcon";
import VerifiedIcon from "./icons/VerifiedIcon";

type IconsArray = { id: number; icon: object; title: string };

type SelectedType = number | null;

const IconSectionComponent: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<boolean>(false);

  const Icons: Array<IconsArray> = [
    {
      id: 1,
      icon: <HeartIcon solid={currentColor} w="24" h="24" />,
      title: "heart",
    },
    {
      id: 2,
      icon: <BarsIcon solid={currentColor} w="24" h="24" />,
      title: "bars",
    },
    {
      id: 3,
      icon: <XIcon solid={currentColor} w="24" h="24" />,
      title: "x",
    },

    {
      id: 4,
      icon: <TrashIcon solid={currentColor} w="24" h="24" />,
      title: "trash",
    },
    {
      id: 5,
      icon: <HomeIcon solid={currentColor} w="24" h="24" />,
      title: "home",
    },
    {
      id: 6,
      icon: <ArchiveBoxIcon solid={currentColor} w="24" h="24" />,
      title: "archive-box",
    },
    {
      id: 7,
      icon: <ArrowTrayIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-tray",
    },
    {
      id: 8,
      icon: <ArrowLeftIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-left",
    },
    {
      id: 9,
      icon: <ArrowRightIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-rigth",
    },
    {
      id: 10,
      icon: <ArrowDownIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-down",
    },
    {
      id: 11,
      icon: <ArrowUpIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-up",
    },
    {
      id: 12,
      icon: <ArrowbackLeftIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-back-left",
    },
    {
      id: 13,
      icon: <ArrowPointingOutIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-pointing-out",
    },
    {
      id: 14,
      icon: <ArrowPointingInIcon solid={currentColor} w="24" h="24" />,
      title: "arrow-pointing-in",
    },
    {
      id: 15,
      icon: <BellAlertIcon solid={currentColor} w="24" h="24" />,
      title: "bell-alert",
    },
    {
      id: 16,
      icon: <BellIcon solid={currentColor} w="24" h="24" />,
      title: "bell",
    },
    {
      id: 17,
      icon: <BellSlashIcon solid={currentColor} w="24" h="24" />,
      title: "bell-slash",
    },
    {
      id: 18,
      icon: <MoonIcon solid={currentColor} w="24" h="24" />,
      title: "moon",
    },
    {
      id: 19,
      icon: <SunIcon solid={currentColor} w="24" h="24" />,
      title: "sun",
    },
    {
      id: 20,
      icon: <XSolialIcon solid={currentColor} w="24" h="24" />,
      title: "twitter",
    },
    {
      id: 21,
      icon: <TypeIcon solid={currentColor} w="24" h="24" />,
      title: "type",
    },
    {
      id: 22,
      icon: <PlayIcon solid={currentColor} w="24" h="24" />,
      title: "play",
    },
    {
      id: 23,
      icon: <PlusIcon solid={currentColor} w="24" h="24" />,
      title: "plus",
    },
    {
      id: 24,
      icon: <PlusCircleIcon solid={currentColor} w="24" h="24" />,
      title: "plus-circle",
    },
    {
      id: 25,
      icon: <EyeIcon solid={currentColor} w="24" h="24" />,
      title: "eye",
    },
    {
      id: 26,
      icon: <EyeSlashIcon solid={currentColor} w="24" h="24" />,
      title: "eye-slash",
    },
    {
      id: 27,
      icon: <MoreIcon solid={currentColor} w="24" h="24" />,
      title: "more",
    },
    {
      id: 28,
      icon: <ClipboardIcon solid={currentColor} w="24" h="24" />,
      title: "clipboard",
    },
    {
      id: 29,
      icon: <KeyIcon solid={currentColor} w="24" h="24" />,
      title: "key",
    },
    {
      id: 30,
      icon: <ChatIcon solid={currentColor} w="24" h="24" />,
      title: "chat",
    },
    {
      id: 31,
      icon: <CheckIcon solid={currentColor} w="24" h="24" />,
      title: "check",
    },
    {
      id: 32,
      icon: <ChevronLeftIcon solid={currentColor} w="24" h="24" />,
      title: "chevron-left",
    },
    {
      id: 33,
      icon: <ChevronRightIcon solid={currentColor} w="24" h="24" />,
      title: "chevron-right",
    },
    {
      id: 34,
      icon: <SettingsIcon solid={currentColor} w="24" h="24" />,
      title: "settings",
    },
    {
      id: 35,
      icon: <EditIcon solid={currentColor} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 36,
      icon: <HelpIcon solid={currentColor} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 37,
      icon: <SearchIcon solid={currentColor} w="24" h="24" />,
      title: "Search",
    },
    {
      id: 38,
      icon: <ShoppingCartIcon solid={currentColor} w="24" h="24" />,
      title: "shopping-cart",
    },
    {
      id: 39,
      icon: <RotateIcon solid={currentColor} w="24" h="24" />,
      title: "rotate",
    },
    {
      id: 40,
      icon: <MailIcon solid={currentColor} w="24" h="24" />,
      title: "mail",
    },
    {
      id: 41,
      icon: <UserIcon solid={currentColor} w="24" h="24" />,
      title: "user",
    },
    {
      id: 42,
      icon: <MapIcon solid={currentColor} w="24" h="24" />,
      title: "map",
    },
    {
      id: 43,
      icon: <ShareIcon solid={currentColor} w="24" h="24" />,
      title: "share",
    },
    {
      id: 44,
      icon: <VerifiedIcon solid={currentColor} w="24" h="24" />,
      title: "verified",
    },
  ];

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative flex flex-col gap-5 overflow-hidden">
      <div className=" w-full flex items-center justify-center pb-10">
        <div className="z-[1] flex items-center justify-center gap-3 w-20 h-10 border border-white/20 rounded-full ">
          <div
            onClick={() => {
              setCurrentColor(true);
            }}
            className={
              currentColor
                ? `bg-white cursor-pointer w-5 h-5 rounded-full`
                : `bg-white/20 cursor-pointer w-5 h-5 rounded-full`
            }
          ></div>
          <div
            onClick={() => {
              setCurrentColor(false);
            }}
            className={
              currentColor
                ? `cursor-pointer w-5 h-5 rounded-full bg-transparent border border-white/20`
                : `cursor-pointer w-5 h-5 rounded-full bg-transparent border border-white`
            }
          ></div>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-[1]">
        {Icons?.map((dato) => (
          <motion.li
            className="flex items-center justify-center flex-col gap-2"
            key={dato?.id}
          >
            <div
              className="z-[1] flex cursor-pointer text-white w-full items-center justify-center group relative max-w-md rounded-xl border-t border-white/20 bg-gradient-to-bl from-white/10 to-white/5 px-8 py-16 shadow-2xl"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
                  radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(225, 225, 225, 0.1),
                  transparent 80%
            )
          `,
                }}
              />

              <div className="z-[2]">
                <>{dato?.icon}</>
              </div>
            </div>

            <p className="font-light text-[12px] text-gray-400 text-center">
              {dato?.title}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default IconSectionComponent;
