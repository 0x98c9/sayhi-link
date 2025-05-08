import { useState, useEffect } from 'react';

interface Country {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  cca2: string;
}

interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
}

export const useCountryCodes = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2');
        if (!response.ok) {
          throw new Error('Failed to fetch country codes');
        }
        
        const data: Country[] = await response.json();
        
        const codes = data
          .filter(country => country.idd?.root && country.idd?.suffixes?.length > 0)
          .map(country => ({
            code: country.cca2,
            name: country.name.common,
            dialCode: `${country.idd.root.replace('+', '')}${country.idd.suffixes[0]}`
          }))
          .sort((a, b) => {
            // Sort by country name
            return a.name.localeCompare(b.name);
          });

        setCountryCodes(codes);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    fetchCountryCodes();
  }, []);

  return { countryCodes, isLoading, error };
};