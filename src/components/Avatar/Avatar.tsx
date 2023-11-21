import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./Avatar.module.css";
import { classes } from "engine";
import { Image } from "components";

interface IAvatar extends HTMLAttributes<HTMLDivElement> {
  src: string;
  size?: "x" | "l" | "m" | "auto",
  frame?: ReactNode;
};

const Avatar: FC<IAvatar> = ({
  size = "x",
  frame,
  ...others
}) => {
  return (
    <div className={classes(style.Avatar, {
      [style["Avatar--size-x"]]: size === "x",
      [style["Avatar--size-l"]]: size === "l",
      [style["Avatar--size-m"]]: size === "m",
      [style["Avatar--size-auto"]]: size === "auto",
    })}>
      {frame && <div className={style.Avatar__frame}>{frame}</div>}
      <div className={style.Avatar__inner}>
        <Image {...others} />
      </div>
    </div>
  )
}

export default Avatar;
