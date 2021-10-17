import type { NextPage } from "next";
import Head from "next/head";
import Calendar from "../components/calendar";
import Date from "../components/date";
import Text from "../components/text";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>💒 💍 💮</title>
        <meta
          name="description"
          property="og:description"
          content="Save the date kochani!"
        />
        <link rel="icon" href="./images/favicon.ico" />
        <meta property="og:title" content="💒 💍 💮" />
        <meta property="og:image" content="./images/og.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        <div className="row">
          <div className="col">
            <Date lang="pl" />
          </div>
          <div className="col">
            <Text lang="pl" />
            <Calendar lang="pl" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
