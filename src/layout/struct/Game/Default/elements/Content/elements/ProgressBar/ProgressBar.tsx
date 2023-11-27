import { FC, HTMLAttributes, useEffect, useState } from "react";
import { Centered } from "components";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import Progress from "components/Progress/Progress";

interface ProgressBar extends HTMLAttributes<HTMLDivElement> { };

const ProgressBar: FC<ProgressBar> = () => {
  const value = useGlobalValue(DATA);

  const handlerClick = () => {
    console.log("click")
  }

  const [count, setCount] = useState(30);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(i => {
  //       if (i >= 100) { return 0 }
  //       return i + 1
  //     })
  //   }, 250)
  // }, [])

  return (
    <Centered>
      {/* <Progress
        value={count}
        count={12}
      /> */}
    </Centered>
  )
}

export default ProgressBar;
