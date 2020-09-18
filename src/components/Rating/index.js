import React, { useState, useEffect } from "react"
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
		displayDisable:{
			display:"none",
		},
		'@media screen and (min-width:1024px)':{
			ratingCount:{
				fontSize:"18px",
			}
		}
	})
}

const Rating = ({classes, wrapperMargin = ".5rem 0 1rem 0", wrapperWidth = "60%", starHeight = "1.5rem", isThereCount = true})=>{

	const [ratingCount, setRatingCount] = useState(3)
	const [starState, setStarState] = useState(false)

	const switchStars = state =>{
		if(state){
			return classes.displayDisable 
		}else{
			return ""
		} 
	} 


	const oppositeSwitchStars = state =>{
		if(state){
			return ""
		}else{
			return classes.displayDisable 
		} 
	}	
	 


	//const svgImg = document.querySelector(classes.star).getSVGDocument().getElementById("starSvg")
	return(
		<Box m={wrapperMargin} width={wrapperWidth} display="flex" justifyContent="space-between">
			<Box onClick={()=>{setStarState(state => !state)}} display="flex" height={starHeight} width="17%">
				<img className={classes.star + " " + switchStars(starState)} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + oppositeSwitchStars(starState)} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box display="flex" height={starHeight} width="17%">
				<img className={classes.star} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + classes.displayDisable} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box display="flex" height={starHeight} width="17%">
				<img className={classes.star} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + classes.displayDisable} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box display="flex" height={starHeight} width="17%">
				<img className={classes.star} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + classes.displayDisable} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
			</Box>
			<Box display="flex" height={starHeight} width="17%">
				<img className={classes.star} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + classes.displayDisable} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
			</Box>
			{ (isThereCount) && <Box className={classes.ratingCount} component="label">{`(${ratingCount})`}</Box> }	
		</Box>
	)
}

export default withStyles(styles)(Rating)
