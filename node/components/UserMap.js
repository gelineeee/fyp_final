import React from "react";
import { useEffect, useContext, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useRido } from "../context/ridoContext";

const style = {
  wrapper: `flex h-full w-full md:w-2/3 object-fill absolute inset-y-0 right-0`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const UserMap = () => {
  const { userPickupCoordinates, userDropoffCoordinates, userRoutes } =
    useRido();
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/geline/clda01pkh000f01lwmv8ex7qw",
      center: [103.808052586332, 1.3516161224392],
      zoom: 12,
      interactive: true,
    });

    map.on("load", () => {
      // make an initial directions request that
      // starts and ends at the same location
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: userRoutes,
        },
      };

      if (map.getSource("route")) {
        map.getSource("route").setData(geojson);
      } else {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#228B22",
            "line-width": 6,
            "line-opacity": 1,
          },
        });
      }

      // Add starting point to the map
      map.addLayer({
        id: "point",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: userPickupCoordinates,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 1,
          "circle-color": "#3887be",
        },
      });
      // this is where the code from the next step will go
    });

    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker({
        draggable: false,
        color: "#e40000",
      })
        .setLngLat(coordinates)
        .addTo(map);
    };

    if (userPickupCoordinates) {
      addToMap(map, userPickupCoordinates);
    }

    if (userDropoffCoordinates) {
      addToMap(map, userDropoffCoordinates);
    }

    if (userPickupCoordinates && userDropoffCoordinates) {
      map.fitBounds([userDropoffCoordinates, userPickupCoordinates], {
        padding: 130,
      });
    }

    return () => map.remove();
  }, [userPickupCoordinates, userDropoffCoordinates, userRoutes]);

  return <div className={style.wrapper} ref={mapContainerRef} />;
};

export default UserMap;
