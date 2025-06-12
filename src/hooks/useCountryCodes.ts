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
          .map(country => {
            const name = String(country.name?.common || '');
            const root = country.idd?.root;
            const suffix = country.idd?.suffixes?.[0];
            let dialCode = '';

            if (typeof root === 'string' && typeof suffix === 'string') {
              // Remove '+' from root and concatenate with suffix
              // Ensure suffix doesn't also start with a similar character if necessary, though API usually has clean suffixes
              dialCode = `${root.replace(/[+~]/g, '')}${suffix.replace(/[+~()-\s]/g, '')}`;
            } else if (typeof root === 'number' && typeof suffix === 'number') {
              dialCode = `${String(root)}${String(suffix)}`;
            }
            // Additional check for non-empty components, although filter should catch most issues
            if (!name || !country.cca2) {
                console.warn('Missing name or cca2 for country:', country);
                return null; // Will be filtered out later
            }

            return {
              code: String(country.cca2),
              name: name,
              dialCode: dialCode
            };
          })
          .filter((cc): cc is CountryCode => cc !== null && cc.dialCode !== '') // Filter out nulls and items with empty dialCode
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