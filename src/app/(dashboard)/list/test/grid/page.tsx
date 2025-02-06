import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState();
  return (
    <Box sx={{ flexGrow: 1,placeItems: "center"}}>
      <Grid container spacing={2} rowSpacing={3}>
        <Grid size={8}>
          <Paper>Size=8 </Paper>
        </Grid>
        <Grid size={4}>
          <Paper>Size=4 </Paper>
        </Grid>
        <Grid size={4}>
          <Paper>Size=4 </Paper>
        </Grid>
        <Grid size={8}>
          <Paper>Size=8 </Paper>
        </Grid>
      </Grid>
      <Paper>Hello</Paper>
    </Box>
  );
};

export default Page;
