import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Pages/Login/Login';
import Signup from './Pages/singn-up/signup';
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Landingpage from './Pages/Landingpage/Landingpage';
import Skills from './Pages/singn-up/skills';

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
