import React from "react";

interface Props {
  test?: string;
}

export class ArticlesPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactChild {
    return <div>Articles Page</div>;
  }
}
