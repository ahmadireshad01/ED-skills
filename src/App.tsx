import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/singn-up/signup";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Routes>
        {/* Pages WITHOUT Nav */}
        <Route path="/login" element={<Login />} />

        {/* Pages WITH Nav */}
        <Route
          path="*"
          element={
            <div className="min-h-screen">
              <Nav />
              <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>

              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
