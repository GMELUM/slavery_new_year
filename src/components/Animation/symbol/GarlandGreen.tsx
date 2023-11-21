import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface GarlandGreen extends HTMLAttributes<HTMLDivElement> { };

const GarlandGreen: FC<GarlandGreen> = () => (
  <symbol id="garland_green" viewBox="0 0 14.37 31.33">
    <ellipse className={style["cls-6"]}
      cx="7.19" cy="15.32" rx="15.7" ry="6.3"
      transform="translate(-9.41 18.61) rotate(-76.1)" />
    <ellipse className={style["cls-3"]}
      cx="6.18" cy="17.34" rx="12.9" ry="5.2"
      transform="translate(-12.13 19.18) rotate(-76.1)" />
    <ellipse className={style["cls-3"]}
      cx="4.79" cy="19.22" rx="7.5" ry="3"
      transform="translate(-15.02 19.25) rotate(-76.1)" />
    <path className={style["cls-4"]}
      d="M7.59,28.32l-6.8-1.7a.3.3,0,0,0-.39.16.08.08,0,0,0,0,0,3.48,3.48,0,0,0,2.49,4.27l.11,0,.5.1a3.5,3.5,0,0,0,4.27-2.5l0-.1A.31.31,0,0,0,7.59,28.32Z" />
    <path className={style["cls-5"]}
      d="M4.39,28.22l-3.2-.9a.19.19,0,0,0-.28.05s0,0,0,.05a1.69,1.69,0,0,0,1.2,2l.5.2a1.71,1.71,0,0,0,2-1.3.2.2,0,0,0-.2-.2Z" />
  </symbol>
)

export default memo(GarlandGreen);
