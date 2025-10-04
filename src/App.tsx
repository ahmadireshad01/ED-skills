import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Pages/Login/Login';
import Signup from './Pages/singn-up/signup';
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Landingpage from './Pages/Landingpage/Landingpage';
import Skills from './Pages/singn-up/skills';
import Agepage from './Pages/singn-up/age';
import Interestpage from './Pages/singn-up/interest';

function App() {
  return (
    <div>
      <Routes>
        {/* Pages WITHOUT Nav */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/signup/1" element={<Skills />} />
        <Route path="/signup/2" element={<Agepage />} />
        <Route path="/signup/3" element={<Interestpage />} />

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
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
