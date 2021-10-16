import type { NextPage } from "next";
import Head from "next/head";
import Date from "../components/date";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>💒 💍 💮</title>
        <meta name="description" content="Save the date kochani!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        <Date />
      </main>
    </div>
  );
};

export default Home;
