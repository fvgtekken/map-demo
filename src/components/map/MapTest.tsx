'use client';
import { MapContainer, TileLayer } from 'react-leaflet';
import { attributionMap, urlMap } from '@/data/confiMap';
import ContainerMerker from './ContainerMerker';
import { countries } from '@/data/countries';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Country } from '@/types/data';

type Props = {
  dataReady: Country;
};

const MapTest = ({ dataReady }: Props) => {
  return (
    <div>
      <MapContainer center={[15.8054, 14.0241]} zoom={1.5} scrollWheelZoom={true} style={{ height: 500, width: 1000 }}>
        <TileLayer url={urlMap} attribution={attributionMap} />
        <ContainerMerker {...{ countries, allCountries: dataReady }} />
      </MapContainer>
    </div>
  ); //
};

export default MapTest;
