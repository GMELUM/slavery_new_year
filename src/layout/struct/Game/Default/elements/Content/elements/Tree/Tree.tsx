import { FC, HTMLAttributes } from "react";
import { Animation } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";

interface Tree extends HTMLAttributes<HTMLDivElement> { };

const Tree: FC<Tree> = ({
  children
}) => {
  const value = useGlobalValue(DATA);
  console.log(value.decorations)
  return (
    <Animation
      garland={value.decorations.garland}
      star={value.decorations.star}
      toys={value.decorations.toys}
    />
  )
}

export default Tree;
