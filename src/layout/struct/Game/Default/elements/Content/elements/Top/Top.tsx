import { FC, HTMLAttributes } from "react";
import { Div, GroupHeader, RatingItem } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import Flex from "components/Flex/Flex";

import { Star } from "icons"

interface Top extends HTMLAttributes<HTMLDivElement> { };

const Top: FC<Top> = () => {
  const value = useGlobalValue(DATA)
  return (
    <Flex>

      <GroupHeader
        title="Рейтинг"
        color="#ff4200"
        icon={<Star />}
      />

      <Div
        top={"12px"}
        bottom={"12px"}
        left={"12px"}
        right={"12px"}
      >
        {value.rating && value.rating.map((data, index) => {
          if (index > 49) { return }
          return (
            <RatingItem
              position={index + 1}
              image={data.image}
              name={data.name}
              pumpkin={`${data.count}`}
              href={data.link}
              target={"_blank"}
            />
          )
        })}
      </Div>

    </Flex>
  )
}

export default Top;
