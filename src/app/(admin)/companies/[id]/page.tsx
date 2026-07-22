'use client'

import React, { useEffect } from "react";
import Header from "@/app/components/header";
import { notFound } from "next/navigation";


 export interface PageProps {
    params: Promise<{ id: string }> 
}


export default function Page({ params }: PageProps) {
  const {id} = React.use(params);

  useEffect(() => {
    const id_u = Number(id);
    if (Number.isNaN(id_u)) {
      notFound();
    }
  }, [id]);

  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}

