import { YMaps, Map } from "react-yandex-maps";

function MapElem(props) {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}></Map>
    </YMaps>
  );
}
