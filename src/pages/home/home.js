import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

// 引入样式
import {
  HomeWrapper,
} from './style'

class Home extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    return (
      <HomeWrapper onClick={this._handleClick}>
        Home {this.props._state}
      </HomeWrapper>
    );
  }

  _handleClick() {
    console.log(this.props._state)
    this.props.changeHomeData();
  }

}

const mapState = (state) => ({
	state: state.getIn(['home', 'home_state'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.asyncGet());
	}
});

export default connect(mapState, mapDispatch)(Home);
