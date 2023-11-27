import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./Smile.module.css";
import { backPage } from "elum-router/react";

interface Smile extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Smile: FC<Smile> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>
        <Text>Смайлик для имени. Можно купить только 1 шт на каждый тип смайла</Text>
      </div>
    </ModalPanel>
  )
}

export default Smile;
