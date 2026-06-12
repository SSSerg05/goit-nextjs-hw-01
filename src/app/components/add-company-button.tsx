'use client';

import React from "react";
import dynamic from "next/dynamic";
import Button from "@/app/components/button";

const CompanyFormModal = dynamic(() => import("@/app/components/company-form-modal"), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>
        Add Company
      </Button>
      {show && (
        <CompanyFormModal 
          onSubmit={console.log}
          show={show}
          onClose={() => setShow(false)} />
      )}
    </>
  );
}