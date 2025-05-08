import { useState, useEffect } from 'react';
import { generateWhatsAppLink, formatPhoneNumber } from '../utils/linkUtils';

interface UseWhatsAppLinkProps {
  initialCountryCode?: string;
  initialPhoneNumber?: string;
  initialMessage?: string;
}

export const useWhatsAppLink = ({
  initialCountryCode = '1',
  initialPhoneNumber = '',
  initialMessage = '',
}: UseWhatsAppLinkProps = {}) => {
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [message, setMessage] = useState(initialMessage);
  const [link, setLink] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  // Update link whenever inputs change
  useEffect(() => {
    if (phoneNumber.trim()) {
      setLink(generateWhatsAppLink(countryCode, phoneNumber, message));
      setIsValidPhone(formatPhoneNumber(phoneNumber).length >= 7);
    } else {
      setLink('');
      setIsValidPhone(false);
    }
  }, [countryCode, phoneNumber, message]);

  // Handle phone number input with formatting
  const handlePhoneNumberChange = (value: string) => {
    // Allow only numbers and some formatting characters
    const sanitized = value.replace(/[^\d\s\(\)\-\+]/g, '');
    setPhoneNumber(sanitized);
  };

  // Handle country code selection
  const handleCountryCodeChange = (value: string) => {
    setCountryCode(value);
  };

  // Handle message input
  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  // Get message character count
  const messageCharacterCount = message.length;

  return {
    countryCode,
    phoneNumber,
    message,
    link,
    isValidPhone,
    messageCharacterCount,
    handleCountryCodeChange,
    handlePhoneNumberChange,
    handleMessageChange,
  };
};