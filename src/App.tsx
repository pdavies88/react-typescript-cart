import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { Navigation } from "./components/Navigation";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navigation />
      <Container className="mb-4">
        React Typescript Jest Starter
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
