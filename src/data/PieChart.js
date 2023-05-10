export const getPieData = (productReport) => {
  const pieData = {
    datasets: [
      {
        label: ["Order", "Sold", "Total"],
        data: [productReport.order, productReport.sold, productReport.total],
        backgroundColor: ["#2196f3", "#3f51b5", "#009688"],
        borderColor: ["#2196f3", "#3f51b5", "#009688"],
        borderWidth: 1,
      },
    ],
    labels: ["Order", "Sold", "Total"],
  };

  return pieData;
};
