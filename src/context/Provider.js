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
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side,
      },
    }));
  }

  render() {
    const { children } = this.props;
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
  }
}

export default Provider;
