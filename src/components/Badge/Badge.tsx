import { FC, HTMLAttributes } from "react";
import style from "./Badge.module.css";

interface Badge extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
};

const Badge: FC<Badge> = ({
  title,
  description,
  children
}) => {
  return (
    <div className={style.Badge}>
      <div className={style.Badge__outer}>
        <div className={style.Badge__inner}>
          <span>{title}</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default Badge;
