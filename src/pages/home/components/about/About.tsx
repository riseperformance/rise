"use client";

import { useEffect, useState } from "react";
import styles from "./About.module.scss";
import about01 from "/images/about_01.png";

export const About = () => {
  const [banneStyle, setBannerStyle] = useState<React.CSSProperties>({});

  const aboutParagraphs = [
    "O Dr. André é médico com expertise na área da medicina desportiva e atua com grande enfoque no acompanhamento de atletas profissionais e amadores que visam melhora da performance e melhora da composição corporal.",
    "Ele fez especialização em duas instituições, (ibcmed- RS) e CEFIT-SP ) e atualmente tem se destacado pela excelência no atendimento e pelo altíssimo grau de satisfação dos seus pacientes.",
  ];

  const calculateBannerStyle = (): void => {
    const computedFontSize = document.body
      .computedStyleMap()
      .get("font-size") as CSSUnitValue;

    const fontSize = computedFontSize.value;
    const width = document.body.clientWidth / fontSize;
    const widthPadding = 80 / fontSize;
    const bannerWidth = 800 / fontSize;

    if (width <= 90) {
      return setBannerStyle({
        width: bannerWidth > width ? `${width}rem` : `${bannerWidth}rem`,
        transform: `translateX(${widthPadding}rem)`,
        paddingRight: `${widthPadding}rem`,
      });
    }

    const rightGap = (width - 90) / 2;
    setBannerStyle({
      width: `${bannerWidth + rightGap}rem`,
      transform: `translateX(${rightGap + widthPadding}rem)`,
      paddingRight: `${rightGap + widthPadding}rem`,
    });
  };

  useEffect(() => {
    calculateBannerStyle();
    window.addEventListener("resize", calculateBannerStyle);
    return () => window.removeEventListener("resize", calculateBannerStyle);
  }, []);

  return (
    <section className={styles.aboutSection}>
      <h2>Conheça seu médico:</h2>

      <div className={styles.aboutContainer}>
        <img src={about01} alt="Dr. André" />
        <div className={styles.aboutContent}>
          <h3 style={banneStyle}>
            Dr. André Scardovelli
            <span>Médico do esporte</span>
          </h3>
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <a
            className={styles.instagramLink}
            href="https://www.instagram.com/andrescardovelli/"
            target="_blank"
          >
            @andrescardovelli
          </a>
        </div>
      </div>

      <div className={styles.divider} />
    </section>
  );
};
