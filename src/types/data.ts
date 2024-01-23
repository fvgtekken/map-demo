export type PropsLanguaje = {
  code: string;
  name: string;
};

export type PropsCountry = {
  name?: string;
  code?: string;
  native?: string;
  capital?: string;
  emoji?: any;
  currency?: string;
  languages?: PropsLanguaje[];
};

export type Country = {
  [key: string]: PropsCountry;
};
