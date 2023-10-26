"use client";

import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import blurDiamondVariant from "/blur_diamond_variant.svg";
import dexaScanImage01 from "/images/dexa_scan_01.png";
import dexaScanImage02 from "/images/dexa_scan_02.png";
import dexaScanImage03 from "/images/dexa_scan_03.png";
import checkDark from "/check_dark.svg";
import { FC, useEffect, useState } from "react";

const DexaScan: FC = () => {
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
    const bannerWidth = 490 / fontSize;

    if (width <= 90) {
      return setBannerStyle({
        width: bannerWidth > width ? `${width}rem` : `${bannerWidth}rem`,
        transform: `translate(${widthPadding}rem, -25%)`,
      });
    }

    const rightGap = (width - 90) / 2;
    setBannerStyle({
      width: `${bannerWidth + rightGap}rem`,
      transform: `translate(${rightGap + widthPadding}rem, -25%)`,
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
        <h1>DEXA Scan</h1>
        <img
          className={styles.diamondBlurImage}
          src={blurDiamondVariant}
          alt=""
          draggable={false}
        />
        <span style={banneStyle} className={styles.banner}>
          Exclusivo Rise Heath! <img src={checkDark} alt="" draggable={false} />
        </span>
      </div>

      <section className={styles.goalSection}>
        <h2 data-aos="fade-right">Qual é o objetivo?</h2>
        <p data-aos="fade-right" data-aos-delay="50">
          O exame mede com alta precisão a massa dos tecidos muscular, ósseo e
          adiposo do corpo todo e dos membros separadamente.
        </p>
        <span data-aos="fade-right" data-aos-delay="100">
          Padrão Ouro na qualidade e confiança de resultados!
        </span>
      </section>

      <section className={styles.imagesSection} data-aos="zoom-out-down">
        <img src={dexaScanImage01} alt="Dexa Scan 01" />
        <img src={dexaScanImage02} alt="Dexa Scan 02" />
        <img src={dexaScanImage03} alt="Dexa Scan 03" />
      </section>

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
          Quero agendar meu exame!
        </Button>
      </a>
    </main>
  );
};

export default DexaScan;
