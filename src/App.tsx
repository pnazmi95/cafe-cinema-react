import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MovieListView from "./pages/MovieListView";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/movies" element={<Layout />}>
          <Route index element={<MovieListView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

