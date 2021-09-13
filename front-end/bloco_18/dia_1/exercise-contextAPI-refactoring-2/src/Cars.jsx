// src/Cars.jsx

import PropTypes from "prop-types";
import React from "react";
// import { connect } from "react-redux";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";
// import { moveCar } from "./redux/actionCreators";
import MyContext from "./context/MyContext";

class Cars extends React.Component {
  render() {
    const { red: redCar, blue: blueCar, yellow: yellowCar } = this.context.cars;
    const { moveCar } = this.context;

    return (
      <div>
        <div>
          <img
            className={redCar ? "car-right" : "car-left"}
            src={carRed}
            alt="red car"
          />
          <button onClick={() => moveCar("red", !redCar)} type="button">
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? "car-right" : "car-left"}
            src={carBlue}
            alt="blue car"
          />
          <button onClick={() => moveCar("blue", !blueCar)} type="button">
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? "car-right" : "car-left"}
            src={carYellow}
            alt="yellow car"
          />
          <button onClick={() => moveCar("yellow", !yellowCar)} type="button">
            Move
          </button>
        </div>
      </div>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

Cars.contextType = MyContext;

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow,
// });

// const mapDispatchToProps = { moveCar };

// export default connect(mapStateToProps, mapDispatchToProps)(Cars);
export default Cars;
