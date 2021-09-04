import React from "react";
import styles from "./AboutUsPage.module.css";

/* IMPORT VARIABLES */
import { quotesList } from "../../Data/Quotes/Quotes.js";

/*IMPORT COMPONENTS */
import Footer from "../../Components/Footer/Footer.jsx";
import { aboutUsPageVideoURL } from "../../Data/Links";

/* IMPORT IMAGES */
import BANNER from "../../Images/Banners/banner1.svg";
import BANNER2 from "../../Images/Banners/banner2.svg";
import BANNER3 from "../../Images/Banners/banner3.svg";
import BANNER4 from "../../Images/Banners/banner4.svg";

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
        <p id={styles.section_one_ans}>
          PVL is a venture studio launched under the partnership of PESU and
          COCreate Ventures. We are a fund equipped with execution and
          acceleration capabilities. Our main objective is to enable the finest
          and the most dedicated students to become entrepreneurs. We also want
          to find solutions to these questions - ‘Can entrepreneurship fund
          research & scholarships?’ and ‘Can we create a funnel of fundable deep
          tech companies that are category creators for the existing VC
          ecosystem?’
        </p>
      </div>

      {/* <img id={styles.section_two} src={BANNER} alt="Image" /> */}

      <div id={styles.section_three} className={`${styles.section}`}>
        <img className={styles.section_banner} src={BANNER} alt="Image" />
        <p className={styles.quote_para}>
          <span className={styles.quotes}>"</span> {quotesList[3]}{" "}
          <span className={styles.quotes}>"</span>
        </p>
      </div>

      <div id={styles.section_four} className={`${styles.section}`}>
        <p>
          PESU is one of the top 10 universities in India attracting some of the
          best brains in the country for research & studies. PESU has special
          focus on developing entrepreneurship through Centre for Inovation and
          Entrepreneurship (CIE).
        </p>
        <img className={styles.section_banner} src={BANNER2} alt="Image" />
      </div>

      <div id={styles.section_five} className={`${styles.section}`}>
        <img className={styles.section_banner} src={BANNER3} alt="Image" />
        <p>
          CoCreate is focused on strengthening the startup ecosystem by
          operating micro funds to help build marvellous deep tech startups.
          CoCreate also concentrates on transforming great consumer-focused
          businesses, having transformed companies like{" "}
          <a href="https://justbooks.in/">JustBooks.in</a>,{" "}
          <a href="https://bonhomiaworld.com/">Bonhomia</a> amongst others.
          Through its concern Upaghna, we are helping many exceptional consumer
          product companies.
        </p>
      </div>

      {/* <div id={styles.section_five} className={`${styles.section}`}>
        <p>
          Our first fund was to transform businesses that are already funded &
          worth surviving. We invested in JustBOoks & Bonhomia ensured they are
          transformed and survive Now we are working with PESU & few more
          organizations to setup microfunds to provide quality dealflow for VC
          echo systems.
        </p>
        <img className={styles.section_banner} src={BANNER4} alt="Image" />
      </div> */}

      <Footer />
    </div>
  );
};

export default AboutUsPage;
