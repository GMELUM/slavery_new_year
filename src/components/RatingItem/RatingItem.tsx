import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./RatingItem.module.css";
import { classes } from "engine";

import Events from "components/Events/Events";
import Avatar from "components/Avatar/Avatar";

interface IRatingItem extends HTMLAttributes<HTMLElement> {
  position: number;
  name: string;
  image: string;
  pumpkin: string;
  href: string;
  target: string;
};

const RatingItem: FC<IRatingItem> = ({
  position,
  name,
  image,
  pumpkin,
  ...others
}) => {
  return (
    <Events type={"a"} className={classes(style.RatingItem)} {...others}>
      <div className={style.RatingItem__position}>
        {position}.
      </div>
      <div className={style.RatingItem__avatar}>
        <Avatar src={image} size={"l"} />
      </div>
      <div className={style.RatingItem__info}>
        <div className={style.RatingItem__name}>{name}</div>
        <div className={style.RatingItem__counter}>
          {/* <Assets group={"game"} code={"pumpkin"} style={{
            width: "16px",
            height: "16px"
          }} /> */}
          <span>
            {pumpkin}
          </span>
        </div>
      </div>
    </Events>
  )
}

export default RatingItem;
