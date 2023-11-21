import { FC, HTMLAttributes } from "react";
import style from "./Centered.module.css";

interface Centered extends HTMLAttributes<HTMLDivElement> { };

const Centered: FC<Centered> = ({
  children
}) => {
  return (
    <div className={style.Centered}>
      <div className={style.Centered__inner}>
        {children}
      </div>
    </div>
  )
}

export default Centered;
