import React from "react";
import Link from "next/link";

export interface NotFoundProps { 
  params?: boolean; 
}

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Could not found company
      </p>
      <Link href="/companies" className="mt-4 text-blue-500 hover:underline"></Link>
    </div>
  );
}