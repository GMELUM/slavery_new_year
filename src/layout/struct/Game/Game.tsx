import { FC, HTMLAttributes } from "react";
import { useRouter } from "elum-router/react";

import { View } from "components";
import Default from "./Default/Default";

interface Startup extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Startup: FC<Startup> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  return (
    <View
      nav={nav}
      activePanel={activePanel}
    >
      <Default nav={"default"} />
    </View>
  )
}

export default Startup;
