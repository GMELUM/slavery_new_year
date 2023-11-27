import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./Jam.module.css";
import { backPage } from "elum-router/react";

interface Jam extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Jam: FC<Jam> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>
        <Text>Дает 10% к сбору монет</Text>
      </div>
    </ModalPanel>
  )
}

export default Jam;
