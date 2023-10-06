
import Head from "./components/header/head/Head"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import SinglePost from "./pages/singlepost/SinglePost";
import Login from "./pages/login/login";
import HideNavbar from "./components/hidenavbar/HideNavbar";
import Reset from "./pages/password-reset/Reset";
import Register from "./pages/register/Register";
import CreatePost from "./pages/createpost/CreatePost";
import Ct from "./pages/createpost/ct/ct";



function App() {
  return (
    <Router>

      <HideNavbar><Head /></HideNavbar>  {/*hide header for login page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>

      <HideNavbar><Footer /></HideNavbar> {/*hide footer for login page */}
    </Router>
  );
}

export default App;
