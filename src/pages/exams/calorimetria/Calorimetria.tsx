import { Button } from "@mui/material";
import styles from "./Calorimetria.module.scss";
import blurDiamondVariant from "/blur_diamond_variant.svg";
import calorimetriaImage01 from "/images/calorimetria_01.png";
import calorimetriaImage02 from "/images/calorimetria_02.png";
import calorimetriaImage03 from "/images/calorimetria_03.png";

export const Calorimetria = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>Calorimetria</h1>
        <img
          className={styles.diamondBlurImage}
          src={blurDiamondVariant}
          alt=""
          draggable={false}
        />
      </div>

      <section className={styles.calorimetriaSection}>
        <div className={styles.examContainer}>
          <h2 data-aos="fade-right">
            Calorimetria <span>em repouso</span>
          </h2>
          <p data-aos="fade-right" data-aos-delay="50">
            Analisador a taxa metabólico basal em estado de repouso do paciente
            por meio da troca gasosa.
          </p>
          <span data-aos="fade-right" data-aos-delay="100">
            Auxilia na elaboração do plano alimentar ideal para cada paciente.
          </span>
        </div>

        <div className={styles.examContainer}>
          <h2 data-aos="fade-right">
            Calorimetria <span>em esforço</span>
          </h2>
          <p data-aos="fade-right" data-aos-delay="50">
            Teste de esforço máximo com analisador metabólico para determinar
            VO2 Max e limiares metabólicos.
          </p>
          <span data-aos="fade-right" data-aos-delay="100">
            Auxilia na prescrição das zonas de treinamento e intensidade de
            treino.
          </span>
        </div>
      </section>

      <section className={styles.imagesSection} data-aos="zoom-out-down">
        <img src={calorimetriaImage01} alt="Calorimetria 01" />
        <img src={calorimetriaImage02} alt="Calorimetria 02" />
        <img src={calorimetriaImage03} alt="Calorimetria 03" />
      </section>

      <Button
        variant="contained"
        color="purple"
        className={styles.scheduleExamButton}
      >
        Quero agendar meu exame!
      </Button>
    </main>
  );
};
