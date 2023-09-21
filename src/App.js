// project import
//import Routes from "./routes";
import React from "react";
import Home from "./Home";
import About from "./About";
import NewBook from "./NewBook";
import Book from "./Book";
import NotFound from "./NotFound";
import BookList from "./BookList";
import {
  Route,
  Routes,
  Link, 
} from "react-router-dom";
import BookLayout from "./BookLayout";
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
// function App() {
//   return {
//     <>
//       <Routes location="">
//         <Route path="/books" element={<h1>Extra Content</h1>} />
//       </Routes>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/books" element={<BookLayout />} />
//       </Routes>
//     </>
//   }
// }

const App = () => (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>       
      </li>
      <li>
        <Link to="/books/new">NewBook</Link>
      </li>
    </ul>
  </nav>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />}/>
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="/books/:id" element={<Book />} />
        <Route path="/books/:id/:x/:y/:z" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
    </Routes>
</> 
);

export default App;
