import React from "react"
import { Input, Box, Typography, Button } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"

const styles = ()=>{
	return createStyles({
	button:{
		width:"50%",
		borderRadius:0,
		color:"lightblue",
	},
	buttonActive:{
		background: "lightblue",
		color:"white",
	},
	submitButton:{
		width:"100%",
		background:"lightblue",
		borderRadius:0,
	},
	input:{
		padding: ".5rem .5rem !important",
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

const SignUp = ({classes}) =>{

	return(
		<Box bgcolor="white" borderRadius=".25rem" p="1rem" width={4/12} mx="auto" mt="7rem">	
			<Box textAlign="center">
				<Typography className={classes.title} variant="h4">Registro</Typography>
			</Box>
			 <Box width="100%" display="flex" borderRadius=".25rem" border="3px solid lightblue" my="1rem" mx="auto">
				<Button className={classes.button + " " + classes.buttonActive}>Alumno</Button>
				<Button className={classes.button}>Tutor</Button>
			</Box>
			<Box>
				<Input className={classes.input}   fullWidth={true} placeholder="Nombre y apellido" />
				<Input className={classes.input}   fullWidth={true} placeholder="Nombre y apellido" />
				<Input className={classes.input}   fullWidth={true} placeholder="Nombre y apellido" />
				<Input className={classes.input} type="email"   fullWidth={true} placeholder="Nombre y apellido" />
				<Input className={classes.input}   fullWidth={true} placeholder="Nombre y apellido" />
				<Input className={classes.input}   fullWidth={true} placeholder="Nombre y apellido" />
			</Box>
			<Box my="1rem" width="100%" borderRadius=".25rem" color="white" border="3px solid lightblue">
				<Button className={classes.submitButton + " " + classes.buttonActive}>Registrarme</Button>
			</Box>
			
		</Box>
	)
}

export default withStyles(styles)(SignUp)
