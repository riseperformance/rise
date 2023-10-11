"use client";

import { useEffect, useState } from "react";
import styles from "./Plans.module.scss";

type Plan = {
  title: string;
  description?: string;
  benefits: string[];
  duration?: string;
  link?: string;
};

export const Plans = () => {
  const [banneStyle, setBannerStyle] = useState<React.CSSProperties>({});

  const plans: Plan[] = [
    {
      title: "Rise Performance Start",
      description:
        "Esse pacote conta com 1 consulta com o Dr André (médico do esporte) + avaliação física completa + 1 plano de performance.",
      benefits: [],
      link: "/",
    },
    {
      title: "Rise Performance Bronze",
      benefits: [
        "3 consultas presenciais com intervalo de 30 dias;",
        "2 avaliações físicas completas + 1 avaliação com DEXA;",
        "Acompanhamento semanal de performance via WhatsApp por 3 meses;",
        "1 Plano de performance;",
      ],
      link: "/",
      duration: "3 meses",
    },
    {
      title: "Rise Performance Silver",
      benefits: [
        "6 consultas presenciais com intervalo de 30 dias;",
        "3 avaliações físicas completas + 3 avaliação com DEXA;",
        "Acompanhamento semanal de performance via WhatsApp por 6 meses;",
        "1 Plano de performance;",
      ],
      link: "/",
      duration: "6 meses",
    },
    {
      title: "Rise Performance Gold",
      benefits: [
        "12 consultas presenciais com intervalo de 30 dias;",
        "6 avaliações físicas completas + 7 avaliação com DEXA;",
        "Acompanhamento semanal de performance via WhatsApp por 1 ano;",
        "1 Plano de performance;",
      ],
      link: "/",
      duration: "1 ano",
    },
  ];

  const calculateBannerStyle = (): void => {
    const computedFontSize = document.body
      .computedStyleMap()
      .get("font-size") as CSSUnitValue;

    const fontSize = computedFontSize.value;
    const width = document.body.clientWidth / fontSize;
    const widthPadding = 80 / fontSize;
    const bannerWidth = 500 / fontSize;

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
    <main>
      <h1>Conheça nossos pacotes!</h1>

      <section className={styles.plansSection}>
        {plans.map((plan, planIndex) => (
          <div key={planIndex} className={styles.planContainer}>
            <h2>{plan.title}</h2>
            {plan.description ? <p>{plan.description}</p> : undefined}
            {plan.benefits.length > 0 ? (
              <ul>
                {plan.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>{benefit}</li>
                ))}
              </ul>
            ) : undefined}
            {plan.link ? (
              <span className={styles.contractPlan}>
                Quer adquirir o seu Pacote {plan.title}?{" "}
                <a href={plan.link} target="_blank">
                  Clique aqui
                </a>
              </span>
            ) : undefined}
            {plan.duration ? (
              <span style={banneStyle} className={styles.durationBanner}>
                Duração: {plan.duration}
              </span>
            ) : undefined}
          </div>
        ))}
      </section>
    </main>
  );
};
