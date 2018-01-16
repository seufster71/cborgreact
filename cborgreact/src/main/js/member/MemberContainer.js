import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appPrefActions from '../core/common/appPrefActions';


class MemberContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		console.log('member did mount.');
		this.props.actions.initMember();
	}

  render() {
      return (<div> Member Page </div>);
  }
}

MemberContainer.propTypes = {
	appPrefs: PropTypes.object,
	lang: PropTypes.string,
	appGlobal: PropTypes.object,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(appPrefActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(MemberContainer);
