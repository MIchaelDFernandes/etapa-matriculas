import {Box, Button, Container, Paper, Typography} from "@mui/material";
import linedPaper from "../assets/notebook_lined_paper.webp"
import {Link} from "react-router";
import {Footer} from "./Footer.jsx";

export const Result = ({monthName="setembro", year, etapa, grade={gradeName:"1°ano", etapa:"ETAPA 14"}}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                Height: "100vh",
                width: "100vw",
            }}>
            <Box sx={{
                height:"92vh",
                backgroundColor:"teal",
                display:"flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center"}}>
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                        color: 'white',
                        fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem", lg:"3rem", xl:"4rem"},
                    }}>
                    Resultado
                </Typography>

                <Paper
                    sx={{
                        padding: "2rem",
                        margin: "1rem",
                    }}>
                    <Typography variant={"body1"} component={"p"}>
                        Quem nasceu em <span style={{textDecoration: "underline"}}>{monthName} de {year}</span> tem idade para o:
                    </Typography>
                    <Box
                        sx={{
                            border: "0.25rem black dashed",
                            padding: "1rem",
                            marginY: "1rem",
                        }}
                    >
                        <Typography variant={"body1"} component={"p"}>
                            {grade.gradeName} - {grade.etapa}
                        </Typography>
                    </Box>
                    <Link to="/">
                        <Button variant="contained" size={"large"}>Voltar</Button>
                    </Link>
                </Paper>

            </Box>
            <Box sx={{height:"8vh", backgroundColor:"black"}}>
                <Footer/>
            </Box>


        </Box>
    )
}