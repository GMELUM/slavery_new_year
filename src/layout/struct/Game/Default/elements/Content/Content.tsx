import { FC, HTMLAttributes } from "react";
import { Snow } from "components";

import Header from "./elements/Header/Header";
import Rating from "./elements/Rating/Rating";
import Tree from "./elements/Tree/Tree";
import Full from "components/Full/Full";
import Balance from "./elements/Balance/Balance";
import ProgressBar from "./elements/ProgressBar/ProgressBar";
import Action from "./elements/Action/Action";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {
  return (
    <div>

      <Full>
        <Header />
        <Rating />
        <Balance />
        <Tree />
        <ProgressBar />
        <Action />
      </Full>

      <Snow>
        <div style={{
          height: "1000px"
        }} />
      </Snow>

    </div>
  )
}

export default Content;
