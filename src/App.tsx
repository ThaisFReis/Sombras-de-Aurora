import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/context/ThemeContext";

import MainLayout from "@/layouts/MainLayout";
import { Perfil } from "@/components/SocialMedia/Perfil";
import { Settings } from "@/pages/Settings";

function App() {
  return (
    <ThemeProvider>
      <main>
        <ToastContainer />
        <Routes>
          {/* O MainLayout já centraliza toda a navegação, então o Home é fundido nele */}
          <Route path="/" element={<MainLayout />}>
            {/* Rotas internas como perfil e settings ainda são válidas */}
            <Route path="perfil/:userId" element={<Perfil />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
