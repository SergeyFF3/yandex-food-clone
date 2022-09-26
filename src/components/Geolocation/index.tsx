import React, { useEffect, useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";

interface IGeoProps {
  // coordinates?: Array<Array<number>>;
  zoom?: number;
}

const Geolocation: React.FC<IGeoProps> = ({ zoom }) => {
  const mapData = {
    center: [[55.75583, 37.6173]],
    zoom: 10,
  };

  const [coordinates, setCoordinates] = useState<Array<Array<number>>>([
    [55.75583, 37.6173],
  ]);

  const success = ({ coords }: any) => {
    // получаем широту и долготу
    const { latitude, longitude } = coords;
    const position = [latitude, longitude];
    setCoordinates([[latitude, longitude]]);

    console.log("position", position); // [широта, долгота]
  };

  const error = ({ message }: any) => {
    console.log(message); // при отказе в доступе получаем PositionError: User denied Geolocation
  };

  const checkCurrentGeolocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, {
      // высокая точность
      enableHighAccuracy: true,
    });
  };

  useEffect(() => {
    checkCurrentGeolocation();
  }, []);

  console.log("coordinates", coordinates);

  return (
    <YMaps>
      <Map defaultState={mapData}>
        {coordinates.map((coordinate) => (
          <Placemark geometry={coordinate} />
        ))}
      </Map>
    </YMaps>
  );
};

export default Geolocation;
