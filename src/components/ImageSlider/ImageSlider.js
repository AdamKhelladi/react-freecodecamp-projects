import { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { TbCurrencyTenge } from "react-icons/tb";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    setLoading(true);

    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return (
      <h3 style={{ color: "#ccc", textAlign: "center" }}>
        Loading Data! Please Wait..
      </h3>
    );
  }

  if (errorMsg !== null) {
    return <h3>Error occured! {errorMsg}</h3>;
  }

  function handlePrevios() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="the-image-slider">
      <BsArrowLeftCircleFill
        className="the-arrow arrow-left"
        onClick={() => {
          handlePrevios();
        }}
      />
      {images && images.length
        ? images.map((imgItem, index) => (
            <img
              key={imgItem.id}
              src={imgItem.download_url}
              alt={imgItem.download_url}
              className={
                currentSlide === index
                  ? "current-img"
                  : "current-img hide-current-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="the-arrow arrow-right"
        onClick={() => {
          handleNext();
        }}
      />

      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "the-current-indicator"
                    : "the-current-indicator hide-the-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
