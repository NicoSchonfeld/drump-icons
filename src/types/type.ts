import { type SVGAttributes } from "react";

export type IconsType = {
  solid: boolean;
  w: string | any;
  h: string | any;
};

export type SvgType = SVGAttributes<HTMLOrSVGElement>;

export type Props = IconsType & SvgType;
