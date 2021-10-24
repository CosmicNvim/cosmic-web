import type { NextPage } from 'next'
import { Title, ScreenshotImages, Head } from '../components'
import styles from '../styles/Home.module.scss'

const Screenshots: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head title='CosmicNvim - Screenshots' />

      <main className={styles.main}>
        <Title />

        <p className={styles.description}>
          📷 Screenshots
        </p>

        <ScreenshotImages showAll={true} />
      </main>
    </div>
  )
}

export default Screenshots
