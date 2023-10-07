import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/logo.png";
import { classNames } from "../helpers/classnames";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link className={classNames(styles.link)} to="consultas">
                Consulta
              </Link>
            </li>
            <li>
              <Link className={classNames(styles.link)} to="planos">
                Planos
              </Link>
            </li>
            <li>
              <Link className={classNames(styles.link)} to="exames">
                Nossos Exames
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
