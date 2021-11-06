import type { NextPage } from "next";
import { useState } from "react";
import {
  Title,
  ScreenshotImages,
  Head,
  DiscordIcon,
  GithubIcon,
} from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);

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
          <a
            className="button discord"
            href="https://discord.gg/EwdrKzVbvJ"
            target="_blank"
            rel="noreferrer"
          >
            <DiscordIcon />
          </a>
          <a
            className="button github"
            href="https://github.com/mattleong/CosmicNvim"
          >
            <GithubIcon />
          </a>
        </div>

        <div className={styles.install}>
          <a
            className="button install-button"
            href="https://github.com/mattleong/CosmicNvim/wiki/Installation"
          >
            Install
          </a>
        </div>

        <ScreenshotImages count={!showMore ? 1 : null} />
        {!showMore ? (
          <a className="button reversed" onClick={() => setShowMore(true)}>
            See more screenshots
          </a>
        ) : (
          <a
            className="button reversed"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Back to top
          </a>
        )}
      </main>
    </div>
  );
};

export default Home;
