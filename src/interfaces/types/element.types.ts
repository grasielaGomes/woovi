import { HTMLAttributes } from "react";
import { CardMediaTypeMap, SvgIconTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";

export type DivAttributes = HTMLAttributes<HTMLDivElement>;

export type IconAttributes = DefaultComponentProps<SvgIconTypeMap<{}, "svg">>;

export type ImageAttributes = DefaultComponentProps<CardMediaTypeMap<{}, "img">>;
