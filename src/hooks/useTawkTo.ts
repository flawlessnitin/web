"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export const useTawkTo = () => {
  useEffect(() => {
    // Delay Tawk.to initialization to improve initial load performance
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !window.Tawk_API) {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/68b688a5e2f918192683808b/1j44gbit5';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode?.insertBefore(script, firstScript);
      }
    }, 3000); // Delay by 3 seconds

    return () => clearTimeout(timer);
  }, []);
};
