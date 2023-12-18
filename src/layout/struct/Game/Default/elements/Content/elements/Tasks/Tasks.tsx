import { Div, GroupHeader, Item } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, HTMLAttributes } from "react";

import { Tasks as TasksIcon } from "icons";
import executeTask from "handlers/executeStock";

interface Tasks extends HTMLAttributes<HTMLDivElement> { };

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

          badge={elem.badge}
          onClick={() => handlerTask(elem.key)}
        />
      ))}

    </Div>
  )
}

export default Tasks;