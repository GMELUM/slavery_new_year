import { FC, HTMLAttributes, memo } from "react";

import style from "../symbol/symbol.module.css";

interface S5 extends HTMLAttributes<HTMLDivElement> {
  garland: string | undefined;
};

const S5: FC<S5> = ({
  garland
}) => (
  <symbol id="s5" data-name="s5" viewBox="0 0 837.71 882.47">
    <g id="segment_1" data-name="segment 1">
      <use id="tree_1" width="878.7" height="925.65"
        transform="matrix(0.95, 0, 0, -0.95, 0, 882.47)" xlinkHref="#segment_1-2" />
      {garland &&
        <g id="wires_1" data-name="wires 1">
          <path className={style["cls-5"]}
            d="M737.74,607.62c-25,25.7-54.21,47-85.43,64.68s-64.67,31.59-98.79,43.27a921.31,921.31,0,0,1-113.84,30.75,886.33,886.33,0,0,1-121.41,16.17,808.24,808.24,0,0,1-121.13-1.4L182,759.59c-1.87-.18-1.87,2.62,0,2.81A802.17,802.17,0,0,0,304.62,766a880,880,0,0,0,121.32-14.21,934.28,934.28,0,0,0,116.83-29.72c34.31-11.21,68.05-24.49,100-41.4A394.48,394.48,0,0,0,730.17,619l9.63-9.44a1.42,1.42,0,0,0-2.06-2Z" />
          <path className={style["cls-5"]}
            d="M805.5,658.65a764.55,764.55,0,0,1-147.67,46.17,954,954,0,0,1-153.66,18.51,1061.79,1061.79,0,0,1-146.74-3.55c-46.73-4.58-93.37-12.9-138.23-26.92A450.35,450.35,0,0,1,94.89,633q-7.11-5.06-14-10.28c-1.4-1.13-2.81,1.3-1.4,2.43a436.55,436.55,0,0,0,122.44,65,645.88,645.88,0,0,0,136.64,30.37c49,5.89,98.33,7.48,147.58,6.27a984,984,0,0,0,154-15.61,780.25,780.25,0,0,0,149.83-43l16.82-7.1c1.68-.75.28-3.08-1.4-2.43Z" />
        </g>
      }

      {garland === "snow" &&
        <g id="snowflakes_1" data-name="snowflakes 1">
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 68.83, 644.37)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 162.87, 696.48)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 265.32, 726.23)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 387.28, 737.36)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 513.93, 736.38)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 219.71, 779.32)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 330.51, 772.77)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 583.74, 711.23)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 680.55, 652.54)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 761.56, 681.38)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 644.25, 716.81)"
            xlinkHref="#snowflake" />
        </g>
      }

      {garland === "led" &&
        <g id="garland_1" data-name="garland 1">
          <use width="18.33" height="29.42"
            transform="matrix(0.77, 0.53, 0.53, -0.77, 215.62, 723.08)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.86, 0.37, 0.37, -0.86, 347.54, 742.71)" xlinkHref="#garland_blue" />
          <use width="14.37" height="31.33" transform="matrix(0.93, 0, 0, -0.93, 789.34, 695.23)"
            xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.72, 0.59, 0.59, -0.72, 146.64, 694.21)" xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.9, -0.25, -0.25, -0.9, 604.8, 725.69)" xlinkHref="#garland_green" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 76.34, 657.79)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32"
            transform="matrix(0.93, -0.11, -0.11, -0.93, 520.28, 757.81)" xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 254.63, 793.12)"
            xlinkHref="#garland_red" />
          <use width="18.33" height="29.42"
            transform="matrix(0.93, 0.09, 0.09, -0.93, 721.58, 651.62)" xlinkHref="#garland_blue" />
        </g>
      }
    </g>
  </symbol>
)

export default memo(S5);
