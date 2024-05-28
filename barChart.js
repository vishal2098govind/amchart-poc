// Create root and chart
var barChartRoot = am5.Root.new("bar-chart-div");

var barChart = barChartRoot.container.children.push(
  am5xy.XYChart.new(barChartRoot, {
    panX: false,
    panY: false,
    wheelY: "none",
    wheelX: "none",
    layout: barChartRoot.verticalLayout,
  })
);

// Define data
var barChartData = impressionsByAgeAndGender.map((e, index) => ({
  ...e,
  color: chartPalette[index % chartPalette.length],
  category: `${e.gender}:${e.age}`,
}));

// Craete Y-axis
var barChartYAxis = barChart.yAxes.push(
  am5xy.ValueAxis.new(barChartRoot, {
    renderer: am5xy.AxisRendererY.new(barChartRoot, {}),
  })
);

const xRenderer = am5xy.AxisRendererX.new(barChartRoot, {
  minGridDistance: 30,
});

// Create X-Axis
var barChartXAxis = barChart.xAxes.push(
  am5xy.CategoryAxis.new(barChartRoot, {
    categoryField: "category",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(barChartRoot, {}),
  })
);

// Enable label wrapping
xRenderer.labels.template.setAll({
  oversizedBehavior: "wrap",
  textAlign: "center",
});

// Set up automatic width calculation using an adapter
xRenderer.labels.template.adapters.add("width", function (width, target) {
  var x0 = barChartXAxis.getDataItemCoordinateY(
    barChartXAxis.dataItems[0],
    "category",
    0
  );
  var x1 = barChartXAxis.getDataItemCoordinateY(
    barChartXAxis.dataItems[0],
    "category",
    1
  );
  target.set("maxWidth", x1 - x0);
  return x1 - x0;
});

barChartXAxis.data.setAll(barChartData);

const barChartSeries = barChart.series.push(
  am5xy.ColumnSeries.new(barChartRoot, {
    name: name,
    xAxis: barChartXAxis,
    yAxis: barChartYAxis,
    valueYField: "ImpressionCount",
    categoryXField: "category",
  })
);

barChartSeries.data.setAll(
  barChartData.map((e) => ({
    ...e,

    ImpressionCount: +e.ImpressionCount,
  }))
);

const columnColor = (fill, target) => {
  if (target.dataItem) {
    console.log(target.dataItem.dataContext.color);
    return target.dataItem.dataContext.color;
  }
  return fill;
};
barChartSeries.columns.template.adapters.add("fill", columnColor);

barChartSeries.columns.template.adapters.add("stroke", columnColor);
