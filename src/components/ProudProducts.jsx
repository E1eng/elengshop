import ProductItem from "./ProductItem";
import "./ProudProducts.css";
function ProudProducts() {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Produk Yang Kami Banggakan</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default ProudProducts;
