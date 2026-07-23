import React from "react";
import { getSummaryPromotions } from "@/lib/api";
import {SummaryTable} from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import SummaryTableCell from "@/app/components/summary-table-cell";
import {DashboardCard} from "@/app/components/dashboard-card";


export interface PageProps {
  params: '0';
}

export default async function Page({}: PageProps) {
  const data = await getSummaryPromotions();
  const columns = [
    { name: 'Company', align: 'text-left' },
    { name: 'Name', align: 'text-left' },
    { name: '%', align: 'text-center' }
  ] as const;

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            {columns.map((column, i) => (
              <SummaryTableHeader key={i} align={column.align} index={i}>
                {column.name}
              </SummaryTableHeader>
            ))}

            {/* // <SummaryTableHeader>Company</SummaryTableHeader>
            // <SummaryTableHeader>Name</SummaryTableHeader>
            // <SummaryTableHeader align="text-center">%</SummaryTableHeader> */}
          </>
        }
      >
        {data.map(({promotionId, promotionName, companyTitle, discount}) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="text-center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>

    </DashboardCard>
  );
}