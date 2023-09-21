import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <>
      <Link to="/books/1"> book 1</Link>
      <br />
      <Link to="/books/2">book about axhe</Link>
      <br />
      <Link to="/books/new">Books 2 World</Link>
      <Outlet context={{hello: "world"}} />
    </>
  );
}
