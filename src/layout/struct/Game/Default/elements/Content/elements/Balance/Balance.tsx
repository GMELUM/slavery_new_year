import { FC, HTMLAttributes } from "react";
import { Centered, BalanceContainer, Currency, Notify, Button } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage } from "elum-router/react";
import executeNotify from "handlers/executeNotify";

interface Balance extends HTMLAttributes<HTMLDivElement> { };

const Balance: FC<Balance> = () => {
  const value = useGlobalValue(DATA);

  const handlerClick = () => {
    nextPage({ modal: "vote" })
  }

  const handlerInfo = () => {
    nextPage({ modal: "how_to_play" })
  }

  const handlerNotify = async () => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeNotify();
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerElf = async () => {
    nextPage({ modal: "shop", params: { tab: "craft" } })
  }

  return (
    <Centered>
      <BalanceContainer>

        <Button
          size={"ss"}
          mode={"blur"}
          style={{ width: "180px" }}
          onClick={handlerInfo}
        >Как играть?</Button>

        {value.notification &&
          <Notify onClick={handlerNotify} />}

        <Currency
          button
          position={"right"}
          type={"cone"}
          value={value.cone}
          size={3}
          onClick={handlerClick}
        />
        <Currency
          position={"right"}
          type={"elf"}
          value={value.elf}
          size={3}
          onClick={handlerElf}
        />
        <Currency
          position={"right"}
          type={"snowflake"}
          value={value.snowflake}
          size={3}
        />

      </BalanceContainer>
    </Centered>
  )
}

export default Balance;
