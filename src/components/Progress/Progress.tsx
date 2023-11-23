import { FC, HTMLAttributes, useEffect } from "react";
import style from "./Progress.module.css";
import { SnowFlake } from "icons";

interface Progress extends HTMLAttributes<HTMLDivElement> {
  value: number;
  count: number;
};

const Progress: FC<Progress> = ({
  value,
  count,
  children
}) => {

  const calculateToddlerLeft = (value: number) => {
    const procent = value * 24 / 100;
    return `calc(${value}% - ${procent}px)`;
  };

  const rgb = (r: number, g: number, b: number) => `rgb(${r},${g},${b})`;

  const getColorFromGradient = (percent: number) => {
    const colors = [
      { percent: 0, color: { r: 255, g: 0, b: 0 } },
      { percent: 50, color: { r: 255, g: 174, b: 0 } },
      { percent: 100, color: { r: 0, g: 255, b: 60 } },
    ];

    let startColor = { percent: 0, color: { r: 255, g: 0, b: 0 } };
    let endColor = { percent: 100, color: { r: 0, g: 255, b: 60 } };

    for (let i = 0; i < colors.length; i++) {
      if (percent === colors[i].percent) {
        return rgb(colors[i].color.r, colors[i].color.g, colors[i].color.b);
      }

      if (colors[i].percent < percent && colors[i].percent > startColor.percent) {
        startColor = colors[i];
      }

      if (colors[i].percent > percent && colors[i].percent < endColor.percent) {
        endColor = colors[i];
        break;
      }
    }

    const delta = endColor.percent - startColor.percent;
    const percentDelta = (percent - startColor.percent) / delta;
    const resultColor = {
      r: Math.round(startColor.color.r + ((endColor.color.r - startColor.color.r) * percentDelta)),
      g: Math.round(startColor.color.g + ((endColor.color.g - startColor.color.g) * percentDelta)),
      b: Math.round(startColor.color.b + ((endColor.color.b - startColor.color.b) * percentDelta)),
    };

    return rgb(resultColor.r, resultColor.g, resultColor.b);
  };

  return (
    <div className={style.Progress}>
      <div className={style.Progress__inner}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 851 90">
          <path fill="#bce1fc" d="M.59,45.85V89.8h851V43Z" />
          <path fill="#ffffff"
            d="M.59,47a77.6,77.6,0,0,1,35.8-27c9-3.42,18.3-5.48,28-4.89,13.3.59,26.5-1.17,39.5-4.2,6.4-1.47,13-2.93,19.5-4.21a78.7,78.7,0,0,1,14.2-1.36c11,0,22-.3,32.9,1.66,15,2.64,30.2,2,45.4,1.76,5.9,0,11.7-1.86,17.6-2.15,11.3-.59,22.5-.69,33.7,1.56,4,.78,8.1,2,12.2,2.84A78.13,78.13,0,0,0,295.29,13h33.4a45,45,0,0,0,11.2-1.56c10.3-2.74,21-4.21,31.4-6.46,8-1.66,16-3.71,24.2-4.59,2.5-.19,5-.39,7.4-.39h26.9c6.1,0,12,1.63,18,2,7.6.58,14.3,3.65,21.4,5.77,13,3.84,26.2,3.36,39.5,1.73,7.6-1,15-2.89,22.6-3.85,4.8-.57,9.5-.38,14.3-.67h5.7s26.4,2.1,39.2,5.7a61.11,61.11,0,0,0,22.9,1.2c13-1.3,26-3.9,39.2-4.2,10.4-.3,20.8-.6,31.2.8a204.27,204.27,0,0,0,29.3,2.3,178.85,178.85,0,0,0,33.1-4,49.41,49.41,0,0,1,16-.8H803a7.51,7.51,0,0,1,5.1,0c5.7,1.7,11.4,3.2,16.8,6a12.84,12.84,0,0,1,3.6,2.3c7.7,7.9,15.8,15.3,21.1,25.2l1.9,4c.4,7-3.3,12.6-7.4,17.5-5.8,7.2-13.2,11-22.7,7.4-3.4-1.3-6.8-.5-10.2.5-11,3-22.1,2.8-32.8-1.6a68,68,0,0,0-24.6-4.6c-9.9-.2-19.7.3-29.5-.1-10.1-.5-19.3,2.4-27.9,7.2-6.5,3.6-12.4,4.3-18.7,0-2.7-1.8-5.6-1-8.4,0-2.1,1-4,2.2-6.2,3-5.3,2.2-10.9,3.9-15.8,0-9.8-7.5-20.8-6-31.7-5.3-18.8,1.4-36.6,7.4-54.4,13a56,56,0,0,1-45.7-5c-7.2-4-15-6.6-22.7-8.8-6.4-1.8-12.7-.4-19-.4-5.3,0-9.9-1-14-4.8-6.8-6-15-4.3-22.9-3.8-15.5.8-30,6-44.8,10.2a117,117,0,0,1-18,3.4,16.55,16.55,0,0,1-9.6-2,62.26,62.26,0,0,0-34.1-6.6c-8.4.6-16.7,1.5-25.1,2-9,.7-17,4.5-25.6,6.8-9.9,2.7-19.9,3.7-30,4.5-5,.4-10,1-14.8,3a17.9,17.9,0,0,1-17.1-1.4,58.81,58.81,0,0,0-30-7.7c-11-.4-22,0-33-.2a32.8,32.8,0,0,0-13.5,3A58.6,58.6,0,0,1,98.09,75c-11.5-4-23-3.9-34.7-3-12,.9-24,2-36,1.2-13-1-22-8.2-27.2-20.5-.6-1.5.4-4.6.4-4.6Z" />
        </svg>
        <div className={style.Progress__content}>
          <div className={style.Progress__indicator}>
            <div className={style.Progress__gradient}>
              <div className={style.Progress__toddler} style={{
                left: calculateToddlerLeft(value),
                background: getColorFromGradient(value)
              }} />
            </div>
          </div>
          <div className={style.Progress__badge}>
            <div className={style.Progress__count}>
              доход {count} <SnowFlake width={18} height={18} /> в час
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress;
