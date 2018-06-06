import React from 'react';
import { connect } from 'react-redux';
import Flexi from './flexi';
import '../styles/main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.onFlexiSubmit.bind(this);
  }
  onFlexiSubmit(event, formData) {
    alert(JSON.stringify(formData));
  }
  render() {
    return (<div className="main">
      <Flexi onSubmit={this.onFlexiSubmit} config={this.props.main.config}/>
    </div>);
  }
}

const mapState = (store) => ({
  main: store.main
})
const mapDispatch = {}
export default connect(mapState, mapDispatch)(Main);
