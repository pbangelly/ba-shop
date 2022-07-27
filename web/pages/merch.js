// pages/merch/index.js

import Link from "next/link";
import Cart from "../components/Cart";
// import CartSummary from "../../components/CartSummary";
import Products from "../components/Products";
import { client } from "../lib/sanity/client";
import { merchQuery } from "../lib/sanity/merchQuery";

const Merch = ({ products }) => {
  return (
    <main>
    <div class="h-40 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 class="text-pink-500 text-2xl md:text-6xl text-center py-20 ">Your Bad Angel Store</h1>
    </div>
      <Cart>
        <Products products={products} />
        {/* <CartSummary /> */}
      </Cart>
      <Link href="/">
        <a class="text-red-500 py-10 px-10">Back Home</a>
      </Link>
    </main>
  );
};

export default Merch;

export async function getStaticProps({ }) {
  const products = await client.fetch(merchQuery);

  return {
    props: {
      products,
    },
  };
}