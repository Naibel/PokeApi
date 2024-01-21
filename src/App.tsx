import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PokemonDetail } from "./pages/PokemonDetail/PokemonDetail";
import { Home } from "./pages/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
