import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./BalanceContainer.module.css";
import { classes } from "engine";
import { Image } from "components";

interface BalanceContainer extends HTMLAttributes<HTMLDivElement> { };

const BalanceContainer: FC<BalanceContainer> = ({
  children,
  ...others
}) => {
  return (
    <div className={style.BalanceContainer}>
      <div className={style.BalanceContainer__inner}>
        {children}
      </div>
    </div>
  )
}

export default BalanceContainer;
