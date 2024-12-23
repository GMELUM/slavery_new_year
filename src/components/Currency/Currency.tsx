import { FC, HTMLAttributes } from "react";

import {
  Cone,
  Elf,
  SnowFlake
} from "icons"

import style from "./Currency.module.css";
import { classes } from "engine";
import Events from "components/Events/Events";

interface ICurrency extends HTMLAttributes<HTMLDivElement> {
  button?: boolean;
  position: "left" | "right";
  type: "snowflake" | "elf" | "cone";
  value: number | string;
  size?: 1 | 2 | 3 | 4;
};

const Currency: FC<ICurrency> = ({
  button,
  position = "left",
  type = "cone",
  value,
  size = 3,
  onClick,
  ...prevProps
}) => {

  const iconSize = [16, 24, 32, 16][size - 1]

  return (
    <div className={classes(style["Currency"], {
      [style["Currency--left"]]: position === "left",
      [style["Currency--right"]]: position === "right",
      [style[`Currency--size_${size}`]]: true
    })} {...prevProps}>
      <div className={style["Currency__inner"]} onClick={onClick}>
        <div className={style["Currency__icon"]}>
          {type === "snowflake" && <SnowFlake width={iconSize} height={iconSize} />}
          {type === "cone" && <Cone width={iconSize} height={iconSize} />}
          {type === "elf" && <Elf width={iconSize} height={iconSize} />}
        </div>
        <div className={style["Currency__count"]}>
          {button && onClick && <Events
            className={style["Currency__button"]}
            onClick={onClick}
          >
            <div />
            <div />
          </Events>}
          <span>{value}</span>
        </div>
      </div>
    </div>
  )
}

export default Currency;
