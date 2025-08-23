import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Courses from "./pages/Courses"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignupPage/>} />
                <Route path="/Dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </Router>
    );
};

export default App;