import { FC, HTMLAttributes } from "react";
import {
  Events
} from "components";

import style from "./VoteItem.module.css";

import {
  Cone,
  Elf,
  SnowFlake
} from "icons";
import { decWord } from "engine";

interface VoteItem extends HTMLAttributes<HTMLDivElement> {
  elf?: number;
  cone?: number;
  snowflake?: number;
  price: number;
};

const VoteItem: FC<VoteItem> = ({
  elf,
  cone,
  price,
  snowflake,
  children,
  ...prevProps
}) => {
  return (
    <Events className={style.VoteItem} {...prevProps}>
      <div className={style.VoteItem__outer}>
        <div className={style.VoteItem__inner}>
          <div className={style.VoteItem__balance}>
            <div className={style.VoteItem__counts}>
              {elf && <div className={style.VoteItem__value}>
                {elf} <Elf />
              </div>}
              {cone && <div className={style.VoteItem__value}>
                {cone} <Cone />
              </div>}
              {snowflake && <div className={style.VoteItem__value}>
                {snowflake} <SnowFlake />
              </div>}
            </div>
          </div>
          <div className={style.VoteItem__sepparator}><span /></div>
          <div className={style.VoteItem__price}>
            <span>{price}</span>
            <span>{decWord(price, ["голос", "голоса", "голосов"])}</span>
          </div>
        </div>
      </div>
    </Events>
  )
}

export default VoteItem;
