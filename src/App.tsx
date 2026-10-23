import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import NoEncontrada from "./pages/NoEncontrada";
import ServicioDetalle from "./pages/ServicioDetalle";
import CalendarioTributario from "./pages/CalendarioTributario";
import PoliticaDatos from "./pages/PoliticaDatos";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios/:slug" element={<ServicioDetalle />} />
        <Route path="/calendario-tributario" element={<CalendarioTributario />} />
        <Route path="/politica-de-datos" element={<PoliticaDatos />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}