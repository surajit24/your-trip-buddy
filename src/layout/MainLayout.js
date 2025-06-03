import { Grid } from "@mui/material";

export const MainLayout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};
