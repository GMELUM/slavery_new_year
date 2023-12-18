import { FC, HTMLAttributes, ReactNode } from "react";
import style from "./Info.module.css";

interface Info extends HTMLAttributes<HTMLSpanElement> {
  value: string;
  action: ReactNode;
};

const Info: FC<Info> = ({
  value,
  action,
  children,
  ...props
}) => (
  <div className={style.Info}>
    <div className={style.Info__value}>
      {value}
    </div>
    <div className={style.Info__action}>
      {action}
    </div>
  </div>
);

export default Info;