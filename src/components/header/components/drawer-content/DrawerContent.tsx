import { Link } from "react-router-dom";
import styles from "./DrawerContent.module.scss";
import { classNames } from "../../../../helpers/classnames";
import checkSvg from "/check.svg";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  closeDrawer?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const DrawerContent = (props: Props) => {
  return (
    <nav className={styles.drawerContent}>
      <IconButton
        className={styles.closeDrawerButton}
        onClick={props.closeDrawer}
      >
        <CloseIcon />
      </IconButton>

      <ul>
        <li>
          <Link
            className={classNames(styles.link)}
            to="consultas"
            onClick={props.closeDrawer}
          >
            Consulta
          </Link>
        </li>

        <li>
          <Link
            className={classNames(styles.link)}
            to="planos"
            onClick={props.closeDrawer}
          >
            Planos
          </Link>
        </li>

        <span>Nossos Exames</span>
        <li>
          <Link
            className={classNames(styles.link)}
            to="exames/dexascan"
            onClick={props.closeDrawer}
          >
            DEXA Scan <img src={checkSvg} draggable={false} />
          </Link>
        </li>

        <li>
          <Link
            className={classNames(styles.link)}
            to="exames/calorimetria"
            onClick={props.closeDrawer}
          >
            Calorimetria
          </Link>
        </li>
      </ul>
    </nav>
  );
};
