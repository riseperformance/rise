import styles from "./Contacts.module.scss";
import alternativeLogo from "/alter_logo.png";

export const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <h2>Fale conosco!</h2>
      <div className={styles.contactsContainer}>
        <img src={alternativeLogo} alt="Rise logo" />
        <div className={styles.divider} />
        <ul>
          <li>
            <a
              className={styles.instagramContact}
              href="https://www.instagram.com/rise_.h/"
              target="_blank"
            >
              @rise_.h
            </a>
          </li>
          <li>
            <a
              className={styles.whatsappContact}
              href="https://api.whatsapp.com/send?phone=5561982824629"
              target="_blank"
            >
              (61) 982824629
            </a>
          </li>
          <li>
            <a
              className={styles.phoneContact}
              href="tel:+55613558-0575"
            >
              (61) 3558-0575
            </a>
          </li>
        </ul>
      </div>
      <span className={styles.copyright}>
        Direitos reservados | Rise Health
      </span>
    </section>
  );
};
