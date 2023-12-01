import { AllHTMLAttributes, FC } from "react";
import style from "./Banner.module.css";
import { Events, Image } from "components";

interface Banner extends AllHTMLAttributes<any> { };

const Banner: FC<Banner> = ({
  children,
  ...others
}) => {
  return (
    <Events type={"a"} {...others} className={style.Banner}>
      <div className={style.Banner__inner}>
        {children}
      </div>
    </Events>
  )
}

export default Banner;
