import styles from '../styles/Home.module.scss'
import Link from "next/link";

export function Title() {
 return (
    <h1 className={styles.title}>
      <Link href="/">💫 CosmicNvim</Link>
    </h1>
  )
}
