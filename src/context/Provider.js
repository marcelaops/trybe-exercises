import React from "react";
import MyContext from "./MyContext";

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: "red",
      },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side,
      },
    }));
  }

  changeSignal(signalColor) {
    this.setState((prevState) => ({
      signal: {
        ...prevState.signal,
        color: signalColor,
      },
    }));
  }

  render() {
    const { children } = this.props;
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
  }
}

export default Provider;
