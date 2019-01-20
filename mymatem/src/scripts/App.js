import React, {Component, Fragment} from 'react';
import '../css/App.css';
import Main from '../scripts/main/main'
import GameField from './main/GameField/GameField'
import Const from './main/Const/Const'
import MainMenu from "./MainMenu/MainMenu";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTypeGame: false,
      openGame: false,
      typeGame: "",
      typeLevel: "",
      onTime: false,
    };
    this.openField = this.openField.bind(this);
  }

  openField(id, type) {
    if (type) {

      switch (id) {

        case Const.mainGame1  :
          this.setState({
            openTypeGame: !this.state.openTypeGame,
            typeGame: Const.mainGame1
          });
          break;

        case Const.mainGame2 :
          this.setState({
            openTypeGame: !this.state.openTypeGame,
            typeGame: Const.mainGame2,
            onTime: true,
          });
          break;
        case Const.game1:
          this.setState({
            openGame: !this.state.openGame,
            openTypeGame: !this.state.openTypeGame,
            typeGame: Const.game1,
          });
          break;
        case Const.game2:
          this.setState({
            openGame: !this.state.openGame,
            openTypeGame: !this.state.openTypeGame,
            typeGame: Const.game2,
          });
          break;

        case Const.levelGame[id - 1].levelId:
          this.setState({
            openGame: !this.state.openGame,
            openTypeGame: true,
            typeGame: Const[type],
            typeLevel: Const.levelGame[id - 1]
          });
          break;
        default:
          this.setState({
            openTypeGame: false,
            openGame: false,
            typeGame: "",
            typeLevel: "",
            onTime: false,
          });
          break;
      }
    } else {
      this.setState({
        openTypeGame: false,
        openGame: false,
        typeGame: "",
        typeLevel: "",
        onTime: false
      });
    }
  };

  render() {
    return (
      <Fragment>
        {/*<Header/>*/}
        {!this.state.openTypeGame && !this.state.openGame &&
        <MainMenu openField={this.openField} typeGame={Const.mainMenu}/>}
        {this.state.openTypeGame && !this.state.openGame &&
        <Main openField={this.openField} typeGame={this.state.typeGame}/>}
        {this.state.openGame && this.state.openTypeGame &&
        <GameField openField={this.openField} typeGame={this.state.typeGame} quantityButton={4}
                   typeLevel={this.state.typeLevel} onTime={this.state.onTime}/>}
        {/*<Footer/>*/}
      </Fragment>
    );
  }
}

export default App;
