import React from "react";
import clsx from "clsx";

export interface SummaryTableHeaderProps {
  align?: "text-left" | "text-center" | "text-right";
  index?: number;
  children: React.ReactNode;
}

const themeColors = [
  "text-white bg-gray-900",       // Индекс 0: Company (Темный)
  "text-gray-900 bg-purple-200",  // Индекс 1: Name (Фиолетовый)
  "text-gray-900 bg-lime-200"     // Индекс 2: % (Лаймовый)
];

export default function SummaryTableHeader({ 
  align = "text-left", 
  index = 0,
  children 
}: SummaryTableHeaderProps) {
  return (
    <th className={clsx(
      "text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm",
      align, 
      themeColors[index % 3],
      // // 1-я, 4-я, 7-я колонки (3n + 1) -> Темные
      // 'nth-3n+1:text-white nth-3n+1:bg-gray-900',

      // // 2-я, 5-я, 8-я колонки (3n + 2) -> Фиолетовые
      // 'nth-3n+2:text-gray-900 nth-3n+2:bg-purple-200',

      // // 3-я, 6-я, 9-я колонки (3n + 3) -> Лаймовые
      // 'nth-3n+3:text-gray-900 nth-3n+3:bg-lime-200'
    )}>
      {children}
    </th>
  );
}