import React from "react"
import { Link, Input, Box, Typography, Button } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"

const styles = ()=>{
	return createStyles({
	button:{
		width:"50%",
		borderRadius:0,
		color:"#46aaf0",
		textTransform:"capitalize",
		transition: ".4s",
		'&:hover':{
			color:"#46aaf0",
		  transition: ".4s",
		}
	},
	buttonActive:{
		background: "#46aaf0",
		color:"white",
	},
	submitButton:{
		width:"100%",
		background:"#46aaf0",
		borderRadius:0,
		textTransform:"capitalize",
		transition: ".4s",
		'&:hover':{
			color:"#46aaf0",
			transition: ".4s",
		}
	},
	link:{
		cursor:"pointer",
	},
	input:{
		padding: ".25rem .5rem !important",
		margin: ".5rem 0",
		border:"1px solid #46aaf0",
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
	},
})

}

const SignTemplate = ({classes, isLogin = false, title, submitText, leftButtonText, rightButtonText, inputInfo}) =>{

	return(
		<Box bgcolor="white" borderRadius=".75rem" p="1rem" width={4/12} mx="auto" mt="7rem">	
			<Box textAlign="center">
				<Typography className={classes.title} variant="h4">{title}</Typography>
			</Box>
			 <Box height="2.5rem" width="100%" display="flex" borderRadius=".5rem" border="3px solid #46aaf0" my="1rem" mx="auto">
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
			<Box height="2.5rem" my="1rem" width="100%" borderRadius=".5rem" color="white" border="3px solid #46aaf0">
				<Button className={classes.submitButton + " " + classes.buttonActive}>{submitText}</Button>
			</Box>
			{
				isLogin &&
				<Box my="1rem" fontSize=".75rem" textAlign="center" width="100%" color="#46aaf0">
					<Link className={classes.link}>Olvidaste tu contraseña?</Link>
				</Box>
			}
				
			
		</Box>
	)
} 


const SignUpPage = ({classes})=>{
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

const SignInPage = ({classes})=>{
	return(
		<SignTemplate classes={classes} 
			title="Inicio de Sesión" 
			submitText="Ingresar" 
			leftButtonText="Alumno" 
			rightButtonText="Tutor"
			isLogin={true}
			inputInfo={[{
				placeholder:"Email",
				type:"email"
			},
			{
				placeholder:"Contraseña",
				type:"password"
			},	
			]}/>
			
	)
}



const SignIn = withStyles(styles)(SignInPage)
const SignUp = withStyles(styles)(SignUpPage) 

export { SignIn, SignUp }
