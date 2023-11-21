import { FC, HTMLAttributes, useEffect } from "react";
import { nextPage, useRouter } from "elum-router/react";

import { View } from "components";
import Default from "./Default/Default";
import loadData from "handlers/loadData";
import { setter } from "elum-state/react";
import { DATA } from "engine/state/atoms";

interface Startup extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Startup: FC<Startup> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  const preload = async () => {
    const value = await loadData();
    setter(DATA, value);

    nextPage({ view: "game" })

  }

  useEffect(() => { preload() }, []);

  return (
    <View nav={nav} activePanel={activePanel}>
      <Default nav={"default"} />
    </View>
  )

}

export default Startup;
