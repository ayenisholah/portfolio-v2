import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="description"
          content="Shola Ayeni is a software engineer who specializes in building efficient and scalable single-page applications and server-side applications"
        />
        <meta name="keywords" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/logos/logo-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/logos/logo-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#ffb22a" />
        <script
          src="https://kit.fontawesome.com/cb737ff7bb.js"
          crossOrigin="anonymous"
        ></script>
        <title>Shola Ayeni</title>
      </Head>

      <main>
        <Header />
        <Hero />
      </main>
    </div>
  );
}
