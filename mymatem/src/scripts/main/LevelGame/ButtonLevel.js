import React, {Component} from "react";
import classNames from "classnames/bind";

class ButtonLevel extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <li className={classNames("mar-bot-small")} key={this.props.id}>
        <button className={classNames("button-main", "p-l-r")}
                style={{fontSize: this.props.fontSize}}
                onClick={(event) => this.props.onClickButton(event)}
                id={this.props.id}>{this.props.value}</button>
      </li>
    )

  }
}

export default ButtonLevel;