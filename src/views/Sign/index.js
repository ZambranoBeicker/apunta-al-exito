import React from "react"
import { Input, Box, Typography, Button } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"

const styles = ()=>{
	return createStyles({
	button:{
		width:"50%",
		borderRadius:0,
		color:"lightblue",
		textTransform:"capitalize",
	},
	buttonActive:{
		background: "lightblue",
		color:"white",
	},
	submitButton:{
		width:"100%",
		background:"lightblue",
		borderRadius:0,
		textTransform:"capitalize",
	},
	input:{
		padding: ".25rem .5rem !important",
		margin: ".5rem 0",
		border:"1px solid lightblue",
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
	title:{
		fontSize:"1.25rem",
		fontWeight:"bold",
	}
})

}

const SignTemplate = ({classes, title, submitText, leftButtonText, rightButtonText, inputInfo}) =>{

	return(
		<Box bgcolor="white" borderRadius=".75rem" p="1rem" width={4/12} mx="auto" mt="7rem">	
			<Box textAlign="center">
				<Typography className={classes.title} variant="h4">{title}</Typography>
			</Box>
			 <Box width="100%" display="flex" borderRadius=".5rem" border="3px solid lightblue" my="1rem" mx="auto">
				<Button className={classes.button + " " + classes.buttonActive}>{leftButtonText}</Button>
				<Button className={classes.button}>{rightButtonText}</Button>
			</Box>
			<Box>
				{inputInfo.map(({placeholder, type}, index)=>{
					return(
						<div key={index}>
							<Input className={classes.input} type={type}   fullWidth={true} placeholder={placeholder} />
						</div>
					)
				})}
			</Box>
			<Box my="1rem" width="100%" borderRadius=".5rem" color="white" border="3px solid lightblue">
				<Button className={classes.submitButton + " " + classes.buttonActive}>{submitText}</Button>
			</Box>
			
		</Box>
	)
} 


const SignUp = ({classes})=>{
	return(
		<SignTemplate classes={classes} 
			title="Registro" 
			submitText="Registrarme" 
			leftButtonText="Alumno" 
			rightButtonText="Tutor" 
			inputInfo={[{
				placeholder:"Nombre y apellido del alumno",
				type:"text"
			},
			{
				placeholder:"Nombre y apellido del apoderado",
				type:"text"
			},
			{
				placeholder:"RUT del apoderado",
				type:"text",
			},
			{
				placeholder:"Email",
				type:"email",
			},
			{
				placeholder:"Contraseña",
				type:"password",
			},
			{
				placeholder:"Repetir contraseña",
				type:"password",
			}
			]}/>
			
	)
}

export default withStyles(styles)(SignUp)
