import { FC, HTMLAttributes } from "react";
import { Centered, BalanceContainer, Currency, Notify } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage } from "elum-router/react";
import executeNotify from "handlers/executeNotify";

interface Balance extends HTMLAttributes<HTMLDivElement> { };

const Balance: FC<Balance> = () => {
  const value = useGlobalValue(DATA);

  const handlerClick = () => {
    console.log("click")
  }

  const handlerNotify = async () => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeNotify();
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  return (
    <Centered>
      <BalanceContainer>

        {value.notification &&
          <Notify onClick={handlerNotify} />}

        <Currency
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
