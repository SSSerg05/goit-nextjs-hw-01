import React from "react";
import Header from "@/app/components/header";

export interface PageProps {
  params: '0';
}

export default function Page({}: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Header>Dashboard</Header>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to your dashboard!
        </p>

      </main>
    </div>
  );
}
