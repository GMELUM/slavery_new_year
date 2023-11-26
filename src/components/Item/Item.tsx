import { FC, HTMLAttributes, useMemo } from "react";
import {
  Events,
  Ratio,
  Snowfall,
  Text
} from "components";

import style from "./Item.module.css";

import {
  Box1,
  Box2,
  Box3,
  Smile1,
  Smile2,
  Smile3,
  Frame,
  Gingerbread,
  Jam,
  SnowFlake
} from "icons";

interface Item extends HTMLAttributes<HTMLDivElement> {
  count: number;
  title: string;
};

const Item: FC<Item> = ({
  count,
  title,
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

          {count && <div className={style.Item__price}>
            <Text size={"normal"} weight={"bold"}>{count}</Text>
            <SnowFlake />
          </div>}

        </div>
      </div>
    </Events>
  )
}

export default Item;
