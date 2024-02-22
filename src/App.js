import "./App.css";
import ErrorPage from "./pages/404";
import Counter from "./pages/Counter";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
