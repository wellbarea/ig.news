import Head from 'next/head';

import Image from 'next/image';
import Avatar from '../../public/images/avatar.svg';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | ig.news </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world. </h1>
          <p>
            Get access to all publications <br/>
            <span>for $9.90 moth</span>
          </p>
        </section>

        <Image src={Avatar} alt="Girl coding" />
      </main>
    </>
  )
}
