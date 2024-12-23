import { Card, CardContainer, Div, GroupHeader, Text } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes, useMemo } from "react";

import { Stock as StockIcon } from "icons"
import executeStock from "handlers/executeStock";

interface Stock extends HTMLAttributes<HTMLDivElement> { };

const Stock: FC<Stock> = () => {

  const value = useGlobalValue(DATA);

  const handlerGoods = async (type: string) => {
    // nextPage({ popout: "loading", freeze: true });
    // const result = await executeStock(type);
    // backPage({ ignoreFreeze: true, toStay: "game" })
    nextPage({ modal: "open_box" })
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
            key={`stock_${elem.type}`}
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