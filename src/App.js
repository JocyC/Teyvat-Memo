// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Farming, PrimoSave, Dashboard, Error } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="farming" element={<Farming />} />
        <Route path="primosave" element={<PrimoSave />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
