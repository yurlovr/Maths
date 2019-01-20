import React, {Component, Fragment} from "react"
import './main.css'
import Const from "./Const/Const";
import LevelGameList from "./LevelGame/LevelGameList";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      levelGame: false,
      typeNewGame:"",
    };

    // this.buttonClick = this.buttonClick.bind(this);
    this.chooseLevelGame = this.chooseLevelGame.bind(this);
  }

  // buttonClick(event) {
  //   this.props.onClick(event.target.id);
  // }

  chooseLevelGame(event){
    this.setState({
      levelGame: !this.state.levelGame,
      typeNewGame: event.target.id,

    });
  }

  render() {
    return (


    <section className="main-field addition">
      {!this.state.levelGame ?
     <Fragment>
      <h2 className="mainHeader m mb40 pt40">Выбирите занятие</h2>
      <nav>
        <ul className="main-menu-list main-menu-list_button p">
          <li className="mar-bot-small">
            <button className="button-main" id="game1" onClick={this.chooseLevelGame}>{Const.game1}</button>
          </li>
          <li className="mar-bot-small">
            <button className="button-main" id="game2" onClick={this.chooseLevelGame}>{Const.game2}</button>
          </li>
        </ul>
      </nav>
     </Fragment>
        :
        <Fragment>
          <h2 className="mainHeader m mb40 pt40">Выберите уровень</h2>
          <LevelGameList openField={this.props.openField} typeGame={this.state.typeNewGame} />
        </Fragment>}


    </section>
    )
  }

}

export default Main;
//onClick={this.buttonClick}