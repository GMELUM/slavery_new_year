import { FC, HTMLAttributes } from "react";
import { Centered } from "components";

import ButtonBlock from "components/ButtonBlock/ButtonBlock";

interface Action extends HTMLAttributes<HTMLDivElement> { };

const Action: FC<Action> = () => {
  return (
    <Centered>
      <ButtonBlock>

      </ButtonBlock>
    </Centered>
  )
}

export default Action;
