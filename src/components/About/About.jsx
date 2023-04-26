import aboutItems from "../../utilities/data/aboutItems.json";
import styles from "./About.module.css";
import icon from "../../utilities/images/Vector1.jpg"
const About = () => {
  return (
    <section>
      <h2>Our Reputation</h2>
      <ul>
        {aboutItems.map(({ img, title, text }) => (
          <li key={title}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
