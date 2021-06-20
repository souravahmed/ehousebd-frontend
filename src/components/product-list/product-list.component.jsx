import React from "react";
//import { useDispatch } from "react-redux";
//import { getProducts } from "../../redux/product/productAction";
//import ProductCard from "../product-card/product-card.component";
import "./product-list.styles.scss";

const ProductList = ({ category_slug }) => {
  //const productState = useSelector((state) => state.product);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts({ category_slug: category_slug }));
  // }, [dispatch, category_slug]);

  return (
    <div className="product-container">
      {/* {productState[category_slug]?.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))} */}
      <h1>Product</h1>
    </div>
  );
};

export default ProductList;
