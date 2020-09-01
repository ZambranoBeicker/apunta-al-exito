import React from "react"
import { Input, Box, Typography, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = {
	button:{
		width:"50%",
		borderRadius:0,
	},
	buttonActive:{
		background: "blue",
		color:"white",
	}
}


const SignUp = ({classes}) =>{

	return(
		<Box bgcolor="white" borderRadius=".25rem" p="1rem" width={5/12} mx="auto" mt="7rem">	
			<Box textAlign="center">
				<Typography variant="h4">Registro</Typography>
			</Box>
			 <Box width="100%" display="flex" borderRadius=".25rem" border="3px solid blue" my="1rem" mx="auto">
				<Button className={classes.button + " " + classes.buttonActive}>Alumno</Button>
				<Button className={classes.button}>Tutor</Button>
			</Box>
			<Box>
				<Input fullWidth={true} placeholder="Nombre y apellido" />
				<Input fullWidth={true} placeholder="Nombre y apellido" />
				<Input fullWidth={true} placeholder="Nombre y apellido" />
				<Input fullWidth={true} placeholder="Nombre y apellido" />
				<Input fullWidth={true} placeholder="Nombre y apellido" />
				<Input fullWidth={true} placeholder="Nombre y apellido" />
			</Box>
		</Box>
	)
}

export default withStyles(styles)(SignUp)
