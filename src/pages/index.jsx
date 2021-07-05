import React, { useState, useRef } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

import Menu from "../components/Menu";
import { useOnClickOutside } from "../hooks/UseOnClickOutside";

export default function Home() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

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
        <link rel="apple-touch-icon" href="/logos/logo-16x16.png"></link>
        <meta name="theme-color" content="#ffb22a" />
        <script
          src="https://kit.fontawesome.com/cb737ff7bb.js"
          crossOrigin="anonymous"
        ></script>
        <title>Shola Ayeni</title>
      </Head>

      <main>
        <div ref={node}>
          <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Hero />
        <About />
      </main>
    </div>
  );
}
