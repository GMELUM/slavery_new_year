import { FC, HTMLAttributes } from "react";
import { Button, Centered } from "components";

import ButtonBlock from "components/ButtonBlock/ButtonBlock";
import { nextPage } from "elum-router/react";

interface Action extends HTMLAttributes<HTMLDivElement> { };

const Action: FC<Action> = () => {

  const handlerShop = () => {
    nextPage({ modal: "shop" })
  }

  return (
    <Centered>
      <ButtonBlock>

        <Button
          streched
          color={"#fe570c"}
          mode={"blur"}
          onClick={handlerShop}
        >Украсить Ёлку</Button>

        <Button
          color={"#8cbae7"}
          mode={"blur"}
          size={"circle"}
        >?</Button>

      </ButtonBlock>
    </Centered>
  )
}

export default Action;
