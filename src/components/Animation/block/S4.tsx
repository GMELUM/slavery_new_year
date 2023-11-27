import { FC, HTMLAttributes, memo } from "react";

import style from "../symbol/symbol.module.css";

interface S4 extends HTMLAttributes<HTMLDivElement> {
  garland: string | undefined;
  toys?: (string | undefined | null)[];
};

const S4: FC<S4> = ({
  garland,
  toys = []
}) => (
  <symbol id="s4" data-name="s4" viewBox="0 0 730.9 783.24">
    <g id="segment_2" data-name="segment 2">
      <use id="tree_2" width="710.18" height="748.12"
        transform="matrix(0.95, 0, 0, -0.95, 11.01, 713.22)" xlinkHref="#segment_3" />

      {garland &&
        <g id="wires_2" data-name="wires 2">
          <path className={style["cls-5"]}
            d="M578.83,458c-23.46,24.3-54.4,39.44-85.71,51.22-34.39,13.08-70.1,22.43-106.27,29.07a951,951,0,0,1-110.38,13.27c-37,2.43-74.3,3.74-111.41,1.87s-74.31-6.64-110.29-16.27q-6.63-1.77-13.18-3.73c-1.77-.56-2.52,2.15-.75,2.71,35.71,10.75,72.81,16.63,110,19.25,37.67,2.62,75.43,2,113.1-.19A1048.48,1048.48,0,0,0,374.7,543.31c36.64-6.07,73.19-14.95,108.33-27.38,31.5-11.22,63.27-25,88.6-47.2,3.18-2.81,6.23-5.73,9.16-8.79,1.22-1.21-.74-3.27-2-1.87Z" />
          <path className={style["cls-5"]}
            d="M674.54,542.57c-37.76,20.56-81.22,28.69-123,36.91-43.93,8.6-88.33,15.33-133,19.63a1103.45,1103.45,0,0,1-133.1,4.77,912.68,912.68,0,0,1-133.19-13.09c-40.65-7.1-81.4-17.19-117.95-36.91L21.22,546.4a1.36,1.36,0,0,0-1.41,2.33c35.33,21.88,75.62,33.93,116.09,42a883.94,883.94,0,0,0,132,15.24,1076.07,1076.07,0,0,0,135-2.81,1331.58,1331.58,0,0,0,133.28-17.76c22-4.11,43.93-8.41,65.61-13.64a334.36,334.36,0,0,0,59.82-19.44q7.29-3.27,14.39-7.2c1.59-.84.19-3.27-1.4-2.43Z" />
        </g>
      }

      {garland === "snow" &&
        <g id="snowflakes_2" data-name="snowflakes 2">
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 29.47, 551.27)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 62.07, 589.44)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 140.27, 567.99)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 184.05, 612.67)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 245.48, 567.95)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 291.13, 620.08)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 347.91, 556.74)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, -0.1, -0.1, -0.62, 406.92, 626.35)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, -0.1, -0.1, -0.62, 509.01, 612.29)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, -0.1, -0.1, -0.62, 623.27, 586.99)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, -0.1, -0.1, -0.62, 458.85, 542.35)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, -0.1, -0.1, -0.62, 550.45, 497.49)"
            xlinkHref="#snowflake" />
        </g>
      }

      {garland === "led" &&
        <g id="garland_2" data-name="garland 2">
          <use width="18.33" height="29.42"
            transform="matrix(0.86, 0.37, 0.37, -0.86, 306.31, 571.92)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.91, 0.21, 0.21, -0.91, 426.73, 555.34)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.77, 0.53, 0.53, -0.77, 186.86, 622.63)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.93, 0.09, 0.09, -0.93, 606.63, 597.84)" xlinkHref="#garland_blue" />
          <use width="14.37" height="31.33" transform="matrix(0.93, 0, 0, -0.93, 219.27, 583.73)"
            xlinkHref="#garland_green" />
          <use width="14.37" height="31.33" transform="matrix(0.93, 0, 0, -0.93, 520.23, 613.64)"
            xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.72, 0.59, 0.59, -0.72, 26.09, 580.21)" xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.9, -0.25, -0.25, -0.9, 536.71, 520.35)" xlinkHref="#garland_green" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 92.17, 610)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 293.79, 633.32)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 61.36, 569.87)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, -0.11, -0.11, -0.93, 411, 632.29)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 131.37, 582)"
            xlinkHref="#garland_red" />
        </g>
      }

      {toys[6] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 293.48, 783.24)"
          xlinkHref={"#" + toys[6]} />
      }

      {toys[7] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 637.43, 662.67)"
          xlinkHref={"#" + toys[7]} />
      }

      {toys[8] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 0, 700.99)"
          xlinkHref={"#" + toys[8]} />
      }

    </g>
  </symbol>
)

export default S4;
