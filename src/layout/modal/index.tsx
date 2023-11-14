
import { FC, HTMLAttributes, memo } from 'react';

import { Modal } from "components";
import { useRouter } from 'elum-router/react';

interface Modals extends HTMLAttributes<HTMLDivElement> { };

const Modals: FC<Modals> = ({ }) => {

  const modal = useRouter("modal");

  return (
    <Modal
      activeModal={modal}
    >

      {/* <Potion nav={"potion"} /> */}

    </Modal>
  )

}

export default memo(Modals);
