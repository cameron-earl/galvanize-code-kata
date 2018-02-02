import React from 'react'
import PropTypes from 'prop-types'

function FishTable({ fishArr, species }) {
	const getWeight = ({ length, girth }) => length * girth * girth / 800
	const filteredFishArr = species
		? fishArr.filter(f => f.species === species)
		: fishArr
	const weightedFishArr = filteredFishArr.map(f => ({
		...f,
		weight: getWeight(f),
	}))
	const sortedFishArr = weightedFishArr.sort((a, b) => a.weight - b.weight)
	return fishArr.length ? (
		<div>{JSON.stringify(sortedFishArr, null, 2)}</div>
	) : (
		<div>'loading...'</div>
	)
}

FishTable.propTypes = {
	fishArr: PropTypes.array.isRequired,
	species: PropTypes.string,
}

export default FishTable
