import {Box, Button, Container, FormControl, Grid, Paper, Stack, Typography} from "@mui/material";
import {BirthDateCard} from "./BirthDateCard.jsx";
import {Footer} from "./Footer.jsx";
import {useNavigate} from "react-router";

import {ETAPAS, GRADES_BY_BIRTHDATE} from "../data/nascidos-2026.js";

export const Home = () => {
    const navigate = useNavigate();
    function handleSubmit() {
        navigate("/resultado");
    }

    return (

           <Box
           sx={{
               display: "flex",
               flexDirection: "column",
               Height: "100vh",
               width: "100vw",
           }}>
                <Box sx={{height:"92vh", backgroundColor:"teal"}}>
                    <Stack spacing={4} sx={{}} padding={4} alignItems={"center"}
                           justifyContent={{sm: "center"}} height={"100%"}>
                        <Typography
                            component="h1"
                            variant="h1"
                            sx={{
                                color: 'white',
                                fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem", lg:"3rem", xl:"4rem"},
                            }}
                        >
                            Matrículas 2026
                        </Typography>
                        <Paper sx={{padding: "1rem"}}>

                            <Typography component="p" variant="body1" margin={"1rem"}>
                                Selecione as opções abaixo para descobrir a série correta!
                            </Typography>
                            <FormControl>
                                <Stack spacing={2}
                                       direction={{xs: "column", md: "row"}}
                                       sx={{justifyContent: "center", alignItems: "center"}}
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
                                    size="large"
                                    onClick={handleSubmit}
                                    sx={{margin: "0.5rem"}}
                                >
                                    Calcular
                                </Button>
                            </Box>

                        </Paper>

                    </Stack>
                </Box>
                <Box sx={{
                    height: "8vh",
                backgroundColor:"orange"}}>
                    <Footer/>
                </Box>
           </Box>

    )
}