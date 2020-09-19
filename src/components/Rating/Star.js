import React, { useState, useEffect} from "react"
import { Box } from "@material-ui/core"
import { withStyles, createStyles } from "@material-ui/core/styles"

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
	})
}

const Star = ({classes, height, setCount, count, position})=>{

	const [starState, setStarState] = useState(true)

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


	return (
		<Box 
			onClick={()=>{
				if(count >= position){
					setStarState(false)
					setCount(position)
				}else if(count < position){
					setStarState(true)
				}
			}} 

			display="flex" 
			height={height} 
			width="17%">
				<img className={classes.star + " " + switchStars(starState)} src="./svg/starActive.svg" alt="Estrella de Puntajes"/>
				<img className={classes.star + " " + oppositeSwitchStars(starState)} src="./svg/starDisable.svg" alt="Estrella de Puntajes"/>
		</Box>
	)
}

export default withStyles(styles)(Star) 
