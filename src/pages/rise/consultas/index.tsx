"use client";

import { Button } from "@mui/material";
import { PlanRefund } from "../components/plan-refund/PlanRefund";
import styles from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import blurDiamondVariant from "/blur_diamond_variant.svg";
import about02 from "/images/about_02.png";

const Appointments: FC = () => {
  const [banneStyle, setBannerStyle] = useState<React.CSSProperties>({});

  const calculateBannerStyle = (): void => {
    const computedFontSize = document.body
      .computedStyleMap()
      .get("font-size") as CSSUnitValue;

    const fontSize = computedFontSize.value;
    const scrollbarWidth = 0.5;
    const width = document.body.clientWidth / fontSize - scrollbarWidth;
    const widthPadding =
      document.body.clientWidth > 1157
        ? 5
        : document.body.clientWidth > 930
        ? 4
        : document.body.clientWidth > 614
        ? 3
        : 2;
    const bannerWidth = 776 / fontSize;

    if (width <= 90) {
      return setBannerStyle({
        width: bannerWidth > width ? `${width}rem` : `${bannerWidth}rem`,
        transform: `translateX(-${widthPadding}rem)`,
        paddingLeft: `${widthPadding}rem`,
      });
    }

    const leftGap = (width - 90) / 2;
    setBannerStyle({
      width: `${bannerWidth + leftGap}rem`,
      transform: `translateX(-${leftGap + widthPadding}rem)`,
      paddingLeft: `${leftGap + widthPadding}rem`,
    });
  };

  useEffect(() => {
    calculateBannerStyle();
    window.addEventListener("resize", calculateBannerStyle);
    return () => window.removeEventListener("resize", calculateBannerStyle);
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>Nossa consulta</h1>
        <img
          className={styles.diamondBlurImage}
          src={blurDiamondVariant}
          alt=""
          draggable={false}
        />
      </div>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2 data-aos="fade-right">Dr. André Scardovelli</h2>
          <span data-aos="fade-right">
            Especialista em performance esportiva.
          </span>

          <p data-aos="fade-right">
            Sou médico com expertise na área da medicina desportiva e atuo com
            grande enfoque no acompanhamento de atletas profissionais e amadores
            que buscam melhora da condição física e performance.
          </p>
          <p data-aos="fade-right">
            Fiz especialização em duas instituições, BCMED-(RS) e CEITT(SP) e
            atualmente tenho me destacado pelos atendimentos na Clínica Rise.
          </p>
        </div>

        <img src={about02} alt="André" />
      </section>

      <section className={styles.howItWorksSection}>
        <h2 style={banneStyle}>Como funciona a consulta?</h2>

        <p data-aos="fade-right">
          A consulta tem duração de 1 hora, e envolve uma conversa aberta sobre
          seus objetivos, necessidades, dúvidas e todo seu histórico de saúde,
          esportivo e possíveis lesões.
        </p>

        <a
          href="https://wa.me/5518998110489?text=Olá+gostaria+de+agendar+uma+consulta+na+RISE+Health"
          target="_blank"
        >
          <Button
            tabIndex={-1}
            variant="contained"
            color="purple"
            className={styles.scheduleExamButton}
          >
            Quero agendar minha consulta!
          </Button>
        </a>
      </section>

      <div className={styles.divider} />

      <PlanRefund />
    </main>
  );
};

export default Appointments;
