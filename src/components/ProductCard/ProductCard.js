import React from "react";
import styles from "./ProductCard.module.css";
function ProductCard(props) {
  const { p } = props;

  return (
    <div className={styles.productCard}>
      <div className={styles.topPart}>
        <p className={styles.productBrand}>{p.brand}</p>
        <p className={styles.productCategory}>{p.category}</p>
      </div>
      <img
        src={p.images[0]}
        alt="product-image"
        className={styles.productImage}
      />
      <p className={styles.productTitle}>{p.title}</p>
      <p>{p.desciprtion} </p>
      <p className={styles.productPrice}>Price: ${p.price}</p>
      <p className={styles.discountedPrice}>
        Price: ${(p.price - p.price * (p.discountPercentage / 100)).toFixed(2)}
      </p>
      <p>Rating: {p.rating} </p>
      <p>Stock: {p.stock}</p>
    </div>
  );
}

export default ProductCard;
