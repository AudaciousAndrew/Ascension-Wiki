import React from "react";
import classNames from "classnames";
import {
  Link,
  NavLink,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { PATH } from "routes/paths";
import Logo from "images/logo.svg";
import styles from "./Header.scss";

interface Props {
  test?: string;
}

class Header extends React.Component<Props & RouteComponentProps> {
  render(): React.ReactNode {
    const { location } = this.props;
    const isRoot = location.pathname === "/";
    return (
      <header
        className={classNames(styles.header, isRoot && styles.headerRoot)}
      >
        <Link to={PATH.ROOT} className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.icon} />
          <span className={styles.title}>Ascension Wiki</span>
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <NavLink activeClassName={styles.activeLink} to={PATH.ROOT} exact>
                Home
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeClassName={styles.activeLink} to={PATH.FAQ}>
                FAQ
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeClassName={styles.activeLink} to={PATH.ARTICLES}>
                Articles
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink activeClassName={styles.activeLink} to={PATH.SIGN_IN}>
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export const HeaderHOC = withRouter(Header);
