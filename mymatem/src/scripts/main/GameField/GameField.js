import React, {Component, Fragment} from "react";
import './GameField.css'
import RandomInteger from "../Const/RandomInteger/RandomInteger";
import ButtonListAnswer from "../Answer/ButtonListAnswer";
import Const from "../Const/Const";
import LevelDontWork from "../LevelDontWork/LevelDontWork";


class GameField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickThisButton: false,
      newTask: "0",
      goodAnswer: 0,
      wrongAnswer: 0,
    };


    this.number = {};
    this.hiddenNumber = this.hiddenNumber.bind(this);
    this.getArrayAnswer = this.getArrayAnswer.bind(this);
    this.randomAnswer = this.randomAnswer.bind(this);
    this.newTask = this.newTask.bind(this);
    this.levelDontWork = this.levelDontWork.bind(this);
    this.maxHiddenNumber = this.maxHiddenNumber.bind(this);
    this.compareRandom = this.compareRandom.bind(this);
  }

  newTask(answer) { // считает правильные и не правильные ответы и задает новый вопрос
    if (answer) {
      this.setState({
        newTask: 1 + +this.state.newTask,
        goodAnswer: this.state.goodAnswer + 1,
      });
    } else {
      this.setState({
          newTask: +this.state.newTask + 1,
          wrongAnswer: this.state.wrongAnswer + 1,
        }
      )
    }
  }

  hiddenNumber([min, max]) {
    let a = RandomInteger(min, max);
    let b = RandomInteger(min, max);
    let c = a + b;
    while (c > max) {
      a = RandomInteger(min, max);
      b = RandomInteger(min, max);
      c = a + b;
    }
    return {a, b, c};
  }

  randomAnswer(number) {

    let array = new Array(3);
    if (number <= 10) {
      let a = number + 1;
      if (a > 10) {
        a = number - 1
      }
      let b = number + 2;
      if (b > 10) {
        b = number - 2
      }
      let c = number - 2;
      if (c === b) c = number - 3;
      if (c < 0) {
        c = number + 3;
      }
      array = [a, b, c];
      return array;
    } else {
      let variant = RandomInteger(1, 6);
      switch (variant) {
        case 1:
          let a = number + RandomInteger(1, 2);
          let b = number + 10;
          let c = a + 10;
          array = [a, b, c];
          return array;
        case 2 :
          a = number + RandomInteger(1, 2);
          b = number - 10;
          c = a + 10;
          array = [a, b, c];
          return array;
        case 3 :
          a = number + RandomInteger(1, 2);
          b = number + 10;
          c = a - 10;
          array = [a, b, c];
          return array;
        case 4 :
          a = number - RandomInteger(1, 2);
          b = number + 10;
          c = a + 10;
          array = [a, b, c];
          return array;
        case 5 :
          a = number - RandomInteger(1, 2);
          b = number - 10;
          c = a + 10;
          array = [a, b, c];
          return array;
        case 6 :
          a = number - RandomInteger(1, 2);
          b = number + 10;
          c = a - 10;
          array = [a, b, c];
          return array;
      }
    }

  }

  getArrayAnswer(number) { // получаем массив случайных ответов
    let array = this.randomAnswer(number);
    array.push(this.number.c);
    console.log(array);
    return array;
  }

  levelDontWork() { // скрывает уровни которые не готовы
    if (this.props.typeGame !== Const.game1) {
      return true;
    }
    // else if (+this.props.typeLevel.levelId > 2) {
    //   return true;
    // }
  }

  maxHiddenNumber() {
    switch (+this.props.typeLevel.levelId) {
      case 1:
        return [1, 9];
      case 2:
        return [1, 99];
      case 3:
        return [1, 999];
      case 4:
        return [1, 99999];
      default:
        return [1, 10];
    }
  }

  compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  render() {
    let minMax = this.maxHiddenNumber();
    this.number = this.hiddenNumber(minMax);
    let arrayAnswer = this.getArrayAnswer(this.number.c);// создаем массив ответов
    arrayAnswer.sort(this.compareRandom);

    return (
      <section className="addition m p" style={{overflow: "hidden"}}>
        {this.levelDontWork() ? <LevelDontWork openField={this.props.openField}/> :
          <Fragment>
            <h2 className="m mainHeader pt10 mb10">{this.props.typeGame}</h2>
            {this.state.newTask &&
            <Fragment>
              <p className="task mb20">
                {this.number.a} + {this.number.b} = ???</p>
              <section className="text-answer  absolute" style={{top: -7 + "%", left: 72 + "%"}}>
                <p className="m"> Всего: <span>&ensp;&ensp;&ensp;&ensp;&ensp;&emsp; {this.state.newTask}</span>
                </p>
                <p className="m">Правильно: <span
                  className="text-answer_true">&ensp;&ensp; {this.state.goodAnswer}</span></p>
                <p className="m">Неправильно:&ensp;
                  <span className="text-answer_wrong"> {this.state.wrongAnswer}</span></p>
              </section>
              <ButtonListAnswer goodAnswer={this.number.c} arrayAnswer={arrayAnswer}
                                newTask={this.newTask}/>
            </Fragment>
            }
            <button className="mar-bot-small" onClick={(event) => this.props.openField(event)}
                    id={Const.mainMenu}>Главное Меню
            </button>
          </Fragment>
        }
      </section>
    );
  }

}

export default GameField;