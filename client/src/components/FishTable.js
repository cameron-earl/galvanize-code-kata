import React from 'react'
import PropTypes from 'prop-types'

function FishTable({ fishArr }) {
	return fishArr.length ? (
		<div>{JSON.stringify(fishArr, null, 2)}</div>
	) : (
		<div>'loading...'</div>
	)
}

FishTable.propTypes = {
	fishArr: PropTypes.array.isRequired,
}

export default FishTable
