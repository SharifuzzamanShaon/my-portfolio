import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home-page";
import Header from "./components/Headers";
import { useState } from "react";
import ProjectPage from "./pages/ProjectPage";
import MyResume from "./pages/MyResume";
import ContactPage from "./pages/ContactPage";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route
          path="/projects"
          element={<ProjectPage darkMode={darkMode} />}
        />
        <Route path="/resume" element={<MyResume darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
