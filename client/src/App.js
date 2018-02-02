import React from 'react'
// import MainView from './components/MainView'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'

function App({ fish, getAllFish }) {
	getAllFish()

	return (
		<div className="App">
			<h1>Fish Tournament</h1>
			{JSON.stringify(fish)}
		</div>
	)
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
