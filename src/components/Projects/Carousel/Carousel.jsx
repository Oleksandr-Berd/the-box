import AliceCarousel from "react-alice-carousel";
import img1 from "../../../utilities/images/carous.jpg"
import img2 from "../../../utilities/images/carous2.jpg";
import img3 from "../../../utilities/images/carous3.jpg";
import img4 from "../../../utilities/images/carous4.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img1} onDragStart={handleDragStart} role="presentation" alt="" />,
  <img src={img2} onDragStart={handleDragStart} role="presentation" alt="" />,
  <img src={img3} onDragStart={handleDragStart} role="presentation" alt="" />,
  <img src={img4} onDragStart={handleDragStart} role="presentation" alt="" />,
];

const Gallery = () => {
  return <AliceCarousel mouseTracking items={items} />;
};

export default Gallery;
