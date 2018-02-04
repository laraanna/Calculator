import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import addElement from '../actions/addElement'
import {BUTTONS} from '../constants'
import './Calculator.css'

class Calculator extends PureComponent {
  addElement(element){
    this.props.addElement(element)
  }
  render(){
    const { value } = this.props.buttons;
    return(
      <div className="Calculator">
        <h1> Calculator </h1>
        <div className="Value">
          <input type="text" value={value}  />
        </div>
        <div className="ButtonsContainer">
        {BUTTONS.map((element, key) =>
          <button className="Buttons" key={key} onClick={() => this.addElement(element)}>{element}</button>
        )}
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ buttons }) => ({ buttons })
const mapDispatchToProps = {addElement: addElement}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator)
