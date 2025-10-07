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

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* Pages WITHOUT Nav */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        {/* Paged signup step routes */}
        <Route path="/signup/1" element={<Skills />} />
        <Route path="/signup/2" element={<Agepage />} />
        <Route path="/signup/3" element={<Interestpage />} />
        <Route path="/local" element={<ClearLocalStorage />} />
        {/* Pages WITH Nav */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Landingpage />
            </>
          }
        />

        {/* Fallback route (optional) */}
        <Route
          path="*"
          element={
            <>
              <Nav />
              <Landingpage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
