import React, {Component} from "react";
import ButtonLevel from "./ButtonLevel"
import classNames from "classnames/bind";
import Const from "../Const/Const";

class LevelGameList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event) {
    this.props.openField(event.target.id, this.props.typeGame);
  }

  render() {

    return (
      <ul className="main-menu-list main-menu-list_button p">
        {Const.levelGame.map((value, i) => {
          return (
            <ButtonLevel onClickButton={this.onClickButton}
                         value={value.level}
                         key={i.toString()}
                         id={value.levelId}
                         typeNewGame={this.props.typeNewGame}
                         fontSize="13px"/>
          );
        })
        }
      </ul>
    )

  }
}

export default LevelGameList;