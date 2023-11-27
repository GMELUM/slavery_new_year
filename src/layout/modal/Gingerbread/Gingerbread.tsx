import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./Gingerbread.module.css";
import { backPage } from "elum-router/react";

interface Gingerbread extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Gingerbread: FC<Gingerbread> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>
        <Text>Дает 20% к заработку монет за просмотр рекламы</Text>
      </div>
    </ModalPanel>
  )
}

export default Gingerbread;
