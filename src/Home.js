import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import Post from "./Post";
import Comments from "./Comments";
import Grid from "@mui/material/Grid";

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/
const Home = () => {
  const [count, setCount] = useState(0);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  function changeCount(amount) {
    setCount(count + amount);
  }
  function resetCount() {
    setCount(0);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        </Grid>
      <Grid item xs={12}>{resourceType}</Grid>
        {resourceType === "users"
          ? items.map((item, index) => {
              return (
                <Grid item lg={3} sm={4} xs={12} key={index} sx={{ marginBottom: 2, marginLeft: 2 }}>
                  <User item={item} />
                </Grid>
              );
            })
          : resourceType === "posts"
          ? items.map((item, index) => {
              return (
                <Grid item lg={3} sm={4} xs={12} key={index} sx={{ marginBottom: 2, marginLeft: 2 }}>
                  <Post item={item} />
                </Grid>
              );
            })
          : items.map((item, index) => {
              return (
                <Grid item lg={3} sm={4} xs={12} key={index} sx={{ marginBottom: 2, marginLeft: 2 }}>
                  <Comments item={item} />
                </Grid>
              );
            })}
      </Grid>
    </>
  );
};

export default Home;
