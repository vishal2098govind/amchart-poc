const lineChartRoot = am5.Root.new("line-chart-div");

const lineChart = lineChartRoot.container.children.push(
  am5xy.XYChart.new(lineChartRoot, {
    panY: false,
    panX: false,
    // wheelY: "zoomX",
    layout: lineChartRoot.verticalLayout,
    maxTooltipDistance: 0,
  })
);

var lineChartYAxis = lineChart.yAxes.push(
  am5xy.ValueAxis.new(lineChartRoot, {
    extraTooltipPrecision: 1,
    renderer: am5xy.AxisRendererY.new(lineChartRoot, {}),
  })
);

// Create X-Axis
var lineChartXAxis = lineChart.xAxes.push(
  am5xy.DateAxis.new(lineChartRoot, {
    baseInterval: { timeUnit: "day", count: 1 },
    renderer: am5xy.AxisRendererX.new(lineChartRoot, {
      minGridDistance: 40,
    }),
    tooltip: am5.Tooltip.new(lineChartRoot, {}),
  })
);

const lineSeries = lineChart.series.push(
  am5xy.LineSeries.new(lineChartRoot, {
    name: "Series",
    xAxis: lineChartXAxis,
    yAxis: lineChartYAxis,
    valueYField: "value",
    valueXField: "date",
    curveFactory: d3.curveBasis,
    fill: am5.color(0xd96100),
    stroke: am5.color(0xdf7800),
    tooltip: am5.Tooltip.new(lineChartRoot, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}",
    }),
  })
);

lineSeries.fills.template.setAll({
  fillOpacity: 0.5,
  visible: true,
});
lineSeries.strokes.template.setAll({
  strokeWidth: 0.5,
});

lineSeries.data.setAll(
  clicksMonthlyTrend.map((e) => ({
    ...e,
    value: +e.ClickCount,
    date: new Date(e.log_date * 1000).getTime(),
  }))
);

lineSeries.appear(1000);
lineChart.appear(1000);

lineChartRoot.dateFormatter.setAll({
  dateFormat: "MMM dt, yyyy",
  dateFields: ["date"],
});
