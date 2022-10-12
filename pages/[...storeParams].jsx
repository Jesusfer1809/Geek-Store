import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import StoreComp from "../components/StoreComp";
import StoreBanner from "../components/StoreBanner";

import { divisions } from "../utils/data";
import { slugify } from "../utils/functions";

import ProductsContext from "../context/Products/ProductsContext";

function Store({ urlParams }) {
  const { products } = useContext(ProductsContext);
  const [pDivision, sDivision] = urlParams;

  const prods = products.filter((p) =>
    sDivision
      ? slugify(p.s_division) === sDivision
      : slugify(p.p_division) === pDivision
  );

  const title = sDivision
    ? divisions.find((p) => slugify(p.s_division) === sDivision).s_division
    : divisions.find((p) => slugify(p.p_division) === pDivision).p_division;

  return (
    <div className="font-rubik">
      <Head>
        <title>Geek Store | Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative">
        <NavBar />
      </header>

      <main className=" pb-20 pt-28 md:pt-40">
        <StoreBanner title={title} />
        <div className="px-3 sm:px-6 md:px-10 ">
          <StoreComp prods={prods} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = (ctx) => {
  const { storeParams } = ctx.params;
  return {
    props: {
      urlParams: storeParams,
    },
  };
};

export default Store;
