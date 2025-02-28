import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { Perfil } from "@/pages/Perfil";
import { Chat } from "@/pages/Chat";

function App() {
  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/perfil/:userId" element={<Perfil />} />
          <Route path="/chat" element={<Chat />} />
         </Route>
      </Routes>
    </main>
  );
}

export default App;
