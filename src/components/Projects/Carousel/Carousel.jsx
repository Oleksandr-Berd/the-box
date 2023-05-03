import styles from "./Carousel.module.css";


import img1 from "../../../utilities/images/carous.jpg";
import img2 from "../../../utilities/images/carous2.jpg";
import img3 from "../../../utilities/images/carous3.jpg";
import img4 from "../../../utilities/images/carous4.jpg";
import back from "../../../utilities/images/backCar.png"
import next from "../../../utilities/images/nextCar.png";

const items = [
  {
    id: 1,
    src: img1,
    data: "other",
    title: "Wildstone Infra Hotel",
    address: "2715 Ash Dr. San Jose, South Dakota",
  },
  {
    id: 2,
    src: img2,
    data: "commercial",
    title: "Wish Stone Building",
    address: "2972 Westheimer Rd. Santa Ana, Illinois ",
  },
  {
    id: 3,
    src: img3,
    data: "residential",
    title: "Mr. Parkinston’s House",
    address: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    id: 4,
    src: img4,
    data: "other",
    title: "Oregano Height",
    address: "2464 Royal Ln. Mesa, New Jersey ",
  },
];


const Carousel = ({criteria}) => {
  return (
    <div className={styles.carouselCon}>
      <ul className={styles.gridCon}>
        {items
          .filter((el) => {
            if (criteria === "all") {
              return el;
            }
            return el.data === criteria;
          })
          .map((el) => (
            <li key={el.id} className={styles.carouselItemCon}>
              <img
                src={el.src}
                alt={el.data}
                data={el.data}
                className={styles.carouseItemImg}
                  />
                  <div className={styles.textCon}>
                      <h4 className={styles.textTitle}>{el.title}</h4>
                      <address className={styles.textAddress}>{el.address}</address>
                  </div>
            </li>
          ))}
      </ul>
      <div className={styles.carouselBtnCon}>
        <button className={styles.carouselBarBtn}>
          <img src={back} alt="" />
          <span style={{ marginLeft: "10px" }}> Back</span>
        </button>
        <ul className={styles.carBarList}>
          <li className={styles.activeItem}></li>
          <li className={styles.carBarItem}></li>
          <li className={styles.carBarItem}></li>
          <li className={styles.carBarItem}></li>
          <li className={styles.carBarItem}></li>
        </ul>
        <button className={styles.carouselBarBtn}>
          <span style={{ marginRight: "10px" }}>Next</span>
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
