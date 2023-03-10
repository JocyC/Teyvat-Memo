import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SinglePlanDetail, Error, Landing, Register } from "./pages";
import {
  AddItem,
  AllItems,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-items" element={<AllItems />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="profile" element={<Profile />} />
          <Route path="single-plan/:id" element={<SinglePlanDetail />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
