import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface GarlandBlue extends HTMLAttributes<HTMLDivElement> { };

const GarlandBlue: FC<GarlandBlue> = () => (
  <symbol id="garland_blue" viewBox="0 0 18.33 29.42">
    <ellipse className={style["cls-2"]}
      cx="9.37" cy="14.35" rx="15.7" ry="6.3"
      transform="translate(-7.65 16.39) rotate(-63.7)" />
    <ellipse className={style["cls-3"]}
      cx="7.97" cy="16.05" rx="12.9" ry="5.2"
      transform="translate(-9.95 16.08) rotate(-63.7)" />
    <ellipse className={style["cls-3"]}
      cx="6.17" cy="17.65" rx="7.5" ry="3"
      transform="translate(-12.39 15.36) rotate(-63.7)" />
    <path className={style["cls-4"]}
      d="M7,27.15l-6.3-3.1a.3.3,0,0,0-.3.1A3.49,3.49,0,0,0,2,28.84H2l.4.2a3.5,3.5,0,0,0,4.69-1.58v0A.33.33,0,0,0,7,27.15Z" />
    <path className={style["cls-5"]}
      d="M4,26.35l-3-1.5a.2.2,0,0,0-.28.06l0,0a1.69,1.69,0,0,0,.8,2.2l.3.2a1.7,1.7,0,0,0,2.3-.7A.21.21,0,0,0,4,26.37Z" />
  </symbol>
)

export default memo(GarlandBlue);
