import React from 'react';
import './index.css';
// import img from './img/image 23@2x.png'
import Qty from './Qty'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScaleRight } from "@fortawesome/free-solid-svg-icons";


export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 100,
      selected: true
    }
    this.click = this.click.bind(this)
    this.cart = []
    this.color = [
      {
        id: 0,
        title: 'Yellow',
        selected: false,
        key: 'color'
      },
      {
        id: 1,
        title: 'Red',
        selected: false,
        key: 'color'
      },
      {
        id: 2,
        title: 'Green ',
        selected: false,
        key: 'color'
      },
      {
        id: 3,
        title: 'Black',
        selected: false,
        key: 'color'
      },
      {
        id: 4,
        title: 'Pink',
        selected: false,
        key: 'color'
      },
      {
        id: 5,
        title: 'Orange',
        selected: false,
        key: 'color'
      }
    ]
  }
  click() {
    this.setState({ selected: !this.state.selected })
  }
  render() {
    return (
      <div className="productList">
        {this.props.productArr.map((item, i) => {
          return (<div className="productWrap" key={i}>
            <div className="imgBlock">
              <div className="goldenBtn">NEW</div>
              <div className="imgWrap">
                <img src={item.imgUrl} alt="" />
              </div>
              <button className="scaleBtn" onClick={this.click}>
                {this.state.selected
                  ? <FontAwesomeIcon icon={faBalanceScaleRight} size="1x" />
                  : <FontAwesomeIcon icon={faCheck} className="selectGr" size="1x" />}
              </button>
            </div>
            <div className="description">
              <h3>Consectetur</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quidem hic in eaque repellat reiciendis
              laudantium harum soluta culpa velit?</p>
            </div>
            <Qty colorList={this.color} cart={this.cart} itemInfo={item} />
          </div>)
        })}

      </div>
    )
  }
}