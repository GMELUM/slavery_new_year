import { Button, Div, GroupHeader, Item, Text } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
// import { Assets } from "engine";
import { DATA } from "engine/state/atoms";
// import executeTask from "handlers/executeTask";
import { FC, HTMLAttributes, useMemo } from "react";

import { Tasks as TasksIcon } from "icons";
import executeTask from "handlers/executeStock";

interface Tasks extends HTMLAttributes<HTMLDivElement> { };

const styleButton = {
  top: "12px",
  right: "12px",
  bottom: "0",
  left: "12px"
}

const Tasks: FC<Tasks> = () => {

  const value = useGlobalValue(DATA);

  const handlerTask = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeTask(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  return (
    <Div>

      <GroupHeader
        title="Задания"
        color="#1a5cff"
        icon={<TasksIcon />}
      />

      {value.tasks && value.tasks.map((elem) => (
        <Item
          key={elem.key}
          title={elem.title}

          elf={elem.elf}
          cone={elem.cone}
          snowflake={elem.snowflake}
          // count={elem.count}
          badge={elem.badge}
          onClick={() => handlerTask(elem.key)}
        />
      ))}

      {/* <Blurred id={"task"}>
        <Text
          size={"large"}
          weight={"bold"}
        >Задания</Text>
      </Blurred>

      <Banner
        href={"https://vk.com/app51520079#slavery"}
        target={"_blank"}
      >
        <Assets group={"game"} code={"memory"} />
      </Banner>

      <Div
        top={"24px"}
        bottom={"36px"}
      >

        {value.tasks && value.tasks.map((element) => (
          <Div {...styleButton} key={element.key}>
            <Button
              streched
              size={"s"}
              badge={element.badge}
              onClick={() => handlerTask(element.key)}
            >
              {element.title} - {element.count} {icon}
            </Button>
          </Div>
        ))}

      </Div> */}

    </Div>
  )
}

export default Tasks;