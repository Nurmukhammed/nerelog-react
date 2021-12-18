import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const Map = (props: any) => {
  return (
    <div className="map-container">
      <MapContainer
        className="markercluster-map"
        preferCanvas={true}
        center={[43.238949, 76.889709]}
        zoom={13}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerClusterGroup>
          {props.locs.map((data: any) => (
            <Marker
              key={data.id}
              position={[data.coords.lat, data.coords.long]}
              eventHandlers={{
                click: (e: any) => {
                  console.log("marker clicked", e);
                },
              }}
            >
              <Tooltip position={[data.coords.lat, data.coords.long]}>
                {props.clients.map((client: any) =>
                  client.id === data.client_id ? (
                    <React.Fragment key={client.id}>
                      <h2>ID: {data.id}</h2>
                      <h2>Название клиента: {client.name}</h2>
                      <p>Цена заказа: {data.price} KZT</p>
                    </React.Fragment>
                  ) : null
                )}
              </Tooltip>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
