'use client';
import { MapContainer, TileLayer } from 'react-leaflet';
import { attributionMap, urlMap } from '@/data/confiMap';
import { useHandleMarker } from '../hooks/useHandleMarker';
import ContainerMerker from './ContainerMerker';
import { countries } from '@/data/countries';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const Maplazy = () => {
  const { handleMarkerClick, detailCoutry } = useHandleMarker();

  const propsMarker = {
    eventHandlers: (country: any) => {
      return {
        click: () => {
          handleMarkerClick(country['ISO Code']);
        },
      };
    },
  };

  return (
    <div>
      <MapContainer center={[15.8054, 14.0241]} zoom={1.5} scrollWheelZoom={true} style={{ height: 500, width: 1000 }}>
        <TileLayer url={urlMap} attribution={attributionMap} />
        <ContainerMerker {...{ countries, allCountries: detailCoutry, propsMarker }} />
      </MapContainer>
    </div>
  ); //
};

export default Maplazy;
