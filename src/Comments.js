import React from "react";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";
export default function Comments(props) {
  return (
    <Card variant="elevation" sx={{width:300}} elevation={10}>
        <CardHeader title={props.item.name}  subheader={props.item.email}/>
        <CardContent>
      <Typography>{props.item.body}</Typography>
      </CardContent>
    </Card>
  );
}
