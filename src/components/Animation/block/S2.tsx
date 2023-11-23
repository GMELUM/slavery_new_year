import { FC, HTMLAttributes, memo } from "react";

import style from "../symbol/symbol.module.css";

interface S2 extends HTMLAttributes<HTMLDivElement> {
  garland?: "led" | "snow";
  toys?: (number | undefined | null)[];
};

const S2: FC<S2> = ({
  garland,
  toys = []
}) => (
  <symbol id="s2" data-name="s2" viewBox="0 0 417.39 503.96">
    <g id="segment_4" data-name="segment 4">
      <use id="tree_4" width="437.81" height="460.95"
        transform="matrix(0.95, 0, 0, -0.95, 0, 439.45)" xlinkHref="#segment_4-2" />

      {garland &&
        <g id="wires_4">
          <path className={style["cls-5"]}
            d="M334,256.66a53.84,53.84,0,0,1-19,17.94,186,186,0,0,1-25.05,12.15,318.86,318.86,0,0,1-55.05,17.48,329.08,329.08,0,0,1-115,4.39A318.83,318.83,0,0,1,64,295.54q-3.47-1-6.82-2.25c-1.78-.65-2.53,2.06-.75,2.71a317.92,317.92,0,0,0,56.83,14.4,330.81,330.81,0,0,0,58.22,4,332,332,0,0,0,58.23-6.27,320.22,320.22,0,0,0,56.08-16.54,243.21,243.21,0,0,0,25.89-11.78c7.85-4.2,15.42-9.34,21-16.35a42.87,42.87,0,0,0,3.74-5.33,1.4,1.4,0,1,0-2.43-1.4h0Z" />
          <path className={style["cls-5"]}
            d="M375.08,308.9C364.15,326,342.46,331.43,324,335.73a426,426,0,0,1-68,10.09,438.88,438.88,0,0,1-68.6-.84,437.93,437.93,0,0,1-68-11.59,427.67,427.67,0,0,1-65.15-22.06l-7.76-3.46c-1.58-.74-3.08,1.69-1.4,2.43A431.91,431.91,0,0,0,110.58,334a441.42,441.42,0,0,0,68.6,13,440,440,0,0,0,70.1,2,433.08,433.08,0,0,0,69.16-9.16c10.28-2.24,20.66-4.67,30.56-8.41A61.93,61.93,0,0,0,373.12,316a44.13,44.13,0,0,0,4.3-5.61,1.43,1.43,0,0,0-2.43-1.5Z" />
        </g>
      }

      {garland === "led" &&
        <g id="garland_4">
          <use width="18.33" height="29.42"
            transform="matrix(0.66, 0.67, 0.67, -0.66, 122.46, 327.57)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.91, 0.24, 0.24, -0.91, 223.05, 373.71)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42" transform="matrix(0.9, 0.24, 0.24, -0.9, 315.72, 292.5)"
            xlinkHref="#garland_blue" />
          <use width="14.37" height="31.33"
            transform="matrix(0.89, 0.31, 0.31, -0.89, 151.74, 369.25)" xlinkHref="#garland_green" />
          <use width="14.37" height="31.33"
            transform="matrix(0.88, -0.33, -0.33, -0.88, 316.64, 369.38)"
            xlinkHref="#garland_green" />
          <use width="14.37" height="31.33" transform="matrix(0.94, 0, 0, -0.94, 202.35, 338.67)"
            xlinkHref="#garland_green" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 95, 360.68)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32"
            transform="matrix(0.78, -0.51, -0.51, -0.78, 379.41, 347.64)" xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.1, 0.1, -0.93, 269.82, 321.15)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.79, 0.51, 0.51, -0.79, 46.15, 316.05)"
            xlinkHref="#garland_red" />
          <use width="18.33" height="29.42"
            transform="matrix(0.61, 0.71, 0.71, -0.61, 24.5, 323.65)" xlinkHref="#garland_blue" />
        </g>
      }

      {garland === "snow" &&
        <g id="snowflakes_4">
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 43.98, 310.82)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 102.65, 349.89)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 253.47, 310.74)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 159.43, 325.68)"
            xlinkHref="#snowflake" />
          <use width="51.35" height="45"
            transform="matrix(0.56, -0.29, -0.29, -0.56, 349.93, 354.34)" xlinkHref="#snowflake" />
          <use width="51.35" height="45" transform="matrix(0.56, -0.29, -0.29, -0.56, 245, 373.81)"
            xlinkHref="#snowflake" />
        </g>
      }

      {toys[2] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 245.16, 503.96)"
          xlinkHref={`#toy_${toys[2]}`} />
      }

    </g>
  </symbol>
)

export default memo(S2);
