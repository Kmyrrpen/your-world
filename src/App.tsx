import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/Page";
import Edit from "./edit/Page";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
