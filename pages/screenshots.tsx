import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Screenshots: NextPage = () => {
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
          ---DISPLAY SCREENSHOTS---
        </p>

      </main>
    </div>
  )
}

export default Screenshots
