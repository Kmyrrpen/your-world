import { Route, Routes } from "react-router-dom";
import FilePage from "./pages/FilePage";
import HomePage from "./pages/HomePage";
import WorldPage from "./pages/WorldPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/world" element={<WorldPage />} />
      <Route path="/new" element={<FilePage />} />
    </Routes>
  );
};

export default App;
