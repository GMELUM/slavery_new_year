import { FC, HTMLAttributes, memo } from "react";

import style from "../symbol/symbol.module.css";

interface S3 extends HTMLAttributes<HTMLDivElement> {
  garland: string | undefined;
  toys?: (string | undefined | null)[];
};

const S3: FC<S3> = ({
  garland,
  toys = []
}) => (
  <symbol id="s3" data-name="s3" viewBox="0 0 598.1 650.38">
    <g id="segment_3-3" data-name="segment 3">
      <use id="tree_3" width="577.14" height="608.23"
        transform="matrix(0.95, 0, 0, -0.95, 0, 579.86)" xlinkHref="#serment_3" />

      {garland &&
        <g id="wires_3">
          <path className={style["cls-5"]}
            d="M462.76,371.94c-7.47,13.09-20.56,21.69-32.71,29.91a432.93,432.93,0,0,1-39.35,23.37,441.57,441.57,0,0,1-85.33,33.92A433.22,433.22,0,0,1,214,474.66,439.74,439.74,0,0,1,25.25,444.38l-11.4-4.68c-1.68-.74-3.08,1.59-1.5,2.34a442.34,442.34,0,0,0,190.49,36,436.49,436.49,0,0,0,93.46-13.55,443.81,443.81,0,0,0,86.64-32.24,438.18,438.18,0,0,0,40.57-22.9C435.94,401.48,449.3,393.25,459,382a55,55,0,0,0,6.17-8.7,1.4,1.4,0,0,0-2.43-1.4Z" />
          <path className={style["cls-5"]}
            d="M68.34,394.93a104.22,104.22,0,0,0,19.44,8.32q10.38,3.47,20.94,6.55,20.93,6.07,42.43,10.37A721.7,721.7,0,0,0,237.51,432c29.35,2.43,58.88,3.36,88.33,3.74,28.78.19,57.76.37,86.45-1.59,28-1.87,56.27-6.08,82.72-15.89,3.27-1.12,6.35-2.43,9.53-3.74,1.68-.65.19-3.08-1.4-2.43A268.71,268.71,0,0,1,421,430.82c-28.22,2.34-56.64,2.25-85,2.15-29-.18-57.94-.93-86.73-2.8A760.1,760.1,0,0,1,163,419.61q-21.32-3.93-42.25-9.35c-13.74-3.74-27.66-7.66-40.93-12.9a72.69,72.69,0,0,1-10.1-4.86,1.4,1.4,0,0,0-1.4,2.34Z" />
        </g>
      }

      {garland === "led" &&
        <g id="garland_3">
          <use width="18.33" height="29.42"
            transform="matrix(0.77, 0.53, 0.53, -0.77, 206.57, 497.04)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.77, 0.53, 0.53, -0.77, 175.72, 446.48)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.77, 0.53, 0.53, -0.77, 348.83, 460.59)" xlinkHref="#garland_blue" />
          <use width="18.33" height="29.42"
            transform="matrix(0.93, 0.09, 0.09, -0.93, 488.74, 443.99)" xlinkHref="#garland_blue" />
          <g className={style["cls-8"]}>
            <use width="14.37" height="31.33" transform="matrix(0.93, 0, 0, -0.93, 438.84, 423.76)"
              xlinkHref="#garland_green" />
          </g>
          <g className={style["cls-9"]}>
            <use width="14.37" height="31.33" transform="matrix(0.93, 0, 0, -0.93, 298.64, 489.19)"
              xlinkHref="#garland_green" />
          </g>
          <g className={style["cls-10"]}>
            <use width="14.37" height="31.33"
              transform="matrix(0.72, 0.59, 0.59, -0.72, 112.66, 433.51)"
              xlinkHref="#garland_green" />
          </g>
          <g className={style["cls-11"]}>
            <use width="14.37" height="31.33"
              transform="matrix(0.72, 0.59, 0.59, -0.72, 16.49, 469.93)" xlinkHref="#garland_green" />
          </g>
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 59.29, 422.37)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 115.31, 499.83)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 258.13, 460.61)"
            xlinkHref="#garland_red" />
          <use width="12.6" height="32" transform="matrix(0.93, 0.12, 0.12, -0.93, 409.34, 460.6)"
            xlinkHref="#garland_red" />
        </g>
      }

      {garland === "snow" &&
        <g id="snowflakes_3">
          <g className={style["cls-12"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 98.86, 424.79)" xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-13"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 29.05, 470.45)" xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-14"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 218.97, 444.3)" xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-15"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 151.96, 489.95)" xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-16"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 271.13, 478.73)" xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-17"]}>
            <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 345.6, 448.9)"
              xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-18"]}>
            <use width="51.35" height="45" transform="matrix(0.62, 0.11, 0.11, -0.62, 426.6, 404.2)"
              xlinkHref="#snowflake" />
          </g>
          <g className={style["cls-19"]}>
            <use width="51.35" height="45"
              transform="matrix(0.62, 0.11, 0.11, -0.62, 461.99, 435.85)" xlinkHref="#snowflake" />
          </g>
        </g>
      }

      {toys[3] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 262.56, 650.37)"
          xlinkHref={"#" + toys[3]} />
      }

      {toys[4] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 21.42, 584.95)"
          xlinkHref={"#" + toys[4]} />
      }

      {toys[5] &&
        <use
          width="100"
          height="100"
          transform="matrix(0.93, 0, 0, -0.93, 504.64, 542.89)"
          xlinkHref={"#" + toys[5]} />
      }


    </g>
  </symbol>
)

export default S3;
