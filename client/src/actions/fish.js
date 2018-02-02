import axios from 'axios'
import {
	API_URL,
	GET_FISH_PENDING,
	GET_FISH_SUCCESS,
	GET_FISH_FAILURE,
} from './types'

const url = API_URL + '/catfish'

export const getAllFish = () => {
	return async dispatch => {
		dispatch({ type: GET_FISH_PENDING })
		try {
			const response = await axios.get(url)
			dispatch({ type: GET_FISH_SUCCESS, fish: response.data })
		} catch (error) {
			let errorMsg = "Couldn't get fish from API"
			dispatch({ type: GET_FISH_FAILURE, errorMsg: errorMsg })
		}
	}
}
