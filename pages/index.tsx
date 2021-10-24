import type { NextPage } from "next";
import Link from "next/link";
import { Title, ScreenshotImages, Head, DiscordIcon, GithubIcon } from '../components'
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Title />

        <p className={styles.description}>
          CosmicNvim is a lightweight and opinionated Neovim config for web
          development, specifically designed to provide a 💫 COSMIC programming
          experience!
        </p>

        <div className="buttons">
          <a className="button discord" href="https://discord.gg/EwdrKzVbvJ" target="_blank" rel="noreferrer"><DiscordIcon /></a>
          <a className="button github" href="https://github.com/mattleong/CosmicNvim"><GithubIcon /></a>
        </div>

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
