import React,{ useState, useEffect } from "react"
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
		fontSize:".75rem"
	},
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
	title:{
		fontSize:"1rem",
		fontWeight:"bold",
	},
	'@media (min-width: 1024px)':{
		input:{
			fontSize:"1rem",
		},
		link:{
			fontSize:".875rem"
		},
		title:{
			fontSize:"1.25rem"
		},
	}
})}

const SignTemplate = ({classes, isNotAdmin = true, isLogin = false, title, submitText, leftButtonText, rightButtonText, inputInfo}) =>{

	const [values, setValues] = useState(inputInfo.map(()=> false))
	const [submitDisable, setSubmitDisable] = useState(false)

	useEffect(()=>{
		setSubmitDisable(values.every(value => value === true))
	},[values])

	return(
		<Box width="90%" maxWidth={400} bgcolor="white" borderRadius=".75rem" p="1rem" mx="auto" mt="7rem" mb="2rem">	
			<Box marginBottom=".25rem" textAlign="center">
				<Typography className={classes.title} variant="h4">{title}</Typography>
			</Box>
			{
			isNotAdmin &&
			<Box height="2.5rem" width="100%" display="flex" borderRadius=".5rem" border="3px solid #46aaf0" my="1rem" mx="auto">
				<Button className={classes.button + " " + classes.buttonActive}>{leftButtonText}</Button>
				<Button className={classes.button}>{rightButtonText}</Button>
			</Box>
			}
			 
			<Box>
				{inputInfo.map(({placeholder, type}, index)=>{
					return(
						<div key={index}>
							<Input 
								className={classes.input} type={type}
								fullWidth={true} 
								placeholder={placeholder} 
						onChange={(e)=>{
							if(e.target.value.length >=3){
								setValues(values.map((v,i)=> (i === index) ? true : v))
							}
						}}/>
						</div>
					)
				})}
			</Box>
			<Box height="2.5rem" display="flex" my="1rem" width="100%" borderRadius=".5rem" color="white" border="3px solid #46aaf0">
				<Button disabled={!submitDisable} className={classes.submitButton + " " + classes.buttonActive}>{submitText}</Button>
			</Box>
			{
				isLogin &&
				<Box mt="1rem" textAlign="center" width="100%" color="#46aaf0">
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

const ForgotPasswordPage = ({classes})=>{
	return(
		<SignTemplate classes={classes} 
			title="Recuperar Contraseña" 
			submitText="Enviar" 
			isNotAdmin={false}
			inputInfo={[{
				placeholder:"Email",
				type:"email"
			},
			]}/>
			
	)
}

const AdminPage = ({classes})=>{
	return(
		<SignTemplate classes={classes} 
			title="Panel Administrador" 
			isNotAdmin={false}
			submitText="Ingresar" 
			inputInfo={[{
				placeholder:"Email",
				type:"text"
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
const Admin = withStyles(styles)(AdminPage) 
const ForgotPassword = withStyles(styles)(ForgotPasswordPage) 

export { SignIn, SignUp, Admin, ForgotPassword }
