import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface GarlandRed extends HTMLAttributes<HTMLDivElement> { };

const GarlandRed: FC<GarlandRed> = () => (
  <symbol id="garland_red" data-name="garland red" viewBox="0 0 12.6 32" >
    <ellipse className={style["cls-7"]}
      cx="6.3" cy="15.7" rx="6.3" ry="15.7" />
    <ellipse className={style["cls-3"]}
      cx="5.8" cy="17.9" rx="5.2" ry="12.9" />
    <ellipse className={style["cls-3"]}
      cx="4.9" cy="20.1" rx="3" ry="7.5" />
    <path className={style["cls-4"]}
      d="M6,32h.5A3.5,3.5,0,0,0,10,28.5h0a.29.29,0,0,0-.2-.3h-7a.29.29,0,0,0-.3.3A3.5,3.5,0,0,0,6,32Z" />
    <path className={style["cls-5"]}
      d="M4.8,30.7h.5a1.7,1.7,0,0,0,1.6-1.6.2.2,0,0,0-.2-.2H3.4a.2.2,0,0,0-.2.2h0A1.7,1.7,0,0,0,4.8,30.7Z" />
  </symbol>
)

export default memo(GarlandRed);
