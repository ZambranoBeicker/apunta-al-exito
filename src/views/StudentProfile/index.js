import React from "react"
import { Button, Typography, Box, Tabs, Tab } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"
import image from "assets/img/faces/avatar.jpg";
import GenericInput from "../../components/GenericInput/index.js";


const styles = ()=>{
	return createStyles({
		perfilTitle:{
			fontSize:"1.5rem",
			marginBottom:".25rem",
		},
		saveButton:{
			background:"#46aaf0",
			color:"white",
			marginLeft:"auto",
			padding:".25rem 1.75rem",
			textTransform:"capitalize",
		},
		cancelButton:{
			background:"rgba(0,0,0,.25)",
			color:"white",
			marginLeft:".75rem",
			padding:".25rem 1.75rem",
			textTransform:"capitalize",
		},
		input:{
			marginTop:0,
		},
		image:{
			width:"100%",
			height:"auto",
			borderRadius:"50%",
		},
		menu:{
			display:"none",
		},
		primaryTitle:{
			fontSize:"1.25rem",
		},
		title:{
			fontWeight:"bold",
		},
		secondaryTitle:{
			fontSize:"1rem",
		},
		body:{
			fontSize:".875rem",
		},
		table:{
			border:"1px solid rgba(0,0,0,.25)",
			borderRadius:3,
		}
	})
}

const StudentProfile = ({classes})=>{
	
	return(
	<>
		<Box className={classes.menu}>
			<Tabs 
			  orientation="vertical"
				
				>
				<Tab label="A tab"/>
				<Tab label="A tab"/>
				<Tab label="A tab"/>
				<Tab label="A tab"/>
				<Tab label="A tab"/>
			</Tabs>
		</Box>
		<Box px="1rem" py="1.75rem">
			<Box>
				
				<Box>
					<Box mx="auto">
						<img className={classes.image} src={image} alt="..."/>
					</Box>
					<Box textAlign="center" mt="1.25rem" mb="2.25rem">
						<Typography className={classes.title + " " + classes.perfilTitle} variant="h3">Morgan Freeman</Typography>
						<Typography variant="p">Colegio Alemán</Typography>
					</Box>
					<Box borderBottom="1px solid black" mt=".75rem" mb="1.25rem" pb=".75rem">
			 			<Typography className={classes.primaryTitle + " " + classes.title} variant="h4">Perfil</Typography>	
					</Box>
					<Box>
					<Box>
						<Typography className={classes.body + " " + classes.title} variant="p">Nombre</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Escribe algo" />
					</Box>
					<Box>
						<Typography className={classes.body + " " + classes.title} variant="p">Nombre</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Escribe algo" />
					</Box>
					<Box>
						<Typography className={classes.body + " " + classes.title} variant="p">Nombre</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Escribe algo" />
					</Box>
					<Box display="flex" my="1rem">
						<Button className={classes.saveButton}>Guardar</Button>
						<Button className={classes.cancelButton}>Cancelar</Button>
					</Box>
				</Box>

			</Box>

			<Box>
				<Box borderBottom="1px solid black" mt="2.25rem" mb="1.25rem" pb=".75rem">
		 			<Typography className={classes.primaryTitle + " " + classes.title} variant="h4">Calificaciones</Typography>	
				</Box>

					<Box>
						<Typography className={classes.title + " " + classes.secondaryTitle} variant="h5">Promedio:</Typography>
					</Box>
					<Box>
						<Typography className={classes.secondaryTitle + " " + classes.title} variant="h5">Comentarios:</Typography>
					</Box>
					<Box display="flex" mt=".25rem" mb="1rem">
						<Box maxWidth="3.5rem" mr="1.25rem">
							<img className={classes.image} src={image} alt="..." />
						</Box>
						<Box>
							<Typography variant="h5">Ricardo</Typography>
							<Typography className={classes.body} variant="p">Lorem ipsium</Typography>
						</Box>
					</Box>

					<Box display="flex" mb="1rem">
						<Box maxWidth="3.5rem" mr="1.25rem">
							<img className={classes.image} src={image} alt="..." />
						</Box>
						<Box>
							<Typography variant="h5">Ricardo</Typography>
							<Typography className={classes.body} variant="p">Lorem ipsium</Typography>
						</Box>
					</Box>
				</Box>				
			</Box>
		</Box>
	</>
	)

}

export default withStyles(styles)(StudentProfile) 
