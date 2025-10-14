import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Pages/Login/Login';
import Signup from './Pages/singn-up/signup';
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Landingpage from './Pages/Landingpage/Landingpage';
import Skills from './Pages/singn-up/skills';
import Agepage from './Pages/singn-up/age';
import Interestpage from './Pages/singn-up/interest';
import ClearLocalStorage from './Pages/singn-up/local';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/age" element={<Agepage />} />
        <Route path="/interests" element={<Interestpage />} />
        <Route path="/skills" element={<Skills />} />

        {/* Sequential signup step routes */}

        <Route path="/local" element={<ClearLocalStorage />} />

        {/* Pages WITH Nav */}
        <Route
          path="*"
          element={
            <>
              <Nav />
              <Landingpage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
