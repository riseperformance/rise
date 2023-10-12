"use client";

import { Link, Outlet } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "/logo.png";
import { classNames } from "../../helpers/classnames";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(undefined);

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
              <span
                className={classNames(styles.link)}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Nossos Exames
              </span>
            </li>

            <Menu
              id="basic-menu"
              className={styles.menu}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link className={styles.link} to="">DEXA Scan</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={styles.link} to="">Calorimetria</Link>
              </MenuItem>
            </Menu>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
