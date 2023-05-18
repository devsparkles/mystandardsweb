import React from "react";
import {
 Route,
 Routes
} from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoutes";
function App() {
 return (
   <Routes>
     <Route path="/" element={
       <ProtectedRoute>
         <Home />
       </ProtectedRoute>
     } />
    <Route path="/login/" element={<Login />} />
    <Route path="/register/" element={<Registration />} />
   </Routes>
 );
}
export default App;