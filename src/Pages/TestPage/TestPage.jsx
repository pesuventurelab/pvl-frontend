import React  from "react";
import styles from "./TestPage.module.css";

import InputLabel from "../../Components/InputComponent/InputLabel/InputLabel";
import Footer from "../../Components/Footer/Footer";

const TestPage = () => {


  return (
    <div className={styles.container}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis accusantium temporibus! Quam sint accusantium eaque aspernatur, excepturi neque dolore dicta nisi sed facilis assumenda nesciunt vitae, debitis suscipit magni rerum placeat. Pariatur, iure velit nulla, incidunt aliquam perferendis voluptas sint porro tempora soluta quis. Ducimus facere doloremque recusandae nobis quae cumque, velit voluptates inventore magnam sequi esse ad corporis aspernatur eligendi quibusdam itaque corrupti eos praesentium non tempore? Officiis, ex! Exercitationem minus ipsa asperiores repudiandae beatae qui odio cupiditate neque rerum quaerat praesentium eligendi labore nam quibusdam iste reprehenderit dicta, nesciunt tempora? Soluta fugit enim fuga ullam commodi reiciendis.
        </p>
      <InputLabel title={"Fullname"} isRequired={true} info={"Please enter your full name"} />
       
    </div>
  );
};

export default TestPage;
