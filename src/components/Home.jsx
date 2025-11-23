import {Box, Button, CircularProgress, FormControl, Paper, Stack, Typography} from "@mui/material";
import {BirthDateCard} from "./BirthDateCard.jsx";
import {Footer} from "./Footer.jsx";
import {useNavigate} from "react-router";

import {ETAPAS, GRADES_BY_BIRTHDATE} from "../data/nascidos-2026.js";
import {useEffect, useRef, useState} from "react";

export const Home = () => {
    const navigate = useNavigate();

    function handleCalculation() {
        setCalculating(true);
        const m = monthDict[month.current.value]
        const result = calculateGrade(m, year.current.value)
        if (result.gradeName) {
            navigate("/resultado",
                {
                    state:
                        {
                            etapa: result.etapa,
                            gradeName: result.gradeName,
                            monthName: month.current.value,
                            year: year.current.value,
                        }
                });
        } else {
            navigate("/resultado",
                {
                    state:
                        {
                            etapa: null,
                            gradeName: null,
                            monthName: month.current.value,
                            year: year.current.value,
                        }
                });
        }
        setCalculating(false);
    }

    const [monthNames, setMonthNames] = useState([]);
    const [years, setYears] = useState([]);
    const [loading, setLoading] = useState(true);
    const [calculating, setCalculating] = useState(false);
    const month = useRef("");
    let year = useRef("");

    const monthDict ={
        "janeiro": 1,
        "fevereiro": 2,
        "março": 3,
        "abril": 4,
        "maio": 5,
        "junho": 6,
        "julho": 7,
        "agosto": 8,
        "setembro": 9,
        "outubro": 10,
        "novembro": 11,
        "dezembro": 12
    };

    useEffect(() => {
        setMonthNames(Object.keys(monthDict));
        setYears(Object.keys(GRADES_BY_BIRTHDATE).sort((a, b) => b - a));
        setLoading(false);
    }, []);

    const calculateGrade = (month, year) => {
        const monthRange = month <=3 ? "JAN-MAR" : "ABR-DEZ";

        const gradeName = (GRADES_BY_BIRTHDATE[year] && GRADES_BY_BIRTHDATE[year][monthRange])
            ? GRADES_BY_BIRTHDATE[year][monthRange]
            : null;

        const etapa = ETAPAS[gradeName] || "ETAPA 14";

        return {gradeName, etapa};
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
                                        data={monthNames}
                                        label={"Escolha o mês de nascimento"}
                                        reference={month}
                                        loadingStatus={loading}
                                    />
                                    <BirthDateCard
                                        title={"Ano"}
                                        data={years}
                                        label={"Escolha o ano de nascimento"}
                                        reference={year}
                                        loadingStatus={loading}
                                    />
                                </Stack>
                            </FormControl>
                            <Box>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={handleCalculation}
                                    disabled={calculating}
                                    startIcon={calculating ? <CircularProgress size={20}/> : null}
                                    sx={{margin: "0.5rem"}}
                                >
                                    {calculating ? "Calculando" : "Calcular"}
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