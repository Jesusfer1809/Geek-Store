import React from "react";

import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Footer from "../components/Footer";

function login() {
  return (
    <div className="font-rubik">
      <Head>
        <title>Geek Store | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative">
        <NavBar />
      </header>

      <main className="px-3 sm:px-6 md:px-10 pb-20 pt-28 md:pt-40">
        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default login;
