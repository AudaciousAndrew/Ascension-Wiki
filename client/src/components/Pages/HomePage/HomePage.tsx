import React from "react";
import Test from "images/topBG.svg";
import styles from "./HomePage.scss";

interface Props {
  test?: string;
}

export class HomePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactChild {
    return (
      <>
        <div className={styles.home}>
          <div>
            <img src={Test} alt="" className={styles.test} />
          </div>
          <div>HomePage</div>
        </div>
      </>
    );
  }
}
