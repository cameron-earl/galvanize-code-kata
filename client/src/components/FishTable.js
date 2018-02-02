import React from 'react'
import PropTypes from 'prop-types'

function FishTable({ fish }) {
	console.log(JSON.stringify(fish, null, 2))
	return <div>{fish}</div>
}

FishTable.propTypes = {}

export default FishTable
