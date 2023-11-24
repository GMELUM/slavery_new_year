import { Button, Div, GroupHeader, Text } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes } from "react";

import { Goods } from "icons"

interface Shop extends HTMLAttributes<HTMLDivElement> { };

const styleButton = {
  top: "12px",
  right: "12px",
  bottom: "0",
  left: "12px"
}

const Shop: FC<Shop> = () => {

  const value = useGlobalValue(DATA);

  // const handlerGoods = async (type: string) => {
  //   nextPage({ popout: "loading", freeze: true });
  //   const result = await executeShop(type);
  //   backPage({ ignoreFreeze: true, toStay: "game" })
  // }

  // const handlerPumpkin = () => nextPage({
  //   modal: "pumpkin"
  // })

  // const handlerInfo = (type: string) => {

  //   console.log(type)

  //   if (["small_box", "middle_box", "big_box"].includes(type)) {
  //     nextPage({ modal: "open_box" });
  //     return;
  //   }

  //   if (type === "potion") {
  //     nextPage({ modal: "potion" });
  //   }

  // }

  return (
    <Div>

      <GroupHeader
        title="Товары"
        color="#ff0000"
        icon={<Goods />}
      />

      {/* <Blurred id={"exchange"}>
        <Text
          size={"large"}
          weight={"bold"}
        >Обмен</Text>
      </Blurred>

      <Div
        top={"24px"}
        bottom={"36px"}
      >

        <Div
          top={"12px"}
          bottom={"12px"}
          right={"12px"}
          left={"12px"}
        >
          <CardContainer>

            {value.shop && value.shop.map((element) => (
              <ShopCard
                key={element.type + element.price}
                info={[
                  "small_box",
                  "middle_box",
                  "big_box",
                  "potion"
                ].includes(element.type)}
                title={element.title}
                price={`${element.price}`}
                image={<Assets group={"game"} code={element.type} />}
                onClick={() => handlerGoods(element.type)}
                onInfo={() => handlerInfo(element.type)}
              />
            ))}

          </CardContainer>
        </Div>

        <Div {...styleButton}>
          <Button streched size={"s"} onClick={handlerPumpkin}>
            Как еще получить мини тыквы?
          </Button>
        </Div>

      </Div> */}

    </Div>
  )
}

export default Shop;