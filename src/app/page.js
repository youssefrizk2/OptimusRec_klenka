import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.text}>
          <p>
          Our professionally qualified team has in depth industry knowledge <br/>
          and genuine practical experience to offer informed, confidential<br/>
          advice
          </p>
        </div>
      </div>
      <div className={styles.search}>

      <p>I'm looking for a job in </p>

      <select className={styles.dropdown}>
          <option value="option1">All Sectors</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <p> with a salary of </p>
        <select className={styles.dropdown}>
          <option value="option1">All Salaries</option>
          <option value="option2">20K-30K</option>
          <option value="option3">30K-45K</option>
        </select>
        <p> and </p>
        <input className={styles.dropdown} type="text" placeholder="Keyword" />
        <button className={styles.searchbutton}>Search</button>
      </div>

    </div>
  );
}
