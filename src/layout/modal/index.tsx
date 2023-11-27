
import { FC, HTMLAttributes, memo } from 'react';

import { Modal } from "components";
import { useRouter } from 'elum-router/react';
import Shop from './Shop/Shop';
import HowToPlay from './HowToPlay/HowToPlay';
import OpenBox from './OpenBox/OpenBox';
import Smile from './Smile/Smile';
import Gingerbread from './Gingerbread/Gingerbread';
import Frame from './Frame/Frame';
import Jam from './Jam/Jam';

interface Modals extends HTMLAttributes<HTMLDivElement> { };

const Modals: FC<Modals> = ({ }) => {

  const modal = useRouter("modal");

  return (
    <Modal
      activeModal={modal}
    >

      <Shop nav={"shop"} />
      <HowToPlay nav={"how_to_play"} />
      <OpenBox nav={"open_box"} />
      <Smile nav={"smile"} />
      <Gingerbread nav={"gingerbread"} />
      <Frame nav={"frame"} />
      <Jam nav={"jam"} />

    </Modal>
  )

}

export default memo(Modals);
