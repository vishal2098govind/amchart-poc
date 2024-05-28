const pieChartRoot = am5.Root.new("pie-chart-div");

const pieChart = pieChartRoot.container.children.push(
  am5percent.PieChart.new(pieChartRoot, {
    layout: pieChartRoot.horizontalLayout,
  })
);

const series = pieChart.series.push(
  am5percent.PieSeries.new(pieChartRoot, {
    name: "Impressions share by device",
    categoryField: "device_platform",
    valueField: "ImpressionCount",
    innerRadius: am5.percent(70),
  })
);

series.slices.template.setAll({
  templateField: "sliceSettings",
});

const pieData = JSON.parse(JSON.stringify(impressionByDevice));

series.data.setAll(pieData);

// // Add legend
// var legend = pieChart.children.push(
//   am5.Legend.new(pieChartRoot, {
//     centerY: am5.percent(50),
//     y: am5.percent(50),
//     x: 100,
//     layout: pieChartRoot.verticalLayout,
//   })
// );

// legend.data.setAll(series.dataItems);
