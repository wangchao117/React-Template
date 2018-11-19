import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

// 引入样式
import {
  ChildWrapper,
} from './style'

class Childpage extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    return (
      <ChildWrapper onClick={this._handleClick}>
        Childpage
      </ChildWrapper>
    );
  }
  _handleClick() {
    this.props.changeChildData();
  }
}

const mapState = (state) => ({
  // 获取state
  
})

const mapDispatch = (dispatch) => ({
  // 派发state
	changeChildData() {
		dispatch(actionCreators.asyncGet());
	}
});

export default connect(mapState, mapDispatch)(Childpage);
