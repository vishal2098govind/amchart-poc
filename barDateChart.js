var barDateChartRoot = am5.Root.new("bar-date-chart-div");

var barDateChart = barDateChartRoot.container.children.push(
  am5xy.XYChart.new(barDateChartRoot, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none",
    layout: barDateChartRoot.verticalLayout,
  })
);

// Define data
var barChartDateData = testBarChartDate.map((e) => ({
  ...e,
  date: new Date(e.log_date * 1000).getTime(),
  value: +e.Active_view_measurable_impressionCount,
}));

// Craete Y-axis
var barDateChartYAxis = barDateChart.yAxes.push(
  am5xy.ValueAxis.new(barDateChartRoot, {
    renderer: am5xy.AxisRendererY.new(barDateChartRoot, {}),
  })
);

const barDateXRenderer = am5xy.AxisRendererX.new(barDateChartRoot, {
  minGridDistance: 20,
});
// Create X-Axis
var barDateChartXAxis = barDateChart.xAxes.push(
  am5xy.DateAxis.new(barDateChartRoot, {
    groupData: true,
    baseInterval: {
      timeUnit: "day",
      count: 1,
    },
    gridIntervals: [
      { timeUnit: "day", count: 1 },
      { timeUnit: "month", count: 1 },
    ],
    renderer: barDateXRenderer,
  })
);

var barDateChartSeries = barDateChart.series.push(
  am5xy.ColumnSeries.new(barDateChartRoot, {
    xAxis: barDateChartXAxis,
    yAxis: barDateChartYAxis,
    valueYField: "value",
    valueXField: "date",
  })
);

barDateChartSeries.data.setAll(barChartDateData);

var tooltip = am5.Tooltip.new(barDateChartRoot, {
  getFillFromSprite: false,
  getStrokeFromSprite: true,
  autoTextColor: true,
  getLabelFillFromSprite: true,
  labelText: "[bold]Impression Count:[/]\n{valueX.formatDate()}: {valueY}",
});

tooltip.get("background").setAll({
  fill: am5.color(0xffffff),
  fillOpacity: 1,
});

barDateChartSeries.columns.template.setAll({
  tooltipText: tooltip.get("labelText"),
});
barDateChartSeries.set("tooltip", tooltip);

barDateChartRoot.dateFormatter.setAll({
  dateFormat: "MMM dt, yyyy",
  dateFields: ["date"],
});
