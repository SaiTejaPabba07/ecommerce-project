import { Product } from "./Product";
export function ProductsGrid({ products, fetchCartItems }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} fetchCartItems={fetchCartItems}></Product>
        );
      })}
    </div>
  );
}
