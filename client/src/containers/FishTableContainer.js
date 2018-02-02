import { connect } from 'react-redux'
import FishTable from '../components/FishTable'
import React, { Component } from 'react'

class FishTableContainer extends Component {
	render = () => (
		<FishTable fishArr={this.props.fishArr} species={this.props.species} />
	)
}

const mapStateToProps = state => {
	return {
		fishArr: state.fish.fish,
	}
}

export default connect(mapStateToProps, null)(FishTableContainer)
