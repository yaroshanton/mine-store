import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import Button from './Button';

class Form extends Component {
  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="sending-form">
        <Field name="name" required component="input" placeholder="NAME" type="text" />
        <Field placeholder="SURNAME" name="surname" component="input" type="text" />
        <Field placeholder="ADDRESS" name="address" component="input" type="text" />
        <Field placeholder="MOBILE" name="phone" required component="input" type="tel" />
        <div className="cart__bottom-buttons">
          <Button outline type={"submit"}>ORDER
          </Button>
        </div>
      </form>
    );
  }
}
Form = reduxForm({
  form: 'post',
})(Form);

export default Form;