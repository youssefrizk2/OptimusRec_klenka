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
      <div className={styles.aboutus}>
        <div className={styles.aboutlogo}>
          <Image  src="/icon.png" alt="logo" width={35} height={35} className={styles.aboutimg}/>
          ABOUT US
        </div>
        <p className={styles.abouttext}>
        Optimus has quickly established itself as a prominent force within financial <br/>
        recruitment in Jersey. In the past 15 years we've forged strong links with clients <br/>
        and candidates and are often regarded by both as the recruitment company of <br/>
        choice for skilled, ambitious individuals and one of the first places clients turn to <br/>
        when looking for talent. <br/>
        Within the team at Optimus you're likely to find someone who has performed <br/>
        the very role you're looking for. Our expertise and practical experience spans <br/>
        the majority of the core financial services areas including Fiduciary, Funds, <br/>
        Wealth Management, HR, IT, Compliance and Marketing in a range of <br/>
        organisations from blue chip global banks to independent trust companies
        </p>
      </div>
      <div className={styles.jobsearch}>
        <div className={styles.jobsearchkey}>
          <div className={styles.jobsearchlogo}>
          <p className={styles.jobstext}>JOB SEARCH</p>
          </div>
          <div className={styles.keyw}>
            <div className={styles.keylogo}>
            <p className={styles.keywordtxt}>KEYWORD</p>
            <input className={styles.dropdown} type="text" placeholder="Keyword" />
            </div>
          </div>
        </div>
        <div className={styles.jobsearchlist}>
          <div className={styles.category}>
            
          </div>

          <div className={styles.salary}>
            <b className={styles.salarytxt}>SALARY</b>
            <ul className={styles.salarylist}>
              <li className={styles.salarylistitem}>
                <input type="checkbox" />
                <p className={styles.ulitem}>20K-30K</p>
              </li>
              <li className={styles.salarylistitem}>                
                <input type="checkbox" />
                <p className={styles.ulitem}>30K-45K</p>
              </li>
              <li className={styles.salarylistitem}>                
                <input type="checkbox" />
                <p className={styles.ulitem}>45K-60K</p>
              </li>
              <li className={styles.salarylistitem}>                
                <input type="checkbox" />
                <p className={styles.ulitem}>65K-85K</p>
              </li>
              <li className={styles.salarylistitem}>                
                <input type="checkbox" />
                <p className={styles.ulitem}>85K+</p>
              </li>
            </ul>
            <button className={styles.salarybutton}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
