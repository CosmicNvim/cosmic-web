import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Title, ScreenshotImages } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmic Neovim</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cosmic.ico" />
      </Head>

      <main className={styles.main}>
        <Title />

        <p className={styles.description}>
          CosmicNvim is a lightweight and opinionated Neovim config for web
          development, specifically designed to provide a 💫 COSMIC programming
          experience!
        </p>

        <div className={styles.install}>
          <a
            className="button"
            href="https://github.com/mattleong/CosmicNvim/wiki/Installation"
          >
            Install
          </a>
        </div>

        <ScreenshotImages />

        <Link href="/screenshots">See more screenshots</Link>
      </main>
    </div>
  );
};


export default Home;
