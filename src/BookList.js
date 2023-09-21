import { Route, Routes } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

export default function BookList() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1"> book 1</Link>
          </li>
          <li>
            <Link to="/100/a/x/he">book about axhe</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/books/new">NewBook</Link>
            <Outlet context={{ hello: "World" }}/>
          </li>
        </ul>
      </nav>
    </>
  );
}

