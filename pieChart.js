const pieChartRoot = am5.Root.new("pie-chart-div");

const pieChart = pieChartRoot.container.children.push(
  am5percent.PieChart.new(pieChartRoot, {
    layout: pieChartRoot.horizontalLayout,
  })
);

const series = pieChart.series.push(
  am5percent.PieSeries.new(pieChartRoot, {
    name: "Impressions share by device",
    categoryField: "name",
    valueField: "population",
  })
);

series.slices.template.setAll({
  templateField: "sliceSettings",
});

const string = [
  {
    name: "Seoul",
    population: 21500000,
    sliceSettings: {
      fill: "#83a7ea",
    },
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    sliceSettings: {
      fill: "#F00",
    },
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    sliceSettings: {
      fill: "red",
    },
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    sliceSettings: {
      fill: "#0000ff",
    },
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const data = JSON.parse(JSON.stringify(string));

series.data.setAll(data);
series.labels.template.set("forceHidden", true);
series.ticks.template.set("forceHidden", true);

// Add legend
var legend = pieChart.children.push(
  am5.Legend.new(pieChartRoot, {
    centerY: am5.percent(50),
    y: am5.percent(50),
    x: 100,
    layout: pieChartRoot.verticalLayout,
  })
);

legend.data.setAll(series.dataItems);
