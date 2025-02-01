import { useState, useEffect } from 'react';

export const useGoogleMapsApiKey = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem('AIzaSyDWCa_JGuPc_IfBG30aAZxKLoFF1y5E5u8');
    setApiKey(storedApiKey);
  }, []);

  return apiKey;
};