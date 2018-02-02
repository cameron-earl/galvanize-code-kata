import React, { Component } from 'react'
import FishTableContainer from './containers/FishTableContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'

class App extends Component {
	componentDidMount() {
		this.props.getAllFish()
	}

	render = () => {
		const species = 'blue'
		return (
			<div className="App">
				<h1>Fish Tournament</h1>
				<FishTableContainer species={species} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	fish: state.fish.fish,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getAllFish: actions.getAllFish,
		},
		dispatch,
	)

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default SmartApp
