import React from "react"
import { Typography, Box, Tabs, Tab } from "@material-ui/core"
import { createStyles, withStyles } from "@material-ui/core/styles"
import image from "assets/img/faces/avatar.jpg";
import GenericInput from "../../components/GenericInput/index.js";


const StudentProfile = ({classes})=>{
	
	return(
	<>
		<Box>
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
						<img src={image} alt="..."/>
					</Box>
					<Box>
			 			<Typography variant="h4">Perfil</Typography>	
					</Box>
					<Box>
						<Box>
							<Typography variant="p">Nombre</Typography>	
							<GenericInput type="text" placeholder="Escribe algo" />
						</Box>
						<Box>
							<Typography variant="p">Nombre</Typography>	
							<GenericInput type="text" placeholder="Escribe algo" />
						</Box>
						<Box>
							<Typography variant="p">Nombre</Typography>	
							<GenericInput type="text" placeholder="Escribe algo" />
						</Box>
					</Box>
				</Box>

				<Box>
					<Box>
			 			<Typography variant="h4">Calificaciones</Typography>	
					</Box>

					<Box>
						<Typography variant="h5">Promedio:</Typography>
					</Box>
					<Box>
						<Typography variant="h5">Comentarios:</Typography>
					</Box>
					<Box display="flex">
						<Box>
							<image src={image} alt="..." />
						</Box>
						<Box>
							<Typography variant="h5">Ricardo</Typography>
							<Typography variant="p">Lorem ipsium</Typography>
						</Box>
					</Box>

					<Box display="flex">
						<Box>
							<image src={image} alt="..." />
						</Box>
						<Box>
							<Typography variant="h5">Ricardo</Typography>
							<Typography variant="p">Lorem ipsium</Typography>
						</Box>
					</Box>
				</Box>				
			</Box>
		</Box>
	</>
	)

}

export default StudentProfile
