import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import OtpVerification from './pages/Auth/OtpVerification'
import Combo from './pages/Dashboard/Combo'
import Courses from './pages/Courses/Courses'
import ComboCourses from './pages/Courses/ComboCourses'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<OtpVerification />} />
      <Route path="/dashboard" element={<Combo />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<Courses />} />
      <Route path="/courses/active-courses" element={<ComboCourses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
