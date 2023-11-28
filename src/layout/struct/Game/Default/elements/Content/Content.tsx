import { FC, HTMLAttributes } from "react";
import { Snow } from "components";

import Header from "./elements/Header/Header";
import Rating from "./elements/Rating/Rating";
import Tree from "./elements/Tree/Tree";
import Full from "components/Full/Full";
import Balance from "./elements/Balance/Balance";
import ProgressBar from "./elements/ProgressBar/ProgressBar";
import Action from "./elements/Action/Action";
import Top from "./elements/Top/Top";
import Shop from "./elements/Shop/Shop";
import Tasks from "./elements/Tasks/Tasks";
import Stock from "./elements/Stock/Stock";
import SubAction from "./elements/SubAction/SubAction";

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
        <SubAction />
        <Tasks />
        <Shop />
        <Stock />
        <Top />
      </Snow>

    </div>
  )
}

export default Content;
