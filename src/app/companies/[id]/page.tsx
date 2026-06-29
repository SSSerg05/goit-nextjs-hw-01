import React from "react";
import Header from "@/app/components/header";


 export  interface PageProps {
   params: {
    id: string
  };
}
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default async function Page({params}: PageProps) {
  const {id} = await params;
  return (
    <>
      <Header>Companies ({id})</Header>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
}

