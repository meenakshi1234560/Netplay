import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import Browse from "./components/Browse/Browse";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
