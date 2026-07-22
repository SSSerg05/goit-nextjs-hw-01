import React from "react";
import { getSummaryCategories } from "@/lib/api";
import StatCard, {StatCardType} from "@/app/components/stat-card/stat-card";
import {DashboardCard} from "@/app/components/dashboard-card";

export interface PageProps {
  params: '0';
}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();
  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5"> 
        {data.map(({ categoryId, categoryTitle, categoryCount }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={categoryCount}
            />
          </div>
        ))}
      </div>  
    </DashboardCard>
  );
}