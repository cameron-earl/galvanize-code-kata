import { connect } from 'react-redux'
import { getAllFish } from '../actions'
import FishTable from '../components/FishTable'

const mapStateToProps = state => {
	return {
		fish: state.fish,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllFish: () => {
			dispatch(getAllFish())
		},
	}
}

const FishTableContainer = connect(mapStateToProps, mapDispatchToProps)(
	FishTable,
)

export default FishTableContainer
