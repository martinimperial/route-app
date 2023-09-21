import { Typography, Paper } from '@mui/material'
import React from 'react'

export default function User({item}) {

  /*
  suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}}
  */
  return (
    <div>
      <Paper variant="outlined" >
    <Typography>{item.id}</Typography>
    <Typography>{item.name}</Typography>
    <Typography>{item.username}</Typography>
    <Typography>{item.email}</Typography>
    {/* <Typography>{!!item.address.geo?JSON.stringify(item.address.geo):""}</Typography>  */}
    {/* <Typography>{item.address.suite}</Typography> 
    <Typography>{item.address.street}</Typography> 
    <Typography>{item.address.city}</Typography> 
    <Typography>{item.address.zipcode}</Typography>  */}
    </Paper>
    </div>
  )
}
