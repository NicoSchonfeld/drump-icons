"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

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

type IconsArray = { id: number; icon: object; title: string };

const IconSectionComponent: React.FC = () => {
  const Icons: Array<IconsArray> = [
    {
      id: 1,
      icon: <HeartIcon solid={false} w="24" h="24" />,
      title: "heart",
    },
    {
      id: 2,
      icon: <BarsIcon solid={false} w="24" h="24" />,
      title: "bars",
    },
    {
      id: 3,
      icon: <XIcon solid={false} w="24" h="24" />,
      title: "x",
    },

    {
      id: 4,
      icon: <TrashIcon solid={false} w="24" h="24" />,
      title: "trash",
    },
    {
      id: 5,
      icon: <HomeIcon solid={false} w="24" h="24" />,
      title: "home",
    },
    {
      id: 6,
      icon: <ArchiveBoxIcon solid={false} w="24" h="24" />,
      title: "archive-box",
    },
    {
      id: 7,
      icon: <ArrowTrayIcon solid={false} w="24" h="24" />,
      title: "arrow-tray",
    },
    {
      id: 8,
      icon: <ArrowLeftIcon solid={false} w="24" h="24" />,
      title: "arrow-left",
    },
    {
      id: 9,
      icon: <ArrowRightIcon solid={false} w="24" h="24" />,
      title: "arrow-rigth",
    },
    {
      id: 10,
      icon: <ArrowDownIcon solid={false} w="24" h="24" />,
      title: "arrow-down",
    },
    {
      id: 11,
      icon: <ArrowUpIcon solid={false} w="24" h="24" />,
      title: "arrow-up",
    },
    {
      id: 12,
      icon: <ArrowbackLeftIcon solid={false} w="24" h="24" />,
      title: "arrow-back-left",
    },
    {
      id: 13,
      icon: <ArrowPointingOutIcon solid={false} w="24" h="24" />,
      title: "arrow-pointing-out",
    },
    {
      id: 14,
      icon: <ArrowPointingInIcon solid={false} w="24" h="24" />,
      title: "arrow-pointing-in",
    },
    {
      id: 15,
      icon: <BellAlertIcon solid={false} w="24" h="24" />,
      title: "bell-alert",
    },
    {
      id: 16,
      icon: <BellIcon solid={false} w="24" h="24" />,
      title: "bell",
    },
    {
      id: 17,
      icon: <BellSlashIcon solid={false} w="24" h="24" />,
      title: "bell-slash",
    },
    {
      id: 18,
      icon: <MoonIcon solid={false} w="24" h="24" />,
      title: "moon",
    },
    {
      id: 19,
      icon: <SunIcon solid={false} w="24" h="24" />,
      title: "sun",
    },
    {
      id: 20,
      icon: <XSolialIcon solid={false} w="24" h="24" />,
      title: "twitter",
    },
    {
      id: 21,
      icon: <TypeIcon solid={false} w="24" h="24" />,
      title: "type",
    },
    {
      id: 22,
      icon: <PlayIcon solid={false} w="24" h="24" />,
      title: "play",
    },
    {
      id: 23,
      icon: <PlusIcon solid={false} w="24" h="24" />,
      title: "plus",
    },
    {
      id: 24,
      icon: <PlusCircleIcon solid={false} w="24" h="24" />,
      title: "plus-circle",
    },
    {
      id: 25,
      icon: <EyeIcon solid={false} w="24" h="24" />,
      title: "eye",
    },
    {
      id: 26,
      icon: <EyeSlashIcon solid={false} w="24" h="24" />,
      title: "eye-slash",
    },
    {
      id: 27,
      icon: <MoreIcon solid={false} w="24" h="24" />,
      title: "more",
    },
    {
      id: 28,
      icon: <ClipboardIcon solid={false} w="24" h="24" />,
      title: "clipboard",
    },
    {
      id: 29,
      icon: <KeyIcon solid={false} w="24" h="24" />,
      title: "key",
    },
    {
      id: 30,
      icon: <ChatIcon solid={false} w="24" h="24" />,
      title: "chat",
    },
    {
      id: 31,
      icon: <CheckIcon solid={false} w="24" h="24" />,
      title: "check",
    },
    {
      id: 32,
      icon: <ChevronLeftIcon solid={false} w="24" h="24" />,
      title: "chevron-left",
    },
    {
      id: 33,
      icon: <ChevronRightIcon solid={false} w="24" h="24" />,
      title: "chevron-right",
    },
    {
      id: 34,
      icon: <SettingsIcon solid={false} w="24" h="24" />,
      title: "settings",
    },
    {
      id: 35,
      icon: <EditIcon solid={false} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 36,
      icon: <HelpIcon solid={false} w="24" h="24" />,
      title: "edit",
    },
    {
      id: 37,
      icon: <SearchIcon solid={false} w="24" h="24" />,
      title: "Search",
    },
    {
      id: 38,
      icon: <ShoppingCartIcon solid={false} w="24" h="24" />,
      title: "shopping-cart",
    },
    {
      id: 39,
      icon: <RotateIcon solid={false} w="24" h="24" />,
      title: "rotate",
    },
    {
      id: 40,
      icon: <MailIcon solid={false} w="24" h="24" />,
      title: "mail",
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
    <section className="flex flex-col gap-5">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-[1]">
        {Icons?.map((dato, index) => (
          <li
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IconSectionComponent;
