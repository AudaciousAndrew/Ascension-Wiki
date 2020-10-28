import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  test?: string;
}

export class BasePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Link to="/home">home</Link>
        <br />
        <Link to="/articles">articles</Link>
        <Footer />
      </div>
    );
  }
}
