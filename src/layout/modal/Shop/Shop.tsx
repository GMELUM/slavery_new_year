import { FC, HTMLAttributes } from "react";
import { Div, ModalPanel } from "components";

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
    <ModalPanel onClick={handlerClose} color={"#d8eaff"}>
      <Div
        top={"12px"}
        right={"12px"}
        bottom={"12px"}
        left={"12px"}
      >
        {/* <div className={style.Container}>
          {value.shopVote && value.shopVote.map((elem) => (
            <ProductCard
              key={elem.type}
              format={elem.type === "product_5" ? "rectangle" : "square"}
              image={<Assets group={"game"} code={elem.type} />}
              pumpkin={elem.pumpkin}
              candy={elem.candy}
              onClick={() => handlerShop(elem.type)}
            />
          ))}
        </div> */}
      </Div>
    </ModalPanel>
  )
}

export default Shop;
