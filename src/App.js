import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from './store/action/countAction';

export class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props);
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div className='app'>
        <div>
          <h1>{count}</h1>
        <button onClick={() => incrementCount()} >Increment</button>
        <button onClick={() => decrementCount()} >Decrement</button>
        <div>
          <button onClick={() => resetCount()} >Reset</button>
        </div>
        </div>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state){
  const { count } = state;
  return {
    count : count.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount()),
    resetCount: () => dispatch(resetCount())
  }
}