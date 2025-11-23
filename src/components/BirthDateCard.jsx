import {Card, CardContent, CardHeader, MenuItem, TextField, Typography} from "@mui/material";
import {useRef} from "react";

export const BirthDateCard = ({title, id, data, label, initialValue, help, reference}) => {
    const optionRef = useRef(null);
    console.log(data)
    return (
        <div className="birthDateCard">
            <Card sx={{minWidth: "200px"}}>
                <CardHeader title={title}/>
                <CardContent>
                    <TextField
                        sx={{minWidth: "200px"}}
                        select
                        variant="outlined"
                        label={label}
                        defaultValue={initialValue}>

                        {data.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}

                    </TextField>
                </CardContent>
            </Card>


        </div>
    )
}