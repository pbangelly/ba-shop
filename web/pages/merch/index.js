// pages/merch/index.js
import Link from "next/link";
import Cart from "../../components/Cart";
import CartSummary from "../../components/CartSummary";
import Products from "../../components/Products";
import { client } from "../../lib/sanity/client";
import { merchQuery } from "../../lib/sanity/merchQuery";

const Merch = ({ products }) => {
  return (
    <main>
    <div className="bg-gradient-to-r from-indigo-600 to-fuchsia-400">
      <h1 className="text-white text-2xl md:text-6xl text-center py-10">Your Bad Angel Shop</h1>
    </div>
      <Cart>
        <Products products={products} />
        <CartSummary />
      </Cart>
      <Link href="/">
        <a>Back Home</a>
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