/* eslint-disable no-console */
import UniversalGeocoder from "UniversalGeocoder";
import GeoJsonDumper from "GeoJsonDumper";

const bingGeocoder = UniversalGeocoder.createGeocoder({
  provider: "bing",
  apiKey: "api_key",
});

bingGeocoder.geocode("1600 Pennsylvania Ave NW, Washington, DC", (result) => {
  console.log("geocode", result);
  console.log("GeoJSON:", GeoJsonDumper.dump(result[0]));
});
const asyncGeocode = async () => {
  const result = await bingGeocoder.geocode(
    "1600 Pennsylvania Ave NW, Washington, DC"
  );
  console.log("async geocode", result);
};
asyncGeocode();

bingGeocoder.geodecode("44.915", "-93.21", (result) => {
  console.log("geodecode", result);
});
const asyncGeodecode = async () => {
  const result = await bingGeocoder.geodecode("44.915", "-93.21");
  console.log("async geodecode", result);
};
asyncGeodecode();
