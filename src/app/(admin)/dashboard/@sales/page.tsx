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
  const columns = [
    { name: 'Company', align: 'text-left' },
    { name: 'Sold', align: 'text-center' },
    { name: 'Income', align: 'text-center' }
  ] as const;

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            {columns.map((column, i) => (
              <SummaryTableHeader key={i} align={column.align} index={i}>
                {column.name}
              </SummaryTableHeader>
            ))}

            {/* <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="text-center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="text-center">Income</SummaryTableHeader> */}
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