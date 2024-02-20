

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import { UserContext, UserContextProvider } from "./components/context/UserContext";
import Head from "./components/header/head/Head"
import SearchResult from './pages/sear-result/SearchResult';
import { useContext, useState } from 'react';
import Loader from './components/loader/Loader';
import { useEffect } from 'react';
import ScrollToTop from './components/context/ScrollToTop';
import CreateVideo from './pages/video/create/CreateVideo';
import EditVideo from './pages/video/editVideo/EditVideo';





function App() {




  const { user } = useContext(UserContext);
  return (
    // <UserContextProvider>
    <Router>
      <ScrollToTop>
        <HideNavbar><Head /></HideNavbar>  {/*hide header for login page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/editcategory/:id" element={<EditCategory />} />
          <Route path="/result" element={<SearchResult />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/video-post" element={<CreateVideo />} />
          {user && <Route path="/video/edit/:id" element={<EditVideo />} />}
        </Routes>
        <HideNavbar><Footer /></HideNavbar> {/*hide footer for login page */}
      </ScrollToTop>
    </Router>
    // </UserContextProvider>
  );
}

export default App;
