import { default as NextHead } from "next/head";
export function Head() {
  return (
    <NextHead>
      <title>Cosmic Neovim</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="description"
        content="CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/cosmic.ico" />
    </NextHead>
  );
}
