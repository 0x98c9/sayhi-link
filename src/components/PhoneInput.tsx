import React, { useState, useMemo } from 'react';
import { useCountryCodes } from '../hooks/useCountryCodes';
import { Search } from 'lucide-react';

interface PhoneInputProps {
  phoneNumber: string;
  countryCode: string;
  onPhoneNumberChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  phoneNumber,
  countryCode,
  onPhoneNumberChange,
  onCountryCodeChange,
}) => {
  const { countryCodes, isLoading, error } = useCountryCodes();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countryCodes;
    const query = searchQuery.toLowerCase();
    return countryCodes.filter(country => 
      country.name.toLowerCase().includes(query) || 
      country.dialCode.includes(query)
    );
  }, [countryCodes, searchQuery]);

  const selectedCountry = countryCodes.find(c => c.dialCode === countryCode);

  return (
    <div className="mb-6">
      <label htmlFor="phone-number" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
        Phone Number
      </label>
      <div className="relative flex shadow-sm rounded-md">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-full flex items-center space-x-2 rounded-l-md border py-2 px-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
            disabled={isLoading}
          >
            <span>+{selectedCountry?.dialCode || countryCode}</span>
            <span className="text-gray-500">▼</span>
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search countries..."
                    className="w-full pl-9 pr-3 py-2 border rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="max-h-60 overflow-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      onCountryCodeChange(country.dialCode);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3"
                  >
                    <span className="text-gray-500">+{country.dialCode}</span>
                    <span className="text-gray-900 dark:text-white">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <input
          type="tel"
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          placeholder="Enter phone number"
          className="flex-1 rounded-r-md py-2 px-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
        />
      </div>
      
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Enter the number without any special characters
      </p>
      
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}. Using fallback country codes.
        </p>
      )}
    </div>
  );
};

export default PhoneInput;