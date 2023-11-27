import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./OpenBox.module.css";
import { backPage } from "elum-router/react";

interface OpenBox extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const OpenBox: FC<OpenBox> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>
        <Text>Открыть подарки можно в ночь с 31 октября на 1 ноября.</Text>
      </div>
    </ModalPanel>
  )
}

export default OpenBox;
