import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/volunteer"/>}/>
        {/* <Route path="/" element={<Navigate to="/admin"/>}/> */}
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/volunteer" element={<VolunteerDashboard/>}/>
        
      </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
