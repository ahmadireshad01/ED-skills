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
import DashboardHomePage from './Pages/Dashboard/DashboardHomePage';
import DashboardCoursesPage from './Pages/Dashboard/DashboardCoursesPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        {/* Dashboard routes */}
        <Route path="/dashboard/home" element={<DashboardHomePage />} />
        <Route path="/dashboard/courses" element={<DashboardCoursesPage />} />
        {/* Paged signup step routes */}
        <Route path="/signup/1" element={<Skills />} />
        <Route path="/signup/2" element={<Agepage />} />
        <Route path="/signup/3" element={<Interestpage />} />
        {/* Alternative signup routes */}
        <Route path="/age" element={<Agepage />} />
        <Route path="/interests" element={<Interestpage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/local" element={<ClearLocalStorage />} />
        {/* Pages WITH Nav */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Landingpage />
              <Footer />
            </>
          }
        />
        {/* Fallback route */}
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
