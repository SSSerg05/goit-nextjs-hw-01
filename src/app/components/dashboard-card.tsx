import React from "react";  

export interface DashboardCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardCard({ label, children }: DashboardCardProps) {
  return (
    <div className="bg-gray-100 rounded w-full h-full">
      <p className="p-5 text-xl text-gray-900 font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
}