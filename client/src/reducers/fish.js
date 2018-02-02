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

		/**
			Overall, its a solid approach but a naive approach. Since you have an hour left,
			go ahead and branch off and see if you can get this with a "more solid" technique.

			let resultObject = {};

			const fishes = allFish.map(() => {
				map to proper format (eg weight)
			})).reduce((result, nextFish) => {
				reduce from a list to a object, grouped by species
			}, resultObject);


			const nextState = {
				...state,
				{...fishes}
			}
		*/
			const getWeight = ({ length, girth }) => length * girth * girth / 800
			const weightedFishArr = action.fishArr.map(f => ({
				...f,
				weight: getWeight(f),
			}))
			const sortedFishArr = weightedFishArr.sort((a, b) => b.weight - a.weight)
			const finalFishArr = sortedFishArr.map(f => ({
				...f,

				//techinical, but coerce to int
				weight: Math.floor(f.weight + 0.5), //rounding
			}))

			let newFish = { flathead: [], blue: [], channel: [] }
			//could use 3 filter methods, but one for loop is much faster
			for (let fish of finalFishArr) {
				newFish[fish.species].push(fish)
			}

			return {
				...state,
				isLoading: false,
				flathead: newFish.flathead,
				blue: newFish.blue,
				channel: newFish.channel,
			}
		default:
			return state
	}
}
