import React from 'react';
import './index.css';
import Dropdown from './Dropdown';
import Size from './Size'


export default class Qty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qty: 1,
      total: 200,
      price: 200,
      data: {},
      className: "goldenBtn"
    }
    this.cart = this.props.cart
    this.DecreaseItem = this.DecreaseItem.bind(this)
    this.IncrementItem = this.IncrementItem.bind(this)
    this.getSeize = this.getSeize.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.getColor = this.getColor.bind(this)
    // this.getSeize()
  }
  checkQty(num) {
    if (num < 1) return num = 1
    if (num > 10) return num = 10
    return num
  }
  DecreaseItem() {
    this.checkQty({ qty: this.checkQty(this.state.qty + 1) })
  }
  IncrementItem() {
    this.setState({ qty: this.checkQty(this.state.qty + 1) })
  }

  getSeize(data) {
    const item = this.props.itemInfo;
    this.setState({ data: item })
    this.setState({ size: data.selectedOption, price: data.price })
  }
  getColor(data) {
    this.setState({ color: data })
  }
  addToCart(state) {
    let className = this.state.className === "goldenBtn" ? "goldenBtn activeGolden" : "goldenBtn";
    this.setState({ className: className })
    console.log(state)
    this.cart.push(state)
    console.log(this.cart)
  }


  render() {
    console.log(this.state)
    return (
      <div className="selectionBlock">
        <div className="dd-section">
          <Dropdown
            title="Color"
            colorList={this.props.colorList} getColor={this.getColor} />
          <div className="total">{this.state.qty * this.state.price} грн</div>
        </div>
        <Size checkedSize={this.getSeize} />
        <div className="purchase">
          <div className="qtyWrap">
            <div className="qtyBtn" onClick={this.DecreaseItem}>-</div>
            <div >{this.state.qty}</div>
            <div className="qtyBtn" onClick={this.IncrementItem}>+</div>
          </div >
          <button className={this.state.className} onClick={() => this.addToCart(this.state)}>КУПИТЬ</button>
        </div>
      </div>
    )
  }
}