import React from "react"
import { Input } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"

const styles = ()=>{
	return createStyles({
		input:{
		padding: ".25rem .5rem !important",
		margin: ".5rem 0",
		border:"1px solid #46aaf0",
		fontSize:".875rem",
		borderRadius: ".5rem",
		"&::before":{
			border:0,
		},
		"&::after":{
			border:0,
		},
		"&:hover:not(.Mui-disabled)::before":{
			borderBottom:0,
		},
		 
	},
	})
} 


const InputTemplate = ({classes, placeholder, type, onChange, className = ""})=>{

	return (
		<Input fullWidth={true} placeholder={placeholder} onChange={onChange} className={classes.input + " " + className} type={type}/>
	)
}

const GenericInput = withStyles(styles)(InputTemplate)

export default GenericInput
