import { FC, HTMLAttributes } from "react";
import { Button, ModalBlock, ModalPanel } from "components";

import style from "./Sell.module.css";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage } from "elum-router/react";
import executeSell from "handlers/executeSell";
import { SnowFlake, Toy1, Toy10, Toy16, Toy21, Toy4 } from "icons";
import Ads from "components/Ads/Ads";

interface Sell extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Sell: FC<Sell> = () => {

  const value = useGlobalValue(DATA);

  const handlerSell = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeSell(type);
    backPage({ ignoreFreeze: true, toStay: "game" });
  }

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel className={style.Container} onClick={handlerClose} mode={"card"} color={"#11830e"}>

      {/* <div className={style.Rays__background}>
        <Assets group={"game"} code={"rays"} className={style.Rays} />
      </div> */}

      <Toy10 className={style.Box__a} />
      <Toy21 className={style.Box__b} />
      <Toy16 className={style.Box__c} />
      <Toy4 className={style.Box__d} />
      <Toy1 className={style.Box__e} />

      <div className={style.Pumpkin__title}>
        Продать Ёлку
      </div>

      <div className={style.Pumpkin__content}>

        <div className={style.Pumpkin__counter}>
          <span><SnowFlake width={"60px"} /></span>
          <span>{value.picking}</span>
        </div>

        <Button
          streched
          size={"s"}
          mode={"blur"}
          onClick={() => handlerSell("default")}
        >Забрать</Button>

        <Button
          streched
          size={"s"}
          mode={"default"}
          onClick={() => handlerSell("double")}
        > <Ads /> + 10%</Button>

      </div>

    </ModalPanel>
  )
}

export default Sell;
