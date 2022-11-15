import React from "react";

function Button({ setOpenPopup }) {
  return (
    <>
      <div className="">
        <button
          onClick={setOpenPopup}
          className="px-5 py-2 hover:underline decoration-white rounded-lg bg-[#A02279] text-base leading-5 font-normal text-white"
        >
          Connect wallet
        </button>
      </div>
    </>
  );
}
export default Button;
