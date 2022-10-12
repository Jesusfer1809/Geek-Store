import { useState, useEffect, useContext } from "react";

import ProductsContext from "../context/Products/ProductsContext";

import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import ShowCase from "../components/ShowCase";
import Footer from "../components/Footer";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="font-rubik relative">
      <Head>
        <title>Geek Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative">
        <NavBar />
      </header>

      <main className="pb-10 pt-28">
        <div>
          <Banner />
        </div>

        <div className="px-3 sm:px-6 md:px-10">
          <ShowCase />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
