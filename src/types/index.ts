export interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
}

export interface WhatsAppLinkOptions {
  phoneNumber: string;
  countryCode: string;
  message: string;
}

export interface Template {
  id: string;
  name: string;
  content: string;
}

export type ThemeMode = 'light' | 'dark';