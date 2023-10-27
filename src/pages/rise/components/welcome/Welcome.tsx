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
        <a
          href="https://wa.me/5518998110489?text=Olá+gostaria+de+agendar+uma+consulta+na+RISE+Health"
          target="_blank"
        >
          <Button
            tabIndex={-1}
            variant="contained"
            color="purple"
            className={styles.callTheAction}
            data-aos="zoom-in"
          >
            Quero me consultar
          </Button>
        </a>
        <a
          className={styles.knowMoreLink}
          href="https://www.instagram.com/rise_.h/"
          target="_blank"
        >
          <Button
            tabIndex={-1}
            variant="outlined"
            color="white"
            className={styles.knowMoreButton}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Saiba mais
          </Button>
        </a>
      </div>

      <img src={blurDiamond} alt="" draggable={false} loading="lazy" />
    </section>
  );
};
