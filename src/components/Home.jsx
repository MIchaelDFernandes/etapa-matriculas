import {Box, Button, Container, FormControl, Paper, Stack, Typography} from "@mui/material";
import {BirthDateCard} from "./BirthDateCard.jsx";
import {useNavigate} from "react-router";

import {ETAPAS, GRADES_BY_BIRTHDATE} from "../data/nascidos-2026.js";

export const Home = () => {
    const navigate = useNavigate();
    function handleSubmit() {
        navigate("/resultado");
    }

    return (
        <main className="App">

            <Container maxWidth="lg">
                <Paper>
                    <Stack spacing={4} sx={{}} padding={4}>
                        <Typography
                            component="h1"
                            variant="h1"
                        >
                            Matrículas 2026
                        </Typography>
                        <Typography component="p" variant="body1" sx={{wordBreak: 'break-word'}}>
                            Selecione as opções abaixo para descobrir a série correta!
                        </Typography>
                        <FormControl>
                            <Stack spacing={6}
                                   direction={{xs: "column", md: "row"}}
                                   sx={{justifyContent: "center", alignItems: "center"}}
                                   flexWrap={"wrap"}
                            >
                                <BirthDateCard
                                    title={"Mês"}
                                    data={[1, 2, 4, 5]}
                                    initialValue={4}
                                    label={"Escolha o mês de nascimento"}
                                />
                                <BirthDateCard
                                    title={"Ano"}
                                    data={[1, 2, 4, 5]}
                                    initialValue={4}
                                    label={"Escolha o ano de nascimento"}
                                />

                            </Stack>
                        </FormControl>
                        <Box>
                            <Button
                                variant="contained"
                                size={"large"}
                                onClick={handleSubmit}
                            >
                                Calcular
                            </Button>
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </main>
    )
}