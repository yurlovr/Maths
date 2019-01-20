import React, {Component, Fragment} from "react";
import Const from "../Const/Const";


class LevelDontWork extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <Fragment>
        <p className="task mb50 pt40" style={{fontSize: 16}}>Данный уровень находиться в разработке. Скоро все будет
          )))</p>
        <button className="mar-bot-small" onClick={(event) => this.props.openField(event)}
                id={Const.mainMenu}>Главное Меню
        </button>
      </Fragment>
    )

  }
}

export default LevelDontWork;