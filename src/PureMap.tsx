import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { LOCATION, POINTS } from "./points";

const PureMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<any>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    async function initYandexMap() {
      const [ymaps3React] = await Promise.all([
        ymaps3.import("@yandex/ymaps3-reactify"),
        ymaps3.ready,
      ]);
      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
        YMapControls,
      } = reactify.module(ymaps3);
      const { YMapZoomControl } = reactify.module(
        await ymaps3.import("@yandex/ymaps3-controls@0.0.1")
      );
      const { YMapDefaultMarker } = reactify.module(
        await ymaps3.import("@yandex/ymaps3-markers@0.0.1")
      );

      const mapContent = (
        <YMap location={LOCATION} ref={(x: any) => (mapRef.current = x)}>
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          {POINTS.map((point) => (
            <YMapDefaultMarker key={point.coordinates} {...point} />
          ))}
          <YMapControls position="right">
            <YMapZoomControl />
          </YMapControls>
        </YMap>
      );

      if (!root) {
        if (mapContainerRef.current !== null) {
          const newRoot = createRoot(mapContainerRef.current);
          setRoot(newRoot);
          newRoot.render(mapContent);
        }
      } else {
        root.render(mapContent);
      }
    }

    initYandexMap();
  }, [POINTS]);

  return (
    <>
      <div>Карта без библиотеки</div>
      <div
        ref={mapContainerRef}
        style={{ width: "700px", height: "700px" }}
      ></div>
    </>
  );
};

export default PureMap;
