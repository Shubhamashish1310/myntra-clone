import{ useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryPage from "./pages/Catogarypage";
import Profile from "./components/Profile";
import Discover from "./pages/Discover";


const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  return (
    <div className="overflow-hidden bg-slate-600">
      <Router>
        <Header onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />}></Route>
          <Route path="/product/:id" element={<ProductDetails searchQuery={searchQuery} />}></Route>
          <Route path="/category/:category" element={<CategoryPage searchQuery={searchQuery} />}  ></Route>
          <Route path="/cart" element={<Home searchQuery={searchQuery} />}  ></Route>
          <Route path="/checkout" element={<Home searchQuery={searchQuery} />}  ></Route>
          <Route path="/" element={<Home searchQuery={searchQuery} />}  ></Route>
          <Route path="/products" element={<Discover searchQuery={searchQuery} />}  ></Route>
          
          <Route path="/profile" element={<Profile/>}  ></Route>
          
          
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
