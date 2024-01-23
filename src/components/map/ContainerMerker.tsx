import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { DetailMark } from './DetailMark';

type Props = {
  countries: any;
  allCountries: any;
  propsMarker?: any;
};

const ContainerMerker = ({ countries, allCountries, propsMarker }: Props) => {
  return (
    <>
      {countries && allCountries ? (
        countries.map((country: any) => (
          <Marker key={country['ISO Code']} position={[country.Latitude, country.Longitude]} eventHandlers={{ ...propsMarker?.eventHandlers(country) }}>
            <Popup>
              <DetailMark {...{ allCountries, country }} />
            </Popup>
          </Marker>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default ContainerMerker;
