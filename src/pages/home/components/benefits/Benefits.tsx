"use client";

import { useEffect, useState } from "react";
import styles from "./Benefits.module.scss";
import benefit01 from "/images/benefit_01.png";
import benefit02 from "/images/benefit_02.png";
import benefit03 from "/images/benefit_03.png";
import benefit04 from "/images/benefit_04.png";

export const Benefits = () => {
  const [banneStyle, setBannerStyle] = useState<React.CSSProperties>({});

  const benefits = [
    {
      src: benefit01,
      alt: "Benefit 01",
      description: "Melhora nos índices",
    },
    {
      src: benefit02,
      alt: "Benefit 02",
      description: "Alimentação saudável",
    },
    {
      src: benefit03,
      alt: "Benefit 03",
      description: "Acompanhamento esportivo",
    },
    {
      src: benefit04,
      alt: "Benefit 04",
      description: "Melhora na saúde mental",
    },
  ];

  const calculateBannerStyle = (): void => {
    const computedFontSize = document.body
      .computedStyleMap()
      .get("font-size") as CSSUnitValue;

    const fontSize = computedFontSize.value;
    const width = document.body.clientWidth / fontSize;
    const widthPadding = 80 / fontSize;
    const bannerWidth = 660 / fontSize;

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
    <section className={styles.benefitsSection}>
      <h2 style={banneStyle}>Benefícios para você</h2>

      <div className={styles.benefitsContainer}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={styles.benefitContent}
            data-aos="fade-right"
            data-aos-delay={index * 150}
          >
            <img src={benefit.src} alt={benefit.alt} />
            <span>{benefit.description}</span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />
    </section>
  );
};
