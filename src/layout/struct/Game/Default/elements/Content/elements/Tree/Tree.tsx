import { FC, HTMLAttributes } from "react";
import { Animation, Currency } from "components";

interface Tree extends HTMLAttributes<HTMLDivElement> { };

const testValue = {
  garland: "snow",
  star: true,
  toys: [6, 2, 2, 4, 5, 5, 5, 1, 1]
} as {
  garland?: "led" | "snow";
  star?: boolean;
  toys?: number[];
}

const Tree: FC<Tree> = ({
  children
}) => {
  return (
    <>
      {children}
      <Animation
        garland={testValue.garland}
        star={testValue.star}
        toys={testValue.toys}
      />
    </>
  )
}

export default Tree;
