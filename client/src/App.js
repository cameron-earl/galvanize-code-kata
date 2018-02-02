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
		const species = ['blue', 'flathead', 'channel']
		const capitalize = str => str[0].toUpperCase() + str.slice(1)

		let tables = species.map((s, i) => (
			<div key={i}>
				<h3>{capitalize(s)} Catfish</h3>
				<FishTableContainer species={s} />
			</div>
		))
		return (
			<div className="App">
				<h1>Fish Tournament</h1>
				{tables}
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
