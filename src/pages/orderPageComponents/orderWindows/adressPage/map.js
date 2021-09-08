import { Map, Placemark } from "react-yandex-maps";
import MultiGeocoder from "multi-geocoder";
import { useState, useEffect } from "react";
import { ReactComponent as Geomark } from "../images/geomark.svg";

function MapElem({ data = [] }) {
  const [coordinates, setCoordinates] = useState([]);
  const geocoder = new MultiGeocoder({
    coordorder: "latlong",
    apikey: "d46de12b-00d7-4b43-a820-de93cd5d7b06",
    lang: "ru-RU",
  });
  useEffect(() => {
    const arrayForGeocoder = data
      .map(({ city, streets }) => {
        const arr = streets.map(({ street }) => `${city}, ${street}`);
        return arr;
      })
      .flat();
    console.log(arrayForGeocoder);
    geocoder
      .geocode(arrayForGeocoder, { apikey: "d46de12b-00d7-4b43-a820-de93cd5d7b06" })
      .then((result) => {
        console.log(result);
        const coordinates = result.result.features.map(
          ({ geometry, properties, bbox }) => {
            return {
              coordinates: geometry.coordinates,
              name: properties.name,
              bbox: bbox,
            };
          }
        );

        setCoordinates(coordinates);
        //setCoordinates(result);
      });
  }, []);

  return (
    <div className="map_element">
      <Map
        className="map_element"
        defaultState={{ center: [54.3282, 48.3866], zoom: 10 }}
      >
        {coordinates.map((adressObj) => (
          <Placemark
            defaultProperties={{ iconLayout: Geomark }}
            defaultGeometry={adressObj.coordinates}
          />
        ))}
      </Map>
    </div>
  );
}
export default MapElem;
