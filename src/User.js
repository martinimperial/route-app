import { Typography, Paper, Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'

export default function User(props) {

  /*
  suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}}
  */
  return (
    <Card variant="elevation" sx={{width:300}} elevation={10}>
        <CardHeader title={props.item.username}  subheader={props.item.email}/>
        <CardContent>
      <Typography>{props.item.name}</Typography>
      <Typography>{JSON.stringify(props.item.address)}</Typography>
      </CardContent>
    </Card>
  )
}



   /*    // <div>
    //   <Paper variant="elevation" elevation={10} sx={{width:250}}>
    //   <Typography sx={{width:300}}> Hello </Typography>
    //   <Typography>{item.name}</Typography>
    //   <Typography>{item.username}</Typography>
    //   <Typography>{item.email}</Typography>
    //  </Paper>
  // </div> */
