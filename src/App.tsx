import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import NoEncontrada from "./pages/NoEncontrada";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}