import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { POINTS } from "./points";

const MapWithLibrary: React.FC = () => {
  const swapCoordinates = (coordinates: number[]) => {
    return [coordinates[1], coordinates[0]];
  };
  return (
    <YMaps>
      <div>Карта с библиотекой react-yandex-maps</div>
      <Map
        style={{ width: "700px", height: "700px" }}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        {POINTS.map((point, index) => (
          <Placemark
            key={index}
            geometry={swapCoordinates(point.coordinates)}
            options={{
              iconColor: point.color,
              draggable: point.draggable,
            }}
            properties={{
              balloonContent: point.title,
              balloonContentHeader: point.subtitle,
            }}
            onClick={point.onClick}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default MapWithLibrary;
