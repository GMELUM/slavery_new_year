import { Card, CardContainer, Div, GroupHeader } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes } from "react";

import { Goods } from "icons"
import { backPage, nextPage } from "elum-router/react";
import executeShop from "handlers/executeShop";

interface Shop extends HTMLAttributes<HTMLDivElement> { };

const Shop: FC<Shop> = () => {

  const value = useGlobalValue(DATA);

  const handlerGoods = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeShop(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerInfo = (type: string) => {

    if (type.startsWith("box")) {
      nextPage({ modal: "open_box" });
    }

    if (type.startsWith("smile")) {
      nextPage({ modal: "smile" });
    }

    if (type.startsWith("gingerbread")) {
      nextPage({ modal: "gingerbread" });
    }

    if (type.startsWith("frame")) {
      nextPage({ modal: "frame" });
    }

    if (type.startsWith("jam")) {
      nextPage({ modal: "jam" });
    }

  }

  return (
    <Div>

      <GroupHeader
        title="Товары"
        color="#ff0000"
        icon={<Goods />}
      />

      <CardContainer>
        {value.shop && value.shop.map((elem) =>
          <Card
            key={`shop_${elem.type} + ${elem.isOver}`}
            title={elem.title}
            image={elem.type}
            price={elem.price}

            onInfo={() => handlerInfo(elem.type)}
            onClick={() => handlerGoods(elem.type)}
          />
        )}
      </CardContainer>

    </Div>
  )
}

export default Shop;