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

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled/height)*100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (loading) {
    <div>
      <h2>Loading Data, Please Wait !</h2>
    </div>;
  }

  return (
    <div className="scroll-indicator">
      <div className="scroll-bar-container">
        <div className="scroll-bar-progress"></div>
      </div>

      <h1 className="scroll-title">Scroll Indicator</h1>
      <div style={{width: `${scrollPercentage}px`}} className="data-contianer">
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
