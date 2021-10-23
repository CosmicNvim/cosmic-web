import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>💫 Cosmic Neovim</title>
        <meta name="description" content="CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          💫 CosmicNvim
        </h1>

        <p className={styles.description}>
          CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!
        </p>

        <div className={styles.install}>
          <a className="button" href="https://github.com/mattleong/CosmicNvim/wiki/Installation">Install</a>
        </div>
        <div className="screenshots">
          <Image className="screenshot" src="/screenshots/hover.png" layout="intrinsic" width={1200} height={600} alt="" />
        </div>
      </main>
    </div>
  )
}

export default Home
