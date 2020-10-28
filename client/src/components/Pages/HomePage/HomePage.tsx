import React from "react";

interface Props {
  test?: string;
}

export class HomePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactChild {
    return <div>Home Page</div>;
  }
}
