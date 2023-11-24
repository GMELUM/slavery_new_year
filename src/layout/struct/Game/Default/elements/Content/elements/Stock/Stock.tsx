import { Div, GroupHeader, Text } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes, useMemo } from "react";

import { Stock as StockIcon } from "icons"

interface Stock extends HTMLAttributes<HTMLDivElement> { };

const styleButton = {
  top: "12px",
  right: "12px",
  bottom: "0",
  left: "12px"
}

const Stock: FC<Stock> = () => {

  const value = useGlobalValue(DATA);

  // const icon = useMemo(() => <Assets group={"game"} code={"candy"} style={{
  //   height: "20px",
  //   padding: "0 6px"
  // }} />, [])

  // const handlerTask = async (type: string) => {
  //   nextPage({ popout: "loading", freeze: true });
  //   const result = await executeTask(type);
  //   backPage({ ignoreFreeze: true, toStay: "game" })
  // }

  return (
    <Div>

      <GroupHeader
        title="Склад"
        color="#ba00ff"
        icon={<StockIcon />}
      />

      {/* <Blurred>
        <Text
          size={"large"}
          weight={"bold"}
        >Склад</Text>
      </Blurred>

      <Div
        top={"24px"}
        bottom={"36px"}
        left={"12px"}
        right={"12px"}
      >

        <CardContainer>
          {value.stock && value.stock.map((element) => (
            <StoreCard
              key={element.type + element.count}
              image={<Assets group={"game"} code={element.type} style={{
                height: "100%"
              }} />}
              count={element.count}
              onClick={() => handlerTask(element.type)}
            />
          ))}
        </CardContainer>


      </Div> */}

    </Div>
  )
}

export default Stock;