import { FC, HTMLAttributes, useEffect } from "react";
import { Root } from "components";
import { useRouter } from "elum-router/react";
import bridge from "@vkontakte/vk-bridge";

import Startup from "./struct/Startup/Startup";

import Popout from "layout/popout";
import Modal from "layout/modal";

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
    </Root>
  )

}

export default Layout;
