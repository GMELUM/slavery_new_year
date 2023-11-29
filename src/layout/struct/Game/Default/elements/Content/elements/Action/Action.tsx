import { FC, HTMLAttributes, useEffect } from "react";
import { Button, Centered } from "components";

import ButtonBlock from "components/ButtonBlock/ButtonBlock";
import { backPage, nextPage } from "elum-router/react";
import { useTimeout } from "engine/hooks";
import { setter, useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import ButtonList from "components/ButtonList/ButtonList";
import Ads from "components/Ads/Ads";
import { Cone } from "icons";
import executeSell from "handlers/executeSell";
import executeSellOpen from "handlers/executeSellOpen";

interface Action extends HTMLAttributes<HTMLDivElement> { };

const Action: FC<Action> = () => {

  const value = useGlobalValue(DATA);

  const time = useTimeout(value.timestamp)

  const handlerShop = () => {
    nextPage({ modal: "shop" })
  }

  const handleHelp = () => {
    nextPage({ modal: "how_to_play" })
  }

  const checkSell = () => {
    const data = value.decorations;
    return data.toys.length === 9
  }

  const handlerSell = async () => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeSellOpen();
    // backPage({ ignoreFreeze: true, toStay: "game" });
    nextPage({ modal: "sell" })
  }

  useEffect(() => {
    if (!time) {
      setter(DATA, (data) => ({
        ...data,
        timestamp: undefined
      }))
    }
  }, [time])

  return (
    <Centered>
      <ButtonBlock>

        {!value.timestamp && checkSell() && <Button
          streched
          color={"#12a500"}
          mode={"blur"}
          onClick={handlerSell}
        >Продать</Button>}

        {time && value.timestamp && <Button
          streched
          color={"#ff0000"}
          mode={"blur"}
        >{time}</Button>}

        {(!time || !value.timestamp) && !checkSell() && <Button
          streched
          color={"#fe570c"}
          mode={"blur"}
          onClick={handlerShop}
        >Украсить Ёлку</Button>}

        <Button
          color={"#8cbae7"}
          mode={"blur"}
          size={"circle"}
          onClick={handleHelp}
        >?</Button>

      </ButtonBlock>

    </Centered>
  )
}

export default Action;
