'use client';

import React from "react";
import clsx from "clsx";

export interface ButtonProps 
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

export default function Button({disabled, ...rest}: ButtonProps) {
  return (
    <button 
      {...rest} 
      className={clsx("py-2.5 px-5 bg-gray-900 text-base text-center font-mediun rounded",
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zink-100',
      )}
    />
  )
}
