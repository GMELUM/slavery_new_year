import { FC, HTMLAttributes, memo } from "react";

import style from "./symbol.module.css";

interface Toy3 extends HTMLAttributes<HTMLDivElement> { };

const Toy3: FC<Toy3> = () => (
  <symbol id="toy_3" data-name="toy 3" viewBox="0 0 100 100">
    <path className={style["cls-1"]} d="M0,100H100V0H0Z" />
    <circle className={style["cls-32"]} cx="49.3" cy="41.5" r="36.4" />
    <path className={style["cls-41"]} d="M49.7,77.8A29.5,29.5,0,0,0,13.8,33.3,36.4,36.4,0,1,1,49.7,77.8Z" />
    <path className={style["cls-42"]} d="M59.6,76.4A36.4,36.4,0,0,0,22.1,17.2,36.4,36.4,0,1,1,59.6,76.3Z" />
    <path className={style["cls-40"]}
      d="M21.8,65.2a5.9,5.9,0,0,1,.5.5l-.6-.4L23,66.7l.5.5-1-1-2-2.3v-.2l-.6-.7a13.35,13.35,0,0,1,1.2,1.6l.5.5.2.2M36.9,40.9a4,4,0,0,0-2.7,2.4l3.1,1.6-.4-4m4.3,1.5a4.19,4.19,0,0,0-3.4-1.7l.4,4.2,3-2.4m-7.3,1.8a5.39,5.39,0,0,0,.7,3.7L37,45.8l-3-1.5m8.2.7a5.94,5.94,0,0,0-.5-1.7l-3,2.4L42,47.4a5.57,5.57,0,0,0,.2-2.4m-4.7,1.6-2.3,2.2a4.28,4.28,0,0,0,3,1.5l-.6-3.6m.8-.1.6,3.7a4,4,0,0,0,2.6-2l-3.2-1.7m17.2,9.9a.5.5,0,0,1-.5.5l-1.9-1.4.3,2c-.2.8-.7.5-.7.5a31.74,31.74,0,0,1-.5-3.2l-2-1.3.7,3.3c0,.8-.6.4-.6.4l-1-4.4-2.7-1.7,1.4,5.4c0,.8-.5.5-.5.4l-2-6.5-3.2-1.8a4.6,4.6,0,0,1-3.3,2.6l.8,3.9,4.4,4a.5.5,0,0,1,.1.7.47.47,0,0,1-.1.1h-.2l-4-3.6.9,3.2,2.8,2.6a.48.48,0,0,1,0,.7h-.2l-2.3-2.1.7,2.3,1.9,1.7a1.24,1.24,0,0,1,.1.5v.2a4.17,4.17,0,0,1-1.6-1.3l.8,2.1v.3l-.2.2a1.17,1.17,0,0,1-.3-.4l-.9-2-.3,1.3h-.2c-.5-.2-.6-.3.2-2.4l-.8-2.4-.8,2.3-.2.2c-.6-.3-.8-.4.6-3.7l-.9-3.2a24.73,24.73,0,0,0-1.6,4l-.2.2c-.4-.2-1-.4,1.5-5.5-.29-1.33-.56-2.66-.8-4a5.11,5.11,0,0,1-3.7-1.8c-.78.79-1.55,1.59-2.3,2.4a43.25,43.25,0,0,0,1,6.4v.2l-.2.2c-.7-.3-1.2-4.3-1.4-6L30,54.9l1.1,4.2v.2l-.2.2c-.3-.2-.5-.3-1.4-3.8l-.9,1.7,1,2.8v.3l-.2.1c-.3-.2-.3-.2-1.2-2.4l-.5,1.6h-.3c-.5-.3-.5-.3.2-2.3H26.1c-.5-.4-.5-.6-.4-1l2.2.2,1-1.7-2.6-.3a.7.7,0,0,1-.4-.8l3.4.3L30.9,52l-4.4-.5a.6.6,0,0,1-.48-.7.7.7,0,0,1,.08-.2c.2,0,.4-.2,5.5.6a17.94,17.94,0,0,1,2.3-2.5,6.5,6.5,0,0,1-1-4.7l-3.2-1.6a49.43,49.43,0,0,0-4.8,3h-.2c-.7-.7-.9-.8,4-3.5L26,40.5l-3,2h-.3C22,42,22,42,25,40l-2-1-2,1.6h-.2c-.5-.6-.5-.6,1.3-2l-1.6-1a.59.59,0,0,1,.2-1,6.61,6.61,0,0,1,1.7,1L22,35.5a.82.82,0,0,1,.3-.7h.2a14.53,14.53,0,0,1,.9,3.3l2,1-1-3.5c0-.6.2-.7.5-.7,1.2,1.3,1,3.1,1.4,4.7L29,40.9c-.66-1.84-1.22-3.71-1.7-5.6,0-.8.3-.8.6-.8,1.8,2,1.4,4.7,2.2,7l3.3,1.6A5,5,0,0,1,36.8,40l-.2-4L32,31.5c-.3-.6,0-.9.5-1l4,4V30.7l-3-3a.6.6,0,0,1,.36-.77,1,1,0,0,1,.24,0l2.4,2.4.2-2.8-2-2c-.3-.6.5-.7.6-.7.6.2,1,1,1.4,1.4l.3-2.5c.3-.8.8-.4.9-.2l-.2,2.6,1.6-1.6c.6-.4.7.1.7.2l-2.4,2.7-.1,2.8L40,26.4c.7-.4.9.3.8.5-.6,1.3-2.4,2.6-3.4,3.7v3.7l4-4.6c.7-.5.9.1.9.4-.2,1-1.5,1.7-2.1,2.4l-2.8,3.3.3,4A5,5,0,0,1,42,42l3-2.1,1.7-7c.3-.7.8-.3,1,0L46.2,39l3.1-1.9,1.2-4.7a.53.53,0,0,1,1,0l-1,4L53.1,35l.8-3.3a.5.5,0,1,1,1,0c.3.8-.4,1.8-.6,2.6l2.4-1.4a.5.5,0,0,1,.7.1.51.51,0,0,1,0,.6c-.4.8-1.8,1.1-2.6,1.5L57,36c.8.6,0,1,0,1a14.6,14.6,0,0,1-3.4-1L51,37.4l3.6,1a.5.5,0,0,1,0,1c-1.5.1-3.4-1-4.8-1.3l-3,2c3.4.8,3.6,1,5.6,1.5a.5.5,0,0,1-.1,1c-2.4.2-4.5-1.2-6.7-1.8l-3,2a6.5,6.5,0,0,1,.2,5.1L46,49.7c2.9-1,3.3-1,6-1.8.8,0,.4.8.2,1-1.6.9-3.4,1-5.1,1.5l2.7,1.7c1.2-.3,2.7-.8,4-1,.7,0,.4.7.2.8a16,16,0,0,1-3.2.9l2,1.4,2.7-.7c.7.1.3.8.1,1a9.45,9.45,0,0,1-1.9.4l1.8,1.4a.67.67,0,0,1,0,.2m29-6.5s-.1,0-.6,1.2l-.6,2.7a32.12,32.12,0,0,0,1.3-3.8m-1,3.3.8-2.4c0-.2.08-.4.1-.6a34.69,34.69,0,0,1-1.2,3.7l.3-.5v-.2m0-1.5a24.53,24.53,0,0,0-1.4,3.5c.28-.29.55-.59.8-.9l.5-2.6m-.3,2.6L83,55a14.72,14.72,0,0,1-1,2.2l1.3-2.7m-.6.9-.9.8L81,58.6a35,35,0,0,0,1.7-3.2m0,.2A35.93,35.93,0,0,1,81,59s0,.2.1,0a4.25,4.25,0,0,0,.5-.7,27.73,27.73,0,0,0,1-2.6m2.7-19.2.3,2.2-.4-2.8-.1-.7.2,1.3m-11,31.2L74,68a33.19,33.19,0,0,0,3.3-3.9l-2.5,2.5-2.6,2.7a6.25,6.25,0,0,1-.5.4l2.1-2.2a12.39,12.39,0,0,1-2.2,1.8l-2,1.7a2.73,2.73,0,0,1-.6.4l1.5-1.3c-.88.57-1.78,1.11-2.7,1.6l.3-.2L70.5,70l-1.3.6c0-.2,0-.2,2.4-1.4l2.2-1.8-2,1.1,3-2a34.1,34.1,0,0,0,2.5-2.6,26,26,0,0,1-3,2.1c0-.3,0-.3,2-1.6l1.9-1.6a37.43,37.43,0,0,0,2.3-3.3,22.46,22.46,0,0,1,1-3l-1.5,1a41.8,41.8,0,0,1-4.1,5.1,1,1,0,0,1-.4.2,1,1,0,0,1,.3-.6,41.1,41.1,0,0,0,3.6-4.4l-1.6.9-3,3.4a1,1,0,0,1-.4.2L77,59l-1.6.7-2,2.4a1.25,1.25,0,0,1-.4.2c-.1-.3-.1-.3,1.6-2.2l-1.6.6h-.2c0-.6,0-.6,2.1-1.5l-.5-.9a.8.8,0,0,1,.5-.8l.8,1.4,1.6-.7a7.74,7.74,0,0,0-.7-1.6.81.81,0,0,1,.5-.9,16.15,16.15,0,0,1,1,2.1l1.6-.8a9.54,9.54,0,0,0-.9-2.7,1,1,0,0,1,.4-.8h.1a10,10,0,0,1,1,3.1,6.53,6.53,0,0,0,1.5-1c2-4.9,2-4.9,1.8-7.2H81.2c-.3-.3,0-.8,0-1l2.3-.1L83,44.7H81c-.4-.3-.1-.7,0-1h1.7l-.8-2.2-1.5.1a.69.69,0,0,1-.22-1l0,0h1.2l-1-2a.81.81,0,0,1,0-1h.2l1.2,2.1-.2-2.4a2.67,2.67,0,0,1,0-.4h.1c.2.1.4.3.5,3.9l.7,2V39a2.77,2.77,0,0,1,.1-.5h.2a24.37,24.37,0,0,1,0,5.4l.6,2.7a35.75,35.75,0,0,0,.4-6.2,2.09,2.09,0,0,1,0-.5l.1.1a30.75,30.75,0,0,1-.5,7.6v2.9a5.9,5.9,0,0,1,.8-1.4,20.55,20.55,0,0,0,.8-3.8,30.45,30.45,0,0,0-.2-6.4,3.57,3.57,0,0,1,0-.8,24.48,24.48,0,0,1,.3,5.8v-1l-.3,3.6-.5,2.8a40.57,40.57,0,0,1-1.2,4,35.36,35.36,0,0,1-2.4,5.5V59a2.24,2.24,0,0,1-.6.7l-2.4,3.1a30,30,0,0,1-3.6,4.5l-.2.2M24.7,14.6l-.6.5.6-.5m2-1.6.5-.5-1,.8L24.4,15l2.3-2m-3.2,2.8-.5.5.5-.4m1.9-1.4.9-1-2.4,2a2.43,2.43,0,0,0-.1.6l1.6-1.6M23,16.3l-1.2,1.3-.9,1a1.5,1.5,0,0,0-.2.4A28.25,28.25,0,0,1,23,16.3m.2-.2A29.8,29.8,0,0,0,21,18.8l2-2a1.85,1.85,0,0,1,.2-.6m5.5,3.7c-.1.9-.2.8-2,0l-.2,1.6s-.2.7-.7.5a21.05,21.05,0,0,1,.3-2.5l-1-.7-.6,2.7a.89.89,0,0,1-.5.6h-.2a14.08,14.08,0,0,1,.9-3.6l-1-.7A19.93,19.93,0,0,0,22.3,22c-.1.5-.4.6-.5.6-.2-.3.5-2.7,1.7-5a3.91,3.91,0,0,1-.4-.6l-2.6,2.5a28.41,28.41,0,0,0-2,3.3,6.34,6.34,0,0,0,0,3,1,1,0,0,1-.4.8,5.59,5.59,0,0,1-.2-2.6,32.24,32.24,0,0,0-1.3,3.1,18.11,18.11,0,0,0,.4,2.2s0,.7-.4.9a13.65,13.65,0,0,1-.4-1.9l-.7,2.8.5,1.6a1.56,1.56,0,0,1-.3,1l-.4-1.3-.4,2.7c0,.5,0,.6-.2.7a.76.76,0,0,1-.1-.3,11.8,11.8,0,0,1,.4-2.8l-.7,2v.2l-.2-.1a22.9,22.9,0,0,1,1.1-3.5l.7-2.7-1.3,3.2v.1c-.2-.3.5-2.1,1.7-4.6a32.24,32.24,0,0,1,1.3-3.1A31.25,31.25,0,0,0,15.1,29v.1c0-.2.6-2.2,3.1-6.1a32.55,32.55,0,0,1,2-3.3h-.1l1.7-2.1a34.82,34.82,0,0,1,4.3-4.2L27.9,12l-.7.7,2.4-1.6a29.88,29.88,0,0,1,5.2-3l.4-.1a31.19,31.19,0,0,0-4.7,2.6q2.8-1.59,5.7-3l.3-.1L33.7,8.9l1.9-.8c.6-.2,1.5-.8,2.2-1l.3-.1a15.47,15.47,0,0,1-1.7.8l1.7-.7h.2l-2.2,1h.6c-.2.3-.2.3-1.5.3l-1.8.9h1c-.3.4-.3.4-2,.5L30.2,11c.53-.06,1.07-.09,1.6-.1-.1.4-.1.4-2.5.6-.78.52-1.54,1.05-2.3,1.6l-3.1,3.2a4.81,4.81,0,0,0,.4.6,41,41,0,0,1,4.3-2.4h.1l-4.2,2.7,1,.7,3-1.7h.2l.1.2c0,.2,0,.2-3,1.8l1,.7,2.4-1.2a.51.51,0,0,1,.3,0c0,.5,0,.5-2,1.5l1.2.6V20M64,9.6c-.4,0-1,0-1,.6l2.9,1.4a18.89,18.89,0,0,0-1.9-2m3.2,1.5a10.35,10.35,0,0,0-2.7-1.4,21,21,0,0,1,2,2c.28-.19.54-.39.8-.6h-.1m-4-.5a5,5,0,0,0,1.4,2L66,12l-2.8-1.4m5.8,2a11.8,11.8,0,0,0-1-1l-.9.6,2.8,1.7a4,4,0,0,0-.9-1.3m-2.4,0-1.3.7a9.51,9.51,0,0,0,2.8,1.6,26.66,26.66,0,0,0-1.5-2.3m.6.1a22.92,22.92,0,0,1,1.5,2.4c.9.1,1.3-.1,1.3-.7l-2.8-1.7M80.9,24.4l.2.3-1.4-1.8,1,2a2.67,2.67,0,0,1,0,.4l-1.8-3.2-1.6-1.7,1.8,3,.2.5H79a38.38,38.38,0,0,1-2.6-4.3l-2.2-2a36,36,0,0,1,3,4.8,1.76,1.76,0,0,1,.1.3h-.1c-1.9-1.6-2.5-4-4-5.9l-2.6-2c0,.4,0,1.2-1.6.9a30.52,30.52,0,0,1,1.3,3,58.5,58.5,0,0,1,4.7,5c.2.3.2.4.1.5s-.2,0-2.2-2.2c-.71-.76-1.44-1.49-2.2-2.2l1,3,3,3.6c.2.3.1.4,0,.6s-.1,0-2.8-3l.5,2.7,2,2.6c.4.6,0,.8-.2.7-.7-.3-1.2-1.4-1.6-2l.2,2.7c0,.2,0,.4-.4.3a.68.68,0,0,1-.3-.4,21.86,21.86,0,0,0-.3-2.8l-1.1,1.3c-.6.3-.8-.5-.7-.7.2-.9,1-1.3,1.6-1.9a20.24,20.24,0,0,0-.4-2.6l-1.7,1.9c-.6.3-.8-.5-.8-.6a8.81,8.81,0,0,1,2.2-2.5l-.9-3a29.05,29.05,0,0,1-2.4,2.8c-.6.3-.8-.5-.8-.6.6-1.4,2-2.2,2.8-3.3a30.52,30.52,0,0,0-1.3-3,11.24,11.24,0,0,1-3.6-2.1l-2.2.9a29.43,29.43,0,0,1,0,4.6c-.3.5-.8,0-.9,0a4.54,4.54,0,0,1,.1-2.3v-2l-2.2,1L59.1,19c-.3.6-.9,0-1,0l.5-2.8-2.1.8L56,19.4c-.3.5-.8,0-.9,0-.2-.5.2-1.4.4-2l-2.1,1c-.6.2-.8-.2-.7-.4.3-.7,1.6-.8,2.3-1.2l-2-.5c-.6-.2-.3-.6-.2-.6s.2-.1,3.2.7l2-.9-3.2-.8c-.6-.3-.3-.6-.2-.7s.2,0,4.3,1.1l2.3-1-5-1.3-.4-.3v-.2c.4-.2,3.5.7,6.1,1.6l2.1-1c-.7-.7-.9-1.8-1.7-2.4a12.25,12.25,0,0,0-3-1.4l-4,.3c-.4,0-.5-.1-.5-.3a21.56,21.56,0,0,1,3.5-.4l-2.4-1L53.3,8a.48.48,0,0,1-.4-.2V7.7l2-.2-1.7-.6L51.7,7c-.3,0-.3,0-.4-.2a3.61,3.61,0,0,1,1.3-.2l-1.5-.4L51,6.1V6a7.65,7.65,0,0,1,1.7.4L52,5.8h.1a5.75,5.75,0,0,1,1.3.8l1.7.5-1.3-1,.1-.1A8,8,0,0,1,56,7.4l2.4.9a17.63,17.63,0,0,0-2.7-2h.1a15,15,0,0,1,3.6,2.4l2.9,1.2c0-.6.3-.8,1.1-.7a17.1,17.1,0,0,0-2-1.5A36.67,36.67,0,0,0,57,6l-.3-.1a26.68,26.68,0,0,1,4,1.3,14.37,14.37,0,0,0-2-.9l-2-.5,1,.2h.1l1,.3H59a14.44,14.44,0,0,1,2.1,1,5.1,5.1,0,0,0-1-.6l.5.1c.9.5,1,.5,1.3,1A17.38,17.38,0,0,1,64,9.3,12,12,0,0,1,67.4,11a2.29,2.29,0,0,0,.3-.5,17.44,17.44,0,0,0-4-2.5h-.2l.5.2h.1a17,17,0,0,1,3.5,2.1,1.57,1.57,0,0,0-.2-.3L66,9l.7.5.7.3H67l.7.3.2.2L69,11l1.2.7-2.1-1.3a1.25,1.25,0,0,1,.2.4,27.46,27.46,0,0,1,2.8,1.7l.6.5a24.94,24.94,0,0,0-3.4-2,2.29,2.29,0,0,1-.3.5,11.71,11.71,0,0,1,1.7,1.6c.3.4.4,1,.8,1.3.7.7,1.8,1.3,2.6,2H75a2.14,2.14,0,0,1,.6.6H74.1l2.3,2h1a2.3,2.3,0,0,1,.5.7h-.8l1.6,1.7h.6a2.3,2.3,0,0,1,.5.8h-.4L80.7,24l.2.3M42.2,75a5.09,5.09,0,0,0,2,.7l2,.3a36.54,36.54,0,0,1-4-1m2,.4a8.07,8.07,0,0,0-2-.4,36.54,36.54,0,0,0,4,1l-1.8-.6h-.1m.7.6a31.51,31.51,0,0,0,4,.4,6.48,6.48,0,0,1-2-.2L45,76m1.8,0,.3.1,2,.3L46.8,76m1.1.3,1.4.1-1.4-.1m0,0,1.4.1-1.4-.1m-7.3-5.6.4,1.2.9.2a1.28,1.28,0,0,1,.6.4l-1.4-.2a9.84,9.84,0,0,0,.5.9l1.4.2a1.75,1.75,0,0,1,.6.4L42,73.5a11.8,11.8,0,0,0,1,1l2,.2a3.36,3.36,0,0,1,.6.3l-2.1-.3,1.4.8a36.9,36.9,0,0,0,4.4.9h-.1c-2.3-.1-4.6-.5-6.8-.8a11.18,11.18,0,0,0,1.8.6,5.46,5.46,0,0,1-2.6-.6l-1.8-.2,1.4.5a4.17,4.17,0,0,1-2-.6l-1.3-.2,1,.5c-.5,0-.6-.1-1.6-.6l-1.1-.1a4.53,4.53,0,0,1-.8-.3l1,.1-2-.6a3.36,3.36,0,0,1-.6-.3,20.1,20.1,0,0,1,3.2,1l1.3.2-3.4-1a2.81,2.81,0,0,1-.6-.3c1.7,0,3,1,4.6,1.4l1.8.2a40.18,40.18,0,0,1-5.6-1.7,1.81,1.81,0,0,1-.5-.2.67.67,0,0,1,.2,0,44.84,44.84,0,0,0,6.7,2l2.1.3a7.35,7.35,0,0,1-2.3-.9l-3.7-1.4-5-1.7a2,2,0,0,1-.6-.4,8,8,0,0,1,2,.7l2.3.8L33.1,71l-3.2-1.3a1.81,1.81,0,0,1-.6-.5,21.47,21.47,0,0,1,2.6,1c-.79-.5-1.55-1-2.3-1.6l-2.2-1a1.57,1.57,0,0,1-.6-.6h.1l1.6.7-2-1.8a.79.79,0,0,1-.3-.4l.4.1,2,2-.7-1.4v-.1l2,2.3c.75.63,1.51,1.23,2.3,1.8l-1.6-2v-.1a33.63,33.63,0,0,1,2.8,2.8,24.22,24.22,0,0,0,3.2,1.8A14.86,14.86,0,0,1,33.7,70a1.2,1.2,0,0,1,.7.3,14.75,14.75,0,0,0,3.4,3c1.18.53,2.38,1,3.6,1.4a8.5,8.5,0,0,1,2.6.5l-1.4-.7a26.17,26.17,0,0,1-5.1-3.2,1.89,1.89,0,0,1-.2-.2l.5.2a22.76,22.76,0,0,0,4.4,2.8l-1-1-3-2.3a1.89,1.89,0,0,1-.2-.2c.2,0,.2,0,2.3,1.7l.6.5c0-.3-.3-.7-.4-1L38.7,70a1,1,0,0,1-.2-.2c.3,0,.3,0,1.8,1.6l-.1-1a.79.79,0,0,1,.4.3M54,74a5.7,5.7,0,0,0-1.8.8,10.06,10.06,0,0,1-.8.8A22.39,22.39,0,0,0,54,74m-.7.8c.7-.3,1-.7.9-.8a22.81,22.81,0,0,1-2.8,1.5l1.9-.7m-1.6.2a23.44,23.44,0,0,1-2.2,1.2l1.3-.5c.31-.22.61-.45.9-.7m-.3.7,1.2-.5-1.7.5-1.4.6,1.9-.6m-1.2.3-1,.3,1-.3m0,0-1,.3,1-.3m12.5-3.6a8.7,8.7,0,0,1-2,.6l-.3.4a2.61,2.61,0,0,1-.8.4l.3-.6-1.6.4a6.25,6.25,0,0,1-.4.6,3.5,3.5,0,0,1-1,.3l.7-.7-2,.5a3.38,3.38,0,0,1-.8.8,3.91,3.91,0,0,1-.9.2,3.53,3.53,0,0,0,1-.8L53,75a20.31,20.31,0,0,1-3.7,1.3c2.6-1.3,2.8-1.6,3-2.4a12.7,12.7,0,0,0-1.7.6c0-.2-.1-.4,1.8-1a5.57,5.57,0,0,0,0-1l-1.5.6c0-.4,0-.4,1.3-.9l-.4-.9-1.1.5h-.1c-.3-.4-.1-.5,1-.9l-.8-.9c0-.2,0-.5.3-.5l.7.9L52,69c0-.5.4-.4.4-.3a13.54,13.54,0,0,1-.3,2.2l.5.9.6-2.2c.1-.3.2-.4.4-.4.2.2-.4,1.9-.9,3a8.43,8.43,0,0,1,.2,1,14.13,14.13,0,0,0,1.7-3.3c.1-.3.3-.4.4-.4.2.3-.7,2.2-2.2,4a5.09,5.09,0,0,1-.4,1,6.85,6.85,0,0,1,2.2-1,21.94,21.94,0,0,0,2.5-1.9,7.69,7.69,0,0,0,1-3.3.56.56,0,0,1,.6-.5,6.28,6.28,0,0,1-.7,3l2-2.2a19.14,19.14,0,0,0,.4-2.5c.1-.6.6-.7.7-.5a5.42,5.42,0,0,1-.2,2l1.5-2V63.7c0-.6.6-.7.7-.5.3.3,0,1,0,1.5l1.4-2.2c.3-.4.6-.4.6-.1a.67.67,0,0,1,0,.2c-.48.75-1,1.48-1.5,2.2l1.6-1h.3c.2.3.2.3-2.6,2a10.8,10.8,0,0,1-1.6,2l2.5-1.5h.3c0,.4,0,.4-3.6,2.5L58.3,71l4-2.2h.2c-.1.3-.1.3-5.1,3-.8.64-1.64,1.24-2.5,1.8.3.3-.6.9-1.1,1.2l1.9-.6a49.34,49.34,0,0,0,5.6-3,1.8,1.8,0,0,1,.4-.1A36.8,36.8,0,0,1,56.4,74l2-.6,4-2a1.76,1.76,0,0,1,.3-.1,36.73,36.73,0,0,1-3.5,2l1.6-.5,2.8-1.4a1.18,1.18,0,0,1,.3-.1,12.71,12.71,0,0,1-2.3,1.3l1.5-.4-.3.3" />
    <path className={style["cls-33"]}
      d="M49.7,93.9a6,6,0,0,1-6-6h0V84.7H46v3.2a3.65,3.65,0,0,0,7.3,0V84.7h2.4v3.2A6,6,0,0,1,49.7,93.9Z" />
    <path className={style["cls-34"]} d="M43.6,85.7H55a6,6,0,0,0,6-6V75.9H37.6v3.8A6,6,0,0,0,43.6,85.7Z" />
    <path className={style["cls-35"]} d="M43.6,85.7H55a6,6,0,0,0,6-6V75.9H37.6v3.8A6,6,0,0,0,43.6,85.7Z" />
    <path className={style["cls-33"]} d="M54.6,76H61v5.8a3.91,3.91,0,0,1-3.9,3.9H53.7a18,18,0,0,0,.9-9.8Z" />
  </symbol>
)

export default memo(Toy3);
