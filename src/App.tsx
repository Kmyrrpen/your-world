import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Page";
import Edit from "./edit/Page";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
