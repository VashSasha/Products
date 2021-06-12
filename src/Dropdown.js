import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectClass: '',
      isListOpen: false,
      headerTitle: this.props.title
    }
    this.toggleList = this.toggleList.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }
  toggleList() {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen
    }))
  }
  selectItem(item) {
    this.setState({ headerTitle: item.title, isListOpen: false, selected: true })
    this.props.getColor(item.title)
  }
  render() {
    const { isListOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper" >
        <div
          className="dd-header"
          onClick={this.toggleList}
        >
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen
            ? <FontAwesomeIcon icon={faAngleUp} size="1x" />
            : <FontAwesomeIcon icon={faAngleDown} size="1x" />}
        </div>
        {isListOpen && (
          <div role="list" className="dd-list" onMouseLeave={this.toggleList}>
            {this.props.colorList.map((item) => (
              <button type="button" className="dd-list-item" key={item.id} onClick={() => this.selectItem(item)}
              >
                {item.title}
                {item.selected && <FontAwesomeIcon icon={faCheck} />}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }
}
