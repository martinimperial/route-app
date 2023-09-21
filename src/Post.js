import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader } from "@mui/material";
export default function Post(props) {
  return (
    <Card variant="elevation" sx={{width: 300}} elevation={10}>
    <CardHeader title={props.item.id + ". " + props.item.title} subheader={props.item.userId} />
      <CardContent>
        <Typography>{props.item.body}</Typography>
      </CardContent>
    </Card>
  );
}
