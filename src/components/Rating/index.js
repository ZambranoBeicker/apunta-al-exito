import React from "react"
import { Box } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core"

const styles = () =>{
	return createStyles({
		star:{
			maxHeight:"100%",
			display:"block",
			height:"auto",
			maxWidth:"100%",
			cursor:"pointer",
		}
	})
}

const Rating = ({classes})=>{

	return(
		<Box mt=".5rem" mb="1rem">
			<Box height="2rem">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
		</Box>
	)
}

export default withStyles(styles)(Rating)
