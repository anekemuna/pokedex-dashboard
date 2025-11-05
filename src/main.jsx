import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Layout from "./routes/Layout.jsx";
import NotFound from "./routes/NotFound.jsx";
import Overview from "./pages/Overview.jsx";
import About from "./pages/About.jsx";
import PokemonDetails from "./pages/PokemonDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="about" element={<About />} />
          <Route path="pokemonDetails/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
