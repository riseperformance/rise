import styles from "./PlanRefund.module.scss";
import allianzLogo from "/plans/allianz.png";
import amilLogo from "/plans/amil.png";
import bradescoSaudeLogo from "/plans/bradesco_saude.png";
import sulamericaLogo from "/plans/sulamerica.png";
import oneHealthLogo from "/plans/one_health.png";
import portoSeguroLogo from "/plans/porto_seguro.png";
import segurosUnimedLogo from "/plans/seguros_unimed.png";
import omintLogo from "/plans/omint.png";
import sompoSegurosLogo from "/plans/sompo_seguros.png";

export const PlanRefund = () => {
  const plans = [
    {
      src: allianzLogo,
      alt: "Allianz Logo",
    },
    {
      src: amilLogo,
      alt: "Amil Logo",
    },
    {
      src: bradescoSaudeLogo,
      alt: "Bradesco Saúde Logo",
    },
    {
      src: sulamericaLogo,
      alt: "SulAmérica Logo",
    },
    {
      src: oneHealthLogo,
      alt: "One Health Logo",
    },
    {
      src: portoSeguroLogo,
      alt: "Porto Seguro Logo",
    },
    {
      src: segurosUnimedLogo,
      alt: "Seguros Unimed Logo",
    },
    {
      src: omintLogo,
      alt: "Omint Logo",
    },
    {
      src: sompoSegurosLogo,
      alt: "Sompo Seguros Logo",
    },
  ];

  return (
    <section className={styles.planRefundSection}>
      <h2>Solicite o reemsolso pelo seu plano:</h2>
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <img
            key={index}
            src={plan.src}
            alt={plan.alt}
            data-aos="zoom-out-down"
            data-aos-delay={index * 100}
          />
        ))}
      </div>

      <div className={styles.divider} />
    </section>
  );
};
