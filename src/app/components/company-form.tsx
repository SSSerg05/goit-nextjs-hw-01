'use client';

import React from "react";
import Button from "@/app/components/button";
import { Form, Formik } from "formik";
import InputField from "./input-field";
import LogoUploader from "./logo-uploader";

export type CompanyFormValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFormValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: ''
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFormValues) => void | Promise<void>;
}

export default function CompanyForm({onSubmit}: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add New Company</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Company Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name='status' />            
            <InputField label="Country" placeholder="Country" name='country' />
          </div>  
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name='name' />            
            <InputField label="Category" placeholder="Category" name='category' />            
          </div>  
            <InputField label="Joined Date" placeholder="Date" name='date' />
            <InputField label="Description" placeholder="Description" name='description' />
        </div>
        <Button type="submit">Add Company</Button>
      </Form>
    </Formik>
  )
}

