import { PanelHeader } from "components";
import { FC, HTMLAttributes } from "react";
import { Text } from "components";

interface Header extends HTMLAttributes<HTMLDivElement> { };

const Header: FC<Header> = () => {
  return (
    <PanelHeader
      border={false}
      padding
    >
      <Text
        style={{ color: "white" }}
        size={"large"}
        weight={"bold"}
      >Новый Год
      </Text>
    </PanelHeader>
  )
}

export default Header;