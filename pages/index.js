import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Clock from './components/clock'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Binary Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.App}>
         <Clock />
      </main>

    </div>
  )
}
