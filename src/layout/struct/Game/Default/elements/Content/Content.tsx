import { FC, HTMLAttributes } from "react";
import Header from "./elements/Header/Header";
import Rating from "./elements/Rating/Rating";
import Tree from "./elements/Tree/Tree";
import Flex from "components/Flex/Flex";
import Full from "components/Full/Full";
import Balance from "./elements/Balance/Balance";

// import Header from "./elements/Header/Header";
// import Rating from "./elements/Rating/Rating";
// import Action from "./elements/Action/Action";
// import Tasks from "./elements/Tasks/Tasks";
// import Shop from "./elements/Shop/Shop";
// import { Background, BackgroundContent } from "components";
// import { Assets } from "engine";
// import Stock from "./elements/Stock/Stock";
// import Control from "./elements/Control/Control";
// import Top from "./elements/Top/Top";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {
  return (
    <div>

      <Full>
        <Header />
        <Rating />
        <Balance />
        <Tree />
        {/* <Action /> */}
      </Full>



      {/* <Background image={<Assets group={"game"} code={"main_bg"} />}>
        <Header />
        <Rating />
        <Action />
      </Background>

      <BackgroundContent image={<Assets group={"game"} code={"second_bg"} />}>
        <Control />
        <Tasks />
        <Shop />
        <Stock />
        <Top />
      </BackgroundContent> */}

    </div>
  )
}

export default Content;
