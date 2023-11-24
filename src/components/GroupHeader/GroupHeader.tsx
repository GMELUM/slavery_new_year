import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./GroupHeader.module.css";
import Centered from "components/Centered/Centered";

interface GroupHeader extends HTMLAttributes<HTMLSpanElement> {
  color: string;
  title: string;
  icon: ReactNode;
};

const GroupHeader: FC<GroupHeader> = ({
  color,
  title,
  icon,
  children
}) => (
  <div className={style.GroupHeader}>
    <div className={style.GroupHeader__outer}
      style={{ backgroundColor: color }}
    >
      <div className={style.GroupHeader__inner}>
        <div className={style.GroupHeader__title}>{title}</div>
        <div className={style.GroupHeader__icon}>{icon}</div>
      </div>
    </div>
  </div>
);

export default GroupHeader;