
import Head from "./components/header/head/Head"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Category from "./components/category/Category";
import SinglePost from "./pages/singlepost/SinglePost";
import Login from "./pages/login/login";
import HideNavbar from "./components/hidenavbar/HideNavbar";
import Reset from "./pages/password-reset/Reset";
import Register from "./pages/register/Register";
import CreatePost from "./pages/createpost/CreatePost";
import EditPost from "./pages/editpost/EditPost";
import Profile from "./pages/dashboard/profile/Profile";
import AddCategory from "./pages/add-category/AddCategory";
import EditCategory from "./pages/edit-category/EditCategory";




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
        <Route path="/write" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
      </Routes>

      <HideNavbar><Footer /></HideNavbar> {/*hide footer for login page */}
    </Router>
  );
}

export default App;
