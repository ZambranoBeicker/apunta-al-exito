import React, { useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core"
import Star from "./Star.js"


const styles = () =>{
	return createStyles({
		'@media screen and (min-width:1024px)':{
			ratingCount:{
				fontSize:"18px",
			}
		}
	})
}

const Rating = ({classes, wrapperMargin = ".5rem 0 1rem 0", wrapperWidth = "60%", starHeight = "1.5rem", isThereCount = true})=>{

	const [ratingCount, setRatingCount] = useState(3)

	return(
		<Box m={wrapperMargin} width={wrapperWidth} display="flex" justifyContent="space-between">
			<Star height={starHeight} />
			<Star height={starHeight} />
			<Star height={starHeight} />
			<Star height={starHeight} />
			<Star height={starHeight} />
			{ (isThereCount) && <Box className={classes.ratingCount} component="label">{`(${ratingCount})`}</Box> }	
		</Box>
	)
}

export default withStyles(styles)(Rating)
