import { FC, HTMLAttributes } from "react";
import style from "./Flex.module.css";

interface Flex extends HTMLAttributes<HTMLDivElement> { };

const Flex: FC<Flex> = ({
  children
}) => {
  return (
    <div className={style.Flex}>
      {children}
    </div>
  )
}

export default Flex;
