"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Modal, TextField } from "@mui/material";
import React from "react";
import Link from "next/link";

function createCard(name: string, desc: string) {
	return { name, desc };
}

const exampleData = [
	createCard("Groceries", "Stuff I need to buy this week"),
	createCard("Gifts", "Cool stuff I wan't to gift"),
	createCard("Wish List", "Stuff I wan't to buy"),
	createCard("Gardening", "Stuff to grow my garden"),
	createCard("Test", "I give up making more examples"),
	createCard("Test", "I give up making more examples"),
	createCard("Test", "I give up making more examples"),
];

export default function HomePage() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<h1>My Wish Lists</h1>
			<Divider sx={{ paddingBottom: "10px" }}>
				<Button variant="outlined" onClick={handleOpen}>
					Create New +
				</Button>
			</Divider>
			<Box
				width={"100%"}
				sx={{
					mb: 2,
					display: "flex",
					flexDirection: "column",
					height: "500",
					overflow: "hidden",
					overflowY: "auto",
					backgroundColor: "LightGray",
				}}
			>
				<Grid container spacing={2}>
					{exampleData.map((card) => (
						<Grid xs={6} md={4}>
							<Card sx={{ maxWidth: 345, backgroundColor: "Gray" }}>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{card.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{card.desc}
									</Typography>
								</CardContent>
								<CardActions>
									<Link
										href={{
											pathname: "/list",
											query: card,
										}}
									>
										<Button size="small">Edit</Button>
									</Link>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
						borderRadius: "25px",
					}}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Create New List
					</Typography>
					<Divider sx={{ paddingBottom: "10px" }} />
					<TextField id="outlined-basic" label="Name" variant="outlined" />
					<Divider sx={{ paddingBottom: "10px" }} />
					<TextField
						id="outlined-basic"
						label="Description"
						variant="outlined"
						rows={4}
						multiline
					/>
					<Divider sx={{ paddingBottom: "10px" }} />
					<Button variant="outlined" onClick={handleClose}>
						Create
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
