import { useEffect, useState } from "react";
import "./LoadMoreButton.css";

export default function LoadMoreButton() {
  const [count, setCount] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

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
        setDataProducts((prevData) => [...prevData, ...data.products]);
        setTotal(data.total);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // First Reload
  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    if (count >= 0) {
      fetchProducts();
    }
  }, [count]);

  useEffect(() => {
    if (dataProducts && dataProducts.length === 100) {
      setDisableButton(true);
    }
  }, [dataProducts]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-circle"></div>
      </div>
    );
  }

  function handleLoadMoreBtnClick() {
    setCount(count + 1);
  }

  return (
    <div className="load-more">
      <h1>Total products: {total}</h1>

      <div className="content">
        {dataProducts && dataProducts.length
          ? dataProducts.map((product, index) => (
              <div className="product" key={index}>
                <span className="price">{product.price}$</span>
                <h2>{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} />
                <button className="buy-now-btn">BUY NOW</button>
              </div>
            ))
          : null}
      </div>
      <button
        className="load-more-btn"
        disabled={disableButton}
        onClick={() => {
          handleLoadMoreBtnClick();
        }}
      >
        Load More Products
      </button>
      {
        disableButton ? <p className="disableMsg">You have reached to 100 products</p> : null
      }
    </div>
  );
}
