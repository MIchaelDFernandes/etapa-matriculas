import {Card, CardContent, CardHeader, CircularProgress, MenuItem, TextField} from "@mui/material";

export const BirthDateCard = ({title, data, label, loadingStatus, reference}) => {
    return (
        <div className="birthDateCard">
            <Card sx={{minWidth: "200px"}}>
                <CardHeader title={title}/>
                <CardContent>
                    {loadingStatus ? <CircularProgress/> : (<TextField
                        sx={{minWidth: "200px"}}
                        select
                        variant="outlined"
                        label={label}
                        defaultValue={data[0]}
                        inputRef={reference}
                    >

                        {data.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}

                    </TextField>)}

                </CardContent>
            </Card>


        </div>
    )
}