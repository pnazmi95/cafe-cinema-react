import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MovieListView from "./pages/MovieListView";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MovieDetailView from "./pages/MovieDetailView";
import ShoppingCart from "./pages/ShoppingCart";
import NotFoundPage from "./pages/NotFoundPage";

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

        <Route path="account/sign-up" element={<AccountPage />} />
        <Route path="account/login" element={<AccountPage />} />

        <Route path="/contact" element={<Layout />}>
          <Route index element={<ContactPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/cart" element={<Layout />}>
          <Route index element={<ShoppingCart />} />
        </Route>
        <Route path="/movie/:id" element={<Layout />}>
          <Route index element={<MovieDetailView />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
