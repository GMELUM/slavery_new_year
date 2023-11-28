import { FC, HTMLAttributes, useMemo } from "react";
import {
  Currency,
  Events,
  Ratio,
  Snowfall,
  Text
} from "components";

import style from "./Item.module.css";

import {
  Cone,
  Elf,
  SnowFlake
} from "icons";

interface Item extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  title: string;
  badge?: string;
  snowflake?: number;
  elf?: number;
  cone?: number;
};

const Item: FC<Item> = ({
  count,
  title,
  badge,
  elf,
  cone,
  snowflake,
  children,
  ...prevProps
}) => {
  return (
    <Events className={style.Item} {...prevProps}>
      <div className={style.Item__outer}>
        <div className={style.Item__inner}>

          {title && <div className={style.Item__title}>
            <Text size={"normal"} weight={"bold"}>{title}</Text>
          </div>}

          <div className={style.Item__price}>
            {!!elf && <div className={style.Item__element}>
              <span>{elf}</span>
              <Elf />
            </div>}
            {!!cone && <div className={style.Item__element}>
              <span>{cone}</span>
              <Cone />
            </div>}
            {!!snowflake && <div className={style.Item__element}>
              <span>{snowflake}</span>
              <SnowFlake />
            </div>}
          </div>

          {badge && <div className={style.Item__badge}><span>{badge}</span></div>}

        </div>
      </div>
    </Events>
  )
}

export default Item;
