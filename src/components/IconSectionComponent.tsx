import React from "react";
import HeartIcon from "./icons/HeartIcon";
import BarsIcon from "./icons/BarsIcon";
import XIcon from "./icons/XIcon";
import TrashIcon from "./icons/TrashIcon";
import HomeIcon from "./icons/HomeIcon";

const IconSectionComponent: React.FC = () => {
  return (
    <>
      <h1>Icons</h1>
      <HeartIcon solid={true} w="24" h="24" />
      <BarsIcon solid={true} w="24" h="24" />
      <XIcon solid={true} w="24" h="24" />
      <TrashIcon solid={false} w="24" h="24" />
      <HomeIcon solid={true} w="24" h="24" />
    </>
  );
};

export default IconSectionComponent;
