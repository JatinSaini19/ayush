import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./dashboard";
import ConstructionModule from "./ConstructionModule";
import IECBrandingModule from "./IECBrandingModule";
import ProgrammeDashboard from "./modules/Program/ProgrammeDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Main AYUSH Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Other modules */}
        <Route path="/construction" element={<ConstructionModule />} />
        <Route path="/iec" element={<IECBrandingModule />} />

        {/* Programme Module (separate system) */}
        <Route path="/programme-dashboard/*" element={<ProgrammeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;