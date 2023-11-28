import { FC, HTMLAttributes, Fragment } from "react";
import { Badge, Card, CardContainer, Div, ModalPanel } from "components";

import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { backPage, nextPage } from "elum-router/react";
import executeBuy from "handlers/executeBuy";
import VoteItem from "components/VoteItem/VoteItem";
import executeVote from "handlers/executeVote";



interface Vote extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Vote: FC<Vote> = () => {

  const value = useGlobalValue(DATA);

  const handlerVote = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeVote(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"} color={"#d8eaff"}>
      <Div
        top={"32px"}
        bottom={"12px"}
      >

        {value.vote.map((elem, index) => (
          <VoteItem
            key={`voteitem_index`}
            cone={elem.cone}
            elf={elem.elf}
            snowflake={elem.snowflake}
            price={elem.price}
            onClick={() => handlerVote(elem.key)}
          />
        ))}


      </Div>
    </ModalPanel>
  )
}

export default Vote;
