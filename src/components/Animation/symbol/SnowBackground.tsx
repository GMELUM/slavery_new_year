import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface SnowBackground extends HTMLAttributes<HTMLDivElement> { };

const SnowBackground: FC<SnowBackground> = () => (
  <symbol id="snow_background" data-name="snow_background" viewBox="0 0 2225.87 808.56">
    <path id="snow" className={style["cls-139"]}
      d="M2225.87,57.89V808.56H0V57.71Q91.35,47.95,183.63,40h.05q34.4-3,69-5.79h0q106.44-8.68,213.86-15h.58q48.75-3,97.67-5.38h.05Q605.1,11.63,645.46,10q47.94-2.14,96.07-3.76Q779.92,5,818.45,4s0-.06,0,0q47.28-1.34,94.64-2.2c.05.06.05.06.05,0l45.23-.72q86.13-1.26,172.37-1,21.36,0,42.64.11,50,.27,100,1,21.76.36,43.49.78,77.67,1.34,155.19,4,22.64.72,45.28,1.62h0Q1556.75,9,1596,10.73c16.65.72,33.3,1.55,49.91,2.33q64.23,3.22,128.21,7.16,27.84,1.61,55.6,3.52h0q164.74,11,327.12,27.1c17.94,1.73,35.88,3.58,53.73,5.43,3.52.36,7,.78,10.55,1.14C2222.71,57.59,2224.31,57.71,2225.87,57.89Z" />
  </symbol>
)

export default memo(SnowBackground);
