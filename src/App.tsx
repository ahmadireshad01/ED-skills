import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/singn-up/signup";
import Landingpage from "./Pages/Landingpage/Landingpage";

function App() {
  return (
    <div className="min-h-screen  ">
      {/* Nav stays at the top */}
      <Nav />

      {/* Page routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
