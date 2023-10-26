import styles from "./Address.module.scss";
import addressImage from "/address.svg";

export const Address = () => {
  return (
    <section className={styles.addressSection}>
      <h2>Onde ficamos?</h2>

      <div className={styles.addressContainer}>
        <img src={addressImage} alt="Address" />
        <span>
          Rua quinze de novembro,1385 - Vila Dubus, Presidente Prudente - SP,
          19015-080
        </span>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1692821380966!2d-51.39348542390978!3d-22.119520510211675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f5fdf1eef00d%3A0x9926b1e92e623fec!2sRISE%20performance%20e%20sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1696466851781!5m2!1spt-BR!2sbr"
        width="100%"
        height="550"
        style={{
          filter: "invert(90%) hue-rotate(180deg)",
          border: 0,
          borderRadius: "16px",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        data-aos="zoom-out-down"
      ></iframe>

      <div className={styles.divider} />
    </section>
  );
};
