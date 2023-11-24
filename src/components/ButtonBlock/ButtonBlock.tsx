import { FC, HTMLAttributes } from "react";
import style from "./ButtonBlock.module.css";

import { Button } from "components"

interface ButtonBlock extends HTMLAttributes<HTMLDivElement> {
};

const ButtonBlock: FC<ButtonBlock> = ({
  children
}) => {
  return (
    <div className={style.ButtonBlock}>
      <div className={style.ButtonBlock__inner}>

        <Button
          streched
          color={"#fe570c"}
          mode={"blur"}
        >Украсить Ёлку</Button>

        <Button
          color={"#8cbae7"}
          mode={"blur"}
          size={"circle"}
        >?</Button>

      </div>
    </div>
  )
}

export default ButtonBlock;
