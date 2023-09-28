
import Head from "./components/header/head/Head"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import SinglePost from "./pages/singlepost/SinglePost";


function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
