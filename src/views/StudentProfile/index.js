import React,{ useState, useEffect } from "react"
import { IconButton ,Button, Typography, Box, Tabs, Tab } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import image from "assets/img/faces/avatar.jpg";
import GenericInput from "../../components/GenericInput/index.js";


const styles = ()=>{
	return createStyles({
		lastTab:{	
			borderBottom:"1px solid white",
		},
		capitalize:{
			textTransform:"capitalize",
		},
		tabs:{
			background:"rgba(0,0,0,.65)",
			color:"white",
			padding:"4.5rem 0",
		},
		tab:{
			margin:"0 auto",
			borderTop:"1px solid white",
			maxWidth:"100% !important",
			width:"100%",
		},
		inVisible:{
			display:"none",
		},
		visible:{
			display:"block",
		},
		burgerMenu:{
			display:"block",
			marginLeft:"auto",
			marginRight:"1rem",
		},
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
		},
		input:{
			marginTop:0,
		},
		image:{
			width:"100%",
			height:"auto",
			borderRadius:"50%",
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

	const [menuDisplay, setMenuDisplay] = useState(classes.inVisible)
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	useEffect(()=>{

		if(isMenuVisible){
			setMenuDisplay(classes.visible)

		}else{
			setMenuDisplay(classes.inVisible)
		}
	},[isMenuVisible])

	return(
	<>
		<Box>
			<IconButton 
				className={classes.burgerMenu} 
				onClick={()=>{setIsMenuVisible((c)=> !c)}}>
				<MenuIcon />
			</IconButton>
		</Box>
		<Box className={menuDisplay}>
			<Tabs 
			  orientation="vertical"
				className={classes.tabs}	
				>
				<Tab label="Noticias" className={classes.tab + " " + classes.capitalize}/>
				<Tab label="Perfil" className={classes.tab + " " + classes.capitalize}/>
				<Tab label="Tutorías" className={classes.tab + " " + classes.capitalize}/>
				<Tab label="Configuraciones" className={classes.tab + " " + classes.capitalize}/>
				<Tab label="Ayuda" className={classes.tab + " " + classes.capitalize}/>
				<Tab label="Cerrar Sesión" className={classes.tab + " " + classes.capitalize + " " + classes.lastTab}/>
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
						<Button className={classes.cancelButton + " " + classes.capitalize}>Cancelar</Button>
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
