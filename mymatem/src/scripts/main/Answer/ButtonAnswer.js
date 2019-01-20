import React, {Component} from "react";
import classNames from "classnames/bind";
import sound from "../../../sound/Sound_05952.mp3"

class ButtonAnswer extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <li key={this.props.id}>
        <button className={classNames({
            "button-answer_simple": this.props.simpleButton,
            "button-answer_true": this.props.isGoodAnswer,
            "button-answer_false": this.props.isWrongAnswer
          },
          "button-answer",)}
                onClick={() => {new Audio(sound).play(); this.props.onClickButton(this.props.value, this.props.id)}}
                id={this.props.id}>
          {this.props.value}
        </button>
      </li>
    )

  }
}

export default ButtonAnswer;