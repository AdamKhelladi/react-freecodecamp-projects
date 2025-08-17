import { useEffect, useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider(url, page, limit) {

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

    } catch(error) {
      setErrorMsg(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages();
    }
  }, [url])

  if (loading) {
    return <h3>Loading Data! Please Wait..</h3>
  }

  if (errorMsg !== null) {
    return <h3>Error occured! {errorMsg}</h3>
  }

  return (
    <div className="image-slider">
      Image Slider
    </div>
  )
}