import React, {Component} from "react";
import ButtonAnswer from "./ButtonAnswer"

class ButtonListAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoodAnswer: false,
      simpleButton: true,
      isWrongAnswer: false,
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(value, key) {

    if (value === this.props.goodAnswer) {
      this.setState({
        isGoodAnswer: key,
        simpleButton: false,
      });
      setTimeout(() => {
        this.setState({
          isGoodAnswer: false,
          simpleButton: true,
        });
        this.props.newTask(true)
      }, 800);
    } else {
      this.setState({
        isWrongAnswer: key,
        simpleButton: false,
      });
      setTimeout(() => {
        this.setState({
          isWrongAnswer: false,
          simpleButton: true,
        });
        this.props.newTask(false)
      }, 500)
    }
  }


  render() {

    return (
      <ul className="p answer-block mb40">
        {this.props.arrayAnswer.map((value, i) => {
            if (value === this.props.goodAnswer) {
              return (
                <ButtonAnswer value={value}
                              key={i.toString()}
                              id={i.toString()}
                              simpleButton={this.state.simpleButton}
                              isGoodAnswer={i.toString() === this.state.isGoodAnswer}
                              onClickButton={this.onClickButton}
                              level={this.props.level}/>
              );
            }
            return (
              <ButtonAnswer value={value}
                            key={i.toString()}
                            id={i.toString()}
                            simpleButton={this.state.simpleButton}
                            isWrongAnswer={i.toString() === this.state.isWrongAnswer}
                            onClickButton={this.onClickButton}/>
            )
          }
        )}
      </ul>
    )

  }
}

export default ButtonListAnswer;