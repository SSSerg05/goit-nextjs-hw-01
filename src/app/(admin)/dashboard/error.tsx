 "use client"
import Button from "@/app/components/button";
import React from "react";

export interface ErrorComponentProps {  
  error: Error;
}

export default function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>{`Something went wrong! ${error.message}`}</p>
      <Button onClick={() => window.location.reload()}>Reload</Button>
    </div>
  );
}