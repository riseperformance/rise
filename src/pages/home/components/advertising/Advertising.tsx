import styles from "./Advertising.module.scss";
import card01 from "/images/card_01.png";
import card02 from "/images/card_02.png";
import card03 from "/images/card_03.png";

export const Advertising = () => {
  const cards = [
    {
      src: card01,
      alt: "Card 01",
      description:
        "Transformando sua rotina em uma rotina mais saudável e consequentemente melhorando sua saúde, seu corpo, sua autoestima e sua qualidade de vida.",
    },
    {
      src: card02,
      alt: "Card 02",
      description:
        "Um lugar em que todos são tratados como profissionais! Nosso método de atendimento é baseado no suporte das equipes com os atletas profissionais.",
    },
    {
      src: card03,
      alt: "Card 03",
      description:
        "A nossa missão é proporcionar saúde e bem estar para o praticante de atividade física, oferecendo uma trajetória com muito mais propósito, confiança e autoestima",
    },
  ];

  return (
    <>
      <section className={styles.advertisingContainer}>
        <span data-aos="fade-right">
          Lifestyle,
          <br />
          Performance,
          <br />
          Health.
        </span>
        <span data-aos="fade-left">
          Fitness
          <br />
          Life
        </span>
      </section>

      <section className={styles.advertisingCardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-left"
            data-aos-delay={index * 150}
          >
            <img src={card.src} alt={card.alt} draggable={false} />
            <p>{card.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};
