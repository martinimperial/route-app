import React from 'react'
import { useOutletContext, useParams } from "react-router-dom"

export default function Book() {
  const { id, x, y, z } = useParams()
  const obj = useOutletContext()
  return (
    <h1>
    <div>Book {id} {x} {y} {z} {obj.hello}</div>
    </h1>
  )
}
