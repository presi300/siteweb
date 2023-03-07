import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";

function Contentimg({
  children,
  text,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode } & {
  text: string;
}) {
  return (
    <>
      <div id="img" className="my-5 flex w-full">
        <figure className="flex w-full justify-center grayscale-0 filter">
          <div className="max-w-5xl">{children}</div>
          <figcaption className="absolute bottom-4 rounded-sm bg-black bg-opacity-75 px-3 text-lg text-white">
            <p className="text-center">{text}</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default Contentimg;
