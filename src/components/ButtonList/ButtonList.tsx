import { FC, HTMLAttributes } from "react";
import style from "./ButtonList.module.css";

interface ButtonList extends HTMLAttributes<HTMLDivElement> { };

const ButtonList: FC<ButtonList> = ({
  children,
  ...prevProps
}) => {
  return (
    <div className={style.ButtonList} {...prevProps}>
      {children}
    </div>
  )
}

export default ButtonList;
