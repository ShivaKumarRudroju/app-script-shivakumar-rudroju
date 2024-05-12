import { useState, useEffect } from "react";
import ProductCard from "../productcard";
import Filter from "../filters";
import Footer from "../footer";
import "./index.css";

const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProductsList(data);
      } catch (error) {
        console.error("Failed to fetch Products:", error);
      }
    };
    fetchingData();
  }, []);
  return (
    <div className="product-grid">
      <Filter />
      <ProductCard product={productsList} />
      <Footer />
    </div>
  );
};
export default ProductsList;
