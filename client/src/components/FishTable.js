import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
})

function FishTable({ fishArr, classes }) {
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Ranking</TableCell>
						<TableCell>Angler</TableCell>
						<TableCell numeric>Weight</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{fishArr.map((f, i) => {
						return (
							<TableRow key={f.id}>
								<TableCell>{i + 1}</TableCell>
								<TableCell>{f.angler}</TableCell>
								<TableCell numeric>{f.weight}</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</Paper>
	)
}

FishTable.propTypes = {
	fishArr: PropTypes.array.isRequired,
}

export default withStyles(styles)(FishTable)
