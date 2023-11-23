import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface SnowBackground extends HTMLAttributes<HTMLDivElement> { };

const SnowBackground: FC<SnowBackground> = () => (
  <symbol id="snow_background" data-name="snow background" viewBox="0 0 2226 2394.45">
    <path className={style["cls-139"]} d="M2226,2394.45H0V83l14.43-2.13C750.29-27.66,1490.21-26.95,2226,83h0Z" />
  </symbol>
)

export default memo(SnowBackground);
