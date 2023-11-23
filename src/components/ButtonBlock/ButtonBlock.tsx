import { FC, HTMLAttributes } from "react";
import style from "./ButtonBlock.module.css";
import Events from "components/Events/Events";

interface ButtonBlock extends HTMLAttributes<HTMLDivElement> {
};

const ButtonBlock: FC<ButtonBlock> = ({
  children
}) => {
  return (
    <div className={style.ButtonBlock}>
      <div className={style.ButtonBlock__inner}>

        <Events>

        </Events>

        <Events>

        </Events>

      </div>
    </div>
  )
}

export default ButtonBlock;
