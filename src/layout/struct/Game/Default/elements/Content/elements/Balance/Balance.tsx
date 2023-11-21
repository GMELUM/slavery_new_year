import { FC, HTMLAttributes } from "react";
import { Centered, BalanceContainer, Currency } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";

interface Balance extends HTMLAttributes<HTMLDivElement> { };

const Balance: FC<Balance> = () => {
  const value = useGlobalValue(DATA)
  return (
    <BalanceContainer>
      <Currency
        position={"right"}
        type={"cone"}
        value={100}
        size={3}
      />
      <Currency
        position={"right"}
        type={"elf"}
        value={100}
        size={3}
      />
      <Currency
        position={"right"}
        type={"snowflake"}
        value={100}
        size={3}
      />
    </BalanceContainer>
  )
}

export default Balance;
