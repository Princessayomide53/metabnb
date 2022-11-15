import React, { useState } from "react";

import Modal from "./Modal";

function Button() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="lg:pb-1 lg:-mt-1 xl:pb-1 xl:-mt-1 2xl:pb-1 2xl:-mt-1">
        <button
          onClick={() => setOpenModal(true)}
          className="px-5 py-2 hover:underline decoration-white rounded-lg bg-[#A02279] text-base leading-5 font-normal text-white"
        >
          Connect wallet
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
}
export default Button;
