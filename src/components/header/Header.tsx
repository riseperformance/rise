import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/logo.png";
import { classNames } from "../../helpers/classnames";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

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
              <Dropdown>
                <TriggerButton
                  className={classNames(styles.link)}
                  aria-haspopup="true"
                >
                  Nossos Exames
                </TriggerButton>

                <Menu slots={{ listbox: StyledListbox }}>
                  <Link className={styles.link} to="exames/dexascan">
                    <StyledMenuItem>
                      DEXA Scan <img src="/check.svg" draggable={false} />
                    </StyledMenuItem>
                  </Link>
                  <Link className={styles.link} to="exames/calorimetria">
                    <StyledMenuItem>Calorimetria</StyledMenuItem>
                  </Link>
                </Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

const StyledListbox = styled("ul")(
  () => `
  z-index: 1;
  width: 14.5rem;
  font-family: Inter, sans-serif;
  font-size: 1.375rem;
  font-weight: 300;
  color: #FFFFFF;
  text-decoration: none;
  margin-top: 0.5rem;
  background: #283740;
  border-radius: 0 0 0.875rem 0.875rem;
  overflow: hidden;

    a {
      color: #FFFFFF;
      text-decoration: none;
    }
  `
);

const StyledMenuItem = styled(MenuItem)(
  () => `
  list-style: none;
  padding: 0.875rem 1rem;
  color: #FFFFFF;
  text-decoration: none;
  user-select: none;

  &.${menuItemClasses.focusVisible} {
    background-color: #FFFFFF48;
  }

  &:hover {
    background-color: #FFFFFF48;
  }
  `
);

const TriggerButton = styled(MenuButton)(
  () => `
  font-family: Inter, sans-serif;
  font-weight: 300;
  border: none;
  background: none;
  `
);
