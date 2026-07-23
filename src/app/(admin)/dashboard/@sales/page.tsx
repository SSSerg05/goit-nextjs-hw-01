import React from "react";

import { getSummarySales } from "@/lib/api";
import { DashboardCard } from "@/app/components/dashboard-card";
import {SummaryTable} from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import SummaryTableCell  from "@/app/components/summary-table-cell";


export interface PageProps {
  params: '0';
}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="text-center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="text-center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="text-center">{sold}</SummaryTableCell>
            <SummaryTableCell align="text-center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard> 
  );
}