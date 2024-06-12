import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Simulations from "./pages/Simulations";
import Quiz from "./pages/Quiz";
import Settings from "./pages/Settings";
import SimulationList from "./components/SimulationList";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register />
            ) : (
              <Navigate to="/student-dashboard" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/student-dashboard" />
          }
        />
        <Route
          path="/student-dashboard"
          element={isAuthenticated ? <StudentDashboard /> : <Login />}
        />

        <Route
          path="/simulation-list"
          element={
            isAuthenticated ? <SimulationList /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/simulations"
          element={isAuthenticated ? <Simulations /> : <Navigate to="/login" />}
        />
        <Route
          path="/quiz"
          element={isAuthenticated ? <Quiz /> : <Navigate to="/login" />}
        />
        <Route
          path="/settings"
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
        />
        <Route
          path="/logout"
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

//

export default App;
