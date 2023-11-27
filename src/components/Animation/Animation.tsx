import { FC, HTMLAttributes, useMemo } from "react";
import AspectRation from "components/AspectRation/AspectRation";

import style from "./Animation.module.css";

import Segment1 from "./symbol/Segment1";
import Segment2 from "./symbol/Segment2";

import GarlandBlue from "./symbol/GarlandBlue";
import GarlandGreen from "./symbol/GarlandGreen";
import GarlandRed from "./symbol/GarlandRed";
import Snowflake from "./symbol/Snowflake";

import Toy1 from "./symbol/Toy1";
import Toy2 from "./symbol/Toy2";
import Toy3 from "./symbol/Toy3";
import Toy4 from "./symbol/Toy4";
import Toy5 from "./symbol/Toy5";
import Toy6 from "./symbol/Toy6";
import Toy7 from "./symbol/Toy7";
import Toy8 from "./symbol/Toy8";
import Toy9 from "./symbol/Toy9";
import Toys from "./symbol/Toys";
import Segment0 from "./symbol/Segment0";
import Segment3 from "./symbol/Segment3";
import Segment4 from "./symbol/Segment4";
import Segment5 from "./symbol/Segment5";
import Star from "./symbol/Star";
import S1 from "./block/S1";
import S2 from "./block/S2";
import S3 from "./block/S3";
import S4 from "./block/S4";
import S5 from "./block/S5";
import TreeShadow from "./symbol/TreeShadow";
import CloudBackground from "./symbol/CloudBackground";
import SnowBackground from "./symbol/SnowBackground";
import Snowfall from "components/Snowfall/Snowfall";

interface IAnimation extends HTMLAttributes<HTMLDivElement> {
  garland?: "led" | "snow";
  star?: boolean;
  toys?: (string | undefined | null)[];
};

const Animation: FC<IAnimation> = ({
  garland,
  star,
  toys,
  ...others
}) => {

  console.log(toys)

  const element = (
    <>
      <S1 garland={garland} star={star} toys={toys} />
      <S2 garland={garland} toys={toys} />
      <S3 garland={garland} toys={toys} />
      <S4 garland={garland} toys={toys} />
      <S5 garland={garland} />
    </>
  )

  return (
    <div className={style.Animation}>
      <Snowfall />
      <div className={style.Animation__inner}>
        <AspectRation width={10} height={13.5}>
          <div className={style.Animation__content}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 969.48 1300.07">
              <defs>

                <Segment0 />
                <Segment1 />
                <Segment2 />
                <Segment3 />
                <Segment4 />
                <Segment5 />

                <Star />

                <GarlandBlue />
                <GarlandGreen />
                <GarlandRed />

                <Snowflake />

                <Toy1 />
                <Toy2 />
                <Toy3 />
                <Toy4 />
                <Toy5 />
                <Toy6 />
                <Toy7 />
                <Toy8 />
                <Toy9 />

                <Toys />

                {element}

                <TreeShadow />
                <CloudBackground />
                <SnowBackground />

              </defs>

              <use width="2226" height="2394.45" transform="translate(-1523.9 929.29) scale(2 1)" xlinkHref="#snow_background" />

              <use className={style["segment_cloud"]} width="1561.19" height="456.24" xlinkHref="#cloud" />

              <use className={style["segment_tree_1"]} width="582.21" height="827.01" xlinkHref="#tree_shadow" />
              <use className={style["segment_tree_2"]} width="582.21" height="827.01" xlinkHref="#tree_shadow" />

              <use className={style["segment_5"]} width="837.71" height="882.47" transform="translate(92.87 372.37)" xlinkHref="#s5" />
              <use className={style["segment_4"]} width="730.9" height="783.24" transform="translate(160.47 293.79)" xlinkHref="#s4" />
              <use className={style["segment_3"]} width="598.1" height="650.37" transform="translate(236.81 205.49)" xlinkHref="#s3" />
              <use className={style["segment_2"]} width="417.39" height="503.96" transform="translate(303.74 147.21)" xlinkHref="#s2" />
              <use className={style["segment_1"]} width="363.58" height="434.33" transform="translate(326.46)" xlinkHref="#s1" />
              <use className={style["segment-0"]} width="1178.71" height="268.59" transform="matrix(0.82, 0, 0, -0.82, 0, 1300.07)" xlinkHref="#segment_0" />

            </svg>
          </div>
        </AspectRation>
      </div>
    </div>
  )
}

export default Animation;