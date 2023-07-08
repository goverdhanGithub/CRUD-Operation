import Navbar from "./Components/Layout/Navbar";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import User from "./Components/Users/User";
import Addusers from "./Components/Users/Addusers";
import EditUsers from "./Components/Users/EditUsers";
import PageNotFound from "./Components/Pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container px-4 py-4">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/add" element={<Addusers />} />
            <Route path="/user/edit/:id" element={<EditUsers />} />

            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
