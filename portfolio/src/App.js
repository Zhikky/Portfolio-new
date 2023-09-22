import "./App.css";
import Home from "./Components/Home";
import PageNotFound from "./Components/404 page/404";
import { ErrorBoundary } from "./Components/ErrorBoundary/ErrorBoundary";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
