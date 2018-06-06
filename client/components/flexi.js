import React from 'react';
import { connect } from 'react-redux';
import '../styles/flexi.scss';

class Flexi extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {}
    };
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    let tempState = this.state;
    for(let item of this.props.config.items) {
      if(!tempState.form.hasOwnProperty(item.type)) {
        tempState.form[item.type] = {value: ''};
      }
    }
    this.setState(tempState);
  }
  /*For different kinds of inputs we may need different function. But for current scenario, one function will suffice.*/
  handleInput(event, type) {
    let tempState = this.state;
    tempState.form[type].value = event.target.value;
    this.setState(tempState);
  }
  render() {
    return (<div className="flexi">
      <form className="form" onSubmit={(event)=>{this.props.onSubmit(event, this.state.form)}}>{
        this.props.config.items.map((item, index) => {
          switch(item.type) {
            case 'TextField':
              return (<div key={index} className="text-input">
                <label>{item.label}<input type="text" name={item.name} onChange={(event) => {this.handleInput(event, item.type)}}/></label>
              </div>)
            break;
            case 'DropDown':
              return (<div key={index} className="drop-down">
                <label>{item.label}</label>
                <select onChange={(event) => {this.handleInput(event, item.type)}}>
                  <option disabled selected value> -- select an option -- </option>{
                    item.values.map((opt, ind) => (<option key={ind} value={opt}>{opt}</option>))
                  }
                </select>
              </div>)
            break;
          }
        })
      }
      <input type="submit" value="Submit"/>
    </form>
    </div>);
  }
}

const mapState = (store) => ({
  flexi: store.flexi
})
const mapDispatch = {}
export default connect(mapState, mapDispatch)(Flexi);
