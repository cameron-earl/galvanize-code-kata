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
			dispatch({ type: GET_FISH_SUCCESS, schedule: response.data })
		} catch (error) {
			let errorMsg
			dispatch({ type: GET_FISH_FAILURE, errorMsg: errorMsg })
			history.push('/dashboard')
		}
	}
}
