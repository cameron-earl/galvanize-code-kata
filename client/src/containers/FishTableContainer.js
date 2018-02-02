import { connect } from 'react-redux'
import FishTable from '../components/FishTable'
import React, { Component } from 'react'

class FishTableContainer extends Component {
	render() {
		const { fish, species } = this.props
		return <FishTable fishArr={fish[species].slice(0, 5)} />
	}
}

const mapStateToProps = state => {
	return {
		fish: state.fish,
	}
}

export default connect(mapStateToProps, null)(FishTableContainer)
