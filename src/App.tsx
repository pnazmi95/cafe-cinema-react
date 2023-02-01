import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MovieListView from "./pages/MovieListView";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MovieDetailView from "./pages/MovieDetailView";
import ShoppingCart from "./pages/ShoppingCart";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ProfilePage from "./pages/ProfilePage";

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

        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/profile" element={<Layout />}>
          <Route index element={<ProfilePage />} />
        </Route>

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
