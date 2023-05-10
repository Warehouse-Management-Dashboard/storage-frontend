export const getLineData = (financeReport) => {
  console.log();
  const lineData = {
    labels: financeReport.profit.map((_, i) => i),
    datasets: [
      {
        label: "Profit",
        data: financeReport.profit,
        fill: true,
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
      },
      {
        label: "Sold",
        data: financeReport.totalSold,
        fill: false,
        borderColor: "#3f51b5",
        backgroundColor: "#3f51b5",
      },
      {
        label: "Order",
        data: financeReport.totalOrdered,
        fill: false,
        borderColor: "#009688",
        backgroundColor: "#009688",
      },
    ],
  };

  return lineData;
};
