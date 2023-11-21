import { FC, HTMLAttributes } from "react";
import { Centered, RatingContainer } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";

interface Rating extends HTMLAttributes<HTMLDivElement> { };

const Rating: FC<Rating> = () => {
  const value = useGlobalValue(DATA)
  return (
    <Centered>
      <RatingContainer data={value.rating || []} />
    </Centered>
  )
}

export default Rating;
