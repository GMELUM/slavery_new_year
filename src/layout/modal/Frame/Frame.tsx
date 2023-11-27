import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./Frame.module.css";
import { backPage } from "elum-router/react";

interface Frame extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Frame: FC<Frame> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>
        <Text>Рамка для аватарки. Можно купить только 1 шт.</Text>
      </div>
    </ModalPanel>
  )
}

export default Frame;
