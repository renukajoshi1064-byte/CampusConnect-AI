import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import StudentLogin from "./pages/Student/StudentLogin";
import StudentRegister from "./pages/Student/StudentRegister";
import StudentDashboard from "./pages/Student/StudentDashboard";
import CampusDrives from "./pages/Student/CampusDrives/CampusDrives";
import DriveDetails from "./pages/Student/DriveDetails/DriveDetails";
import MyApplications from "./pages/Student/MyApplications/MyApplications";
import ApplicationDetails from "./pages/Student/ApplicationDetails/ApplicationDetails";
import StudentProfile from "./pages/Student/StudentProfile/StudentProfile";
import StudentNotifications from "./pages/Student/StudentNotifications/StudentNotifications";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Student login */}
        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

        {/* Student registration */}
        <Route
          path="/student-register"
          element={<StudentRegister />}
        />

        {/* Student dashboard */}
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />
        <Route
  path="/student/campus-drives"
  element={<CampusDrives />}
/>
<Route
  path="/student/drive/:company"
  element={<DriveDetails />}
/>
<Route
  path="/student/applications"
  element={<MyApplications />}
/>
<Route
  path="/student/application-details"
  element={<ApplicationDetails />}
/>
<Route
  path="/student/profile"
  element={<StudentProfile />}
/>
<Route
  path="/student/notifications"
  element={<StudentNotifications />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;