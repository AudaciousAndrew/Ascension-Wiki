import React from "react";
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
      <div className={styles.home}>
        <div className={styles.head}>
          <h1 className={styles.title}>Knowledge Base</h1>
          <input
            type="text"
            placeholder="Looking for an article? Enter article name here."
          />
        </div>
        <div>HomePage</div>
      </div>
    );
  }
}
