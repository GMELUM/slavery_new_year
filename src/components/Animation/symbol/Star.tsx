import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface Star extends HTMLAttributes<HTMLDivElement> { };

const Star: FC<Star> = () => (
  <symbol id="star" data-name="star" viewBox="0 0 121.7 115.8">
    <g id="star-3">
      <path className={style["cls-26"]}
        d="M91.3,41.9,98.5,0,60.9,19.8,23.3,0l7.1,41.9L0,71.6l42.1,6.1,18.8,38.1L79.7,77.7l42-6.1Z" />
      <path className={style["cls-27"]} d="M60.9,57.9v57.9L79.7,77.7Z" />
      <path className={style["cls-27"]}
        d="M121.7,71.6,60.9,57.9l30.4-16ZM60.9,57.9,98.5,0,60.9,19.8Zm0,0L53.4,46.4,23.3,0l7.1,41.9L54.8,54.7Zm0,0L48.8,60.6,0,71.6l42.1,6.1,15-15.9Z" />
      <path className={style["cls-28"]}
        d="M60.9,69.4l3.7-7.6,8.3-1.2-6-5.9,1.4-8.3-7.4,4-7.5-4,1.4,8.3-6,5.9,8.3,1.2Z" />
    </g>
  </symbol>
)

export default memo(Star);
