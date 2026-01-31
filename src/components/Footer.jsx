import {Box, Typography} from "@mui/material";

export const Footer = () => {
  return (
      <Box sx={{
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width:"100%",
          height:"100%",
      }}>
          <Typography
              variant="body2"
              component="p"
              sx={{color: "white"}}
          >&copy;2026 Michael D. Fernandes</Typography>
      </Box>
  )
}