import React from "react";

interface Props {
  test?: string;
}

export class SignInPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactChild {
    return <div>Sign in Page</div>;
  }
}
