import React, {Component} from "react"
import Const from "../main/Const/Const"

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    this.props.openField(event.target.id, event.target.id);
  }

  render() {
    return (
      <section className="main-field addition">
        <h2 className="mainHeader m mb40 pt40">Выбирите тип игры</h2>
        <nav>
          <ul className="main-menu-list main-menu-list_button p">
            <li className="mar-bot-small">
              <button className="button-main" id={Const.mainGame1}  onClick={this.buttonClick}>{Const.mainGame1}</button>
            </li>
            <li className="mar-bot-small">
            <button className="button-main" id={Const.mainGame2} onClick={this.buttonClick}>{Const.mainGame2}</button>
            </li>
          </ul>
        </nav>
      </section>
    )
  }

}

export default MainMenu;