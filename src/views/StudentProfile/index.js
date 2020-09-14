import React,{ useState, useEffect } from "react"
import { IconButton ,Button, Typography, Box, Tabs, Tab } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import image from "assets/img/faces/avatar.jpg";
import GenericInput from "../../components/GenericInput/index.js";
import Rating from "../../components/Rating/index.js";


const styles = ()=>{
	return createStyles({
		bgWhite:{
			background:"white",
		},	
		wrapper:{
			alignItems:"flex-start",
			paddingLeft:"45%",
		},
		labelIcon:{
			minHeight:48,
		},
		tabTextcolorInherit:{
			opacity:1,
		},
		indicator:{
			background:"#46aaf0",
			width:5,
		},
		burgerMenuActive:{
			color:"white",
		},
		lastTab:{	
			borderBottom:"1px solid white",
		},
		capitalize:{
			textTransform:"capitalize",
		},
		tabs:{
			width:"100%",
			position:"fixed",
			top:0,
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
			padding:".25rem 2.75rem",
			textTransform:"capitalize",
		},
		cancelButton:{
			background:"rgba(0,0,0,.25)",
			color:"white",
			marginLeft:".75rem",
			padding:".25rem 2.75rem",
		},
		input:{
			margin:0,
			maxWidth:390,
			marginLeft:"auto",
		},
		tabIcon:{
			maxWidth:"100%",
			height:"2.25rem",
			position:"absolute",
			left:"30%",
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
			marginRight:"1rem"
		},
		table:{
			border:"1px solid rgba(0,0,0,.25)",
			borderRadius:3,
		},
		'@media screen and (min-width:1024px)':{
			burgerMenu:{
				display:"none",
			},
			body:{
				fontSize:"1rem",
			},
			inVisible:{
				display:"block",
			},
			image:{
				display:"block",
				margin:"0 auto",
				width:"80%",
			},
			imageWrapper:{
				maxWidth:270,
				background:"rgba(0,0,0,.65)",
				color:"white",
				paddingTop:"1rem",
			},
			inputWrapper:{
				marginBottom:".75rem",
				alignItems:"center",
				marginRight:"auto",
			},
			tabs:{
				position:"static",
				maxWidth:270,
				marginRight:"auto",
				paddingTop:"2rem",
			},
			wrapper:{
				paddingLeft:"30%",
			},
			tabIcon:{
				left:"10%",
			},
			perfil:{
				fontSize:"1,75rem"
			},
			mainWrapper:{
				display:"flex",
				width:"100%",
			},
			calificaciones:{
				marginTop:".75rem",
				fontSize:"1,75rem"
			},
			sectionPerfil:{
				width:"45%",
				marginLeft: ".75rem",
			},
			sectionCalificaciones:{
				width:"30%",
				marginLeft: "2rem",
			},
			profileName:{
				marginBottom:0,
			},
		},
	})
}

const StudentProfile = ({classes})=>{

	const [menuDisplay, setMenuDisplay] = useState(classes.inVisible)
	const [burgerMenuColor, setBurgerMenuColor] = useState("")
	const [isMenuVisible, setIsMenuVisible] = useState(false)
	const [tabValue, setTabValue] = useState(1)

	useEffect(()=>{

		if(isMenuVisible){
			setMenuDisplay(classes.visible)
			setBurgerMenuColor(classes.burgerMenuActive)

		}else{
			setMenuDisplay(classes.inVisible)
			setBurgerMenuColor("")
		}
	},[isMenuVisible])

	return(
<>
	<Box classes={{root:classes.mainWrapper}}>
		
		<Box position="relative" zIndex={100}>
			<IconButton 
				className={classes.burgerMenu + " " + burgerMenuColor} 
				onClick={()=>{setIsMenuVisible((c)=> !c)}}>
				<MenuIcon />
			</IconButton>
		</Box>

		<Box>

			<Box className={classes.imageWrapper}>
				<Box mx="auto">
					<img className={classes.image} src={image} alt="..."/>
				</Box>
				<Box className={classes.profileName} textAlign="center" mt="1.25rem" mb="2.25rem">
					<Typography className={classes.title + " " + classes.perfilTitle} variant="h3">Morgan Freeman</Typography>
					<Typography variant="p">Colegio Alemán</Typography>
				</Box>	
			</Box>

			<Box className={menuDisplay}>
			
				<Tabs 
				  orientation="vertical"
					value={tabValue}
					className={classes.tabs}
					classes={{indicator: classes.indicator}}
					onChange={(e,newValue)=>{setTabValue(newValue)}}
				>
					<Tab classes={{
						textColorInherit:classes.tabTextcolorInherit,
						labelIcon:classes.labelIcon,
						wrapper:classes.wrapper, 
					}} 
						label="Noticias" 
						icon={<img src="./svg/folded-newspaper.svg" alt="User Icon" className={classes.tabIcon}/>}
						className={classes.tab + " " + classes.capitalize}
					/>

					<Tab classes={{
							textColorInherit:classes.tabTextcolorInherit,
							labelIcon:classes.labelIcon,
							wrapper:classes.wrapper,
						}}
						label="Perfil" 
						icon={<img src="./svg/user.svg" alt="User Icon" className={classes.tabIcon}/>}
						className={classes.tab + " " + classes.capitalize}
					/>

					<Tab classes={{
						textColorInherit:classes.tabTextcolorInherit,
						labelIcon:classes.labelIcon,
						wrapper:classes.wrapper,
					}}
					label="Tutorías" 
					icon={<img src="./svg/college-graduation.svg" alt="User Icon" className={classes.tabIcon}/>}
					className={classes.tab + " " + classes.capitalize}
					/>

					<Tab classes={{
						textColorInherit:classes.tabTextcolorInherit,
						labelIcon:classes.labelIcon,
						wrapper:classes.wrapper,
					}} 
						label="Configuraciones" 
						icon={<img src="./svg/icon.svg" alt="User Icon" className={classes.tabIcon}/>}
						className={classes.tab + " " + classes.capitalize}
					/>
	
					<Tab classes={{
						textColorInherit:classes.tabTextcolorInherit,
						labelIcon:classes.labelIcon,
						wrapper:classes.wrapper,
					}} 
						label="Ayuda" 
						icon={<img src="./svg/question-mark.svg" alt="User Icon" className={classes.tabIcon}/>}
						className={classes.tab + " " + classes.capitalize}
					/>

					<Tab classes={{
						textColorInherit:classes.tabTextcolorInherit,
						labelIcon:classes.labelIcon,
						wrapper:classes.wrapper,
					}}
 						label="Cerrar Sesión" 
						icon={<img src="./svg/logout.svg" alt="User Icon" className={classes.tabIcon}/>}
						className={classes.tab + " " + classes.capitalize + " " + classes.lastTab}
					/>
				</Tabs>
			</Box>

		</Box>
			 
		<Box className={classes.mainWrapper + " " + classes.bgWhite} px="1rem" py="1.75rem">
			
			<Box className={classes.sectionPerfil + " " + classes.perfil}>
				<Box borderBottom="1px solid black" mt=".75rem" mb="1.25rem" pb=".75rem">
		 				<Typography className={classes.primaryTitle + " " + classes.title} variant="h4">Perfil</Typography>	
				</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Nombre</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Nicolas Fuentes" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Apoderado</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Michelle Obama" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Colegio</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Colegio Alemán" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Curso</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="2° Medio" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Teléfono</Typography>	
						<GenericInput className={classes.input} type="tel" placeholder="+569 344 235 66" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Email</Typography>	
						<GenericInput className={classes.input} type="email" placeholder="quieroseractor@gmail.com" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Ciudad</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Vivaldia" />
					</Box>
					<Box className={classes.mainWrapper + " " + classes.inputWrapper} mb=".5rm">
						<Typography className={classes.body + " " + classes.title} variant="p">Dirección</Typography>	
						<GenericInput className={classes.input} type="text" placeholder="Av. Francia 2340. Casa blanca" />
					</Box>
					<Box display="flex" my="1rem">
						<Button className={classes.saveButton}>Guardar</Button>
						<Button className={classes.cancelButton + " " + classes.capitalize}>Cancelar</Button>
					</Box>
			</Box>

			<Box className={classes.sectionCalificaciones}>
				<Box className={classes.calificaciones} borderBottom="1px solid black" mt="2.25rem" mb="1.25rem" pb=".75rem">
		 			<Typography className={classes.primaryTitle + " " + classes.title} variant="h4">Calificaciones</Typography>	
				</Box>
				<Box>
					<Typography className={classes.title + " " + classes.secondaryTitle} variant="h5">Promedio:</Typography>
					<Rating />
				</Box>
				<Box>
					<Typography className={classes.secondaryTitle + " " + classes.title} variant="h5">Comentarios:</Typography>
				</Box>

				<Box display="flex" mt=".25rem" mb="1rem">
					<Box maxWidth="3.5rem" mr="1.25rem">
						<img className={classes.image} src={image} alt="..." />
					</Box>

					<Box>
						<Typography className={classes.body + " " + classes.title} variant="h5">Ricardo</Typography>}
						<Typography className={classes.body} variant="p">Lorem ipsium</Typography>
					</Box>
				</Box>

				<Box display="flex" mb="1rem">
					<Box maxWidth="3.5rem" mr="1.25rem">
						<img className={classes.image} src={image} alt="..." />
					</Box>

					<Box>
						<Typography className={classes.body + " " + classes.title} variant="h5">Ricardo</Typography>
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
