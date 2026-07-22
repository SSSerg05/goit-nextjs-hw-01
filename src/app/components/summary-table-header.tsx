import React from "react";
import clsx from "clsx";

export interface SummaryTableHeaderProps {
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export default function SummaryTableHeader({ 
  align = "left", 
  children 
}: SummaryTableHeaderProps) {
  return (
    <th className={clsx(
      "px-5 py-2 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm",
      `text-${align}`, 
      "nth-[3n+1]:text-white nth-[3n+1]:bg-gray-900",
      'nth-[3n+1]:text-gray-900 nth-[3n+1]:bg-purple-200',
      'nth-[3n+1]:text-gray-900 nth-[3n+1]:bg-lime-200'
    )}>
      {children}
    </th>
  );
}