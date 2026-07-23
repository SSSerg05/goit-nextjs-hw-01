import React from "react";
import clsx from "clsx";

export interface SummaryTableHeaderProps {
  align?: "text-left" | "text-center" | "text-right";
  children: React.ReactNode;
}

export default function SummaryTableHeader({ 
  align = "text-left", 
  children 
}: SummaryTableHeaderProps) {
  return (
    <th className={clsx(
      "px-5 py-2 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm",
      align, 
      // 1-я, 4-я, 7-я колонки (3n + 1) -> Темные
      'nth-3n+1:text-white nth-3n+1:bg-gray-900',

      // 2-я, 5-я, 8-я колонки (3n + 2) -> Фиолетовые
      'nth-3n+2:text-gray-900 nth-3n+2:bg-purple-200',

      // 3-я, 6-я, 9-я колонки (3n + 3) -> Лаймовые
      'nth-3n+3:text-gray-900 nth-3n+3:bg-lime-200'
    )}>
      {children}
    </th>
  );
}