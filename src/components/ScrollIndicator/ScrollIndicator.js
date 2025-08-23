import { use, useEffect, useState } from "react";
import "./ScrollIndicator.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data.products);
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scrolled);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (loading) {
    <div>
      <h2 style={{color: "#ccc"}}>Loading Data, Please Wait !</h2>
    </div>;
  }

  return (
    <div
      className="scroll-indicator"
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      <div className="scroll-bar-container">
        <div
          style={{ width: `${scrollPercentage}%` }}
          className="scroll-bar-progress"
        ></div>
      </div>

      <h1 className="scroll-title">Scroll Indicator</h1>
      <div className="data-contianer">
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <p key={index} className="item-title">
                {dataItem.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
