import React, { ButtonHTMLAttributes } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function Sidebar({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <div
        id="hs-overlay-example"
        className="hs-overlay fixed top-0 left-0 z-[60] hidden h-full w-full max-w-xs -translate-x-full transform border-r border-slate-900 bg-slate-900 transition-all duration-200 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between border-b border-slate-900 py-3 px-4 dark:border-gray-700">
          <h3 className="font-bold text-white ">ПГЕА</h3>
          <button
            data-hs-overlay="#hs-overlay-example"
            type="button"
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-white hover:text-gray-700 "
          >
            <span className="sr-only">Close modal</span>
            <IoIosCloseCircle className="color-white h-5 w-5" />
          </button>
        </div>
        {/*Content  */}
        <div className="h-full p-4">{children}</div>
      </div>
    </>
  );
}

export default Sidebar;
