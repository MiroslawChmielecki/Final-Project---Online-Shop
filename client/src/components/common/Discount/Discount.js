import React from "react";
import { PropTypes } from "prop-types";
import Alert from "../Alert/Alert";

class Discount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      invalidCode: false
    };
  }

  handleSubmit = () => {
    const { discountCode, handleDiscountCode, discountStatus } = this.props;

    if (!discountStatus) {
      if (discountCode === this.state.value) {
        handleDiscountCode();
      } else {
        this.setState({ invalidCode: true });
      }
    }
  };

  handleInfoAlert = () => {
    this.setState({ invalidCode: false });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { discountStatus } = this.props;
    const { value, invalidCode } = this.state;
    const { handleChange, handleSubmit, handleInfoAlert } = this;

    if (!discountStatus && invalidCode)
      return (
        <Alert onClick={handleInfoAlert} color="danger">
          Wrong code !! Try again !!
        </Alert>
      );
    else if (!discountStatus)
      return (
        <div>
          <input
            placeholder="discount code"
            value={value}
            onChange={handleChange}
          ></input>

          <button onClick={handleSubmit}>Confirm code !!</button>
        </div>
      );
    else if (discountStatus)
      return <Alert color="success">Code correct !! You pay 15% less !!</Alert>;
  }
}

Discount.propTypes = {
  discountStatus: PropTypes.bool.isRequired,
  discountCode: PropTypes.string.isRequired,
  handleDiscountCode: PropTypes.func.isRequired
};

export default Discount;
