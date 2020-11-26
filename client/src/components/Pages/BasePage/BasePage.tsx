import { Footer } from "components/Footer/Footer";
import { HeaderHOC as Header } from "components/Header/Header";
import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

interface Props {
  route: RouteConfig;
}

export class BasePage extends React.Component<Props> {
  render(): React.ReactNode {
    const {
      route: { routes }
    } = this.props;
    return (
      <div>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </div>
    );
  }
}
