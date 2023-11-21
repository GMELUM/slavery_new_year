import { FC, HTMLAttributes } from "react";
import style from "./Full.module.css";

interface Full extends HTMLAttributes<HTMLDivElement> {
};

const Full: FC<Full> = ({
  children
}) => {
  return (
    <div className={style.Full}>
      {children}
    </div>
  )
}

export default Full;
