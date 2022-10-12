import "../styles/globals.css";
import type { AppProps } from "next/app";

import UserState from "../context/User/UserState";
import ProductsState from "../context/Products/ProductsState";
import CartState from "../context/Cart/CartState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartState>
      <ProductsState>
        <UserState>
          <Component {...pageProps} />
        </UserState>
      </ProductsState>
    </CartState>
  );
}

export default MyApp;
