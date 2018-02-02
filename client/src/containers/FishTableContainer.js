import { connect } from 'react-redux'
import FishTable from '../components/FishTable'
import React, { Component } from 'react'

class FishTableContainer extends Component {
	render() {
		const { fishArr, species } = this.props
		const getWeight = ({ length, girth }) => length * girth * girth / 800
		const filteredFishArr = species
			? fishArr.filter(f => f.species === species)
			: fishArr
		const weightedFishArr = filteredFishArr.map(f => ({
			...f,
			weight: getWeight(f),
		}))
		const sortedFishArr = weightedFishArr.sort((a, b) => b.weight - a.weight)
		const finalFishArr = sortedFishArr.map(f => ({
			...f,
			weight: Math.floor(f.weight + 0.5), //rounding
		}))
		return <FishTable fishArr={finalFishArr.slice(0, 5)} />
	}
}

const mapStateToProps = state => {
	return {
		fishArr: state.fish.fish,
	}
}

export default connect(mapStateToProps, null)(FishTableContainer)
