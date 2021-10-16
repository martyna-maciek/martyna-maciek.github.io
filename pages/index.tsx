import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>💒 💍 💮</title>
        <meta name="description" content="Save the date kochani!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Save the date baby!</h1>

        <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </div>
  );
};

export default Home;
