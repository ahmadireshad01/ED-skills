import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Pages/Login/Login';
import Signup from './Pages/singn-up/signup';
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Landingpage from './Pages/Landingpage/Landingpage';
import Skills from './Pages/singn-up/skills';
import DashboardHomePage from './Pages/Dashboard/DashboardHomePage';
import DashboardCoursesPage from './Pages/Dashboard/DashboardCoursesPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* Pages WITHOUT Nav */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/dashboard/home" element={<DashboardHomePage />} />
        <Route path="/dashboard/courses" element={<DashboardCoursesPage />} />
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
