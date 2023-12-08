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
  SnowFlake,

  Toy1,
  Toy2,
  Toy3,
  Toy4,
  Toy21,
  Toy20,
  Toy19,
  Toy17,
  Toy18,
  Toy16,
  Toy15,
  Toy5,
  Toy6,
  Toy7,
  Toy8,
  Toy9,
  Toy10,
  Toy11,
  Toy12,
  Toy13,
  Toy14,
  ToyStar,
  ToyGarland1,
  ToyGarland2,
  Cone,
  Elf,

} from "icons";
import { decWord } from "engine";

const images = {

  "box_1": <Box1 />,
  "box_2": <Box2 />,
  "box_3": <Box3 />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "smile_3": <Smile3 />,
  "frame": <Frame />,
  "gingerbread": <Gingerbread />,
  "jam": <Jam />,

  "toy_1": <Toy1 />,
  "toy_2": <Toy2 />,
  "toy_3": <Toy3 />,
  "toy_4": <Toy4 />,
  "toy_5": <Toy5 />,
  "toy_6": <Toy6 />,
  "toy_7": <Toy7 />,
  "toy_8": <Toy8 />,
  "toy_9": <Toy9 />,
  "toy_10": <Toy10 />,
  "toy_11": <Toy11 />,
  "toy_12": <Toy12 />,
  "toy_13": <Toy13 />,
  "toy_14": <Toy14 />,
  "toy_15": <Toy15 />,
  "toy_16": <Toy16 />,
  "toy_17": <Toy17 />,
  "toy_18": <Toy18 />,
  "toy_19": <Toy19 />,
  "toy_20": <Toy20 />,
  "toy_21": <Toy21 />,

  "star": <ToyStar />,
  "garland_1": <ToyGarland1 />,
  "garland_2": <ToyGarland2 />

} as Record<string, JSX.Element>;

interface ICardContainer extends HTMLAttributes<HTMLDivElement> {
  image: keyof typeof images | string;
  vote?: number;
  count?: number;
  title?: string;

  cone?: number;
  elf?: number;
  snowflake?: number;

  sold?: boolean;
  onInfo?: () => void;
};

const Card: FC<ICardContainer> = ({
  image,
  count,
  title,

  cone,
  elf,
  snowflake,

  sold,
  vote,
  onInfo,
  children,
  ...prevProps
}) => {

  const element = useMemo(() => images[image], []);

  const size = (count || count === 0) ? {
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

          {onInfo && <Events className={style.Card__info}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onInfo && onInfo()
            }}
          >?</Events>}

          <div className={style.Card__image}>
            {element}
          </div>

          {title && <div className={style.Card__title}>
            <Text size={"small"} weight={"bold"}>{title}</Text>
          </div>}

          {(snowflake || snowflake === 0) && <div className={style.Card__price}>
            <SnowFlake /> {snowflake}
          </div>}

          {(cone || cone === 0) && <div className={style.Card__price}>
            <Cone /> {cone}
          </div>}

          {(elf || elf === 0) && <div className={style.Card__price}>
            <Elf /> {elf}
          </div>}

          {(count || count === 0) && <div className={style.Card__count}>
            {count}
          </div>}

          {vote && <div className={style.Card__vote}>
            {vote} {decWord(vote, ["голос", "голоса", "голосов"])}
          </div>}

        </div>
      </Ratio>
    </Events>
  )
}

export default Card;
