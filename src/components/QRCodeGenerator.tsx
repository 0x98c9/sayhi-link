import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value, size = 128 }) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setQrCodeDataUrl('');
      setError(null);
      return;
    }

    const generateQRCode = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const dataUrl = await QRCode.toDataURL(value, {
          width: size,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        });
        setQrCodeDataUrl(dataUrl);
      } catch (err) {
        console.error('Error generating QR code:', err);
        setError('Failed to generate QR code. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [value, size]);

  const handleDownload = () => {
    if (!qrCodeDataUrl) return;

    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'whatsapp-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-md" style={{ width: size, height: size }}>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-center" style={{ width: size, height: size }}>
        <p className="text-xs text-red-500">{error}</p>
      </div>
    );
  }

  if (!qrCodeDataUrl) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-md" style={{ width: size, height: size }}>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Generate a link first to see QR code</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={qrCodeDataUrl}
        alt="QR Code"
        width={size}
        height={size}
        className="rounded-md"
      />
      <button
        onClick={handleDownload}
        className="mt-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;