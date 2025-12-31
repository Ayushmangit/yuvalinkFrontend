import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/volunteer" element={<VolunteerDashboard/>}/>
        
      </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
