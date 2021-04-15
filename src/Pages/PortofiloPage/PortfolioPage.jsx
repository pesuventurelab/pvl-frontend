import React from "react";
import styles from "./PortfolioPage.module.css";


/* IMPORT COMPONENTS */
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import Footer from "../../Components/Footer/Footer";

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Portfolio</div>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
        eius dignissimos molestiae unde, voluptatum nesciunt repudiandae quo,
        inventore possimus reiciendis, ad tenetur libero explicabo illo quia
        asperiores sequi rem!
      </p>

      <div className={styles.portfolio_cards_container}>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PortfolioPage;
