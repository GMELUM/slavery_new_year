import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface Segment4 extends HTMLAttributes<HTMLDivElement> { };

const Segment4: FC<Segment4> = () => (
  <symbol id="segment_5-2" data-name="segment 5-2" viewBox="0 0 335.41 353.66">
  <path className={style["cls-22"]}
    d="M334,67.66c-3-14-15-24-28-27a37,37,0,0,0-35,13c3-17-7-36-23-42s-35,1-44,16a21.41,21.41,0,0,0-11-19c-13-13-37-10-52,0-6,4-11,11-11,19-8-15-28-22-43-16s-26,25-23,42a37,37,0,0,0-36-13,38.21,38.21,0,0,0-28,27v10c2,6,7,9,12,12,28,17,46,42,62,68,11,19,20,39,29,59l43,90,21,47,22-47,42-90c10-20,19-41,30-60,16-26,34-50,61-67,5-3,11-6,13-12C336,74.66,335,70.66,334,67.66Z" />
  <path className={style["cls-24"]}
    d="M218,147.66c4-6,11-12,17-8,8,8-19,92-34,90C170,226.66,210,158.66,218,147.66Z" />
  <path className={style["cls-23"]}
    d="M64,124.66c-5-6-10-13-12-20s0-17,6-22c10-6,22,0,32,7-1-8-3-15-1-22,6-22,25-13,34-2,12,15,16,42,19,61a59.07,59.07,0,0,1,3-20c1-2,2-5,4-5,5-2,8,4,9,8a361.72,361.72,0,0,1,9,98c0,10-4,84-20,72a20.83,20.83,0,0,1-6-10C118,218.66,97,169.66,64,124.66Z" />
</symbol>
)

export default memo(Segment4);