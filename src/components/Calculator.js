import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import addElement from '../actions/addElement'
import clearElement from '../actions/clearElement'
import equal from '../actions/equal'
import {BUTTONS} from '../constants'
import './Calculator.css'

class Calculator extends PureComponent {
  addElement(element){
    this.props.addElement(element)
  }

  clearElement(){
    this.props.clearElement()
  }

  equal(value){
    this.props.equal(value)
  }
  render(){
    const { value } = this.props.buttons;
    return(
      <div className="Calculator">
        <div className="Value">
          <input type="text" value={value}  />
        </div>
        <div className="ButtonsContainer">
        {BUTTONS.map((element, key) => {
          if(element === "C"){
            return(
              <button className="Buttons Clear" key={key} onClick={() => this.clearElement()}>{element}</button>
            )
          } else if(element === "="){
            return(
              <button className="Buttons Equal" key={key} onClick={() => this.equal(value)}>{element}</button>
            )
          } else {
            return(
              <button className="Buttons" key={key} onClick={() => this.addElement(element)}>{element}</button>
            )
          }
        })}
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ buttons }) => ({ buttons })
const mapDispatchToProps = {addElement: addElement, clearElement: clearElement, equal: equal}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator)
