import React from "react";
import clsx from "clsx";

export interface SummaryTableCellProps {
  align?: "text-left" | "text-center" | "text-right";
  children: React.ReactNode;
}

export default function SummaryTableCell({
  align = "text-left",
  children,
}: SummaryTableCellProps) {
  return (
    <td className={clsx(
      "px-5 py-2 text-sm border-gray-100 border-r first-of-type:border-l",
      align,
    )}>
      {children}
    </td>
  );
}