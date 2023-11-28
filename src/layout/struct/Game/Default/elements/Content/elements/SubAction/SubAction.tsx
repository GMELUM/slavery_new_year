import { FC, HTMLAttributes } from "react";
import { Button, Centered } from "components";

import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import ButtonList from "components/ButtonList/ButtonList";
import Ads from "components/Ads/Ads";
import { Cone } from "icons";
import executeSpeedUp from "handlers/executeSpeedUp";

interface SubAction extends HTMLAttributes<HTMLDivElement> { };

const SubAction: FC<SubAction> = () => {

  const value = useGlobalValue(DATA);

  const handlerClick = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeSpeedUp(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  return (
    <Centered>

      <ButtonList>

        {value.timestamp && <Button
          streched
          color={"#7a00ff"}
          mode={"blur"}
          onClick={() => handlerClick("for_cone")}
        >Ускорить за 2 <Cone width={"25px"} /></Button>}

        {value.timestamp && <Button
          streched
          color={"#0066ff"}
          mode={"blur"}
          onClick={() => handlerClick("free")}
          badge={"-20мин."}
        ><Ads /> Ускорить</Button>}

      </ButtonList>


    </Centered>
  )
}

export default SubAction;
