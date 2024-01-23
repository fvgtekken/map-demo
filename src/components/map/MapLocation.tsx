'use client';
import LocationMarker from './LocationMarker';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { attributionMap, urlMap } from '@/data/confiMap';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MapLocation = () => {
  return (
    <div>
      <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={true} style={{ height: 500, width: 1000 }}>
        <TileLayer url={urlMap} attribution={attributionMap} />
        <LocationMarker />
      </MapContainer>
    </div>
  ); //
};

export default MapLocation;
