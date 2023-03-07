import React, { ButtonHTMLAttributes } from "react";

function Textbox({ text }: { text: string }) {
  return (
    <>
      <div className="flex justify-center">
        <div className=" flex max-w-5xl items-center justify-center rounded-sm border border-gray-900 bg-gradient-to-t from-slate-800 to-gray-900 p-12 text-center text-sm text-white transition-all sm:p-16 sm:text-2xl md:p-24">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default Textbox;
