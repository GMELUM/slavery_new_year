import { Card, CardContainer, Div, GroupHeader, Text } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes, useMemo } from "react";

import { Stock as StockIcon } from "icons"
import executeStock from "handlers/executeStock";

interface Stock extends HTMLAttributes<HTMLDivElement> { };

const styleButton = {
  top: "12px",
  right: "12px",
  bottom: "0",
  left: "12px"
}

const Stock: FC<Stock> = () => {

  const value = useGlobalValue(DATA);

  const handlerGoods = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeStock(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  return (
    <Div>

      <GroupHeader
        title="Склад"
        color="#ba00ff"
        icon={<StockIcon />}
      />

      <CardContainer>
        {value.stock && value.stock.map((elem) =>
          <Card
            key={`shop_${elem.type}`}
            image={elem.type}
            count={elem.count}
            onClick={() => handlerGoods(elem.type)}
          />
        )}
      </CardContainer>

    </Div>
  )
}

export default Stock;