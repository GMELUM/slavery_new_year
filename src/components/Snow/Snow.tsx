import { FC, HTMLAttributes } from "react";
import style from "./Snow.module.css";
import Centered from "components/Centered/Centered";

interface Snow extends HTMLAttributes<HTMLDivElement> {
};

const Snow: FC<Snow> = ({
  children
}) => {
  return (
    <div className={style.Snow}>
      <Centered>
        {children}
      </Centered>
    </div>
  )
}

export default Snow;
