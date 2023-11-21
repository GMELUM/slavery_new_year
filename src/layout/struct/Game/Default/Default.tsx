import { FC, HTMLAttributes } from "react";
import { Panel} from "components";
import { Content } from "./elements";

interface Default extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Default: FC<Default> = ({
  nav
}) => {
  return (
    <Panel
      nav={nav}
      safeTop={false}
      safeBottom={false}
    >
      <Content />
    </Panel>
  )
}

export default Default;
