export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 427,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSummaryPromotions = () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId: i + 1,
      promotionName: `Lorem ipsum dolor`,
      promotionTitle: `Costco Wholesaler`,
      discount: 40,
    });
  }
  return Promise.resolve(items);
}

export const getSummaryCountries = () => {
  return Promise.resolve([
    { countryId: 1, countryTitle: "United States", companies: 120 },
    { countryId: 2, countryTitle: "Canada", companies: 80 },
    { countryId: 3, countryTitle: "United Kingdom", companies: 60 },
    { countryId: 4, countryTitle: "Germany", companies: 40 },
    { countryId: 5, countryTitle: "France", companies: 30 },
    { countryId: 6, countryTitle: "Australia", companies: 20 },
    { countryId: 7, countryTitle: "Japan", companies: 10 },
    { countryId: 8, countryTitle: "China", companies: 5 },
  ]);
}


export const getSummaryCategories = () => {
  return Promise.resolve([
    { categoryId: 1, categoryTitle: "Electronics", categoryCount: 120 },
    { categoryId: 2, categoryTitle: "Fashion", categoryCount: 80 },
    { categoryId: 3, categoryTitle: "Home & Garden", categoryCount: 60 },
    { categoryId: 4, categoryTitle: "Sports & Outdoors", categoryCount: 40 },
    { categoryId: 5, categoryTitle: "Health & Beauty", categoryCount: 30 },
    { categoryId: 6, categoryTitle: "Toys & Games", categoryCount: 20 },
    { categoryId: 7, categoryTitle: "Automotive", categoryCount: 10 },
    { categoryId: 8, categoryTitle: "Books & Media", categoryCount: 5 },
  ]);
}

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