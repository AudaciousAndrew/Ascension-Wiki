import React from "react";

interface Props {
  test?: string;
}

export class FaqPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactChild {
    return <div>Faq Page</div>;
  }
}
