'use client';

import React from "react";

export interface GlobalErrorProps {
  error: Error;
}

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>{`Global Error: ${error.message}`}</p>
    </div>
  );
}

