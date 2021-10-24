import Script from 'next/script'
import { useEffect } from 'react';
declare global {
  interface Window {
    sc_project: number,
    sc_invisible: number,
    sc_security: string,
  }
}
export function StatsCounter() {
  useEffect(() => {
    window.sc_project = 12668780;
    window.sc_invisible = 1;
    window.sc_security = "7887c847";
  }, []);
  return (
    <>
      <Script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      ></Script>
    </>
  );
}
