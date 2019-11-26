import React from "react";
import { PropTypes } from "prop-types";
import Alert from "../Alert/Alert";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        <Alert onClick={handleInfoAlert} variant="error">
          Zły kod !! Spróbuj ponownie !!
        </Alert>
      );
    else if (!discountStatus)
      return (
        <Form inline className="formDiscount">
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input
              id="code"
              onChange={handleChange}
              value={value}
              placeholder="wpisz kod promocyjny"
            />
          </FormGroup>
          <Button color="primary" onClick={handleSubmit}>
            Potwierdź
          </Button>
        </Form>
      );
    else if (discountStatus)
      return (
        <Alert variant="success">Kod poprawny !! Płacisz 15% mniej !!</Alert>
      );
  }
}

Discount.propTypes = {
  discountStatus: PropTypes.bool.isRequired,
  discountCode: PropTypes.string.isRequired,
  handleDiscountCode: PropTypes.func.isRequired
};

export default Discount;
