import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./dashboard";
import ConstructionModule from "./ConstructionModule";
import HRModule from "./modules/HRModule.jsx";
import AttendanceModule from "./modules/AttendanceModule";
import MovementModule from "./modules/MovementModule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/construction" element={<ConstructionModule />} />
        <Route path="/hr" element={ <Dashboard> <HRModule /> </Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
