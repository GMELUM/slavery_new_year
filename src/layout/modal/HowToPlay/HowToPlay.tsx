import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./HowToPlay.module.css";
import { backPage } from "elum-router/react";

import { Toy1, Toy10, Toy16, Toy21, Toy4 } from "icons";

interface HowToPlay extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const HowToPlay: FC<HowToPlay> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>

        <Toy10 className={style.Box__a} />
        <Toy21 className={style.Box__b} />
        <Toy16 className={style.Box__c} />
        <Toy4 className={style.Box__d} />
        <Toy1 className={style.Box__e} />

        <Text size={"medium"}>Как играть 🌲</Text>
        <br />
        ⭐1. Покупай или делай в мастерской новогодние игрушки.<br />
        🎄2. Украшай ими ёлку и продавай её на ярмарке за снежинки.<br />
        🎁 3. Обменивай снежинки на подарки и другие игровые ценности.<br />
        <br />
        <br />
        Мастерская игрушек и возможность открыть подарки будут доступны в Новогоднюю ночь✨
        <br />
        <br />
        💬Для чего нужны шишки, эльфы, снежинки, и как их получить
        <br />
        <br />
        Шишки нужны для создания игрушек в мастерскрй и ускорения продажи ёлки 🎄
        Шишки можно купить, получить выполняя задания и приглашая друзей в игру 👧
        <br />
        <br />
        Эльфы создают игрушки в мастерской, получить их можно за приглашение друзей в игру 🧒
        <br />
        <br />
        ❄ За снежинки вы можете продать свою ёлку и купить новогодние подарки 🎁
      </div>
    </ModalPanel>
  )
}

export default HowToPlay;
