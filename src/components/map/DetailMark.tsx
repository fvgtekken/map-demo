import React from 'react';

type Props = {
  [key: string]: any;
};

export const DetailMark = ({ allCountries, country }: Props) => {
  return (
    <div>
      {!allCountries[country['ISO Code']] ? (
        <div>Loading</div>
      ) : (
        <>
          <div>Country: {allCountries[country['ISO Code']].name}</div>
          <div>Capital: {allCountries[country['ISO Code']].capital}</div>
          <div>Flag: {allCountries[country['ISO Code']].emoji}</div>
          <div>Currency: {allCountries[country['ISO Code']].currency}</div>
          <div>
            {allCountries[country['ISO Code']].languages ? <span>Lanuaje: </span> : <></>}
            {allCountries[country['ISO Code']].languages && allCountries[country['ISO Code']].languages.map((lang: any) => <span key={lang.code}>{`${lang.name}`} </span>)}
          </div>
        </>
      )}
    </div>
  );
};
