import { Country, PropsCountry } from '@/types/data';

export const createIndexCountry = (countries: PropsCountry[] = []): Country => {
  const countriesIndexed: Country = {};

  for (let country of countries) {
    const { code, name, capital, emoji, currency, languages } = country;
    // console.log(languages.length);

    let languaje: PropsCountry[] | any = [];
    if (languages && languages.length !== 0) {
      languaje = languages;
    }

    countriesIndexed[`${code}`] = { name, capital, emoji, currency, languages: languaje };
  }

  return countriesIndexed;
};
