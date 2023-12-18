import { FC, HTMLAttributes, Fragment, useState } from "react";
import { Badge, Button, Card, CardContainer, Div, Info, Line, ModalPanel, Text } from "components";

import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage, useParams } from "elum-router/react";
import executeBuy from "handlers/executeBuy";
import { useTimeout } from "engine/hooks";
import executeCraft from "handlers/executeCraft";
import executeTask from "handlers/executeTask";

interface Shop extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Shop: FC<Shop> = () => {

  const data = useParams();

  const [tab, setTab] = useState(data.tab || "shop");
  const value = useGlobalValue(DATA);

  const handlerShop = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeBuy(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerCraft = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeCraft(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerTask = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeTask(type);
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

        <Line style={{ padding: "18px 0 18px 0" }}>

          <Button
            streched
            color={(tab === "shop" ? "#ff0000" : "#0063ff")}
            mode={"blur"}
            onClick={() => setTab("shop")}
          >
            <Text style={{
              padding: "8px 12px"
            }}>Магазин</Text>
          </Button>

          <Button
            streched
            color={(tab === "craft" ? "#ff0000" : "#0063ff")}
            mode={"blur"}
            onClick={() => setTab("craft")}
          >
            <Text style={{
              padding: "8px 12px"
            }}>Мастреская</Text>
          </Button>

        </Line>

        {tab === "craft" && <Info

          value={"Эльфов можно получить приглашая друзей в игру"}
          action={
            <Button
              streched
              color={"#eda400"}
              mode={"blur"}
              onClick={() => handlerTask("refferal")}
            >
              <Text style={{
                padding: "8px 12px"
              }}>Пригласить</Text>
            </Button>}
        />}

        {tab === "craft" && value.toyCraft && value.toyCraft.map((group, index) => (
          <Fragment key={`badge_${index}`}>
            <Badge

              title={`${group.level}`}
              description={group.description}
            />
            {group.items.map((elem, index) => (
              <Card
                mode={"horizontal"}
                key={`shop_modal_${elem.toy}_${index}`}
                image={elem.toy}

                vote={elem.vote}
                cone={elem.cone}
                elf={elem.elf}
                snowflake={elem.snowflake}

                action={
                  <Button
                    streched
                    mode={"blur"}
                    color={"#ff0000"}
                    onClick={() => handlerCraft(elem.toy)}>
                    <Text style={{
                      padding: "8px 12px"
                    }}>Смастерить</Text>
                  </Button>
                }


              />
            ))}
          </Fragment>
        ))}

        {tab === "shop" && value.toyShop && value.toyShop.map((group, index) => (
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
