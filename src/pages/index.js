import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BDR Base</title>
        <meta name="description" content="Resources, Case Studies, and More" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the BDR Base
        </h1>

        <p className={styles.description}>
          Browse Customer Stories and check back soon for more resources and tools.{' '}
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Customer Stories &rarr;</h2>
            <p>Browse stories from Netlify's enterprise customers. </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/Netlify_logo.svg" alt="Netlify Logo" width={100} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
