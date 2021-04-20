import React from "react";
import styles from "./PortfolioPage.module.css";

/* IMPORT COMPONENTS */
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import Footer from "../../Components/Footer/Footer";

import { portfolioData } from "../../Data/Data";

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
        {portfolioData.map((item, index) => (
          <PortfolioCard
            title={item.title}
            para={item.para}
            linkedin={item.linkedin}
            twitter={item.twitter}
            instagram={item.instagram}
            website={item.website}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
