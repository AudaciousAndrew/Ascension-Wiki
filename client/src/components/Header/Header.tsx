import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "routes/paths";
import Logo from "images/logo.svg";
import Test from "images/topBG.svg";
import styles from "./Header.scss";

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className={styles.header}>
          <Link to={PATH.ROOT} className={styles.logo}>
            <img src={Logo} alt="Logo" className={styles.icon} />
            <span className={styles.title}>Ascension Wiki</span>
          </Link>
          <nav className={styles.navbar}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link to={PATH.HOME}>Home</Link>
              </li>
              <li className={styles.listItem}>
                <Link to={PATH.FAQ}>FAQ</Link>
              </li>
              <li className={styles.listItem}>
                <Link to={PATH.ARTICLES}>Articles</Link>
              </li>
              <li className={styles.listItem}>
                <Link to={PATH.SIGN_IN}>Sign In</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <img src={Test} alt="" className={styles.test} />
        </div>
      </>
    );
  }
}
