import React from 'react'
import { useParams } from "react-router-dom"

export default function Book() {
  const { id, x, y, z } = useParams()
  return (
    <div>Book {id} {x} {y} {z}</div>
  )
}
