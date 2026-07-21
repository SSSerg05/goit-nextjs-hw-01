'use client'

import React, { useEffect } from "react";
import Header from "@/app/components/header";
import { notFound } from "next/navigation";

 export  interface PageProps {
   params: { id: string };
}
// export function generateStaticParams() {
//   return [
//     { id: "1" },
//     { id: "2" },
//     { id: "3" }
//   ];
// }

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = React.use(params);
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

