import React from "react";

export const getSummarySales = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: `Company ${i + 1}`,
      sold: Math.floor(Math.random() * 100),
      income: (Math.random() * 1000).toFixed(2),
    });
  }
  return Promise.resolve(items);
};