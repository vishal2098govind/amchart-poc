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

const data = [
  {
    region_id: "32474",
    name: "Unknown",
    ImpressionCount: "192",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32485",
    name: "Texas",
    ImpressionCount: "19210242",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32550",
    name: "Alabama",
    ImpressionCount: "27073",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32551",
    name: "Alaska",
    ImpressionCount: "2301",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32552",
    name: "Arizona",
    ImpressionCount: "12831",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32553",
    name: "Arkansas",
    ImpressionCount: "11860",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32554",
    name: "California",
    ImpressionCount: "82811",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32555",
    name: "Colorado",
    ImpressionCount: "15874",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32556",
    name: "Connecticut",
    ImpressionCount: "6469",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32557",
    name: "Delaware",
    ImpressionCount: "2450",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32558",
    name: "Florida",
    ImpressionCount: "52335",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32559",
    name: "Georgia",
    ImpressionCount: "22575",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32560",
    name: "Hawaii",
    ImpressionCount: "3381",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32561",
    name: "Idaho",
    ImpressionCount: "3290",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32562",
    name: "Illinois",
    ImpressionCount: "49550",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32563",
    name: "Indiana",
    ImpressionCount: "17239",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32564",
    name: "Iowa",
    ImpressionCount: "8743",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32565",
    name: "Kansas",
    ImpressionCount: "9581",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32566",
    name: "Kentucky",
    ImpressionCount: "14393",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32567",
    name: "Louisiana",
    ImpressionCount: "23472",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32568",
    name: "Maine",
    ImpressionCount: "4572",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32569",
    name: "Maryland",
    ImpressionCount: "11156",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32570",
    name: "Massachusetts",
    ImpressionCount: "13118",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32571",
    name: "Michigan",
    ImpressionCount: "23689",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32572",
    name: "Minnesota",
    ImpressionCount: "11870",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32573",
    name: "Mississippi",
    ImpressionCount: "11415",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32574",
    name: "Missouri",
    ImpressionCount: "18425",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32575",
    name: "Montana",
    ImpressionCount: "2956",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32576",
    name: "Nebraska",
    ImpressionCount: "4968",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32577",
    name: "Nevada",
    ImpressionCount: "5641",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32578",
    name: "New Hampshire",
    ImpressionCount: "3013",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32579",
    name: "New Jersey",
    ImpressionCount: "14398",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32580",
    name: "New Mexico",
    ImpressionCount: "5354",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32581",
    name: "New York",
    ImpressionCount: "30895",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32582",
    name: "North Carolina",
    ImpressionCount: "29956",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32583",
    name: "North Dakota",
    ImpressionCount: "1769",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32584",
    name: "Ohio",
    ImpressionCount: "27163",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32585",
    name: "Oklahoma",
    ImpressionCount: "14828",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32586",
    name: "Oregon",
    ImpressionCount: "10383",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32587",
    name: "Pennsylvania",
    ImpressionCount: "26486",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32588",
    name: "Rhode Island",
    ImpressionCount: "2405",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32589",
    name: "South Carolina",
    ImpressionCount: "13163",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32590",
    name: "South Dakota",
    ImpressionCount: "2385",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32591",
    name: "Tennessee",
    ImpressionCount: "25566",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32594",
    name: "Utah",
    ImpressionCount: "3817",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32595",
    name: "Vermont",
    ImpressionCount: "2635",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32596",
    name: "Virginia",
    ImpressionCount: "22423",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32597",
    name: "Washington",
    ImpressionCount: "12883",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32598",
    name: "Washington, District of Columbia",
    ImpressionCount: "817",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32599",
    name: "West Virginia",
    ImpressionCount: "7345",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32600",
    name: "Wisconsin",
    ImpressionCount: "14747",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "32601",
    name: "Wyoming",
    ImpressionCount: "1523",
    country: "US",
    client_currency: "£",
  },
  {
    region_id: "34841",
    name: "Zuid-Holland",
    ImpressionCount: "1",
    country: "NL",
    client_currency: "£",
  },
];

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
        ...data.map((e) => ({
          id: geoData.features.find((f) => f.properties.name == e.name)?.id,
          value: e.ImpressionCount,
        })),
        // ...geoData.features.map((e, index) => ({
        //   id: e.id,
        //   value: index,
        // })),
      ]);
    });
};

load("usa");
