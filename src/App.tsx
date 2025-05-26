import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/context/ThemeContext"; // Importe o ThemeProvider

import MainLayout from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { Perfil } from "@/components/SocialMedia/Perfil";
import { Settings } from "@/pages/Settings"; // Importe a página de Settingsurações

function App() {
  return (
    <ThemeProvider> {/* Envolva toda a aplicação com ThemeProvider */}
      <main>
        <ToastContainer />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/perfil/:userId" element={<Perfil />} />
            <Route path="/Settings" element={<Settings />} /> {/* Rota para Settingsurações */}
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;