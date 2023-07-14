import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div className="outline outline-1 p-4 outline-indigo-400 ">
      <Card sx={{ maxWidth: 1400 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="main.webp"
          title="Multor"
          className="relative"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="">
            Describe the value of booking an appointment
          </Typography>

          <Typography variant="body2" color="text.secondary">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
