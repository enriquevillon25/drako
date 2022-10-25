import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./CardHome.css";
const CardHome = ({ image, name }) => {
  return (
    <Card
      sx={{
        width: "100%",
        // border: "3px dashed #1976d2",
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="80%"
          image={image}
          alt="green iguana"
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "20%",
          background: "transparent",
        }}
      >
        <span style={{ fontWeight: "bold", marginTop: "0", fontSize: "12px" }}>
          {name}
        </span>
      </CardContent>
    </Card>
  );
};

export default CardHome;
