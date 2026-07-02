'use client';

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Button, { ButtonProps } from "@/app/components/button";

export default function MagicButton(props: ButtonProps)  {  
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if(count > 2) {
      throw new Error("Count is too high!");
  }
  }, [count]);

  return (
    <Button 
      {...props}  onClick={() => setCount(count + 1)}>
        Magic Button ({count})
    </Button>
  );
}