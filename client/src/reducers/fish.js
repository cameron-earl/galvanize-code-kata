import {
	GET_FISH_PENDING,
	GET_FISH_SUCCESS,
	GET_FISH_FAILURE,
} from '../actions/types'

const initialState = {
	isLoading: true,
	errorMsg: false,
	flathead: [],
	blue: [],
	channel: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FISH_PENDING:
			return { ...state, isLoading: true, errorMsg: false }
		case GET_FISH_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMsg: action.errorMsg,
			}
		case GET_FISH_SUCCESS:
			const getWeight = ({ length, girth }) => length * girth * girth / 800

			let nextState = action.fishArr
				.map(f => ({ ...f, weight: getWeight(f) }))
				.sort((a, b) => b.weight - a.weight)
				.map(f => ({ ...f, weight: Math.round(f.weight) }))
				.reduce(
					(obj, f) => {
						obj[f.species].push(f)
						return obj
					},
					{ flathead: [], blue: [], channel: [] },
				)
			console.log('BARK!', nextState)
			return {
				...state,
				isLoading: false,
				...nextState,
			}
		default:
			return state
	}
}
