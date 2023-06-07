import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.css";
function Main(props) {
  const { content } = props;
  if (content && content.products === null) {
    return <p>Loading..</p>;
  }
  return (
    <div className={styles.main}>
      {content &&
        Array.isArray(content.products) &&
        content.products.map((p) => <ProductCard key={p.id} p={p} />)}
      {content && content.products.length === 0 && (
        <p>No products matching your criteria</p>
      )}
    </div>
  );
}

export default Main;
