import React, { useState } from "react"
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
		},
		'@media screen and (min-width:1024px)':{
			ratingCount:{
				fontSize:"18px",
			}
		}
	})
}

const Rating = ({classes, starHeight = "1.5rem", isThereCount = true})=>{

	const [ratingCount, setRatingCount] = useState(3)
	return(
		<Box mt=".5rem" mb="1rem" width="60%" display="flex" justifyContent="space-between">
			<Box height={starHeight} width="17%">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box height={starHeight} width="17%">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box height={starHeight} width="17%">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box height={starHeight} width="17%">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box height={starHeight} width="17%">
				<img className={classes.star} src="./svg/star.svg" alt="Estrella de Puntajes"/>
			</Box>
			{ (isThereCount) && <Box className={classes.ratingCount} component="label">{`(${ratingCount})`}</Box> }	
		</Box>
	)
}

export default withStyles(styles)(Rating)
