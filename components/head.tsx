import type { FC } from 'react';
import { default as NextHead } from 'next/head';
import Script from 'next/script';

type TProps = {
  title?: string;
};

const Analytics: FC = () => {
  return process.env.NODE_ENV === 'production' ? (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1X4HBFG260"
      />
      <Script
        id="ga"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1X4HBFG260');
          `,
        }}
      />
    </>
  ) : (
    <></>
  );
};

const AnalyticsProvider: FC = ({ children }) => {
  return (
    <>
      <Analytics />
      {children}
    </>
  );
};

export function Head({ title = 'CosmicNvim - Home' }: TProps) {
  return (
    <AnalyticsProvider>
      <NextHead>
        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </AnalyticsProvider>
  );
}
