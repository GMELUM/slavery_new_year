import { FC, HTMLAttributes, memo } from "react";

import style from "../symbol/symbol.module.css";

interface S1 extends HTMLAttributes<HTMLDivElement> {
  garland?: "led" | "snow";
  star?: boolean;
  toys?: (number | undefined | null)[];
};

const S1: FC<S1> = ({
  garland,
  star,
  toys = []
}) => (
  <symbol id="s1" data-name="s1" viewBox="0 0 363.58 434.33">
    <g id="segment_5" data-name="segment 5">

      <use id="tree_5" width="335.41" height="353.66"
        transform="matrix(0.95, 0, 0, -0.95, 26.82, 401.47)" xlinkHref="#segment_5-2" />

      {garland &&
        <>
          <path className={style["cls-5"]}
            d="M136.55,173.56a113.23,113.23,0,0,0,71-15.88,110.57,110.57,0,0,0,16.82-12.62c1.31-1.22-.65-3.18-2.06-1.87v-.09a110.28,110.28,0,0,1-65.61,28,108.1,108.1,0,0,1-20.19-.37C134.68,170.57,134.68,173.38,136.55,173.56Z" />
          <path className={style["cls-5"]}
            d="M301.57,287.36a1.4,1.4,0,0,0-1.73-1,119.72,119.72,0,0,1-28.63,3.67c5.92-1.9,11.79-3.95,17.6-6.2l5.33-2.15c1.68-.65.93-3.36-.75-2.61a317.65,317.65,0,0,1-32,11c-1.22,0-2.45,0-3.67-.06q-20.28-.37-40.37-2.61a389,389,0,0,1-79-16.83,336.8,336.8,0,0,1-42.15-17.1c-1.59-.75-3.09,1.59-1.41,2.43h0A355.38,355.38,0,0,0,172,282.73a426.18,426.18,0,0,0,79.64,9.95l-1,.24a379,379,0,0,1-44.86,8c-15.7,1.87-31.31,3.74-47,4.48a272.64,272.64,0,0,1-45.8-1.12A172.92,172.92,0,0,1,70.29,294L65.24,292c-1.59-.75-3.09,1.68-1.4,2.43a168.07,168.07,0,0,0,42.52,11.87,254.11,254.11,0,0,0,45.71,2.33c15.89-.56,31.78-2.15,47.48-4.11,15.42-1.87,30.75-3.93,45.8-7.38q8.29-1.9,16.47-4.23c13,.16,26.17-.28,38.76-3.81A1.42,1.42,0,0,0,301.57,287.36Z" />
          <path className={style["cls-5"]}
            d="M120.85,206.56c8.41-.1,16.73-2.34,24.86-4.11a231.42,231.42,0,0,0,23.46-6.36,104.5,104.5,0,0,0,21.69-10A159.72,159.72,0,0,0,210,171.7c6.54-5.61,13.64-11.31,18.6-18.7.93-1.49-1.5-2.89-2.43-1.4h0C222,158,215.9,162.82,210.3,167.77a177.39,177.39,0,0,1-18.51,14.39A132.51,132.51,0,0,1,148.14,199l-13.08,2.89a74.08,74.08,0,0,1-14.21,1.87A1.41,1.41,0,0,0,120.85,206.56Z" />
        </>
      }

      {garland === "led" &&
        <g id="garland_5" data-name="garland 5">
          <use width="18.33" height="29.42" transform="matrix(0.93, 0, 0, -0.93, 219.67, 188.05)"
            xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.84, 0.4, 0.4, -0.84, 153.47, 218.52)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.68, 0.64, 0.64, -0.68, 78.42, 320.04)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.78, 0.52, 0.52, -0.78, 151.01, 326.25)" xlinkHref="#garland_blue" />
          <use width="14.37" height="31.33"
            transform="matrix(0.93, 0.07, 0.07, -0.93, 176.14, 193.68)" xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.93, 0.07, 0.07, -0.93, 246.53, 317.69)" xlinkHref="#garland_green" />
          <use width="14.37" height="31.33" transform="matrix(0.88, 0.3, 0.3, -0.88, 144.4, 301.77)"
            xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.86, 0.36, 0.36, -0.86, 124.48, 198.55)" xlinkHref="#garland_green" />
          <use width="12.6" height="32"
            transform="matrix(0.87, -0.33, -0.33, -0.87, 294.91, 311.63)" xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 91.78, 284.79)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 206.58, 329.58)"
            xlinkHref="#garland_red" />
        </g>
      }

      {garland === "snow" && <g id="snowflakes_5" data-name="snowflakes 5">
        <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 55.66, 314.63)"
          xlinkHref="#snowflake" />
        <use width="51.35" height="45"
          transform="matrix(0.59, -0.21, -0.21, -0.59, 146.28, 193.73)" xlinkHref="#snowflake" />
        <use width="51.35" height="45"
          transform="matrix(0.59, -0.21, -0.21, -0.59, 209.83, 181.58)" xlinkHref="#snowflake" />
        <use width="51.35" height="45" transform="matrix(0.62, 0.05, 0.05, -0.62, 141.4, 324.32)"
          xlinkHref="#snowflake" />
        <use width="51.35" height="45"
          transform="matrix(0.55, -0.29, -0.29, -0.55, 246.99, 315.36)" xlinkHref="#snowflake" />
        <use width="51.35" height="45"
          transform="matrix(0.61, -0.17, -0.17, -0.61, 123.25, 295.05)" xlinkHref="#snowflake" />
      </g>
      }

      {toys[0] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 270.11, 393.21)"
          xlinkHref={`#toy_${toys[0]}`} />
      }

      {toys[1] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 0, 434.33)"
          xlinkHref={`#toy_${toys[1]}`} />
      }

      {star && <use width="150" height="150" transform="matrix(0.93, 0, 0, -0.93, 115, 135)"
        xlinkHref="#star" />}
    </g>
  </symbol>
)

export default memo(S1);
