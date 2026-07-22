import React from "react";

export interface SummaryTableProps {
  headers: React.ReactNode;
  children: React.ReactNode;
}

export function SummaryTable({ headers, children }: SummaryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-separate border-spacing-0">
        <thead className="bg-gray-50">
          <tr>{headers}</tr>
        </thead>
        <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n)]:bg-white">
          {children}
        </tbody>
      </table>
    </div>
  );
}