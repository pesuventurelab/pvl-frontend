import React from "react";
import styles from "./AboutUsPage.module.css";

/* IMPORT VARIABLES */
import { quotesList } from "../../Data/Quotes/Quotes.js";

/*IMPORT COMPONENTS */
import Footer from "../../Components/Footer/Footer.jsx";
import { aboutUsPageVideoURL } from "../../Data/Links";

/* IMPORT IMAGES */
import BANNER from "../../Images/Banners/banner1.svg";

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>About us</div>
      <div id={styles.section_one} className={`${styles.section}`}>
        <div id={styles.section_one_questions}>
          What we do ?
          <br />
          Who we are ? <br />
          How we help you ?
        </div>
        <p id={styles.section_one_ans} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices enim
          aenean tincidunt lectus parturient mauris, a. Phasellus fermare
          pretium sit aliquet adipiscing. Adipiscing tellus, dignissim luctus
          nisi. Adipiscing mauris euismod habitant vitae orci purus odio. Auctor
          enim eu facilisi ac vitae praesent. Consequat eu pretium vivamus velit
          massa. luctus nisi. Adipiscing mauris euismod habitant vitae orci
          purus odio. Auctor enim eu facilisi ac vitae praesent. Consequat eu
          pretium vivamus velit massa.{" "}
        </p>
      </div>

      <img id={styles.section_two} src={BANNER} alt="Image" />



      <div id={styles.section_three} className={`${styles.section}`}>
        <img className={styles.section_banner} src={BANNER} alt="Image" />
        <p>
          <span className={styles.quotes}>"</span> {quotesList[3]}{" "}
          <span className={styles.quotes}>"</span>
        </p>
      </div>

      <div id={styles.section_four} className={`${styles.section}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
          dolore illo qui. Eligendi id animi libero deserunt. Tenetur delectus
          ipsum illo mollitia quos sunt incidunt quaerat necessitatibus eius
          saepe!
        </p>
        <img className={styles.section_banner} src={BANNER} alt="Image" />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
