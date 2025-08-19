import { useEffect, useState } from "react";
import "./LoadMoreButton.css";

export default function LoadMoreButton() {
  const [count, SetCount] = useState(0);
  const [dataProducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-circle"></div>
      </div>
    );
  }

  function handleLoadMoreBtnClick() {
    SetCount(count + 1);
    fetchProducts()
    console.log(count);
  }

  return (
    <div className="load-more">
      <h1>Total products: {dataProducts.total}</h1>

      <div className="content">
        {dataProducts.products && dataProducts.products.length
          ? dataProducts.products.map((product, index) => (
              <div className="product" key={index}>
                <span className="price">{product.price}$</span>
                <h2>{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} />
                <button className="buy-now-btn">BUY NOW</button>
              </div>
            ))
          : null}
      </div>
      <button className="load-more-btn" onClick={() => {
        handleLoadMoreBtnClick();
      }}>Load More Products</button>
    </div>
  );
}
