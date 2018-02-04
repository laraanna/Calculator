import React, {PureComponent} from 'react'
import {BUTTONS} from '../constants'

class Calculator extends PureComponent {
  render(){
    return(
      <div className="Calculator">
        <h1> Calculator </h1>
        <div className="Value">
          <input type="text"  />
        </div>
        <div className="ButtonsContainer">
        {BUTTONS.map((button, key) =>
          <button className="Buttons" key={key}>{button}</button>
        )}

        </div>
      </div>
    )
  }

}

export default Calculator
