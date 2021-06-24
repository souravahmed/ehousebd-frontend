import ProductCard from "../product-card/product-card.component";
import "./product-list.styles.scss";

const ProductList = ({ products, title }) => {
  return (
    <div className="product-container">
      <div className="container__title">
        <h2>{title}</h2>
      </div>
      <div className="product-collection">
        {products?.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
