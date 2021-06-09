import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
