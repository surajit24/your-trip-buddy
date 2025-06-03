import { Grid, Paper } from "@mui/material";
import "./TourCard.css";

export const TourCard = ({ tour }) => {
  return (
    <Grid size={3}>
      <Paper elevation={3} className="tour-card">
        <img src={tour.image} alt={tour.name} className="tour-image" />
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>
        <p className="tour-price">${tour.price}</p>
      </Paper>
    </Grid>
  );
};
