import styles from "./Welcome.module.scss";
import { Button } from "@mui/material";
import blurDiamond from "/blur_diamond.svg";

export const Welcome = () => {
  return (
    <section className={styles.welcomeContainer}>
      <div className={styles.welcomeMessageContainer}>
        <h1 data-aos="zoom-in">A base da sua evolução!</h1>
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Performace e Saúde.
        </h2>
      </div>

      <div className={styles.callTheActionContainer}>
        <Button
          variant="contained"
          color="purple"
          className={styles.callTheAction}
          data-aos="zoom-in"
        >
          Quero me consultar
        </Button>
        <Button
          variant="outlined"
          color="white"
          className={styles.knowMoreButton}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Saiba mais
        </Button>
      </div>

      <img src={blurDiamond} alt="" draggable={false} loading="lazy" />
    </section>
  );
};
