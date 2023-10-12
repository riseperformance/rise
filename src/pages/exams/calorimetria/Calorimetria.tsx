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
        <h1>Colorimetria</h1>
        <img
          className={styles.diamondBlurImage}
          src={blurDiamondVariant}
          alt=""
          draggable={false}
        />
      </div>

      <section className={styles.calorimetriaSection}>
        <div className={styles.examContainer}>
          <h2>
            Calorimetria <span>em repouso</span>
          </h2>
          <p>
            Analisador a taxa metabólico basal em estado de repouso do paciente
            por meio da troca gasosa.
          </p>
          <span>
            Auxilia na elaboração do plano alimentar ideal para cada paciente.
          </span>
        </div>

        <div className={styles.examContainer}>
          <h2>
            Calorimetria <span>em esforço</span>
          </h2>
          <p>
            Teste de esforço máximo com analisador metabólico para determinar
            VO2 Max e limiares metabólicos.
          </p>
          <span>
            Auxilia na prescrição das zonas de treinamento e intensidade de
            treino.
          </span>
        </div>
      </section>

      <section className={styles.imagesSection}>
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
