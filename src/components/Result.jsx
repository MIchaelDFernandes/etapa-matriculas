import {Box, Button, Container, Paper, Typography} from "@mui/material";
import linedPaper from "../assets/notebook_lined_paper.webp"
import {Link} from "react-router";

export const Result = ({monthName="setembro", year, etapa, grade={gradeName:"1°ano", etapa:"ETAPA 14"}}) => {
    return (
        <Container>
            <Paper
                sx={{
                    padding: "2rem",
                }}>
                <Typography component="h1" variant="h1" sx={{marginBottom: "1rem"}}>Resultado</Typography>
                <Typography variant={"body1"} component={"p"}>
                    Quem nasceu em <span style={{textDecoration: "underline"}}>{monthName} de {year}</span> está no:
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
        </Container>
    )
}