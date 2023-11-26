import { FC, HTMLAttributes, useMemo } from "react";
import {
  Events,
  Ratio,
  Text
} from "components";

import style from "./Card.module.css";

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

const images = {
  "box_1": <Box1 />,
  "box_2": <Box2 />,
  "box_3": <Box3 />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "smile_3": <Smile3 />,
  "frame": <Frame />,
  "gingerbread": <Gingerbread />,
  "jam": <Jam />
};

interface ICardContainer extends HTMLAttributes<HTMLDivElement> {
  image: keyof typeof images;
  count?: number;
  title?: string;
  price?: number;
  sold?: boolean;
};

const Card: FC<ICardContainer> = ({
  image,
  count,
  title,
  price,
  sold,
  children,
  ...prevProps
}) => {

  const element = useMemo(() => images[image], []);

  const size = count ? {
    width: 1,
    height: 1
  } : {
    width: 2,
    height: 3
  }

  return (
    <Events
      className={style.Card}
      disabled={sold}
      {...prevProps}
    >
      <Ratio {...size}>
        <div className={style.Card__inner}>
          <div className={style.Card__image}>
            {element}
          </div>

          {title && <div className={style.Card__title}>
            <Text size={"small"} weight={"bold"}>{title}</Text>
          </div>}

          {price && <div className={style.Card__price}>
            <SnowFlake /> {price}
          </div>}

          {count && <div className={style.Card__count}>
            {count}
          </div>
          }

        </div>
      </Ratio>
    </Events>
  )
}

export default Card;
