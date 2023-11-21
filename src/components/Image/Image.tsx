import { FC, HTMLAttributes, useState } from "react";
import style from "./Image.module.css";
import { classes } from "engine";

interface IImage extends HTMLAttributes<HTMLImageElement> {
  src: string
};

const Image: FC<IImage> = ({
  src,
  ...others
}) => {

  const [isLoad, setLoad] = useState(true);

  const handlerLoad = () => setLoad(false);

  return (
    <div
      {...others}
      className={classes(style.Image, {
        [style["Image--show"]]: !isLoad,
        [style["Image--hide"]]: isLoad
      })}
    >
      <img
        alt={"image"}
        src={src}
        onLoad={handlerLoad}
      />
    </div>
  )
}

export default Image;
