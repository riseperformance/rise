import styles from "./Goals.module.scss";
import goal01 from "/images/goal_01.png";

export const Goals = () => {
  const goals = [
    "Melhora da condição física;",
    "Melhora da performance esportiva;",
    "Melhora da composição corporal;",
    "Emagrecimento saudável;",
    "Diagnóstico e tratamento de lesões;",
  ];

  return (
    <section className={styles.goalsSection}>
      <div className={styles.goalsContainer}>
        <ul>
          <h2>Nossos objetivos:</h2>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>

        <img src={goal01} alt="Goal 01" />
      </div>

      <h3>
        Focamos em pessoas que querem ter resultados reais. Não acreditamos em
        pílulas mágicas.
      </h3>

      <div className={styles.divider} />
    </section>
  );
};
