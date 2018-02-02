import {
	GET_FISH_PENDING,
	GET_FISH_SUCCESS,
	GET_FISH_FAILURE,
} from '../actions/types'

const initialState = {
	isLoading: true,
	errorMsg: false,
	fish: [],
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
			return {
				...state,
				isLoading: false,
				fish: action.fish,
			}
		default:
			return state
	}
}
