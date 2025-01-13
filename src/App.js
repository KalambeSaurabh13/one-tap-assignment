import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import WebsiteLayout from "./Component/Layout/WebsiteLayout";
import LocationSelection from "./Pages/LocationSelection";
import Activites from "./Pages/Activites";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/location" element={<LocationSelection />} />
          <Route path="/activities" element={<Activites /> } />


          </Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
