// import { useEffect, useState } from "react";
// import "./ImageSlider.css";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// // import { TbCurrencyTenge } from "react-icons/tb";

// export default function ImageSlider() {
//   const images = [
//     "/images/slide1.jpg",
//     "/images/slide2.jpg",
//     "/images/slide3.jpg",
//     "/images/slide4.jpg",
//     "/images/slide5.jpg",
//     "/images/slide6.jpg",
//     "/images/slide7.jpg",
//     "/images/slide8.jpg",
//     "/images/slide9.jpg",
//   ];

//   const [currentImg, setCurrentImg] = useState(0);

//   function handleArrowLeftClick() {
//     setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
//   }

//   function handleArrowRightClick() {
//     setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
//   }

//   function handleIndicatorClick(index) {
//     setCurrentImg(index);
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImg((prev) => (
//         prev === images.length - 1 ? 0 : prev + 1
//       ))
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [])

//   return (
//     <div className="image-slider">
//       <h2 className="title">Post One</h2>
//       <BsArrowLeftCircleFill
//         className="arrow arrow-left"
//         onClick={() => {
//           handleArrowLeftClick();
//         }}
//       />

//       {images.map((img, index) =>
//         index === currentImg ? (
//           <img src={img} key={index} className="current-img" />
//         ) : null
//       )}

//       <BsArrowRightCircleFill
//         className="arrow arrow-right"
//         onClick={() => {
//           handleArrowRightClick();
//         }}
//       />

//       <span className="circle-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={
//               currentImg === index
//                 ? "current-indicator"
//                 : "current-indicator hide-current-indicator"
//             }
//             onClick={() => {
//               handleIndicatorClick(index)
//             }}
//           ></button>
//         ))}
//       </span>
//     </div>
//   );
// }
