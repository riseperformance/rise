import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/logo.png";
import { classNames } from "../../helpers/classnames";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import checkSvg from "/check.svg";
import { Fragment, useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerContent } from "./components/drawer-content/DrawerContent";

export const Header = () => {
  const [isWeb, setIsWeb] = useState(true);
  const [drawerState, setDrawerState] = useState(false);
  const location = useLocation();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerState(open);
    };

  const checkIsWeb = () => {
    const isWeb = document.body.clientWidth > 474;
    setIsWeb(isWeb);
  };

  const webNavigationList = (
    <nav>
      <ul>
        <li>
          <Link
            className={classNames(
              styles.link,
              location.pathname.includes("consultas")
                ? styles.actived
                : undefined
            )}
            to="rise/consultas"
          >
            Consulta
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              styles.link,
              location.pathname.includes("planos") ? styles.actived : undefined
            )}
            to="rise/planos"
          >
            Planos
          </Link>
        </li>
        <li>
          <Dropdown>
            <TriggerButton
              className={classNames(
                styles.link,
                location.pathname.includes("exames")
                  ? styles.actived
                  : undefined
              )}
              aria-haspopup="true"
            >
              Nossos Exames
            </TriggerButton>

            <Menu slots={{ listbox: StyledListbox }}>
              <Link
                className={classNames(
                  styles.link,
                  location.pathname.includes("dexascan")
                    ? styles.actived
                    : undefined
                )}
                to="rise/exames/dexascan"
              >
                <StyledMenuItem>
                  DEXA Scan <img src={checkSvg} draggable={false} />
                </StyledMenuItem>
              </Link>
              <Link
                className={classNames(
                  styles.link,
                  location.pathname.includes("calorimetria")
                    ? styles.actived
                    : undefined
                )}
                to="rise/exames/calorimetria"
              >
                <StyledMenuItem>Calorimetria</StyledMenuItem>
              </Link>
            </Menu>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );

  const mobileNavigationList = (
    <Fragment key="drawer">
      <IconButton title="Menu de Navegação" className={styles.drawerButton} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
        <DrawerContent closeDrawer={toggleDrawer(false)} />
      </Drawer>
    </Fragment>
  );

  useEffect(() => {
    checkIsWeb();
    window.addEventListener("resize", checkIsWeb);
    return () => window.removeEventListener("resize", checkIsWeb);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Link to="/rise/">
          <img src={logo} alt="Logo" />
        </Link>

        {isWeb ? webNavigationList : mobileNavigationList}
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
