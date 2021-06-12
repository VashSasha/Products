import React from 'react';
import './index.css';

export default class Size extends React.Component {
  constructor() {
    super()
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(event) {
    this.props.checkedSize({
      selectedOption: event.target.value,
      price: event.target.dataset.price
    })
  }
  render() {
    return (
      <form className="volume" onChange={this.onValueChange} onSubmit={this.formSubmit}>
        <label className="radioBtn" ><input type="radio" data-price="200" value="100" name="gender" defaultChecked="checked" />
          <span className="checkmark"></span>
         100 мл</label>
        <label className="radioBtn"><input type="radio" data-price="370" value="200" name="gender" />
          <span className="checkmark"></span>
        200 мл</label>
        <label className="radioBtn"><input type="radio" data-price="450" value="300" name="gender" />
          <span className="checkmark"></span>300 мл</label>
      </form>
    )
  }
}