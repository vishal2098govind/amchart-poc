const mapChartRoot = am5.Root.new("map-chart-div");
const mapChart = mapChartRoot.container.children.push(
  am5map.MapChart.new(mapChartRoot, {
    geoJSON: am5geodata_worldLow,
  })
);

var polygonSeries = mapChart.series.push(
  am5map.MapPolygonSeries.new(mapChartRoot, {})
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}: {value}",
});

var tooltip = am5.Tooltip.new(mapChartRoot, {
  getFillFromSprite: false,
  tooltipText: "{name}: {value}",
  labelText: "[bold]{name}[/]\n\nImpressions: {value}",
});

tooltip.get("background").setAll({
  fill: am5.color(0xffffff),
  stroke: am5.color(0x000000),
});

polygonSeries.set("tooltip", tooltip);

var legend = mapChart.children.push(
  am5.Container.new(mapChartRoot, {
    layout: mapChartRoot.verticalLayout,
  })
);

function createCircle() {
  var circle = mapChart.children.push(
    am5.Rectangle.new(mapChartRoot, {
      radius: 50,
      fill: am5.color(0x297373),
      // centerX: am5.percent(0),
      // centerY: am5.percent(0),
    })
  );
  return circle;
}

const load = (country) => {
  am5.net
    .load(
      `https://cdn.amcharts.com/lib/5/geodata/json/${country}Low.json`,
      mapChart
    )
    .then((result) => {
      const geoData = am5.JSONParser.parse(result.response);
      console.log(geoData);
      polygonSeries.setAll({
        geoJSON: geoData,
      });
      polygonSeries.data.setAll([
        ...geoData.features.map((e, index) => ({
          id: e.id,
          value: index,
        })),
      ]);
    });
};

load("world");
