// web/components/Products.js

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";

const Products = ({ products }) => {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <section className="py-20 px-10 flex-wrap grid grid-cols-2 md:grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={urlFor(product.image).width(300)} alt={product.name} />
          <h2>{product.name}</h2>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: "usd",
            })}
          </p>
          <button className="flex gap-1" onClick={() => addItem(product)}>Add to cart</button>
          <button className="flex gap-1" onClick={() => removeItem(product.id)}>Remove</button>
        </div>
      ))}
    </section>
  );
};

export default Products;