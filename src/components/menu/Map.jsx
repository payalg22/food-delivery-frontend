import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon from "../../assets/mapMarker.png";
import styles from "./Map.module.css";

function ShowMap() {
  const position = [18.5241837722811, 73.8445319373968];
  const customIcon = L.divIcon({
    className: styles.marker,
    html: `<img src="${markerIcon}" alt="Marker" />`,
    iconAnchor: [21, 42],
  });
  
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      zoomControl={false}
      style={{ height: "75vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup
        offset={[-70, 85]}
        className={styles.popup}>
          <p>McDonald's</p>Pune
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default function Map() {
  return (
    <div className={styles.map}>
          <ShowMap />
          <div className={styles.label}>
            <h1 className={styles.title}>McDonald's</h1>
            <p className={styles.city}>Pune</p>
            <p className={styles.address}>
              Jangali Maharaj Rd, Deccan Gymkhana, Pune, Maharashtra 411004
            </p>
            <div>
              <p className={styles.heading}>Phone number</p>
              <p className={styles.content}>+91 8928304011</p>
            </div>
            <div>
              <p className={styles.heading}>Website</p>
              <p className={styles.content}>https://mcdelivery.co.in</p>
            </div>
          </div>
        </div>
  )
}

