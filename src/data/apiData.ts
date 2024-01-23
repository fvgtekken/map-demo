export const apiCountries = 'https://countries.trevorblades.com/';

type Query = {
  query: string;
};

interface ConfigQuery {
  allCountries: (args?: string | undefined) => Query;
  codeCountry: (args: string | undefined) => Query;
}

export const configQuery: ConfigQuery = {
  allCountries: () => {
    return {
      query: `
            {
             countries  {
              code
              name
              native
              capital
              emoji
              currency
              languages {
                code
                name
              }
            }
          }
          `,
    };
  },

  codeCountry: (countryCode: string | undefined) => {
    return {
      query: `
            {
              country(code: "${countryCode}") {
              name
              native
              capital
              emoji
              currency
              languages {
                code
                name
              }
            }
          }
          `,
    };
  },
};
