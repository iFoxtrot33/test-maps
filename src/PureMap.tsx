import React, { useRef } from "react";
import { useYandexMap } from "./hooks/useYandexMap";

const PureMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useYandexMap(mapContainerRef);

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
