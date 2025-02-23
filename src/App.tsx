import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";

function App() {
  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Home />} />
         </Route>
      </Routes>
    </main>
  );
}

export default App;
