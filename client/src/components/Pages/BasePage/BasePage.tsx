import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Footer } from "components/Footer/Footer";
import { HeaderHOC as Header } from "components/Header/Header";
import styles from "./BasePage.scss";

interface Props {
  route: RouteConfig;
}

export class BasePage extends React.Component<Props> {
  render(): React.ReactNode {
    const {
      route: { routes }
    } = this.props;
    return (
      <div className={styles.container}>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </div>
    );
  }
}
