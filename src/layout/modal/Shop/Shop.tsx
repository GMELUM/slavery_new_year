import { FC, HTMLAttributes, Fragment } from "react";
import { Badge, Card, CardContainer, Div, ModalPanel } from "components";

import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage } from "elum-router/react";
import executeBuy from "handlers/executeBuy";

interface Shop extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Shop: FC<Shop> = () => {

  const value = useGlobalValue(DATA);

  const handlerShop = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeBuy(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel snow onClick={handlerClose} mode={"card"} color={"#d8eaff"}>
      <Div
        top={"32px"}
        bottom={"12px"}
      >

        {value.toyShop && value.toyShop.map((group, index) => (
          <Fragment key={`badge_${index}`}>
            <Badge

              title={`${group.level}`}
              description={group.description}
            />
            <CardContainer>
              {group.items.map((elem, index) => (
                <Card
                  key={`shop_modal_${elem.toy}_${index}`}
                  image={elem.toy}

                  vote={elem.vote}
                  cone={elem.cone}
                  elf={elem.elf}
                  snowflake={elem.snowflake}

                  onClick={() => handlerShop(elem.toy)}
                />
              ))}
            </CardContainer>
          </Fragment>
        ))}

      </Div>
    </ModalPanel>
  )
}

export default Shop;
