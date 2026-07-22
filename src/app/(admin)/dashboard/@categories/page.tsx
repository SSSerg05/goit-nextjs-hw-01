import React from "react";
import { getSummaryCategories } from "@/lib/api";
import StatsCard, {StatCardType} from "@/app/components/stat-card/stat-card";
import {DashboardCard} from "@/app/components/dashboard-card";



export interface PageProps {
  params: '0';
}

export default async function Page({}: PageProps) {
  const data = await getSummaryCategories();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
 
    </div>
  );
}