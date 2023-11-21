import { FC, HTMLAttributes, useEffect } from "react";
import { Root } from "components";
import { useRouter } from "elum-router/react";
import bridge from "@vkontakte/vk-bridge";

import Startup from "./struct/Startup/Startup";

import Popout from "layout/popout";
import Modal from "layout/modal";
import Game from "./struct/Game/Game";

interface Layout extends HTMLAttributes<HTMLDivElement> { };

const Layout: FC<Layout> = (props) => {

  const activeView = useRouter("view");

  useEffect(() => { bridge.send("VKWebAppInit") }, [])

  return (
    <Root
      activeView={activeView}
      popout={<Popout />}
      modal={<Modal />}
    >

      <Startup nav={"startup"} />
      <Game nav={"game"} />

    </Root>
  )

}

export default Layout;
