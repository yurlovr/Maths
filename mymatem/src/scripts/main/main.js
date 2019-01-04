import React, {Component} from "react"
import './main.css'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2 className="mainHeader">Выбирите занятие</h2>
        <nav>
          <ul>
            <li>
              <button>Сложение</button>
            </li>
            <li>
              <button>Вычитание</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default Main;