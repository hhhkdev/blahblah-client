import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostViewPage from "./pages/PostViewPage";
import PostWritePage from "./pages/PostWritePage";
import PostEditPage from "./pages/PostEditPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/articles/:id"
            element={<PostViewPage></PostViewPage>}
          ></Route>
          <Route
            path="/articles/create"
            element={<PostWritePage></PostWritePage>}
          ></Route>
          <Route
            path="/articles/update/:id"
            element={<PostEditPage></PostEditPage>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
