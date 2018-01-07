import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memberActions from './memberActions';

class MemberContainer extends Component {
	constructor(props) {
		super(props);

	}

  render() {
      return (<div> Member Page </div>);
  }
}
MemberContainer.propTypes = {
	appPrefs: PropTypes.object.isRequired,
	menus: PropTypes.object,
	lang: PropTypes.string,
	appGlobal: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(memberActions,dispatch) };
}

export default connect(mapStateToProps)(MemberContainer);
