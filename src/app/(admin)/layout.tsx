import React from "react";
import Sidebar from "@/app/components/sidebar";

export interface LayoutProps {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      {/* <div className="pl-60 w-full min-h-screen flex flex-col">{children}</div> */}
      <div 
        className="flex-1 min-w-0 flex flex-col max-w-full overflow-hidden" 
        style={{ paddingLeft: '240px' }}>
          {children}
      </div>
    </>
  );
}