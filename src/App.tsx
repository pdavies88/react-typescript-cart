import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navigation } from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Container className="mb-4">
        React Typescript Jest Starter
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
