import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feel free to contact us for Investments and Insurance services.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon...
        </h1>

        <p className={styles.description}>
          Feel free to contact us for Investments and Insurance services.
        </p>

        <div className={styles.grid}>
          <div href="https://nextjs.org/docs" className={styles.card}>
            <h2>Rohit Mittal &rarr;</h2>
            <p>
            759-759-78-78 <br/>
            957-11-67-300
            <br/>Email : chetakinvest@gmail.com</p>
          </div>
        </div>
      </main>
    </div>
  )
}
