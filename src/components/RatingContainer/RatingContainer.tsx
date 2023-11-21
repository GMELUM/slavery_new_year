import { FC, HTMLAttributes, useMemo } from "react";
import { Avatar, Events, Ratio, Text } from "components";

import style from "./RatingContainer.module.css";
import { RatingList } from "engine/state/atoms";

interface RatingContainer extends HTMLAttributes<HTMLDivElement> {
  data: RatingList;
};

const RatingContainer: FC<RatingContainer> = ({
  data
}) => {

  return (
    <div className={style.RatingContainer}>
      {data.map(({
        image,
        count,
        link
      }, index) => {
        if (index > 7) { return }
        return (
          <Events
            key={link + index}
            type={"a"}
            className={style.RatingContainer__item}
            href={link}
            target="_blank"
          >
            <div className={style.RatingContainer__inner}>
              <div className={style.RatingContainer__avatar}>
                <Ratio width={1} height={1} >
                  <Avatar src={image} size={"auto"} />
                </Ratio>
              </div>
              <div className={style.RatingContainer__counter}>
                <Text size={"small"} weight={"light"}>{count}</Text>
              </div>
            </div>
          </Events>
        )
      })}
    </div>
  )
}

export default RatingContainer;
