import { FC, HTMLAttributes, memo } from "react";

interface Star extends HTMLAttributes<HTMLDivElement> {
  type: "star_1" | "star_2" | "star_3"| string | boolean;
};

const Star: FC<Star> = ({ type }) => (
  <symbol id="star" data-name="star" viewBox="0 0 121.7 115.8">
    {(type === "star_1" || type === true) &&
      <g>
        <path d="M23.24,0,60.85,19.77,98.46,0,91.27,41.88,121.7,71.53l-42,6.11-18.8,38.1L42,77.64,0,71.53,30.42,41.88ZM60.85,36.32,42.69,26.77,46.16,47,31.47,61.31l20.3,3,9.08,18.39,9.08-18.39,20.3-3L75.54,47,79,26.77Z" fill="#ffa630" />
        <polygon points="98.46 0 79.01 26.77 75.54 46.99 91.27 41.88 98.46 0" fill="#ffba31" opacity="0.7" />
        <polygon points="90.23 61.31 121.7 71.53 79.65 77.64 69.93 64.26 90.23 61.31" fill="#ffba31" opacity="0.7" />
        <polygon points="60.85 115.74 60.85 82.65 51.77 64.26 42.05 77.64 60.85 115.74" fill="#ffba31" opacity="0.7" />
        <polygon points="31.47 61.31 0 71.53 30.42 41.88 46.16 46.99 31.47 61.31" fill="#ffba31" opacity="0.7" />
        <polygon points="42.69 26.77 23.24 0 60.85 19.77 60.85 36.31 42.69 26.77" fill="#ffba31" opacity="0.7" />
      </g>
    }
    {type === "star_2" &&
      <g>
        <path d="M30.4,41.9,23.2,0,60.8,19.8,98.4,0,91.3,41.9l30.4,29.7L79.6,77.7,60.8,115.8,42,77.7,0,71.6Z" fill="#fbaa34" />
        <path d="M60.8,57.9v57.9L42,77.7Z" fill="#ffcb46" />
        <path d="M0,71.6,60.8,57.9l-30.4-16ZM60.8,57.9,23.2,0,60.8,19.8Zm0,0,7.5-11.5L98.4,0,91.3,41.9,66.9,54.7Zm0,0,12.1,2.7,48.8,11L79.6,77.7l-15-15.9Z" fill="#ffcb46" />
        <path d="M60.8,69.4l-3.7-7.6-8.3-1.2,6-5.9-1.4-8.3,7.4,4,7.5-4-1.4,8.3,6,5.9-8.3,1.2Z" fill="#f28e26" />
      </g>
    }
    {/* {type === "star_3" &&
      <g>
      <g id="star-3">
        <path d="M56.05,1h9l.48,19.55c6.25,2.28,11,8.59,10,15.39-1.16,8.87-6.59,7.83-10.45,12.28,12,6-.25,19.73.19,29.23-2,4.88,1.91,36.85-3.28,37.55-2.55,0-.75-27-1.56-27.87-.53-5.51-.75-14-3.09-19-1.67-5.8-6.77-16.4,1.31-19.38-2.77-4.31-8.45-2.29-10.79-11.82-.59-10.52,2.81-11,9-17.12C56.71,16,56.23,4.92,56.05,1Z" fill="#ffba31"/>
        <path d="M59.56,1C69-3.54,63.85,17,65.44,20.45A15.37,15.37,0,0,1,75.5,37.58c-1.4,7.69-14.7,9.1-8.52,12,7.76,5.2,0,16.23-1.16,23.13C64.56,76,65.16,111.42,63.5,115c-2.67,2.5,1.11-38.67.4-38.52l.47-4.35c.34-5.19,4.34-16.71.68-21.19-2.79-1.51-1.86-5.66,1.06-6.39l2.52-6.49c.51-5.54-1.08-12.84-6.39-15.67Z" fill="#ff9715"/>
        <circle cx="60.9" cy="29.42" r="29.42" fill="#ffba31"/>
        <path d="M59.56,26.06c7.91,5.18,1.83,22-2.35,13C62,37.33,60.63,29.92,59.56,26.06Z" fill="#ff9715"/>
        <path d="M59.56,52.77c3.91-4.31,4.65,5.12,4.34,7.75-1.85,4.14-2.45,10.34-2.24,14.83-.92-4.82-2.14-11.59-1.1-16.47C62.13,56.92,61,54.44,59.56,52.77Z" fill="#ff9715"/>
        <path d="M30.4,42,23.2.1,60.8,19.9,98.4.1,91.3,42l30.4,29.7L79.6,77.8,60.8,115.9,42,77.8,0,71.7Z" fill="none"/>
      </g>
      <polygon points="60.31 0 70.6 6.61 76.92 14.87 78.86 23.9 78.21 33.19 74.6 41.69 69.58 51.66 66.47 54.87 66.21 56.16 66.53 58.3 73.03 56.23 79.99 51.8 84.46 47.04 87.41 42.18 89.53 36.22 90.3 30.23 89.91 24.53 88.36 18.86 85.24 12.9 81.08 8.02 75.31 3.77 70.21 1 63.96 0 60.31 0" fill="#ff9715"/>
      </g>
    } */}

    {/* <g id="star-3">
      <path className={style["cls-26"]}
        d="M91.3,41.9,98.5,0,60.9,19.8,23.3,0l7.1,41.9L0,71.6l42.1,6.1,18.8,38.1L79.7,77.7l42-6.1Z" />
      <path className={style["cls-27"]} d="M60.9,57.9v57.9L79.7,77.7Z" />
      <path className={style["cls-27"]}
        d="M121.7,71.6,60.9,57.9l30.4-16ZM60.9,57.9,98.5,0,60.9,19.8Zm0,0L53.4,46.4,23.3,0l7.1,41.9L54.8,54.7Zm0,0L48.8,60.6,0,71.6l42.1,6.1,15-15.9Z" />
      <path className={style["cls-28"]}
        d="M60.9,69.4l3.7-7.6,8.3-1.2-6-5.9,1.4-8.3-7.4,4-7.5-4,1.4,8.3-6,5.9,8.3,1.2Z" />
    </g> */}

  </symbol>
)

export default memo(Star);
