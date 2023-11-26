import { FC, HTMLAttributes } from "react";
import style from "./ButtonBlock.module.css";

interface ButtonBlock extends HTMLAttributes<HTMLDivElement> {
};

const ButtonBlock: FC<ButtonBlock> = ({
  children
}) => {
  return (
    <div className={style.ButtonBlock}>
      <div className={style.ButtonBlock__inner}>
        {children}
      </div>
    </div>
  )
}

export default ButtonBlock;
