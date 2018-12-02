import * as React from "react";

interface ICounterProps {
  start: number;
}

interface ICounterState {
  count: number;
}

export class Counter extends React.PureComponent<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
    this.state = { count: props.start };
    this.updateCounter = this.updateCounter.bind(this);
  }

  public render() {
    const { count } = this.state;
    return (
      <div className="counter">
        Typescript base counter:
        <div className="count">{count}</div>
        <button onClick={this.updateCounter}>Update</button>
      </div>
    );
  }

  private updateCounter() {
    this.setState({ count: this.state.count + 1 });
  }
}
